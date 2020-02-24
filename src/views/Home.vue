<template>
  <div class="home container-fluid">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="row">
      <div class="col-12 text-center splash-background">
        <!-- TODO align content of col with center of background image -->
        <h1 class="text-dark">Full Stack Software Developer</h1>
        <button class="btn btn-success">
          <h2>Learn More</h2>
        </button>
      </div>
    </div>
    <about />
    <contact />
  </div>
</template>

<script>
import About from "@/components/About";
import Contact from "@/components/ContactMe";
export default {
  name: "Home",
  components: {
    About,
    Contact
  }
};
</script>
<style scoped>
.splash-background {
  background-image: url(~@/assets/splash.jpg);
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 100%;
}
</style>
