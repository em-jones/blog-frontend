export interface PostModel {
    id: number;
    user_id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    content_html: string;
    published_at: null;
    published: boolean;
    created_at: string;
    updated_at: string;
    metadata: null;
    author_email: string;
    categories: string;
    post_user: PostUser;
    post_categories: any[];
}

export interface PostUser {
    id: number;
    first_name: string;
    last_name: string;
    login: string;
    email: string;
    permissions: string;
    is_activated: boolean;
    role_id: number;
    activated_at: null;
    last_login: string;
    created_at: string;
    updated_at: string;
    deleted_at: null;
    is_superuser: boolean;
}
