
import { type AvatarProps } from "@radix-ui/react-avatar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { TbUser } from "react-icons/tb";

import type { User } from "@/types"

interface UserAvatarProps extends AvatarProps {
    user: Pick<User, "image" | "name">
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
    return (
        <Avatar {...props}>
            {user.image ? (
                <AvatarImage alt="Picture" src={user?.image} />
            ) : (
                <AvatarFallback>
                    <span className="sr-only">{user.name}</span>
                    <TbUser className="h-4 w-4" />
                </AvatarFallback>
            )}
        </Avatar>
    )
}
