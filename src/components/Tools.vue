<template>
  <div class="tools row" id="tools">
    <!-- TODO add links to tools for quick viewing, instead of cluttering up the component with text -->
    <div class="col-10 mx-auto bg-light text-dark text-center mt-5 pt-3 pb-5" data-aos="fade-up" data-aos-duration="800">
      <h2 class="m-0">Languages and Tools</h2>
      <div class="row d-flex justify-content-center">
        <div class="col-3 col-md-1 mb-5">
          <hr class="border border-dark" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6 col-sm-2 pb-2">
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
          <img src="~@/assets/CSS.png" alt="CSS" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML" target="_blank">
          <img src="~@/assets/html.png" alt="HTML" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://vuejs.org/" target="_blank">
          <img src="~@/assets/Vue.png" alt="Vue" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://getbootstrap.com/" target="_blank">
          <img src="~@/assets/bootstrap.png" alt="Bootstrap" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" target="_blank">
          <img src="~@/assets/JavaScript.png" alt="JavaScript" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://www.mongodb.com/" target="_blank">
          <img src="~@/assets/mongodb.png" alt="Mongo DB" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://nodejs.org/en/" target="_blank">
          <img src="~@/assets/node.png" alt="Node JS" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank">
          <img src="~@/assets/csharp.png" alt="C#" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration" target="_blank">
          <img src="~@/assets/sharepoint.png" alt="SharePoint" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://azure.microsoft.com/en-us/" target="_blank">
          <img src="~@/assets/azure-logo.png" alt="Azure" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://www.mysql.com/" target="_blank">
          <img src="~@/assets/mySQL.png" alt="MySQL" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://code.visualstudio.com/" target="_blank">
          <img src="~@/assets/visual-studio-code.png" alt="Visual Studio Code" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://visualstudio.microsoft.com/" target="_blank">
          <img src="~@/assets/visual-studio.png" alt="Visual Studio" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://github.com/" target="_blank">
          <img src="~@/assets/github-logo.png" alt="Github" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://git-scm.com/" target="_blank">
          <img src="~@/assets/git.png" alt="Git" />
          </a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="https://docs.microsoft.com/en-us/dotnet/core/about" target="_blank">
          <img src="~@/assets/dotnet-core.png" alt="Dotnet Core" />
          </a>
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

a {
  text-decoration: none;
}
</style>
