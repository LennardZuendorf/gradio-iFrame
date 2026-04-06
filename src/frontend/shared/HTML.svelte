<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from "svelte";

	export let elem_classes: string[] = [];
	export let value: string;
	export let visible = true;
	export let min_height = false;
	export let height = "100%";
	export let width = "100%";
	export let sandbox: string | null = null;

	const dispatch = createEventDispatcher<{ change: undefined }>();

	let iframeElement: HTMLIFrameElement;

	// Injected into srcdoc to report height changes via postMessage.
	// Uses a self-invoking function to avoid polluting the iframe's global scope.
	const MEASURE_SCRIPT = `<script>(function(){
		var ro=new ResizeObserver(function(){
			window.parent.postMessage({type:'gradio-iframe-h',h:document.documentElement.scrollHeight},'*');
		});
		ro.observe(document.documentElement);
		window.addEventListener('load',function(){
			window.parent.postMessage({type:'gradio-iframe-h',h:document.documentElement.scrollHeight},'*');
		});
	})()\u003C/script>`;

	// Prepend measurement script only when auto-height is active.
	$: srcdocValue = height === "100%" ? MEASURE_SCRIPT + value : value;

	const onLoad = () => {
		// Fallback: read scrollHeight directly for same-origin iframes
		// (works when sandbox is absent or includes allow-same-origin).
		if (height !== "100%") return;
		try {
			const iframeDocument =
				iframeElement.contentDocument ||
				iframeElement.contentWindow?.document;
			if (iframeDocument) {
				iframeElement.style.height = `${iframeDocument.documentElement.scrollHeight}px`;
			}
		} catch (e) {
			// Cross-origin — postMessage handler will cover this if scripts run.
		}
	};

	let messageHandler: (e: MessageEvent) => void;

	onMount(() => {
		messageHandler = (e: MessageEvent) => {
			if (
				e.source === iframeElement?.contentWindow &&
				e.data?.type === "gradio-iframe-h" &&
				height === "100%"
			) {
				iframeElement.style.height = e.data.h + "px";
			}
		};
		window.addEventListener("message", messageHandler);
	});

	onDestroy(() => {
		if (messageHandler) window.removeEventListener("message", messageHandler);
	});

	$: value, dispatch("change");
</script>

<div
	class="prose {elem_classes.join(' ')}"
	class:min={min_height}
	class:hide={!visible}
>
	<iframe
		bind:this={iframeElement}
		title="iframe component"
		width={width}
		srcdoc={srcdocValue}
		height={height}
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
		sandbox={sandbox ?? undefined}
		on:load={onLoad}
	></iframe>
</div>

<style>
	.min {
		min-height: var(--size-24);
	}
	.hide {
		display: none;
	}
</style>
