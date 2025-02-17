import { socials } from "@/lib/data";
import Link from "next/link";

export function Footer() {
    return (
        <>
            <div className="flex items-center justify-between">
                <p className="text-sm md:text-3xl">AVAILABLE FOR FREELANCE</p>
                <div className="flex gap-4">
                    {socials.map((social, index) => (
                        <Link
                            key={index}
                            href={social.url}
                            target="_blank"
                            className="text-sm md:text-3xl hover:text-gray-300 transition-colors duration-300"
                        >
                            {social.name.toUpperCase()}
                            {index < socials.length - 1 && ","}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}