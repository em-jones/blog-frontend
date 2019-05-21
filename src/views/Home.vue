<template>
  <!--Container-->
  <div>
    <Hero>
      <div class="container max-w-xl mx-auto text-center">
        <h1 class="text-2xl md:text-4xl text-center text-black mb-3 ">Buzz {{version}}</h1>
        <p class="text-l md:text-lg text-center text-black ">A Dev blog - lite</p>
      </div>
    </Hero>
    <!-- /hero -->

    <!-- home content -->
    <div class="w-full px-6 py-12 bg-white">
      <div class="container max-w-xl mx-auto text-center pb-10">
        <router-link to="portfolio" class="bg-black text-white px-4 py-3 no-underline">Portfolio</router-link>
      </div>
      <CenteredQuote></CenteredQuote>
      <PostStubs topic="js"></PostStubs>
      <PostStubs topic="vue"></PostStubs>
      <PostStubs topic="angular"></PostStubs>
      <PostStubs topic="react"></PostStubs>
    </div>
    <div class="w-full px-6 py-12 bg-white">

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
  import {Component, Vue} from 'vue-property-decorator';
  import Container from '@/components/Container.vue';
  import Hero from '@/components/Hero.vue';
  import {EVENTS} from '@/events';
  import CenteredQuote from '@/components/CenteredQuote.vue';
  import PostStubs from '@/components/PostStubs.vue';
  import {Getter} from 'vuex-class';
  import {s} from '@/symbols';

  @Component({
    components: {
      Container, Hero, PostStubs, CenteredQuote,
    },

  })
  export default class Home extends Vue {
    @Getter(s.app.version) version!: number | string;
    mounted() {
      this.$store.commit(EVENTS.LOADED.HOME);
    }
  }
</script>
