"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 glass-nav">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Mentary Logo" width={140} height={56} className="h-10 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Servicios", "Garantías", "Cómo Funciona", "Nosotros"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-sm font-medium text-slate-600 hover:text-[var(--brand-blue)] transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <a
                        href="https://wa.me/573334318264"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-[var(--brand-blue)] transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                        Cotizar Ahora
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl"
                >
                    {["Servicios", "Garantías", "Cómo Funciona", "Nosotros"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-lg font-medium text-slate-800"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/573334318264"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 w-full text-center py-3 rounded-xl bg-[var(--brand-blue)] text-white font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        Cotizar Ahora
                    </a>
                </motion.div>
            )}
        </header>
    );
}
