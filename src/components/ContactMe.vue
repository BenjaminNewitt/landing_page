<template>
  <div class="contact row">
    <div class="col-12 text-center text-dark bg-light pt-5 pb-5 justify-content-center">
      <h2>Contact Me</h2>
      <!-- hr for break between section title and section content -->
      <div class="row d-flex justify-content-center">
        <div class="col-1">
          <hr class="border border-dark" />
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-4 text-center">
          <a href="mailto:benjaminnewitt@gmail.com">
            <i class="fas fa-envelope fa-5x text-dark"></i>
            <h4 class="text-dark">benjaminnewitt@gmail.com</h4>
          </a>
        </div>
        <div class="col-12 col-md-4 text-center">
          <a href="https://www.linkedin.com/in/benjamin-newitt/">
            <i class="fab fa-linkedin fa-5x"></i>
            <h4 class="text-dark">LinkedIn</h4>
          </a>
        </div>
        <div class="col-12 col-md-4 text-center">
          <a href="tel:1-916-710-2739">
            <i class="fas fa-phone-square-alt fa-5x text-dark"></i>
            <h4 class="text-dark">(916)710-2739</h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style scoped>
hr {
  border-width: 2px !important;
}
</style>