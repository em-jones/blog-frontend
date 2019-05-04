<template>
    <div @click="nav()" class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
        <img src="http://placehold.it/640x480.jpg" class="mb-6"/>

        <h2 class="text-2xl mb-2">Ut enim ad minim veniam officia deserunt</h2>
        <p class="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.</p>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        name: "PostStub"
    })
    export default class PostStub extends Vue {
        @Prop() id!: number;

        nav() {
            this.$router.push(`/post/${this.id}`);
        }
    }
</script>

<style scoped>

</style>
