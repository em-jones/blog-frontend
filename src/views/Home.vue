<template>
  <!--Container-->
  <div>
    <Hero>
      <div class="container max-w-xl mx-auto text-center">
        <h1 class="text-2xl md:text-4xl text-center text-grey-lightest mb-3 ">Buzz 2.0.1</h1>
        <p class="text-md md:text-lg text-center text-white ">Agravic</p>

        <router-link to="portfolio" class="mt-6 inline-block bg-white text-black no-underline px-4 py-3 shadow-lg">
          Projects
        </router-link>
      </div>
    </Hero>
    <!-- /hero -->

    <!-- home content -->
    <div class="w-full px-6 py-12 bg-white">
      <div class="container max-w-xl mx-auto text-center pb-10">

        <h3 class="text-3xl md:text-4xl text-center max-w-md mx-auto text-grey-darkest mb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h3>

        <a href="#" class="bg-black text-white px-4 py-3 no-underline">Browse our products</a>

      </div>

      <div class="container max-w-xl mx-auto text-center flex flex-wrap items-start md:flex-no-wrap">

        <PostStub :id="2"></PostStub>

      </div>
    </div>
    <div class="w-full px-6 py-12 bg-white">
      <div class="container max-w-xl mx-auto text-center pb-10">

        <h3 class="text-3xl md:text-4xl text-center max-w-md mx-auto text-grey-darkest mb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h3>

        <a href="#" class="bg-black text-white px-4 py-3 no-underline">Browse our products</a>

      </div>

      <div class="container max-w-xl mx-auto text-center flex flex-wrap items-start md:flex-no-wrap">

        <div class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
          <img src="http://placehold.it/640x480.jpg" class="mb-6"/>

          <h2 class="text-2xl mb-2">Ut enim ad minim veniam officia deserunt</h2>
          <p class="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.</p>
        </div>

        <div class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
          <img src="http://placehold.it/640x480.jpg" class="mb-6"/>

          <h2 class="text-2xl mb-2">Ut enim ad minim veniam officia deserunt</h2>
          <p class="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.</p>
        </div>

        <div class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
          <img src="http://placehold.it/640x480.jpg" class="mb-6"/>

          <h2 class="text-2xl mb-2">Ut enim ad minim veniam officia deserunt</h2>
          <p class="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.</p>
        </div>

      </div>
    </div>

  </div>
  <!--/container-->
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Container from "@/components/Container.vue";
  import {EVENTS} from "@/store";
  import Hero from "@/components/Hero.vue";
  import PostStub from "@/components/PostStub.vue";

  @Component({
  components: {
    Container, Hero, PostStub
  },
})
  export default class Home extends Vue {
    mounted() {
      this.$store.commit(EVENTS.LOADED.HOME);
    }
  }
</script>
