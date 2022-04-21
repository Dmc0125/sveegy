<script>
  import Icon from '../icons/Icon.svelte'
</script>

<div class="icons-illustration">
  <div class="icons-illustration__heart">
    <Icon iconId="heart" size="100%" strokeWidth=".7" />
  </div>
  <div class="icons-illustration__chart-desc">
    <Icon iconId="bar-chart-descending" size="100%" strokeWidth=".7" />
  </div>
  <div class="icons-illustration__chart-asc">
    <Icon iconId="bar-chart-ascending" size="100%" strokeWidth=".7" />
  </div>
  <div class="icons-illustration__calendar">
    <Icon iconId="calendar" size="100%" strokeWidth=".7" />
  </div>
  <div class="icons-illustration__shield">
    <Icon iconId="shield" size="100%" strokeWidth=".7" />
  </div>
</div>

<style lang="scss">
  .icons-illustration {
    width: fit-content;
    height: 100%;
    grid-column: 2 / 3;

    display: none;
    grid-template-rows: auto 1fr auto;
    column-gap: 2rem;

    div {
      border-radius: 6px;
      color: var(--bg-clr-primary);
      padding: 1%;
      place-items: center;
    }

    &__heart {
      width: 2.5rem;
      height: 2.5rem;
      display: grid;
      grid-row: 3 / 4;

      transform: rotate(-15deg);
      background: var(--cta-clr-primary);
    }

    &__chart-desc {
      width: 50px;
      height: 50px;
      display: grid;
      grid-column: 2 / 3;

      transform: rotate(10deg);
      background: var(--code-bg-clr-primary);
    }

    &__chart-asc {
      width: 60px;
      height: 60px;
      grid-column: 3 / 4;
      grid-row: 3 / 4;
      display: grid;

      transform: rotate(3deg);
      background: var(--cta-clr-primary);
    }

    &__calendar {
      width: 70px;
      height: 70px;
      display: none;
      grid-column: 4 / 5;

      transform: rotate(-15deg);
      background: var(--cta-clr-primary);
    }

    &__shield {
      width: 70px;
      height: 70px;
      display: none;
      grid-column: 5 / 6;
      grid-row: 3 / 4;

      transform: rotate(15deg);
      background: var(--code-bg-clr-primary);
    }
  }

  :global(.app-wrapper[dark-mode="true"]) .icons-illustration div {
    color: var(--font-clr-primary);
  }

  @media (min-width: 800px) {
    .icons-illustration {
      display: grid;
    }
  }

  @media (min-width: 1000px) {
    .icons-illustration {
      column-gap: 4rem;
    }
  }

  @media (min-width: 1200px) {
    .icons-illustration__calendar {
      display: grid;
    }
  }

  @media (min-width: 1350px) {
    .icons-illustration__shield {
      display: grid;
    }
  }

  @media (min-width: 1500px) {
    .icons-illustration {
      column-gap: 6rem;
    }
  }
</style>
