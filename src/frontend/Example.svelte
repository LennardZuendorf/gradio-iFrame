<script lang="ts">
	export let value: string;
	export let type: "gallery" | "table";
	export let selected = false;
</script>

<div
	class:table={type === "table"}
	class:gallery={type === "gallery"}
	class:selected
	class="prose"
>
	<iframe title="iframe component" width="100%" height="100%" srcdoc={value} allow=""></iframe>
</div>

<style>
	.gallery {
		padding: var(--size-2);
	}
</style>
