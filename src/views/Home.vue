<template>
  <div class="home container-fluid bg-light">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <page-top />
    <about />
    <tools />
    <github />
    <contact />
  </div>
</template>

<script>
import PageTop from "@/components/PageTop";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Github from "@/components/Github";
import Contact from "@/components/ContactMe";
export default {
  name: "Home",
  components: {
    PageTop,
    About,
    Tools,
    Github,
    Contact
  }
};
</script>
<style></style>
