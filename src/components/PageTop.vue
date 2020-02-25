<template>
  <div class="page row" id="page-top">
    <div class="col-12 text-center splash-background pt-5 pb-5">
      <!-- TODO align content of col with center of background image -->
      <h1 class="text-light pt-5">Full Stack Software Developer</h1>
      <!-- hr for break between section title and section content -->
      <div class="row d-flex justify-content-center">
        <div class="col-3 col-md-1">
          <hr class="border border-light" />
        </div>
      </div>
      <a class="btn btn-success" href="#about" role="button">
        <h2>Learn More</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page"
};
</script>

<style scoped>
.page {
  height: 80vh;
}
.splash-background {
  background-image: url(~@/assets/splash.jpg);
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 100%;
}

hr {
  border-width: 2px !important;
}
</style>