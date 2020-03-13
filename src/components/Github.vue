<template>
  <div class="github row" id="github">
    <div class="col-12 bg-dark text-light text-center mt-5 pt-3 pb-5">
      <h2 class="m-0">Showcase</h2>
      <div class="row d-flex justify-content-center">
        <div class="col-3 col-md-1">
          <hr class="border border-light" />
        </div>
      </div>
      <div class="row">
        <div class="col-10 mx-auto col-sm-6 col-md-4">
          <div
            class="card text-dark border-dark"
            style="width: 100%; height: 100%"
          >
            <img
              src="~@/assets/wild_cards.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Wild Cards</h5>
              <p class="card-text text-left">
                Wild Cards allows users to make their own basic virtual card
                game. Users can create cards, which are put together in a deck
                that has its own set of written rules provided by the user. A
                user can pick public decks to use that deck with another player.
                Players have an area to draw and play cards, as well as their
                own hand.
              </p>
              <p class="font-italic card-text text-left">
                Environment: HTML, CSS, Bootstrap, Vue, Node, MongoDB
              </p>
            </div>
            <div class="card-footer">
              <a
                href="https://wild-cards.herokuapp.com/"
                target="_blank"
                class="btn btn-dark"
                >Take a look</a
              >
            </div>
          </div>
        </div>
        <div class="col-10 mx-auto col-sm-6 col-md-4">
          <div
            class="card text-dark border-dark"
            style="width: 100%; height: 100%"
          >
            <img src="~@/assets/keepr.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Keepr</h5>
              <p class="card-text text-left">
                Similar to social media apps such as Pinterest, Keepr allows
                users to share public keeps on the home page. Registered users
                may create keeps, as well as create vaults to hold keeps. Keeps
                may be removed from vaults, and users can delete their vaults
                and keeps.
              </p>
              <p class="font-italic card-text text-left">
                Environment: HTML, CSS, Bootstrap, Vue, C#, MySQL, Gearhost
              </p>
            </div>
            <div class="card-footer">
              <a
                href="https://keepr-v.herokuapp.com"
                target="_blank"
                class="btn btn-dark"
                >Try it out</a
              >
            </div>
          </div>
        </div>
        <div class="col-10 mx-auto col-sm-6 col-md-4">
          <div
            class="card text-dark border-dark"
            style="width: 100%; height: 100%"
          >
            <img
              src="~@/assets/nabnak placeholder.png"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body">
              <h5 class="card-title">Nabnak</h5>
              <p class="card-text text-left">
                Nabnak is a full-stack application that allows users to create
                boards which hold a variety of lists. Each list can hold tasks
                with notes to organize user's content, from household chores to
                preparing for social events.
              </p>
              <p class="font-italic card-text text-left">
                Environment: HTML, CSS, Bootstrap Vue, Node, MongoDB
              </p>
            </div>
            <div class="card-footer">
              <a
                href="https://nabnak.herokuapp.com"
                target="_blank"
                class="btn btn-dark"
                >Try it out here</a
              >
              <!-- <button class="btn btn-dark disabled">Coming soon</button> -->
            </div>
          </div>
        </div>
      </div>
      <h2 class="m-0 pt-5">
        Check out my other projects and repositories on Github!
      </h2>
      <div class="row d-flex justify-content-center">
        <div class="col-3 col-md-1">
          <hr class="border border-light" />
        </div>
      </div>
      <a
        class="btn btn-light text-dark"
        href="https://github.com/BenjaminNewitt"
        target="_blank"
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
