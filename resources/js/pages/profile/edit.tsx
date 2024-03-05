import AuthenticatedLayout from '@/layouts/authenticated-layout';
import DeleteUserForm from './partials/delete-user-form';
import UpdatePasswordForm from './partials/update-password-form';
import UpdateProfileInformationForm from './partials/update-profile-information-form';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Edit({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {
    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Profile" />

            <div className='overflow-hidden'>
                <div className='py-2'>
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>

                <div className='py-2'>
                    <UpdatePasswordForm className="max-w-xl" />
                </div>

                <div className='py-2'>
                    <DeleteUserForm className="max-w-xl" />
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
