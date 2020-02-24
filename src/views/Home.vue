<template>
  <div class="home container-fluid">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <page-top />
    <about />
    <contact />
  </div>
</template>

<script>
import PageTop from "@/components/PageTop";
import About from "@/components/About";
import Contact from "@/components/ContactMe";
export default {
  name: "Home",
  components: {
    PageTop,
    About,
    Contact
  }
};
</script>
<style>
</style>
