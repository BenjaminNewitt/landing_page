<template>
  <div class="tools row">
    <div class="col-12 bg-light text-dark text-center pt-5 pb-5">
      <h2>Languages and Tools</h2>
      <div class="row d-flex justify-content-center">
        <div class="col-1">
          <hr class="border border-dark" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6 col-md-2 pb-2">
          <img src="~@/assets/CSS.png" alt />
        </div>
        <div class="col-6 col-md-2">
          <img src="~@/assets/html.png" alt />
        </div>
        <div class="col-6 col-md-2">
          <img src="~@/assets/Vue.png" alt />
        </div>
        <div class="col-6 col-md-2">
          <img src="~@/assets/bootstrap.png" alt />
        </div>
        <div class="col-6 col-md-2">
          <img src="~@/assets/JavaScript.png" alt />
        </div>
        <div class="col-6 col-md-2">
          <img src="~@/assets/mongodb.png" alt />
        </div>
        <div class="col-6 col-md-2">
          <img src="~@/assets/node.png" alt />
        </div>
        <div class="col-6 col-md-2">
          <img src="~@/assets/csharp.png" alt />
        </div>
        <div class="col-6 col-md-2">
          <img src="~@/assets/mySQL.png" alt />
        </div>
        <div class="col-6 col-md-2">
          <img src="~@/assets/git.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tools"
};
</script>

<style scoped>
img {
  /* max-width: -webkit-fill-available; */
  max-width: 75%;
}
hr {
  border-width: 2px !important;
}
</style>