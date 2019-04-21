<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<style>
@import 'assets/styles/tailwind.postcss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
