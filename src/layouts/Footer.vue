<template>
  <footer>
    <p>Designed and created by Dominik Michal</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 10px 30px;

  display: flex;
  justify-content: center;
}

p {
  font-size: 14px;
}

@include tablet-s {
  p {
    font-size: 1rem;
  }
}

@include desktop-xs {
  footer {
    padding: 10px 70px;

    flex-direction: row;
    justify-content: space-between;
  }
}

@include desktop-s {
  footer {
    padding: 10px 100px;
  }
}

@include desktop-m {
  footer {
    padding: 10px 140px;
  }
}
</style>
