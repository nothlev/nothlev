import { Sun, Moon, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { contactLinks, footerLinks } from "~/lib/data"

export function Footer() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
                <section aria-labelledby="craft-heading">
                    <h2 id="craft-heading" className="text-sm font-medium text-muted-foreground mb-4">
                        CRAFT
                    </h2>
                    <nav aria-label="Craft navigation">
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.title}>
                                    <Link href="#" className="text-sm hover:underline">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>

                <section aria-labelledby="contact-heading">
                    <h2 id="contact-heading" className="text-sm font-medium text-muted-foreground mb-4">
                        CONTACT
                    </h2>
                    <nav aria-label="Contact navigation">
                        <ul className="space-y-3">
                            {contactLinks.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:underline inline-flex items-center"
                                        aria-label={`Visit ${link.title} profile (opens in new tab)`}
                                    >
                                        {link.title}
                                        <ArrowUpRight className="ml-1 h-3 w-3" aria-hidden="true" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>

                <section className="space-y-4" aria-label="Additional information">
                    <div className="flex items-center justify-start space-x-2" role="group" aria-label="Theme toggle">
                        <button type="button" className="p-2" aria-label="Switch to light theme">
                            <Sun className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <button type="button" className="p-2" aria-label="Switch to dark theme">
                            <Moon className="h-4 w-4" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="text-left space-y-2">
                        <p className="text-sm">
                            <small>&copy; {new Date().getFullYear()} Mikkel Nothlev. All Rights Reserved.</small>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <small>
                                Made with{" "}
                                <span role="img" aria-label="love">
                                    ♥
                                </span>{" "}
                                and a whole lot of coffee and frustration.
                            </small>
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}