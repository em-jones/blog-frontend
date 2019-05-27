<template>
    <Container>
        <div class="w-full px-4 md:px-6 text-xl text-grey-darkest leading-normal">

            <!--Title-->
            <div class="font-sans">
                <span class="text-base md:text-sm text-teal font-bold">&lt;</span>
                <router-link :to="previousLocation"
                             class="text-base md:text-sm text-teal font-bold no-underline hover:underline">
                    BACK TO {{ previousName }}
                </router-link>
                <h1 class="font-sans break-normal text-black pt-6 pb-2 text-3xl md:text-4xl">{{post.title}}</h1>
                <p class="text-sm md:text-base font-normal text-grey-dark">Published {{publishedText}}</p>
            </div>
            <div v-html="post.content_html"></div>
        </div>

        <!--Tags -->
        <TagList :tags="tags"></TagList>

        <!--Divider-->
        <hr class="border-b-2 border-grey-light mb-8 mx-4">


        <Subscribe></Subscribe>

        <Author></Author>
        <!--Divider-->
        <hr class="border-b-2 border-grey-light mb-8 mx-4">

        <PostFoot></PostFoot>
    </Container>
</template>

<script lang="ts">
    import {Tag} from '@/lib/CmsService';
    import {Component, Vue} from 'vue-property-decorator';
    import Container from '@/components/Container.vue';
    import PostFoot from '@/components/PostFoot.vue';
    import TagList from '@/components/TagList.vue';
    import Author from '@/components/Author.vue';
    import Subscribe from '@/components/Subscribe.vue';
    import {PostModel} from '@/lib/models/PostModel';
    import {EVENTS} from '@/events';
    import {Getter} from 'vuex-class';
    import {s} from '@/symbols';

    @Component({
        name: 'Post',
        components: {Container, PostFoot, TagList, Author, Subscribe}
    })
    export default class Post extends Vue {
        previousName = '';
        previousLocation = '';
        title = 'Welcome to Minimal Blog';
        publishedText = '19 February 2019';
        updatedText = '';
        content = '';
        tags: Tag[] = [];
        @Getter(s.posts.show) post!: PostModel;

        mounted() {
            const postId = this.$route.params.id;
            this.$store.dispatch(EVENTS.SHOW.POST, postId);
        }

        updated() {
            if (this.post.id) {
                document.querySelectorAll('pre code').forEach((block) => {
                    this.$hljs.highlightBlock(block);
                });
            }
        }

    }
</script>

<style scoped>

</style>
