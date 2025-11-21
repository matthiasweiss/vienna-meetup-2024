export type DashboardData = {
    latestPosts: Array<PostData>;
    feed: null | FeedData;
};
export type FeedData = {
    posts: Array<PostData>;
};
export type PostData = {
    id: number;
    content: string;
    creator: UserData;
    createdAt: string;
};
export type StorePostData = {
    content: string;
};
export type UserData = {
    id: number;
    email: string;
    name: string;
};
