"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Career", path: "/career" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 sm:gap-3">
                    <Image
                        src="/logo.png"
                        alt="Birmaya Fintech"
                        width={55}
                        height={55}
                        className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
                    />

                    <div className="leading-tight">
                        <h1 className="text-sm sm:text-base lg:text-xl font-bold text-primary whitespace-nowrap">
                            BI₹MAYA FINTECH
                        </h1>

                        <p className="text-[8px] sm:text-sm text-[#f89328] font-semibold">
                            Commitments Honored, Loans Delivered
                        </p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                className="relative group transition-all duration-300"
                            >
                                <span className="hover:text-[#f89328] transition-colors duration-300">
                                    {link.name}
                                </span>

                                {/* Animated Underline */}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89328] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        href="/check-free-credit-score"
                        className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition duration-300"
                    >
                        Free Credit Score
                    </Link>

                    <Link
                        href="/apply-loan"
                        className="bg-[#f89328] text-white px-6 py-2 rounded-full hover:scale-105 transition duration-300"
                    >
                        Apply Loan
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-3xl text-gray-700"
                    onClick={() => setOpen(true)}
                >
                    <HiBars3 />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden">

                    {/* Overlay */}
                    <div
                        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                            open
                                ? "opacity-100 visible"
                                : "opacity-0 invisible"
                        }`}
                        onClick={() => setOpen(false)}
                    />

                    {/* Sidebar */}
                    <div
                        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${
                            open
                                ? "translate-x-0"
                                : "translate-x-full"
                        }`}
                    >

                        {/* Close Button */}
                        <div className="flex items-center justify-end p-5 border-b">
                            <button
                                onClick={() => setOpen(false)}
                                className="text-3xl text-black"
                            >
                                <HiXMark />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <ul className="flex flex-col gap-6 p-6 text-lg font-medium text-gray-700">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.path}
                                        className="relative inline-block group"
                                    >
                                        <span className="group-hover:text-[#f89328] transition-colors duration-300">
                                            {link.name}
                                        </span>

                                        {/* Hover Underline */}
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89328] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Buttons */}
                        <div className="p-6 flex flex-col gap-4">
                            <Link
                                href="/check-free-credit-score"
                                className="bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300 text-center"
                            >
                                Free Credit Score
                            </Link>

                            <Link
                                href="/apply-loan"
                                className="bg-[#f89328] text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300 text-center"
                            >
                                Apply Loan
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
}