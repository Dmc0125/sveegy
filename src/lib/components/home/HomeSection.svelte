<script lang="ts">
  export let side: 'left' | 'right'
  export let heading: string

  export let id = ''
</script>

<section class="home-section" {id}>
  <div class="home-section__content {side}">
    <section class="content__header {side}">
      <slot name="langs" />
      <h1 class="header__heading">{heading}</h1>

      <p class="header__paragraph">
        <slot name="content" />
      </p>
    </section>

    <div class="content__buttons {side}">
      <slot name="buttons" />
    </div>
  </div>

  <slot name="illustration" />
</section>

<style lang="scss">
  .home-section {
    width: 100%;
    margin-top: 100px;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  .home-section__content {
    width: fit-content;
    max-width: 450px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
  }

  .content__header {
    display: flex;
    justify-content: center;
    flex-direction: column;

    &.left {
      align-items: flex-start;
      text-align: left;
    }

    &.right {
      align-items: flex-end;
      text-align: right;
    }
  }

  .header__heading {
    color: var(--font-clr-secondary);
    font-size: 1.75rem;
    font-weight: 500;
  }

  .header__paragraph {
    margin-top: 0.75rem;
    color: var(--font-clr-primary);
  }

  .content__buttons {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  .content__buttons.left {
    justify-content: start;
  }

  .content__buttons.right {
    justify-content: end;
  }

  @media (min-width: 550px) {
    .home-section {
      margin-top: 10rem;
    }

    .home-section + .home-section {
      margin-top: 15rem;
    }
  }

  @media (min-width: 1100px) {
    .home-section {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      &__content {
        flex-shrink: 1;
        margin-bottom: 0;

        &.right {
          order: 1;
        }
      }
    }
  }

  @media (min-width: 1500px) {
    .home-section {
      padding: 0 15%;
    }
  }
</style>
