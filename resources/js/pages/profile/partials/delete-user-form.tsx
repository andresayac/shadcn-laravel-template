import { useRef, useState, FormEventHandler } from 'react';
import InputError from '@/components/input-error';
import { useForm } from '@inertiajs/react';


import {
    Card,
    CardDescription,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"

export default function DeleteUserForm({ className = '' }: { className?: string }) {
    const passwordInput = useRef<HTMLInputElement>();


    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        reset();
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Delete Account</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mb-4 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="destructive">Delete Account</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Delete Account</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            Once your account is deleted, all of its resources and data will be permanently deleted. Before
                            deleting your account, please download any data or information that you wish to retain.
                        </DialogDescription>
                        <form onSubmit={deleteUser} className="space-y-6">
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    ref={passwordInput}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="mt-1 block w-full"
                                    isFocused
                                    placeholder="Password"
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <DialogFooter>
                                <Button variant='destructive' disabled={processing} onClick={closeModal}>Delete Account</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>


            </CardContent>
        </Card>
    );
}
