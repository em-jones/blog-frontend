<template>
    <Container>
        <div class="w-full px-4 md:px-6 text-xl text-grey-darkest leading-normal" style="font-family:Georgia,serif;">

            <!--Title-->
            <div class="font-sans">
                <span class="text-base md:text-sm text-teal font-bold">&lt;</span>
                <router-link :to="previousLocation"
                             class="text-base md:text-sm text-teal font-bold no-underline hover:underline">
                    BACK TO {{ previousName }}
                </router-link>
                <h1 class="font-sans break-normal text-black pt-6 pb-2 text-3xl md:text-4xl">{{title}}</h1>
                <p class="text-sm md:text-base font-normal text-grey-dark">Published {{publishedText}}</p>
            </div>
            <div v-html="content"></div>
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
    import {EVENTS} from "@/store";
    import {Tag} from "@/lib/CmsService";
    import {Component, Vue} from "vue-property-decorator";
    import Container from "@/components/Container.vue";
    import PostFoot from "@/components/PostFoot.vue";
    import TagList from "@/components/TagList.vue";
    import Author from "@/components/Author.vue";
    import Subscribe from "@/components/Subscribe.vue";
    import {PostModel} from "@/lib/models/PostModel.ts";
    import {mapGetters} from "vuex";

    @Component({
        name: "Post",
        components: {Container, PostFoot, TagList, Author, Subscribe},
        methods: {
            ...mapGetters(["getPostById"])
        }
    })
    export default class Post extends Vue {
        previousName = "";
        previousLocation = "";
        title = "Welcome to Minimal Blog";
        publishedText = "19 February 2019";
        updatedText = "";
        content = "";
        tags: Tag[] = [];
        mounted() {
            const postId = this.$route.params.id; // todo
            this.$store.commit(EVENTS.SHOW.POST, postId);
            const post: PostModel = (this as any).getPostById()(postId);
            this.content = post.content_html;

        }
    }
</script>

<style scoped>

</style>
