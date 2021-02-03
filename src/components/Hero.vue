<template>
  <section class="mb6 pb6 bb b--light-gray">
    <div class="container">
      <h1 class="f-headline lh-solid mb5" data-sal="slide-up" data-sal-delay="100">
        Art
        <br />+
        <br />Technology
      </h1>
      <p
        data-sal="slide-up"
        data-sal-delay="200"
        v-html="message"
      ></p>
      <div data-sal="slide-up" data-sal-delay="300">
        <a href="mailto:jirattikarn@mailbox.org" class="button">Drop me an email</a>
      </div>
    </div>
  </section>
</template>

<script>
import { Vue, Provide } from 'vue-property-decorator'
export default class Hero extends Vue {
    // data: {
    //     message: ``
    // }
    @Provide() message = `Greetings, I am Jirattikarn a UI/UX Designer, Full-Stack Developer & a dog lover based in Bangkok, Thailand. I'm also a design student studying Digital Communication Design at Silpakorn University International College and the co-founder at <a href="https://anotter.co">anotter.</a> a lovely small software house.`
}
</script>