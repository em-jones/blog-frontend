<template>
    <div class="container w-full md:max-w-xl mx-auto pt-20">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: "Container"
    })
    export default class Container extends Vue {

    }
</script>

<style scoped>

</style>
