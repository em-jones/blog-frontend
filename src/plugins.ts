import {Store} from 'vuex';
import {EVENTS, RootState, s} from '@/store';
import {PostModel} from '@/lib/models/PostModel';
import {Category, cmsService, Item, PostCategory, Tag} from '@/lib/CmsService';

export interface Response<T> {
    status_code: number;
    message: string;
    data: T[];
}

export const pageLoad = (store: Store<RootState>) => {
    console.log('page load called');

    store.subscribe((mutation) => {
        const {type} = mutation;
        switch (type) {
            case EVENTS.LOADED.HOME || EVENTS.SHOW.POST:
                cmsService.getPosts().subscribe(({data}: Response<PostModel[]>) => {
                    store.commit(s.posts.success, data);
                });
                cmsService.getPostCategories().subscribe(({data}: Response<PostCategory[]>) => {
                    store.commit(s.posts.categories, data);
                });
                cmsService.getPortfolioCategories().subscribe(({data}: Response<Category[]>) => {
                    store.commit(s.portfolio.categories, data);
                });
                cmsService.getPortfolioItems().subscribe(({data}: Response<Item[]>) => {
                    store.commit(s.portfolio.item, data);
                });
                cmsService.getTags().subscribe(({data}: Response<Tag[]>) => {
                    store.commit(s.portfolio.tag, data);
                });
                break;
            default:
                break;
        }
    });
};
