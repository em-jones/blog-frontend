import Vue from 'vue';
import Vuex, {GetterTree} from 'vuex';
import {PostModel} from '@/lib/models/PostModel';
import {pageLoad, Response} from '@/plugins';
import {Category, cmsService, Item, PostCategory, Tag} from '@/lib/CmsService';
import {s} from '@/symbols';
import {EVENTS} from '@/events';

export enum Template {
    BASE,
    ACCESSIBLE,
}
export enum Page {
  HOME = '[Page] Home',
  POST = '[Page] Post',
  ABOUT = '[Page] About',
}

export interface RootState extends CmsData {
  app: {
    loaded: boolean;
  };
  page: number;
  postPerPage: number;
  currentPage?: Page;
    post: PostModel;
    template: Template;
    version: string;
}

export interface CmsData {
  blog: {
      posts: { [id: number]: PostModel };
    categories: { [id: number]: PostCategory };
  };
  portfolio: {
    items: { [id: number]: Item };
    tags: { [id: number]: Tag };
    categories: { [id: number]: Category };
  };
}

const state: RootState = {
  app: {
    loaded: false
  },
  portfolio: {categories: {}, items: {}, tags: {}},
  blog: {posts: {}, categories: {}},
  page: 1,
  postPerPage: 1,
    post: {
        id: -1,
        user_id: -1,
        content: '',
        author_email: '',
        categories: '',
        content_html: '',
        created_at: '',
        excerpt: '',
        metadata: null,
        post_categories: [],
        post_user: {
            id: -1,
            activated_at: null,
            created_at: '',
            deleted_at: null,
            email: '',
            first_name: '',
            is_activated: false,
            is_superuser: false,
            last_login: '',
            last_name: '',
            login: '',
            permissions: '',
            role_id: -1,
            updated_at: '',
        },
        published: false,
        published_at: null,
        slug: '',
        title: '',
        updated_at: '',
    },
    template: Template.BASE,
    version: '2.0.1',
};

export const getters: GetterTree<RootState, any> = {
    [s.posts.show]: ({post}: RootState) => {
        return post; // todo- implement placeholder post
    },
    [s.app.template]: (blogState: RootState) => {
        return blogState.template;
    },
    [s.app.version]: ({version}: RootState) => version,
  [s.topics.posts.get]: (blogState: RootState) => {
    return Object.values(blogState.blog.categories);
  },
  [s.posts.listByCategory]: (blogState: RootState) =>
    (categoryId: number) =>
      Object.values(blogState.blog.posts)
        .filter((post) => post.post_categories.map((category) => category.id).includes(categoryId)),
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
    [s.app.loaded](blogState) {
      Vue.set(blogState.app, 'loaded', true);
    },
    [s.posts.success](blogState, posts: PostModel[]) {
      posts.forEach((post: PostModel) => {
        Vue.set(blogState.blog.posts, post.id, post);
      });
    },
      [s.posts.categories](blogState, categories: PostCategory[]) {
      categories.forEach((category) => {
          Vue.set(blogState.blog.categories, category.id, category);
      });
    },
      [s.portfolio.tag](blogState, tags: Tag[]) {
      tags.forEach((tag) => {
          Vue.set(blogState.portfolio.tags, tag.id, tag);
      });
    },
      [s.portfolio.item](blogState, items: Item[]) {
      items.forEach((item) => {
          Vue.set(blogState.portfolio.items, item.id, item);
      });
    },
      [s.portfolio.categories](blogState, categories: Category[]) {
      categories.forEach((category) => {
          Vue.set(blogState.portfolio.tags, category.id, category);
      });
    },
    //
      [s.posts.get](blogState, paging: Pagination) {
          blogState.page = paging.page;
          blogState.postPerPage = paging.size;
      },

      [s.app.template](blogState, template: Template) {
          blogState.template = template;
      },
    // page navigation
      [EVENTS.LOADED.HOME](blogState) {
          blogState.currentPage = Page.HOME;
    },
      [EVENTS.SHOW.POST](blogState, post: PostModel) {
          blogState.currentPage = Page.POST;
          blogState.post = post;
    },
      [EVENTS.NAVIGATE.ABOUT](blogState) {
          blogState.currentPage = Page.ABOUT;
    },
  },
  actions: {
      [EVENTS.SHOW.POST](context, postId: number) {
          const post: PostModel | null = context.state.blog.posts[postId];
          if (post) {
              context.commit(EVENTS.SHOW.POST, post);
          } else {
              cmsService.getPost(postId).subscribe(({data}: Response<PostModel[]>) => {
                  context.commit(EVENTS.SHOW.POST, data[0]);
              });
          }
      },
  },
  plugins: [pageLoad],
    getters,
});


