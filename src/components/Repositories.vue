<template>
  <section class="mb6">
    <div class="container">
      <h1 class="f1 b mb5" data-sal="slide-up" data-sal-delay="100">Repositories</h1>
      <template v-if="repos">
        <div
          class="grow mb4-ns"
          v-for="(val, i) in repos"
          :key="`repo-${i}`"
        >
          <a :href="val.svn_url" target="_blank">
            <div class="card">
              <h1 class="f2 b mb2">{{ val.name }}</h1>
              <p class="mb0">{{ val.description }}</p>
            </div>
          </a>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";

@Component()
export default class Repositories extends Vue {
  repos = null;

  async created() {
    let { data } = await this.$axios.get(
      "https://api.github.com/users/jrttk/repos"
    );
    this.repos = data;
  }
}
</script>