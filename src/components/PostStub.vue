<template>
    <div @click="nav()" class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
        <h2 class="text-2xl mb-2">{{ title }}</h2>
        <p class="mt-3 mx-auto text-sm leading-normal">{{slug}}</p>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        name: "PostStub"
    })
    export default class PostStub extends Vue {
        @Prop() id!: number;
        @Prop() title!: string;
        @Prop() slug!: string;
        nav() {
            this.$router.push(`/post/${this.id}`);
        }
    }
</script>

<style scoped>

</style>
