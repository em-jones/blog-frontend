import Vue from 'vue';
import Vuex from 'vuex';
import {PostModel} from '@/lib/models/PostModel';
import {pageLoad} from '@/plugins';
import {Category, Item, PostCategory, Tag} from '@/lib/CmsService';

export enum Page {
  HOME = '[Page] Home',
  POST = '[Page] Post',
  ABOUT = '[Page] About',
}

export interface RootState extends CmsData {
  page: number;
  postPerPage: number;
  currentPage?: Page;
  post: number;
}

export interface CmsData {
  blog: {
    posts: { [id: number]: PostModel[] };
    categories: { [id: number]: PostCategory };
  };
  portfolio: {
    items: { [id: number]: Item };
    tags: { [id: number]: Tag };
    categories: { [id: number]: Category };
  }
}

const state: RootState = {
  portfolio: {categories: {}, items: {}, tags: {}},
  blog: {posts: {}, categories: {}},
  page: 1,
  postPerPage: 1,
  post: 0,
};

export const s = {
  posts: {
    get: 'posts/get',
    success: 'posts/success',
    show: 'posts/show',
    categories: 'posts/categories',
  },
  portfolio: {
    categories: 'portfolio/categories/load',
    item: 'portfolio/items/load',
    tag: 'portfolio/tags/load',
  },
};

export const EVENTS = {
  LOADED: {
    HOME: 'loaded/home',
  },
  SHOW: {
    POST: 'show/post',
  },
  NAVIGATE: {
    ABOUT: 'navigate/about',
  },
};

Vue.use(Vuex);

export interface Pagination {
  page: number;
  size: number;

}

export default new Vuex.Store({
  state,
  mutations: {
    // init
    [s.posts.success](state, posts: PostModel[]) {
      posts.forEach((post: PostModel) => {
        Vue.set(state.blog.posts, post.id, post);
      });
    },
    [s.posts.categories](state, categories: PostCategory[]) {
      categories.forEach((category) => {
        Vue.set(state.blog.categories, category.id, category);
      });
    },
    [s.portfolio.tag](state, tags: Tag[]) {
      tags.forEach((tag) => {
        Vue.set(state.portfolio.tags, tag.id, tag);
      });
    },
    [s.portfolio.item](state, items: Item[]) {
      items.forEach((item) => {
        Vue.set(state.portfolio.items, item.id, item);
      });
    },
    [s.portfolio.categories](state, categories: Category[]) {
      categories.forEach((category) => {
        Vue.set(state.portfolio.tags, category.id, category);
      });
    },
    //
    [s.posts.get](state, paging: Pagination) {
      state.page = paging.page;
      state.postPerPage = paging.size;
    },
    // page navigation
    [EVENTS.LOADED.HOME](state) {
      state.currentPage = Page.HOME;
    },
    [EVENTS.SHOW.POST](state, post: number) {
      state.currentPage = Page.POST;
      state.post = post;
    },
    [EVENTS.NAVIGATE.ABOUT](state) {
      state.currentPage = Page.ABOUT;
    },
  },
  actions: {
  },
  plugins: [pageLoad],
  getters: {
    getPostById: ({blog}: RootState) => (postId: number) => {
      console.log(blog.posts);
      return blog.posts[postId];
    },
  },
});

