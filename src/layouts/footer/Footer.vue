<template>
  <footer>
    <p>Designed and created by Dominik Michal</p>
    <p class="copyright">&#9400; 2020 &bull; Dominik Michal &bull; All rights reserved</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 10px 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

p {
  font-size: 14px;
}

.copyright {
  margin-top: 10px;
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

  .copyright {
    margin: 0;
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
