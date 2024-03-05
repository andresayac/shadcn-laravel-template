import { Link, usePage } from '@inertiajs/react';
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/useSidebar";
import { buttonVariants } from "@/components/ui/button";
import { NavItem } from '@/types';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { RouteName } from 'ziggy-js';

interface SideNavProps {
    items: NavItem[];
    setOpen?: (open: boolean) => void;
    className?: string;
}


export function SideNav({ items, setOpen, className }: SideNavProps) {
    const currentRoute = route().current() as RouteName;
    const currentHref = route(currentRoute);

    const { isOpen } = useSidebar();

    return (
        <nav className="space-y-2">
            {items.map((item) => item.isChidren ?
                (
                    <Accordion
                        key={item.href}
                        type="single"
                        defaultValue={currentRoute}
                        collapsible
                    >
                        <AccordionItem value={currentRoute} className="AccordionItem">
                            <AccordionTrigger
                                className={cn(
                                    buttonVariants({ variant: 'ghost' }),
                                    'relative mb-2 h-12 justify-between',
                                    currentHref === item.href && 'bg-muted font-bold hover:bg-muted',
                                )}
                            >
                                <div>
                                    <item.icon className={cn('h-5 w-5', item.color)} />
                                </div>
                                <div
                                    className={cn(
                                        'absolute left-12 text-base duration-200 ',
                                        !isOpen && className,
                                    )}
                                >
                                    {item.title}
                                </div>
                            </AccordionTrigger>
                            {item.children?.map((child) => (
                                <AccordionContent key={child.name}>
                                    <Link
                                        key={child.name}
                                        href={child.href}
                                        onClick={() => {
                                            if (setOpen) setOpen(false)
                                        }}
                                        className={cn(
                                            buttonVariants({ variant: 'ghost' }),
                                            'group relative flex h-12 justify-start pr-4',
                                            route(currentRoute) === child.href && 'bg-muted font-bold hover:bg-muted',
                                        )}
                                    >
                                        <child.icon className={cn('h-5 w-5', child.color)} />
                                        <div
                                            className={cn(
                                                'absolute left-12 text-base duration-200',
                                                !isOpen && className,
                                            )}
                                        >
                                            {child.title}
                                        </div>
                                    </Link>
                                </AccordionContent>
                            ))}
                        </AccordionItem>
                    </Accordion>)
                :
                (<Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                        if (setOpen) setOpen(false)
                    }}
                    className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        'group relative flex h-12 justify-start',
                        route(currentRoute) === item.href && 'bg-muted font-bold hover:bg-muted',
                    )}
                >
                    <item.icon className={cn('h-5 w-5', item.color)} />
                    <span
                        className={cn(
                            'absolute left-12 text-base duration-200',
                            !isOpen && className,
                        )}
                    >
                        {item.title}
                    </span>
                </Link>))}
        </nav>
    );
}
