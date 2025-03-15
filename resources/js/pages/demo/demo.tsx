import { Card, CardContent } from '@/components/ui/card';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { SharedData } from '@/types';
import { Head } from '@inertiajs/react';

type DemoProps = SharedData & {};

export default function Demo({ auth }: DemoProps) {
    return (
        <AppHeaderLayout>
            <Head title="Demo" />

            <div className="mt-8 w-full px-4">
                <h1 className="text-2xl">Demo</h1>
            </div>

            <div className="mx-auto grid w-full gap-8 p-4">
                <Card>
                    <CardContent>TODO: FORM</CardContent>
                </Card>

                <Card>
                    <CardContent className="grid gap-6">TODO: FEED</CardContent>
                </Card>
            </div>
        </AppHeaderLayout>
    );
}
