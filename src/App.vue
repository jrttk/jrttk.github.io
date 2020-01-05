<template>
  <div class="pt5">
    <!-- Header -->
    <Header />

    <!-- Hero -->
    <Hero />

    <!-- Feature Product -->
    <Products />

    <!-- Repositories -->
    <Repositories />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
// Class Components
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Repositories from './components/Repositories'
import Footer from './components/Footer'

@Component({
  components: {
    Header,
    Hero,
    Products,
    Repositories,
    Footer
  }
})
export default class App extends Vue {}
</script>