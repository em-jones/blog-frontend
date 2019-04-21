<template>
  <Container>
    About
  </Container>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Container from '@/components/Container.vue';
  const components = {Container};
  @Component({
    components
  })
  export default class About extends Vue {

  }
</script>
