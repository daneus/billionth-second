<script>
  import { onMount } from 'svelte';
  import { createScene } from './lib/scene';

  let canvas;

  onMount(() => {
    createScene(canvas);
  });
</script>

<canvas bind:this={canvas} />

<style>
</style>
