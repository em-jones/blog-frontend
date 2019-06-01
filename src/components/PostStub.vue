<template>
    <div @click="nav()" class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
        <h2 class="text-2xl mb-2">{{ post.title }}</h2>
        <p class="mt-3 mx-auto text-sm leading-normal">{{post.slug}}</p>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {PostModel} from '@/lib/models/PostModel';

    @Component({
        name: "PostStub"
    })
    export default class PostStub extends Vue {
      @Prop() post!: PostModel;
        nav() {
          this.$router.push(`/post/${this.post.id}`);
        }
    }
</script>

<style scoped>

</style>
