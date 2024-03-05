import AuthenticatedLayout from '@/layouts/authenticated-layout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <Card>
                <CardHeader>
                    <CardTitle>DashBoard</CardTitle>
                    <CardDescription>Bienvenido: { auth.user.name }</CardDescription>
                </CardHeader>
            </Card>
        </AuthenticatedLayout>
    );
}
