import { Config } from 'ziggy-js';
import { type IconType  } from "react-icons";


export interface User {
    id: number;
    name: string;
    image?: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export interface NavItem {
    title: string;
    name: string;
    href: string;
    icon: IconType;
    color?: string;
    isChidren?: boolean;
    children?: NavItem[];
}
