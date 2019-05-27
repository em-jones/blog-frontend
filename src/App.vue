import {Template} from './store';
<template>
  <div id="app" :class="templateClass">
    <NavBar></NavBar>
    <router-view/>
    <Foot></Foot>
  </div>
</template>
<script lang="ts">

  import {Component} from 'vue-property-decorator';
  import Vue from 'vue';
  import {Getter} from 'vuex-class';
  import {Template} from '@/store';
  import {s} from '@/symbols';


  @Component({})
  export default class App extends Vue {
    @Getter(s.app.template) template!: Template;

    get templateClass(): string {
      return this.template === Template.ACCESSIBLE ? 'template-accessible' : 'template-base';
    }

    mounted() {
      // todo- trigger for accessibility   this.$store.commit(s.app.template, this.template === Template.ACCESSIBLE ? Template.BASE : Template.ACCESSIBLE);
    }
  }
</script>
<style>
@import 'assets/styles/tailwind.postcss';
@import '~highlight.js/styles/github.css';
@import "assets/fonts/kit/stylesheet.css";
@import 'assets/styles/styles.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
