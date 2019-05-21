<template>
    <div class="container max-w-xl mx-auto text-center pb-10">

        <h3 class="text-3xl md:text-4xl text-center max-w-md mx-auto text-grey-darkest mb-12">
            {{quote}}
        </h3>
        <h4 class="text-2xl md:text-1xl text-center max-w-md mx-auto text-grey-darkest mb-12">
            - {{ author }}
        </h4>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'CenteredQuote'
    })
    export default class CenteredQuote extends Vue {
        quote: string = 'Any sufficiently advanced technology is indistinguishable from magic.';
        author: string = 'Arthur C. Clark';
    }
</script>

<style scoped>

</style>
