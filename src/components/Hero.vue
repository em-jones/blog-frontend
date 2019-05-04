<template>
    <div class="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative"
         style="background-image: url('http://placehold.it/1800x800');">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: "Hero"
    })
    export default class Hero extends Vue {

    }
</script>

<style scoped>

</style>
