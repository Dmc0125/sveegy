<template>
  <section class="illustration">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.illustration {
  width: 250px;
  margin: 2rem auto 0rem;
}

@include tablet-s {
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
  .illustration {
    width: 450px;
    margin: 0;
  }
}

@include desktop-l {
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
