import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'laravel-precognition-react-inertia';

export function CreatePostForm() {
    const form = useForm<App.Data.StorePostData>('post', route('posts.store'), {
        content: '',
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                if (form.hasErrors) {
                    return;
                }

                form.submit({
                    preserveScroll: true,
                    onSuccess: () => form.reset(),
                });
            }}
            className="space-y-4"
        >
            <div className="grid gap-2">
                <Label htmlFor="content">New Post</Label>

                <Input
                    id="content"
                    value={form.data.content}
                    onChange={(e) => {
                        form.setData('content', e.target.value);
                        form.forgetError('content');
                    }}
                    onBlur={() => {
                        form.validate('content');
                    }}
                    required
                    autoComplete="content"
                    className="w-full"
                    placeholder="Your post content goes here"
                />

                <InputError message={form.errors.content} />
            </div>

            <Button type="submit">Create post</Button>
        </form>
    );
}
