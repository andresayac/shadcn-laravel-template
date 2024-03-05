// Libraries
import { useState, PropsWithChildren, ReactNode, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { cn } from "@/lib/utils";

// Types
import { User } from '@/types';

// Components
import { Button, buttonVariants } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ThemeToggle } from "@/components/theme-toggle";
import { SideNav } from "@/components/side-nav";
import { UserAvatar } from "@/components/user-avatar";
import ApplicationLogo from '@/components/application-logo';

// Constants
import { NavItems } from "@/constants/side-nav";

// Hooks
import { useSidebar } from "@/hooks/useSidebar";

// Icons
import { BsArrowLeftShort } from "react-icons/bs";
import { TbLogout, TbUserEdit, TbMenu2 } from "react-icons/tb";


export default function Authenticated({ user,  children }: PropsWithChildren<{ user: User}>) {
    const { isOpen, toggle } = useSidebar();
    const [status, setStatus] = useState(false);

    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const handleToggle = () => {
        setStatus(true);
        toggle();
        setTimeout(() => setStatus(false), 500);
    };

    return (
        <>
            <div className="supports-backdrop-blur:bg-background/60 fixed inset-x-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
                <nav className="flex h-16 items-center justify-between px-4">
                    <Link
                        href={route('dashboard')}
                        className="hidden items-center justify-between gap-2 md:flex"
                    >
                        <ApplicationLogo className="block h-9 w-auto fill-current text-primary" />
                    </Link>
                    <div className={cn("block md:!hidden")}>
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <div className="flex items-center justify-center gap-2">
                                    <TbMenu2  size={28}/>
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-primary" />
                                </div>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-72">
                                <div className="px-1 py-6 pt-16">
                                    <SideNav items={NavItems} setOpen={setOpen} />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <UserAvatar
                                    user={{
                                        name: user.name ?? '',
                                        image: user.image ?? ''
                                    }}
                                    className="h-8 w-8 cursor-pointer"
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <div className="flex items-center justify-start gap-4 p-2">
                                    <div className="flex flex-col space-y-1 leading-none">
                                        {user.name && <p className="font-medium">{user.name}</p>}
                                        {user.email && (
                                            <p className="w-[200px] truncate text-sm text-zinc-700">
                                                {user.email}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link
                                        href={route('profile.edit')}
                                        className={`w-full ${buttonVariants({ variant: "ghost" })}`}
                                        as="button"
                                    >
                                        <TbUserEdit className="mr-2 h-4 w-4" aria-hidden="true" />
                                        Edit Profile
                                    </Link>

                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link
                                        href={route('logout')}
                                        className={`w-full ${buttonVariants({ variant: "ghost" })}`}
                                        method="post"
                                        as="button">
                                        <TbLogout className="mr-2 h-4 w-4" aria-hidden="true" />
                                        Log Out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </nav>
            </div>
            <div className="flex h-screen border-collapse overflow-hidden">
                <nav
                    className={cn(
                        `relative hidden h-screen border-r pt-20 md:block`,
                        status && "duration-500",
                        isOpen ? "w-72" : "w-[78px]"
                    )}
                >
                    <BsArrowLeftShort
                        className={cn(
                            "absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
                            !isOpen && "rotate-180"
                        )}
                        onClick={handleToggle}
                    />
                    <div className="space-y-4 py-4">
                        <div className="px-3 py-2">
                            <div className="mt-3 space-y-1">
                                <SideNav
                                    className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
                                    items={NavItems}
                                />
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="flex-1 overflow-y-auto overflow-x-hidden bg-secondary/10 pb-1 pt-16">
                    <div className='container-md w-auto px-8 py-4'>
                        {children}
                    </div>
                </main>
            </div>
        </>
    );

}
