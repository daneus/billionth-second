<script>
  import { onMount } from 'svelte';
  import { createScene } from './lib/scene';

  let canvas;

  onMount(() => {
    createScene(canvas);
  });
</script>

<canvas bind:this={canvas} />
<main class="main-container">
  <div class="title-container">
    <div class="number-container">
      <div class="one-container">
        <svg
          class="one"
          width="69"
          height="237"
          viewBox="0 0 69 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="46" width="23" height="237" fill="#F5F5F5" />
          <rect
            x="69"
            width="23"
            height="69"
            transform="rotate(90 69 0)"
            fill="#F5F5F5"
          />
        </svg>
      </div>
      <div class="zero-container">
        <img src="../src/assets/Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="../src/assets/Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="../src/assets/Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="../src/assets/Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="../src/assets/Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="../src/assets/Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="../src/assets/Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="../src/assets/Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="../src/assets/Number0.png" class="zero" alt="Number zero" />
      </div>
    </div>
    <div class="subtitle">SECONDS</div>
  </div>
</main>

<style lang="scss">
  @use '../src/sass/mixins/mixins' as m;

  @include m.tick(36);
  @include m.tick(72);
  @include m.tick(108);
  @include m.tick(144);
  @include m.tick(180);
  @include m.tick(216);
  @include m.tick(252);
  @include m.tick(288);
  @include m.tick(324);

  svg {
    display: block;
  }
  .main-container {
    z-index: 0;
    width: auto;
    min-height: 100vh;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title-container {
    border: 2px solid yellow;
  }
  .number-container {
    display: flex;
    flex-direction: row;
    border: 3px solid red;
    justify-content: center;
    column-gap: 0.75vmin;
    padding: 0 1.8vmin;
  }
  .one-container {
    width: max-content;
  }
  .one,
  .zero {
    height: min(7.5vmin, 5rem);
    max-width: min-content;
  }
  .subtitle {
    font-family: Montserrat, sans-serif;
    text-align: center;
    color: #f5f5f5;
    font-size: clamp(1.2vmin, 5.5vmin, 7rem);
    font-weight: 600;
  }
  .number-container > .zero-container:nth-child(2) {
    animation: tick36 10s infinite cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
  .number-container > .zero-container:nth-child(3) {
    animation: tick72 10s infinite cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
  .number-container > .zero-container:nth-child(4) {
    animation: tick108 10s infinite cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
  .number-container > .zero-container:nth-child(5) {
    animation: tick144 10s infinite cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
  .number-container > .zero-container:nth-child(6) {
    animation: tick180 10s infinite cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
  .number-container > .zero-container:nth-child(7) {
    animation: tick216 10s infinite cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
  .number-container > .zero-container:nth-child(8) {
    animation: tick252 10s infinite cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
  .number-container > .zero-container:nth-child(9) {
    animation: tick288 10s infinite cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
  .number-container > .zero-container:nth-child(10) {
    animation: tick324 10s infinite cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
</style>
