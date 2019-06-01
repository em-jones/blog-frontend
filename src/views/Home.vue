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
      <PostStubs v-for="topic in topics" :topic="topic"></PostStubs>
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
  import {Category} from '@/lib/settings';
  import {PostCategory} from '@/lib/CmsService';

  const components = {
    Container, Hero, PostStubs, CenteredQuote,
  };
  @Component({
    components
  })
  export default class Home extends Vue {
    @Getter(s.app.version) version!: number | string;
    @Getter(s.topics.posts.get) topics!: PostCategory[];
    mounted() {
      this.$store.commit(EVENTS.LOADED.HOME);
    }
  }
</script>
