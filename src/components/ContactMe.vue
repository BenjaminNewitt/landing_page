<template>
  <div class="contact row" id="contact-me">
    <div
      class="col-12 text-center text-dark bg-light mt-5 pt-5 pb-5 justify-content-center"
     data-aos="fade-left" data-aos-duration="800">
      <h2 class="m-0">Contact Me</h2>
      <!-- hr for break between section title and section content -->
      <div class="row d-flex justify-content-center">
        <div class="col-3 col-md-1">
          <hr class="border border-dark" />
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-4 text-center">
          <a
            href="mailto:benjaminnewitt@gmail.com"
            target="_blank"
            class="text-decoration-none text-dark"
          >
            <i class="fas fa-envelope fa-5x"></i>
            <h4>benjaminnewitt@gmail.com</h4>
          </a>
        </div>
        <div class="col-12 col-md-4 text-center">
          <a
            href="https://www.linkedin.com/in/benjamin-newitt/"
            target="_blank"
            class="text-decoration-none text-dark"
          >
            <i class="fab fa-linkedin fa-5x"></i>
            <h4>LinkedIn</h4>
          </a>
        </div>
        <div class="col-12 col-md-4 text-center">
          <a
            href="tel:1-916-710-2739"
            target="_blank"
            class="text-decoration-none text-dark"
          >
            <i class="fas fa-phone-square-alt fa-5x"></i>
            <h4>(916)710-2739</h4>
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
