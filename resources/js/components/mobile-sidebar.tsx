import { useState, useEffect } from "react";
import { TbMenu2 } from "react-icons/tb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideNav } from "@/components/side-nav";
import { NavItems } from "@/constants/side-nav";
import { NavItem } from "@/types";



export const MobileSidebar = () => {
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <div className="flex items-center justify-center gap-2">
                        <TbMenu2 />
                        <h1 className="text-lg font-semibold">T3 app template</h1>
                    </div>
                </SheetTrigger>
                <SheetContent side="left" className="w-72">
                    <div className="px-1 py-6 pt-16">
                        <SideNav items={NavItems as NavItem[]} setOpen={setOpen} />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};
