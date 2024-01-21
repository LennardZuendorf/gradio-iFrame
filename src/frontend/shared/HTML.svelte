<script lang="ts">
	import { createEventDispatcher } from "svelte";
	export let elem_classes: string[] = [];
	export let value: string;
	export let visible = true;
	export let min_height = false;

	const dispatch = createEventDispatcher<{ change: undefined }>();

	$: value, dispatch("change");
</script>

<div
	class="prose {elem_classes.join(' ')}"
	class:min={min_height}
	class:hide={!visible}
>
	<iframe title="iframe component" width="100%" height="100%" srcdoc={value} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<style>
	.min {
		min-height: var(--size-24);
	}
	.hide {
		display: none;
	}
</style>
