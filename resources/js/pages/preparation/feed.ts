export type Feed = {
    posts: Array<{
        id: number;
        content: string;
        creator: App.Data.UserData;
        createdAt: string;
    }>;
};
