<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
    <a class="navbar-brand text-light" href="#">Benjamin Newitt</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link text-light" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#github">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#tools">Skills</a>
        </li>
        <!-- TODO add section for published sites -->
        <li class="nav-item">
          <a class="nav-link text-light" href="#contact-me">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 10;
}
</style>
