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
        <div class="col-10 mx-auto col-sm-6 col-md-4">
          <div class="card text-dark" style="width: 100%; height: 100%">
            <div class="card-body">
              <h5 class="card-title">Nabnak</h5>
              <p class="card-text text-left">
                Users create their own boards and lists of To-Do's and can write
                notes for those lists
                <br />
                Environment: Vue, Node, MongoDB
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-dark">Try it out here!</a>
            </div>
          </div>
        </div>
        <div class="col-10 mx-auto col-sm-6 col-md-4">
          <div class="card text-dark" style="width: 100%; height: 100%">
            <div class="card-body">
              <h5 class="card-title">Wild Cards</h5>
              <p class="card-text text-left">
                Users build and play card games with friends
                <br />
                Environment: Vue, Node, MongoDB
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-dark">Check it out!</a>
            </div>
          </div>
        </div>
        <div class="col-10 mx-auto col-sm-6 col-md-4">
          <div class="card text-dark" style="width: 100%; height: 100%">
            <div class="card-body">
              <h5 class="card-title">Inspire</h5>
              <p class="card-text text-left">
                Dashboard utilizing a variety API's
                <br />
                Environment: Coming Soon
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-dark">Coming Soon</a>
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
