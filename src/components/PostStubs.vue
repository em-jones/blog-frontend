<template>
    <div class="container max-w-xl mx-auto text-center flex flex-wrap items-start md:flex-no-wrap">
        <VueIcon></VueIcon>
        <PostStub :id="2"></PostStub>
    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from 'vue-property-decorator';
    import PostStub from '@/components/PostStub.vue';
    import {Getter} from 'vuex-class';
    import {s} from '@/symbols';
    import {PostModel} from '@/lib/models/PostModel';
    import VueIcon from '@/components/Icons/VueIcon.vue';

    @Component({
        name: 'PostStubs',
        components: {PostStub, VueIcon}
    })
    export default class PostStubs extends Vue {
        @Prop() topicIds!: [];

        @Getter(s.topics.posts.get) postsByTopic!: PostModel[];
    }
</script>

<style scoped>

</style>
