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
        <svg
          class="zero"
          width="237"
          height="237"
          viewBox="0 0 237 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M237 118.5C237 183.946 183.946 237 118.5 237C53.0543 237 0 183.946 0 118.5C0 53.0543 53.0543 0 118.5 0C183.946 0 237 53.0543 237 118.5ZM23.0883 118.5C23.0883 171.194 65.8056 213.912 118.5 213.912C171.194 213.912 213.912 171.194 213.912 118.5C213.912 65.8056 171.194 23.0883 118.5 23.0883C65.8056 23.0883 23.0883 65.8056 23.0883 118.5Z"
            fill="#F5F5F5"
          />
          <rect x="109" y="33" width="19" height="86" rx="9.5" fill="#F5F5F5" />
        </svg>
      </div>
      <div class="zero-container">
        <svg
          class="zero"
          width="237"
          height="237"
          viewBox="0 0 237 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M237 118.5C237 183.946 183.946 237 118.5 237C53.0543 237 0 183.946 0 118.5C0 53.0543 53.0543 0 118.5 0C183.946 0 237 53.0543 237 118.5ZM23.0883 118.5C23.0883 171.194 65.8056 213.912 118.5 213.912C171.194 213.912 213.912 171.194 213.912 118.5C213.912 65.8056 171.194 23.0883 118.5 23.0883C65.8056 23.0883 23.0883 65.8056 23.0883 118.5Z"
            fill="#F5F5F5"
          />
          <g filter="url(#filter0_d_23_3)">
            <rect
              x="109"
              y="33"
              width="19"
              height="86"
              rx="9.5"
              fill="#F5F5F5"
            />
            <rect
              x="109.5"
              y="33.5"
              width="18"
              height="85"
              rx="9"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_23_3"
              x="105"
              y="33"
              width="27"
              height="94"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_23_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_23_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="zero-container">
        <svg
          class="zero"
          width="237"
          height="237"
          viewBox="0 0 237 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M237 118.5C237 183.946 183.946 237 118.5 237C53.0543 237 0 183.946 0 118.5C0 53.0543 53.0543 0 118.5 0C183.946 0 237 53.0543 237 118.5ZM23.0883 118.5C23.0883 171.194 65.8056 213.912 118.5 213.912C171.194 213.912 213.912 171.194 213.912 118.5C213.912 65.8056 171.194 23.0883 118.5 23.0883C65.8056 23.0883 23.0883 65.8056 23.0883 118.5Z"
            fill="#F5F5F5"
          />
          <g filter="url(#filter0_d_23_3)">
            <rect
              x="109"
              y="33"
              width="19"
              height="86"
              rx="9.5"
              fill="#F5F5F5"
            />
            <rect
              x="109.5"
              y="33.5"
              width="18"
              height="85"
              rx="9"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_23_3"
              x="105"
              y="33"
              width="27"
              height="94"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_23_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_23_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="zero-container">
        <svg
          class="zero"
          width="237"
          height="237"
          viewBox="0 0 237 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M237 118.5C237 183.946 183.946 237 118.5 237C53.0543 237 0 183.946 0 118.5C0 53.0543 53.0543 0 118.5 0C183.946 0 237 53.0543 237 118.5ZM23.0883 118.5C23.0883 171.194 65.8056 213.912 118.5 213.912C171.194 213.912 213.912 171.194 213.912 118.5C213.912 65.8056 171.194 23.0883 118.5 23.0883C65.8056 23.0883 23.0883 65.8056 23.0883 118.5Z"
            fill="#F5F5F5"
          />
          <g filter="url(#filter0_d_23_3)">
            <rect
              x="109"
              y="33"
              width="19"
              height="86"
              rx="9.5"
              fill="#F5F5F5"
            />
            <rect
              x="109.5"
              y="33.5"
              width="18"
              height="85"
              rx="9"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_23_3"
              x="105"
              y="33"
              width="27"
              height="94"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_23_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_23_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="zero-container">
        <svg
          class="zero"
          width="237"
          height="237"
          viewBox="0 0 237 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M237 118.5C237 183.946 183.946 237 118.5 237C53.0543 237 0 183.946 0 118.5C0 53.0543 53.0543 0 118.5 0C183.946 0 237 53.0543 237 118.5ZM23.0883 118.5C23.0883 171.194 65.8056 213.912 118.5 213.912C171.194 213.912 213.912 171.194 213.912 118.5C213.912 65.8056 171.194 23.0883 118.5 23.0883C65.8056 23.0883 23.0883 65.8056 23.0883 118.5Z"
            fill="#F5F5F5"
          />
          <g filter="url(#filter0_d_23_3)">
            <rect
              x="109"
              y="33"
              width="19"
              height="86"
              rx="9.5"
              fill="#F5F5F5"
            />
            <rect
              x="109.5"
              y="33.5"
              width="18"
              height="85"
              rx="9"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_23_3"
              x="105"
              y="33"
              width="27"
              height="94"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_23_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_23_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="zero-container">
        <svg
          class="zero"
          width="237"
          height="237"
          viewBox="0 0 237 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M237 118.5C237 183.946 183.946 237 118.5 237C53.0543 237 0 183.946 0 118.5C0 53.0543 53.0543 0 118.5 0C183.946 0 237 53.0543 237 118.5ZM23.0883 118.5C23.0883 171.194 65.8056 213.912 118.5 213.912C171.194 213.912 213.912 171.194 213.912 118.5C213.912 65.8056 171.194 23.0883 118.5 23.0883C65.8056 23.0883 23.0883 65.8056 23.0883 118.5Z"
            fill="#F5F5F5"
          />
          <g filter="url(#filter0_d_23_3)">
            <rect
              x="109"
              y="33"
              width="19"
              height="86"
              rx="9.5"
              fill="#F5F5F5"
            />
            <rect
              x="109.5"
              y="33.5"
              width="18"
              height="85"
              rx="9"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_23_3"
              x="105"
              y="33"
              width="27"
              height="94"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_23_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_23_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="zero-container">
        <svg
          class="zero"
          width="237"
          height="237"
          viewBox="0 0 237 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M237 118.5C237 183.946 183.946 237 118.5 237C53.0543 237 0 183.946 0 118.5C0 53.0543 53.0543 0 118.5 0C183.946 0 237 53.0543 237 118.5ZM23.0883 118.5C23.0883 171.194 65.8056 213.912 118.5 213.912C171.194 213.912 213.912 171.194 213.912 118.5C213.912 65.8056 171.194 23.0883 118.5 23.0883C65.8056 23.0883 23.0883 65.8056 23.0883 118.5Z"
            fill="#F5F5F5"
          />
          <g filter="url(#filter0_d_23_3)">
            <rect
              x="109"
              y="33"
              width="19"
              height="86"
              rx="9.5"
              fill="#F5F5F5"
            />
            <rect
              x="109.5"
              y="33.5"
              width="18"
              height="85"
              rx="9"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_23_3"
              x="105"
              y="33"
              width="27"
              height="94"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_23_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_23_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="zero-container">
        <svg
          class="zero"
          width="237"
          height="237"
          viewBox="0 0 237 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M237 118.5C237 183.946 183.946 237 118.5 237C53.0543 237 0 183.946 0 118.5C0 53.0543 53.0543 0 118.5 0C183.946 0 237 53.0543 237 118.5ZM23.0883 118.5C23.0883 171.194 65.8056 213.912 118.5 213.912C171.194 213.912 213.912 171.194 213.912 118.5C213.912 65.8056 171.194 23.0883 118.5 23.0883C65.8056 23.0883 23.0883 65.8056 23.0883 118.5Z"
            fill="#F5F5F5"
          />
          <g filter="url(#filter0_d_23_3)">
            <rect
              x="109"
              y="33"
              width="19"
              height="86"
              rx="9.5"
              fill="#F5F5F5"
            />
            <rect
              x="109.5"
              y="33.5"
              width="18"
              height="85"
              rx="9"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_23_3"
              x="105"
              y="33"
              width="27"
              height="94"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_23_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_23_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="zero-container">
        <svg
          class="zero"
          width="237"
          height="237"
          viewBox="0 0 237 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M237 118.5C237 183.946 183.946 237 118.5 237C53.0543 237 0 183.946 0 118.5C0 53.0543 53.0543 0 118.5 0C183.946 0 237 53.0543 237 118.5ZM23.0883 118.5C23.0883 171.194 65.8056 213.912 118.5 213.912C171.194 213.912 213.912 171.194 213.912 118.5C213.912 65.8056 171.194 23.0883 118.5 23.0883C65.8056 23.0883 23.0883 65.8056 23.0883 118.5Z"
            fill="#F5F5F5"
          />
          <g filter="url(#filter0_d_23_3)">
            <rect
              x="109"
              y="33"
              width="19"
              height="86"
              rx="9.5"
              fill="#F5F5F5"
            />
            <rect
              x="109.5"
              y="33.5"
              width="18"
              height="85"
              rx="9"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_23_3"
              x="105"
              y="33"
              width="27"
              height="94"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_23_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_23_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
    <div class="subtitle">SECONDS</div>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

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
    animation: tick 10s infinite cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
  .number-container > .zero-container:nth-child(3) {
    transform: rotate(72deg);
  }
  .number-container > .zero-container:nth-child(4) {
    transform: rotate(108deg);
  }
  .number-container > .zero-container:nth-child(5) {
    transform: rotate(144deg);
  }
  .number-container > .zero-container:nth-child(6) {
    transform: rotate(180deg);
  }
  .number-container > .zero-container:nth-child(7) {
    transform: rotate(216deg);
  }
  .number-container > .zero-container:nth-child(8) {
    transform: rotate(252deg);
  }
  .number-container > .zero-container:nth-child(9) {
    transform: rotate(288deg);
  }
  .number-container > .zero-container:nth-child(10) {
    transform: rotate(324deg);
  }

  @keyframes tick {
    0% {
      transform: rotate(36deg);
    }
    5% {
      transform: rotate(36deg);
    }
    10% {
      transform: rotate(72deg);
    }
    15% {
      transform: rotate(72deg);
    }
    20% {
      transform: rotate(108deg);
    }
    25% {
      transform: rotate(108deg);
    }
    30% {
      transform: rotate(144deg);
    }
    35% {
      transform: rotate(144deg);
    }
    40% {
      transform: rotate(180deg);
    }
    45% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(216deg);
    }
    55% {
      transform: rotate(216deg);
    }
    60% {
      transform: rotate(252deg);
    }
    65% {
      transform: rotate(252deg);
    }
    70% {
      transform: rotate(288deg);
    }
    75% {
      transform: rotate(288deg);
    }
    80% {
      transform: rotate(324deg);
    }
    85% {
      transform: rotate(324deg);
    }
    90% {
      transform: rotate(360deg);
    }
    95% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(396deg);
    }
  }
</style>
