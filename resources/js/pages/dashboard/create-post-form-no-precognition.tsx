import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from '@inertiajs/react';

export function CreatePostFormNoPrecognition() {
    const { data, post, reset, processing, errors, setData } = useForm<App.Data.StorePostData>({
        content: '',
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                post(route('posts.store'), {
                    onSuccess: () => reset(),
                });
            }}
            className="space-y-4"
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="content" className="mb-2 font-semibold">
                    New Post
                </label>

                <Input
                    id="content"
                    value={data.content}
                    onChange={(e) => {
                        setData('content', e.target.value);
                    }}
                    required
                    autoComplete="content"
                    className="w-full"
                    placeholder="What's up?"
                />

                <InputError className="mt-2" message={errors.content} />
            </div>

            <Button type="submit" disabled={processing}>
                Create post
            </Button>
        </form>
    );
}
