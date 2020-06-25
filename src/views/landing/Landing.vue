<template>
  <div class="landing">
    <section class="hero">
      <h1>Sveegy</h1>
      <h2>Choose from many free svg icons and use it with just one click</h2>
      <RouterLink
        class="browse-now-btn"
        to="/icons"
      >Browse now</RouterLink>
    </section>

    <section class="illustration">
      <img
        src="@/assets/illustrations/browse.svg"
        alt="Search illustration"
        title="Browse illustration"
      >
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.landing {
  width: 100%;
  height: 100%;

  padding-top: 50px;
}

.hero {
  width: 90%;
  max-width: 485px;
  margin: 0 auto;

  text-align: center;
}

h1 {
  font-size: 3rem;
  font-weight: 500;
}

h2 {
  margin-top: 1rem;

  font-size: 1.5rem;
  font-weight: 400;
}

.browse-now-btn {
  width: 140px;
  height: 44px;
  margin: 50px auto 0;

  background: var(--secondary);
  color: var(--font-clr-light);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration {
  width: 250px;
  margin: 2rem auto 0rem;
}

@include tablet {
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
  }

  .browse-now-btn {
    width: 150px;
    height: 50px;
  }

  .illustration {
    width: 350px;
    margin-top: 70px;
  }
}

@include desktop-xs {
  .illustration {
    width: 400px;
  }
}

@include desktop-m {
  .landing {
    padding: 0 140px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hero {
    margin: 0;
    text-align: left;
  }

  h1 {
    font-size: 5rem;
  }

  .browse-now-btn {
    margin: 0;
    margin-top: 50px;
  }

  .illustration {
    width: 450px;
    margin: 0;
  }
}

@include desktop-l {
  .landing {
    padding: 0 200px;
  }

  .illustration {
    width: 480px;
  }
}

@include desktop-xl {
  .illustration {
    width: 600px;
  }
}
</style>
