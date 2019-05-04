import {PostModel} from '@/lib/models/PostModel';
import {Observable} from 'rxjs';
import {Response} from '@/plugins';
import {ajaxGetJSON} from 'rxjs/internal-compatibility';

const CMS_URL = 'http://34.74.167.175/api';

export enum CMS_API {
    POSTS = '/blog/posts',
    POST_CATEGORIES = '/blog/categories',
    TAGS = '/portfolio/tags',
    ITEMS = '/portfolio/items',
    PORTFOLIO_CATEGORIES = '/portfolio/categories',
}

export interface Category {
    id: number;
    name: string;
    description: null;
    created_at: string;
    updated_at: string;
    slug: string;
}

export interface PostCategory extends Category {
    parent_id: number;
    nest_left: number;
    nest_right: number;
    nest_depth: number;
}

export interface Tag {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Item {
    id: number;
    category_id: number;
    title: string;
    description: string;
    url: string;
    created_at: string;
    updated_at: string;
    slug: string;
    video_url: string;
}

const getCmsResource: <T>(uri: string) => Observable<Response<T>>
    = <T>(uri: string) => ajaxGetJSON<Response<T>>(`${CMS_URL}${uri}`);

export class CmsService {
    public getPosts: () => Observable<Response<PostModel[]>> = () => getCmsResource<PostModel[]>(CMS_API.POSTS);
    public getPortfolioCategories: () => Observable<Response<Category[]>> =
        () => getCmsResource<Category[]>(CMS_API.PORTFOLIO_CATEGORIES);
    public getPostCategories: () => Observable<Response<PostCategory[]>>
        = () => getCmsResource<PostCategory[]>(CMS_API.POST_CATEGORIES);
    public getTags: () => Observable<Response<Tag[]>>
        = () => getCmsResource<Tag[]>(CMS_API.TAGS);
    public getPortfolioItems: () => Observable<Response<Item[]>>
        = () => getCmsResource<Item[]>(CMS_API.ITEMS);
}

export const cmsService = new CmsService();
