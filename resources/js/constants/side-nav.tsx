import { NavItem } from "@/types";

import { TbLayoutDashboard, TbBook, TbBookmarkAi, TbBookmarkEdit, TbBookmarkMinus } from "react-icons/tb";

export const NavItems: NavItem[] = [
    {
        title: "Dashboard",
        name: "dashboard",
        icon: TbLayoutDashboard,
        href: route('dashboard'),
    },
    {
        title: "Example",
        name: "example",
        icon: TbBook,
        href: "/example",
        isChidren: true,
        children: [
            {
                title: "Example-01",
                name: "example",
                icon: TbBookmarkAi,
                href: route('example'),
            },
            {
                title: "Example-02",
                name: "example2",
                icon: TbBookmarkEdit,
                href: route('example2'),
            },
            {
                title: "Example-03",
                name: "example3",
                icon: TbBookmarkMinus,
                href: route('example3'),
            },
        ],
    }
];
