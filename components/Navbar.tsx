"use client";

import { motion } from "framer-motion";
import { Home, User, Folder, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#", icon: <Home size={20} /> },
    { name: "About", href: "#about", icon: <User size={20} /> },
    { name: "Projects", href: "#projects", icon: <Folder size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300 ${isScrolled ? "pt-4" : "pt-6"
                }`}
        >
            <div
                className={`flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300 ${isScrolled
                        ? "bg-primary/80 backdrop-blur-md border-white/10 shadow-lg"
                        : "bg-transparent border-transparent"
                    }`}
            >
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full group flex items-center gap-2"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {item.icon}
                            <span className="hidden md:inline">{item.name}</span>
                        </span>
                        <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}
