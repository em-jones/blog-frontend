<template>

</template>

<script lang="ts">

    const header = document.getElementById("header")!;
    const navcontent = document.getElementById("nav-content")!;
    import {Vue, Component} from 'vue-property-decorator';
    import GlobalEvents from 'vue-global-events';
    @Component({
        name: "AligatorProgress",
        components: {
            GlobalEvents
        }
    })
    export default class AligatorProgress extends Vue {
        public scroll: number = 0;

    }
</script>

<style scoped>

</style>
