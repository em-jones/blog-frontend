<template>
  <!--Container-->
  <Container>
    Home
  </Container>
  <!--/container-->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Container from '@/components/Container.vue'; // @ is an alias to /src

@Component({
  components: {
    Container
  },
})
export default class Home extends Vue {}
</script>
