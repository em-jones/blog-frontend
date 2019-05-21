<template>
    <div class="text-base md:text-sm text-grey px-4 py-6">
        Tags:
        <router-link v-for="tag in tags" :to="`/tag/${tag.id}`"
                     class="text-base md:text-sm text-teal no-underline hover:underline">{{tag.name}}
        </router-link>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Tag} from '@/lib/CmsService';

    @Component({
        name: 'TagList',
    })
    export default class TagList extends Vue {
        @Prop()
        tags!: Tag[];
    }
</script>

<style scoped>

</style>
