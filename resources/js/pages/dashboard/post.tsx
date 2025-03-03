import { formatRelativeDate } from '@/utils/format-relative-date';

type PostProps = {
    post: App.Data.PostData;
};

export function Post({ post: { creator, createdAt, content } }: PostProps) {
    return (
        <div>
            <div className="dark: flex justify-between gap-8 text-neutral-400 dark:text-neutral-500">
                <div>{creator.email}</div>
                <div>{formatRelativeDate(createdAt)}</div>
            </div>

            <div className="whitespace-pre">{content}</div>
        </div>
    );
}
