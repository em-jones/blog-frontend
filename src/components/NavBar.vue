<template>
  <nav id="header" ref="header">
    <GlobalEvents
            @scroll="scrollEvent()"
    >
    </GlobalEvents>
    <div id="progress" ref="progress" class="h-1 z-20 pin-t"
         style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>

    <div class="w-full md:max-w-md mx-auto flex flex-wrap items-center justify-between mt-0 py-3">

      <div class="pl-4">
        <router-link to="/" class="text-black text-base no-underline hover:no-underline font-extrabold text-xl">
          Agravic Development
        </router-link>
        <span class="icon angular red"></span>
      </div>

      <div class="block lg:hidden pr-4">
        <button id="nav-toggle" @click="toggleNav()" class="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-teal appearance-none focus:outline-none">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      <div :class="[hidden ? 'hidden' : '',
      'w-full', 'flex-grow', 'lg:flex', 'lg:items-center',
      'lg:w-auto', 'lg:block', 'mt-2', 'lg:mt-0', 'bg-grey-lightest',
      'md:bg-transparent', 'z-20']" ref="navContent" id="nav-content">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li v-for="route in routes" :class="`mr-${routeCount}`">
            <router-link @click.native="toggleNav()" class="inline-block py-2 px-4 text-black font-bold no-underline" :to="route.path">
              {{route.alias}}
            </router-link>
          </li>
<!--          <li class="mr-3">-->
<!--            <a class="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>-->
<!--          </li>-->
        </ul>
      </div>
    </div>
  </nav>


  <!-- </script>-->
</template>

<script lang="ts">
  import {Route} from 'vue-router';
  import GlobalEvents from 'vue-global-events';
  import {Component, Prop, Vue} from 'vue-property-decorator';

  const h: any = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
  let scrollPosition = window.scrollY;
  @Component({
    components: {GlobalEvents},

  })
export default class NavBar extends Vue {
  @Prop() public msg!: string;
  public hidden: boolean = true;
  public scroll: number = 0;
  public routes: {name: string, path: string, alias: string}[] = [];

  toggleNav() {
    console.log('toggled');
    this.hidden = !this.hidden;
  };

  scrollEvent() {
    const header = this.$refs.header as Element;
    const navContent = this.$refs.navContent as Element;
    const progress = this.$refs.progress as HTMLElement;
    /*Refresh scroll % width*/
    this.scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    progress.style.setProperty('--scroll', this.scroll + '%');

    /*Apply classes for slide in bar*/
    scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
      header.classList.add("bg-white");
      header.classList.add("shadow");
      navContent.classList.remove("bg-grey-lightest");
      navContent.classList.add("bg-white");
    }
    else {
      header.classList.remove("bg-white");
      header.classList.remove("shadow");
      navContent.classList.remove("bg-white");
      navContent.classList.add("bg-grey-lightest");
    }
  }

  get routeCount(): number {
    return this.routes.length;
  }

  mounted() {
    this.routes = (this.$router as any).options.routes.filter((route: Route) => route.name !== 'post');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss">
nav {
  @apply fixed w-full z-10 pin-t;
}
</style>
