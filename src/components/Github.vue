<template>
  <div class="github row" id="github">
    <div class="col-12 bg-dark text-light text-center pt-5 pb-5">
      <h2 class="m-0">Showcase</h2>
      <div class="row d-flex justify-content-center">
        <div class="col-3 col-md-1">
          <hr class="border border-light" />
        </div>
      </div>
      <div class="row">
        <div class="col-10 m-auto col-sm-6 col-md-4">
          <div class="card text-dark" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Nabnak</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-dark">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-10 m-auto col-sm-6 col-md-4">
          <div class="card text-dark" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Wild Cards</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-dark">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-10 m-auto col-sm-6 col-md-4">
          <div class="card text-dark" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Inspire</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-dark">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <h2 class="m-0 pt-5">Check out my other projects!</h2>
      <div class="row d-flex justify-content-center">
        <div class="col-3 col-md-1">
          <hr class="border border-light" />
        </div>
      </div>
      <a
        class="btn btn-light text-dark"
        href="https://github.com/BenjaminNewitt"
        role="button"
        >My Github</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "github"
};
</script>

<style scoped>
hr {
  border-width: 2px !important;
}
</style>
