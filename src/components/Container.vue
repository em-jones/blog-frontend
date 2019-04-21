<template>
    <div class="container w-full md:max-w-md mx-auto pt-20">
        <slot></slot>
    </div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator';

    @Component({
        name: "Container"
    })
    export default class Container extends Vue {

    }
</script>

<style scoped>

</style>
