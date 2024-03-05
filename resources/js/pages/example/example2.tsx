import { Separator } from "@/components/ui/separator";
import AuthenticatedLayout from '@/layouts/authenticated-layout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Example02 = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Ejemplo 2" />

            <Card>
                <CardHeader>
                    <CardTitle>EJEMPLO 2</CardTitle>
                    <CardDescription>Bienvenido: {auth.user.name}</CardDescription>
                </CardHeader>
            </Card>
        </AuthenticatedLayout>

    );
};

export default Example02;
