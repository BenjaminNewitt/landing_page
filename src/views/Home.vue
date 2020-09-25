<template>
  <div class="home container-fluid bg-light">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <page-top />
    <about />
    <tools />
    <github />
    <published />
    <contact />
  </div>
</template>

<script>
import PageTop from "@/components/PageTop";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Github from "@/components/Github";
import Published from "@/components/PublishedSites";
import Contact from "@/components/ContactMe";
export default {
  name: "Home",
  components: {
    PageTop,
    About,
    Tools,
    Github,
    Published,
    Contact
  }
};
</script>
<style>

.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.1); }

</style>
