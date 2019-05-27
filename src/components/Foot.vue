<template>
    <footer class="bg-white border-t border-grey-light shadow">
        <div class="container max-w-md mx-auto flex py-8">

            <div class="w-full mx-auto flex flex-wrap">
                <div class="flex w-full md:w-1/2 ">
                    <div class="px-8">
                        <h3 class="font-bold text-black">About</h3>
                        <p class="py-4 text-grey-dark text-sm" v-html="about">
                        </p>
                    </div>
                </div>

                <div class="flex w-full md:w-1/2">
                    <div class="px-8">
                        <h3 class="font-bold text-black">Social</h3>
                        <ul class="list-reset items-center text-sm pt-3">
                            <li>
                                <a class="inline-block text-grey-dark no-underline hover:text-black hover:text-underline py-1"
                                   href="https://www.github.com/emgjones"> <i class="devicon-git-plain"
                                                                              style="font-size: 1.4rem;"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    </footer>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    const data = () => ({
        about: 'For inquiries, please call <div><a href=”tel:+19139615921″>+1 (913) 961 - 5921</a></div> or email <div><a href="mailto:em@agiantagravic.com">em@agiantagravic.com</a></div>'
    });
    @Component({
        data
    })
    export default class Foot extends Vue {

    }
</script>

<style scoped>

</style>
