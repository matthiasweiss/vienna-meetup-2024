import { Skeleton } from '@/components/ui/skeleton';

export function CardSkeleton() {
    const skeleton = (
        <div className="space-y-2">
            <div className="flex justify-between gap-4 text-neutral-400 dark:text-neutral-500">
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 w-32" />
            </div>

            <Skeleton className="h-4 flex-1" />
        </div>
    );

    return (
        <div className="flex flex-col gap-8">
            {skeleton}
            {skeleton}
            {skeleton}
        </div>
    );
}
