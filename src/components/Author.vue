<template>
    <!--Author-->
    <div class="flex w-full items-center font-sans px-4 py-12">
        <img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author">
        <div class="flex-1 px-2">
            <p class="text-base font-bold text-base md:text-xl leading-none mb-2">Jo Bloggerson</p>
            <p class="text-grey-dark text-xs md:text-base">Minimal Blog Tailwind CSS template by <a
                    class="text-teal no-underline hover:underline" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a>
            </p>
        </div>
        <div class="justify-end">
            <button class="bg-transparent border border-grey hover:border-teal text-xs text-grey hover:text-teal font-bold py-2 px-4 rounded-full">
                Read More
            </button>
        </div>
    </div>
    <!--/Author-->
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: "Author"
    })
    export default class Author extends Vue {

    }
</script>

<style scoped>

</style>
