<script>
  import { onMount } from 'svelte';
  import { createScene } from './lib/scene';
  import { howManyDays, isNumeric } from './helpers/helperFunctions';

  let canvas;
  onMount(() => {
    createScene(canvas);
  });

  let dayValue = '';
  let monthValue = '';
  let yearValue = '';
  let hourValue = '';
  let minuteValue = '';
  let buttonClicked = false;
  let isDayValid = true;
  let isDayFieldClicked = false;
  let isMonthValid = true;
  let isYearValid = true;
  let isHourValid = true;
  let isMinuteValid = true;
  let isButtonDisabled = true;
  let dateDisplayed = '';
  let isFuture = false;

  const handleDayClick = () => {
    isDayFieldClicked = true;
  };
  const handleDayInput = (e) => {
    if (!isNumeric(e.data)) {
      e.preventDefault;
    }
    dayValue = e.target.value;
    const daysToCompare = howManyDays(
      parseInt(monthValue),
      parseInt(yearValue)
    );
    if (
      parseInt(dayValue) > daysToCompare ||
      dayValue === '' ||
      parseInt(dayValue) < 1
    ) {
      if (isDayFieldClicked) {
        isDayValid = false;
      }
    } else {
      isDayValid = true;
    }
  };
  const handleMonthInput = (e) => {
    if (!isNumeric(e.data)) {
      e.preventDefault;
    }
    monthValue = e.target.value;
    if (
      parseInt(monthValue) > 12 ||
      monthValue === '' ||
      parseInt(monthValue) < 1
    ) {
      isMonthValid = false;
    } else {
      isMonthValid = true;
    }

    const daysToCompare = howManyDays(
      parseInt(monthValue),
      parseInt(yearValue)
    );
    if (
      parseInt(dayValue) > daysToCompare ||
      dayValue === '' ||
      parseInt(dayValue) < 1
    ) {
      if (isDayFieldClicked) {
        isDayValid = false;
      }
    } else {
      isDayValid = true;
    }
  };
  const handleYearInput = (e) => {
    const currentYear = new Date().getFullYear();
    if (!isNumeric(e.data)) {
      e.preventDefault;
    }
    yearValue = e.target.value;
    if (
      parseInt(yearValue) > currentYear ||
      yearValue === '' ||
      parseInt(yearValue) < 1000
    ) {
      isYearValid = false;
    } else {
      isYearValid = true;
    }

    const daysToCompare = howManyDays(
      parseInt(monthValue),
      parseInt(yearValue)
    );
    if (
      parseInt(dayValue) > daysToCompare ||
      dayValue === '' ||
      parseInt(dayValue) < 1
    ) {
      if (isDayFieldClicked) {
        isDayValid = false;
      }
    } else {
      isDayValid = true;
    }
  };
  const handleHourInput = (e) => {
    if (!isNumeric(e.data)) {
      e.preventDefault;
    }
    hourValue = e.target.value;
    if (
      parseInt(hourValue) > 23 ||
      hourValue === '' ||
      parseInt(hourValue) < 0
    ) {
      isHourValid = false;
    } else {
      isHourValid = true;
    }
  };
  const handleMinuteInput = (e) => {
    if (!isNumeric(e.data)) {
      e.preventDefault;
    }
    if (
      parseInt(minuteValue) > 59 ||
      minuteValue === '' ||
      parseInt(minuteValue) < 0
    ) {
      isMinuteValid = false;
    } else {
      isMinuteValid = true;
    }

    minuteValue = e.target.value;
  };
  const handleCalculation = (e) => {
    const birthday = new Date(
      parseInt(yearValue),
      parseInt(monthValue) - 1,
      parseInt(dayValue),
      parseInt(hourValue),
      parseInt(minuteValue)
    );
    const billionSeconds = birthday.setSeconds(
      birthday.getSeconds() + 1000000000
    );

    isFuture = billionSeconds > Date.now();

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const billionDate = new Date(billionSeconds);
    buttonClicked = true;
    // @ts-ignore
    dateDisplayed = billionDate.toLocaleTimeString('en-US', options);
  };
  const checkToEnable = () => {
    if (
      dayValue !== '' &&
      monthValue !== '' &&
      yearValue !== '' &&
      hourValue !== '' &&
      minuteValue !== '' &&
      isDayValid &&
      isMonthValid &&
      isYearValid &&
      isHourValid &&
      isMinuteValid
    ) {
      isButtonDisabled = false;
    } else {
      isButtonDisabled = true;
    }
  };
  const handleMinuteBlur = () => {
    if (parseInt(minuteValue) < 10 && minuteValue.length < 2) {
      minuteValue = '0' + minuteValue;
    }
  };
  const handleHourBlur = () => {
    if (parseInt(hourValue) < 10 && hourValue.length < 2) {
      hourValue = '0' + hourValue;
    }
  };
  const handleMonthBlur = () => {
    if (parseInt(monthValue) < 10 && monthValue.length < 2) {
      monthValue = '0' + monthValue;
    }
  };
  const handleDayBlur = () => {
    if (parseInt(dayValue) < 10 && dayValue.length < 2) {
      dayValue = '0' + dayValue;
    }
  };
