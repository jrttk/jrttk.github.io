<template>
  <section class="mb6 pb6 bb b--light-gray">
    <div class="container">
      <h1 class="f1 b mb5" data-sal="slide-up" data-sal-delay="100">Featured Products</h1>
      <div class="row">
        <div class="col-md-6 grow mb4-ns" data-sal="slide-up" data-sal-delay="200">
          <a href="https://www.producthunt.com/posts/inko-2">
            <div class="card">
              <img src="@/assets/images/inko-logo.png" alt class="product-logo mb4" />
              <h1 class="f2 b mb2">Inko.</h1>
              <p class="mb0">An online Markdown Editor built with Vue.js</p>
            </div>
          </a>
        </div>
        <div class="col-md-6 grow" data-sal="slide-up" data-sal-delay="300">
          <a href="https://www.producthunt.com/posts/couleur">
            <div class="card">
              <img src="@/assets/images/couleur-logo.jpg" alt class="product-logo mb4" />
              <h1 class="f2 b mb2">Couleur</h1>
              <p class="mb0">A simple app to help you remember colour palettes</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>