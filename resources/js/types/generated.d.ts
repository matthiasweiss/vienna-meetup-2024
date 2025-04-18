declare namespace App.Data {
    export type DashboardData = {
        latestPosts: Array<App.Data.PostData>;
        feed: null | App.Data.FeedData;
    };
    export type FeedData = {
        posts: Array<App.Data.PostData>;
    };
    export type PostData = {
        id: number;
        content: string;
        creator: App.Data.UserData;
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
}
