<template>
  <div class="page row">
    <div class="col-12 text-center splash-background pt-5 pb-5">
      <!-- TODO align content of col with center of background image -->
      <h1 class="text-light pt-5">Full Stack Software Developer</h1>
      <button class="btn btn-success mt-3">
        <h2 class="text-light">Learn More</h2>
      </button>
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
</style>