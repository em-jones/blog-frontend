<template>
    <div class="container">
        <div class="container text-center">
            <i :class="`devicon-${icon}`"></i>
            {{category}}
        </div>
        <div class="container max-w-xl mx-auto text-center flex flex-wrap items-start md:flex-no-wrap">
            <PostStub v-for="post in posts" :post="post"></PostStub>
        </div>
    </div>

</template>

<script lang="ts">

    import {Component, Prop, Vue} from 'vue-property-decorator';
    import PostStub from '@/components/PostStub.vue';
    import {Getter} from 'vuex-class';
    import {s} from '@/symbols';
    import {PostModel} from '@/lib/models/PostModel';
    import VueIcon from '@/components/Icons/VueIcon.vue';
    import {PostCategory} from '@/lib/CmsService';

    @Component({
        name: 'PostStubs',
        components: {PostStub, VueIcon}
    })
    export default class PostStubs extends Vue {
      @Prop() topic!: PostCategory;
      @Getter(s.posts.listByCategory) postsByTopic!: (categoryId: number) => PostModel[];

      get posts(): PostModel[] {
        return this.postsByTopic(this.topic.id);
      }
    }
</script>

<style scoped>

</style>