</script>

<canvas bind:this={canvas} />
<main class="main-container">
  <header class="title-container">
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
        <img src="./Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="./Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="./Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="./Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="./Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="./Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="./Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="./Number0.png" class="zero" alt="Number zero" />
      </div>
      <div class="zero-container">
        <img src="./Number0.png" class="zero" alt="Number zero" />
      </div>
    </div>
    <div class="subtitle">SECONDS</div>
  </header>
  <div class="header-container">
    <h1 class="header">
      When will you be a <span class="billion">billion</span> seconds old?
    </h1>
  </div>
  <div class="user-input-container">
    <div class="input-label">Enter your date of birth:</div>
    <div class="inputs-container">
      <div class="date-container">
        <div class="day-container">
          <input
            style="border-color:{`${
              isDayValid ? 'rgba(255, 255, 255, 0.2)' : 'red'
            }`}; transition:all .3s linear"
            bind:value={dayValue}
            type="number"
            on:input={handleDayInput}
            on:input={checkToEnable}
            on:click={handleDayClick}
            on:blur={handleDayBlur}
          />
        </div>
        <div class="day-label">DAY</div>
        <div class="slash-container-1 slash-container">
          <img src="./slash.png" alt="slash" />
        </div>
        <div class="month-container">
          <input
            style="border-color:{`${
              isMonthValid ? 'rgba(255, 255, 255, 0.2)' : 'red'
            }`}; transition:all .3s linear"
            bind:value={monthValue}
            on:input={handleMonthInput}
            on:input={checkToEnable}
            on:blur={handleMonthBlur}
            type="number"
          />
        </div>
        <div class="month-label">MONTH</div>
        <div class="slash-container-2 slash-container">
          <img src="./slash.png" alt="slash" />
        </div>
        <div class="year-container">
          <input
            style="border-color:{`${
              isYearValid ? 'rgba(255, 255, 255, 0.2)' : 'red'
            }`}; transition:all .3s linear"
            bind:value={yearValue}
            on:input={handleYearInput}
            on:input={checkToEnable}
            type="number"
            class="year"
          />
        </div>
        <div class="year-label">YEAR</div>
      </div>
      <div class="time-container">
        <div class="hour-container">
          <input
            style="border-color:{`${
              isHourValid ? 'rgba(255, 255, 255, 0.2)' : 'red'
            }`}; transition:all .3s linear"
            bind:value={hourValue}
            on:input={handleHourInput}
            on:input={checkToEnable}
            on:blur={handleHourBlur}
            type="number"
          />
        </div>
        <div class="hour-label">HOUR</div>
        <div class="colon-container">
          <img src="/colon.png" alt="colon" />
        </div>
        <div class="minute-container">
          <input
            style="border-color:{`${
              isMinuteValid ? 'rgba(255, 255, 255, 0.2)' : 'red'
            }`}; transition:all .3s linear"
            bind:value={minuteValue}
            on:input={handleMinuteInput}
            on:input={checkToEnable}
            on:blur={handleMinuteBlur}
            type="number"
          />
        </div>
        <div class="minute-label">MINUTE</div>
      </div>
    </div>
    <div class="calculate-button-container">
      <button
        disabled={isButtonDisabled}
        on:click={handleCalculation}
        class="calculate-button">CALCULATE</button
      >
    </div>
    {#if buttonClicked}
      <div class="result-container">
        Your billionth second <span>{isFuture ? 'will be' : 'was'}</span> on
        <span class="result-date">{dateDisplayed}</span>
      </div>
    {:else}
      <div class="result-container dummy">
        Your billionth second will be on Monday, August 20, 2001 at 08:00:00 AM
      </div>
    {/if}
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
  img {
    user-select: none;
  }
  .main-container {
    z-index: 0;
    width: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .number-container {
    display: flex;
    flex-direction: row;
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
  .header-container {
    color: white;
    text-align: center;
    font-size: clamp(0.4rem, 1.8vmin, 2.7rem);
    margin: 1.5em auto;
  }
  .header {
    font-weight: 400;
  }
  .billion {
    font-weight: 600;
    color: #fff;
    text-shadow: 0 0 0.4em #0467b8, 0 0 0.425em #1585e0, 0 0 0.45em #0467b8,
      0 0 0.275em #1585e0, 0 0 0.3em #1585e0;
  }
  .user-input-container {
    color: white;
    text-align: center;
  }
  .input-label {
    font-size: clamp(1.1rem, 2.5vmin, 3rem);
    margin-bottom: 0.6em;
  }
  .inputs-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.8rem;
  }
  .date-container {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-areas:
      'day slash1 month slash2 year'
      'day-label . month-label . year-label';
    grid-template-columns: auto 1fr auto 1fr auto;
    grid-template-rows: 1fr auto;
    column-gap: 1.7vmin;
  }
  .day-container {
    grid-area: day;
  }
  .slash-container-1 {
    grid-area: slash1;
  }
  .month-container {
    grid-area: month;
  }
  .slash-container-2 {
    grid-area: slash2;
  }
  .year-container {
    grid-area: year;
  }
  .day-label {
    grid-area: day-label;
  }
  .month-label {
    grid-area: month-label;
  }
  .year-label {
    grid-area: year-label;
  }
  .time-container {
    display: grid;
    grid-template-areas:
      'hour colon minute'
      'hour-label . minute-label';
    justify-content: center;
    align-items: center;
    column-gap: 1.7vmin;
  }
  .hour-container {
    grid-area: hour;
  }
  .colon-container {
    grid-area: colon;
  }
  .minute-container {
    grid-area: minute;
  }
  .hour-label {
    grid-area: hour-label;
  }
  .minute-label {
    grid-area: minute-label;
  }
  .slash-container > img {
    max-height: 4.3vmin;
    max-width: 4.3vmin;
    transform: rotateZ(20deg);
  }
  .colon-container > img {
    max-height: 5vmin;
    max-width: 5vmin;
  }
  .day-label,
  .month-label,
  .year-label,
  .hour-label,
  .minute-label {
    font-weight: 500;
    font-size: clamp(0.5rem, 1.3vmin, 3rem);
  }
  input {
    font-size: clamp(1.2rem, 4vmin, 6rem);
    outline: none;
    color: white;
    background-color: rgba(26, 26, 26, 0.8);
    border: 2.5px solid rgba(255, 255, 255, 0.2);
    width: 2.2em;
    height: 2em;
    border-radius: 0.5em;
    text-align: center;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  .year {
    width: 3.6em;
  }

  .calculate-button {
    font-weight: 700;
    border: none;
    font-size: clamp(1.1rem, 2.5vmin, 3rem);
    padding: 0.12em 0.45em;
    border-radius: 0.2em;
    color: white;
    background-color: rgba(21, 133, 224, 0.6);
    cursor: pointer;
    transition: all 0.3s ease;
    &:disabled {
      cursor: not-allowed;
    }
    margin: 1.2em auto;
  }
  @media (hover: hover) {
    .calculate-button:hover:enabled {
      background-color: rgba(2, 99, 202, 0.6);
    }
  }
  @media (max-width: 400px) {
    .inputs-container {
      flex-direction: column;
      gap: 0.7rem;
    }
  }
  .result-container {
    margin: auto;
    max-width: 15em;
    font-size: clamp(1rem, 2.5vmin, 3rem);
  }
  .dummy {
    opacity: 0;
  }
  .result-date {
    font-weight: 600;
    text-shadow: 0 0 0.4em #c40242, 0 0 0.425em #c40242, 0 0 0.45em #c40242,
      0 0 0.275em #c40242, 0 0 0.3em #c40242;
  }
</style>
