<template>
  <div class="page row" id="page-top">
    <div class="col-12  align-items-center d-flex justify-content-center text-center splash-background">
      <div class="row align-items-center">
        <div class="col-12 my-auto">
          <h1 class="text-light mb-0 pt-5 text-shadow">Full Stack Software Developer</h1>
          <!-- hr for break between section title and section content -->
          <div class="row d-flex justify-content-center">
            <div class="col-6 col-md-3">
              <hr class="border border-light" />
            </div>
          </div>
          <a class="btn btn-success" href="#about" role="button">
            <h2>Learn More</h2>
          </a>
        </div>
      </div>
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
  height: 100vh;
}
.splash-background {
  background-image: url(~@/assets/splash.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

hr {
  border-width: 2px !important;
}

.text-shadow {
	text-shadow: 1px 1px 2px black;
}
</style>