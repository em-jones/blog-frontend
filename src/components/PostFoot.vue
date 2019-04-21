<template>
    <!--Next & Prev Links-->
    <div class="font-sans flex justify-between content-center px-4 pb-12">
        <div class="text-left">
            <span class="text-xs md:text-sm font-normal text-grey-dark">&lt; Previous Post</span><br>
            <p><a href="#" class="break-normal text-base md:text-sm text-teal font-bold no-underline hover:underline">Blog title</a></p>
        </div>
        <div class="text-right">
            <span class="text-xs md:text-sm font-normal text-grey-dark">Next Post &gt;</span><br>
            <p><a href="#" class="break-normal text-base md:text-sm text-teal font-bold no-underline hover:underline">Blog title</a></p>
        </div>
    </div>
</template>

<script type="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component({
        name: "PostFoot"
    })
    export default class PostFoot extends Vue {

    }
</script>

<style scoped>

</style>
