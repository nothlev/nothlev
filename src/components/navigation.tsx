import Link from "next/link";
import { navLinks } from "~/lib/data";

export function Navigation() {
    return (
        <>
            <nav className="flex space-x-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.title}
                        href={link.href}
                        className="relative hover:text-[#f0f0f0] transition-colors duration-500 group"
                    >
                        {link.title}
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#f0f0f0] transition-all duration-500 group-hover:w-full" />
                    </Link>
                ))}
            </nav>
        </>
    )
}