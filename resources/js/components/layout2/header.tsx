
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Link } from '@inertiajs/react';
import { TbBrandLaravel   } from "react-icons/tb";
import { UserNav } from "@/components/user-nav";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed inset-x-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
            <nav className="flex h-16 items-center justify-between px-4">
                <Link
                    href={route('dashboard')}
                    className="hidden items-center justify-between gap-2 md:flex"
                >
                    <TbBrandLaravel className="h-6 w-6" />
                    <h1 className="text-lg font-semibold">Laravel</h1>
                </Link>
                <div className={cn("block md:!hidden")}>
                    <MobileSidebar />
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <UserNav user={{ name: "John Doe", image: null, email: "" }} />

                    <Button size="sm">
                        Sign In
                    </Button>

                </div>
            </nav>
        </div>
    );
}
