<template>
    <!--Subscribe-->
    <div class="container px-4">
        <div class="font-sans bg-white rounded-lg shadow-md p-4 text-center">
            <h2 class="break-normal text-xl md:text-3xl">Subscribe to my Newsletter</h2>
            <h3 class="break-normal font-normal text-grey-dark text-sm md:text-base">Get the latest posts delivered
                right to your inbox</h3>
            <div class="w-full text-center pt-4">
                <form action="#">
                    <div class="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
                        <input type="email" placeholder="youremail@example.com"
                               class="flex-1 mt-4 appearance-none border border-grey-light rounded shadow-md p-3 text-grey-dark mr-2 focus:outline-none">
                        <button type="submit"
                                class="flex-1 mt-4 block md:inline-block appearance-none bg-teal text-white text-base font-semibold tracking-wide uppercase py-4 rounded shadow hover:bg-teal-light">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /Subscribe-->
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: "Subscribe"
    })
    export default class Subscribe extends Vue {

    }
</script>

<style scoped>

</style>
