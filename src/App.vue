<template>
  <div>
    <!-- Header -->
    <section class="pv5">
      <div class="container bb b--light-gray">
        <h1 class="f1 b mb2">jrttk.</h1>
        <p>Designer & Developer based in Bangkok, Thailand</p>
      </div>
    </section>

    <!-- Hero -->
    <section class="mb6">
      <div class="container">
        <h1 class="f-headline lh-solid mb5">
          Art
          <br />+
          <br />Technology
        </h1>
        <p>Greetings, I am Jirattikarn a UI/UX Designer and a Full-Stack Developer based in Bangkok, Thailand. I'm also a design student who studying Digital Communication Design at Silpakorn University International College.</p>
        <div>
          <a href="mailto:jirattikarn@mailbox.org" class="button">Drop me an email</a>
        </div>
      </div>
    </section>

    <hr class="mb6" />

    <!-- Feature Product -->
    <section class="mb6">
      <div class="container">
        <h1 class="f1 b mb5">Featured Products</h1>
        <div class="row">
          <div class="col-md-6 grow mb4-ns">
            <a href="https://www.producthunt.com/posts/inko-2">
              <div class="card">
                <img src="./assets/images/inko-logo.png" alt class="product-logo mb4" />
                <h1 class="f2 b mb2">Inko.</h1>
                <p class="mb0">An online Markdown Editor built with Vue.js</p>
              </div>
            </a>
          </div>
          <div class="col-md-6 grow">
            <a href="https://www.producthunt.com/posts/couleur">
              <div class="card">
                <img src="./assets/images/couleur-logo.jpg" alt class="product-logo mb4" />
                <h1 class="f2 b mb2">Couleur</h1>
                <p class="mb0">A simple app to help you remember colour palettes</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="pv4 f4">
      <div class="container">Copyright {{ new Date().getFullYear() }} Jirattikarn Phasugmool</div>
    </footer>
  </div>
</template>

<script>
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>