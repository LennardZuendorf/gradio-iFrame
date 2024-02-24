<script lang="ts">
	import { createEventDispatcher } from "svelte";
	export let elem_classes: string[] = [];
	export let value: string;
	export let visible = true;
	export let min_height = false;

	export let height = "100%";
	export let width = "100%";

	const dispatch = createEventDispatcher<{ change: undefined }>();

	let iframeElement;

    const onLoad = () => {
		try {
			const iframeDocument = iframeElement.contentDocument || iframeElement.contentWindow.document;
			if (height === "100%") {
				iframeElement.style.height = `${iframeDocument.documentElement.scrollHeight}px`;
			}else {
				iframeElement.style.height = height;
			}
		} catch (e) {
			console.error("Error accessing iframe content:", e);
		}
	};

	$: value, dispatch("change");
</script>

<div
	class="prose {elem_classes.join(' ')}"
	class:min={min_height}
	class:hide={!visible}
	class:height={height}
>
    <iframe
        bind:this={iframeElement}
        title="iframe component"
        width={width}
        srcdoc={value}
		height={height}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
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
