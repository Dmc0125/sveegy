<script lang="ts">
  import LangGroup from '$lib/components/utils/LangGroup.svelte'
  import CodeEditorSample from '$lib/components/home/CodeEditorSample.svelte'
  import HomeSection from '$lib/components/home/HomeSection.svelte'
  import Icon from '$lib/components/icons/Icon.svelte'
  import LandingIllustration from '$lib/components/illustrations/LandingIllustration.svelte'
  import UsageIllustration from '$lib/components/illustrations/UsageIllustration.svelte'
  import FrameworksIllustration from '$lib/components/illustrations/FrameworksIllustration.svelte'
  import Button from '$lib/components/utils/Button.svelte'
import SpritesIllustration from '$lib/components/illustrations/SpritesIllustration.svelte'
</script>

<svelte:head>
  <title>Sveegy &bull; Home</title>
  <!-- TODO: Add og:title, og:description, twitter: ,... -->
</svelte:head>

<main class="landing-hero">
  <div class="landing-hero__text">
    <h1 class="landing-hero__heading">Sveegy</h1>
    <h2 class="landing-hero__subheading">Beautiful open-source icon sets usable with just few clicks, even offline.</h2>

    <section class="landing-hero__supported-langs">
      <LangGroup lang="html" />
      <LangGroup lang="vue" />
      <LangGroup lang="svelte" />
    </section>

    <Button tag="a" href="/icons" title="Browse icons" style="100" class="landing-hero__btn" padding>
      <Icon size="1.5rem" iconId="search" strokeWidth="1.2" />
      Browse
    </Button>
  </div>

  <LandingIllustration />

  <div class="landing-hero__scroll-indicator">
    <Icon iconId="double-chevron-down" size="3rem" />
  </div>
</main>

<HomeSection side="right" heading="Use with just few clicks">
  <svelte:fragment slot="content">
    The easiest way to use sveegy icons is without any package. Browse through icons, pick the one you want, copy the
    html or jsx and paste it in your code.
  </svelte:fragment>
  <Button tag="a" href="/icons" title="Browse icons" style="100" slot="buttons" padding>Pick an icon</Button>
  <UsageIllustration slot="illustration" />
</HomeSection>

<HomeSection side="left" heading="Support for multiple frameworks">
  <div slot="langs" class="frameworks__langs">
    <LangGroup lang="vue" />
    <LangGroup lang="svelte" />
  </div>

  <svelte:fragment slot="content">
    Sveegy icons are also usable as component library. Just install the npm-package and import the icon like any other
    component. Sveegy currently supports Svelte and Vue but more is to come.
  </svelte:fragment>

  <Button tag="a" href="/docs/svelte" title="Frameworks docs" padding style="100" slot="buttons">
    <Icon iconId="license" size="1.5rem" />
    See more in docs
  </Button>

  <FrameworksIllustration slot="illustration" />
</HomeSection>

<HomeSection side="right" heading="Svg sprites" id="sprites">
  <svelte:fragment slot="content">
    Using sveegy icons via sprites does not require any javascript. Download the sprites file, place it in the public
    directory of your project and reference the icon in the html.
  </svelte:fragment>

  <svelte:fragment slot="buttons">
    <Button tag="a" href="/sprites.zip" download="sprites" title="Download sprites" style="100" padding>
      <Icon iconId="download-alt" size="1.5rem" class="sprites__btn-icon" />
      Download sprites
    </Button>

    <Button tag="a" href="/docs/sprites" title="Sprites docs" style="200" padding>
      <Icon iconId="license" size="1.5rem" class="sprites__btn-icon" />
      See more in docs
    </Button>
  </svelte:fragment>

  <SpritesIllustration slot="illustration" />
</HomeSection>

<style lang="scss">
  .landing-hero {
    width: 100%;
    min-height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    row-gap: 75px;
    position: relative;

    &__heading {
      font-size: 60px;
      font-weight: 700;
      color: var(--cta-clr-primary);
      text-align: center;
    }

    &__subheading {
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--font-clr-primary);
      text-align: center;
    }

    &__supported-langs {
      width: 100%;
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: min(8%, 35px);
    }

    &__scroll-indicator {
      position: absolute;
      left: 50%;
      bottom: 5vh;
      transform: translateX(-50%);
      color: var(--font-clr-secondary);
      display: none;
      animation: breathe 3s linear infinite;
    }
  }

  @keyframes breathe {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .landing-hero__text {
    width: 100%;
    max-width: 500px;
    margin-inline: auto;
    margin-top: 75px;
    padding: 0 5%;
  }

  :global(.landing-hero__btn) {
    width: fit-content;
    margin: 1.5rem auto 0;
  }

  .frameworks__langs {
    width: fit-content;
    display: flex;
    column-gap: 2rem;
    margin-bottom: 0.5rem;
  }

  :global(.sprites__btn-icon) {
    display: none;
  }

  @media (min-width: 450px) {
    :global(.sprites__btn-icon) {
      display: inherit;
    }
  }

  @media (min-width: 500px) {
    .landing-hero__text {
      padding: 0;
    }
  }

  @media (min-width: 1100px) {
    .landing-hero {
      flex-direction: row;
      align-items: center;
      padding-inline: 5%;

      &__text {
        margin-top: 0;
        margin-bottom: 10rem;
      }

      &__heading {
        text-align: left;
      }

      &__subheading {
        text-align: left;
      }

      &__supported-langs {
        justify-content: start;
      }

      &__scroll-indicator {
        display: inherit
      }
    }

    :global(.landing-hero__btn) {
      margin: 1.5rem 0 0;
    }
  }
</style>
