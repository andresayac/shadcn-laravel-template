import { TbMoon, TbSun  } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider"


export function ThemeToggle() {
    const { setTheme, getTheme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(getTheme() === "dark" ? "light" : "dark")}
            className="h-9 w-9 rounded-md border"
        >
            <TbSun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <TbMoon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />

            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
