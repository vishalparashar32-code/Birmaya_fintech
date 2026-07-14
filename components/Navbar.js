"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiBars3, HiXMark, HiChevronDown } from "react-icons/hi2";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
        setAboutOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        {
            name: "About",
            children: [
                {
                    name: "Who We Are",
                    path: "/whoWeAre",
                },
                {
                    name: "Our Story",
                    path: "/ourStory",
                },
            ],
        },
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

                        <li key={index} className="relative group">

                            {link.children ? (

                                <>

                                    <button className="flex items-center gap-1 hover:text-[#f89328] transition">

                                        {link.name}

                                        <HiChevronDown className="text-sm group-hover:rotate-180 transition duration-300" />

                                    </button>

                                    {/* Dropdown */}

                                    <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                                        {link.children.map((child, i) => (

                                            <Link
                                                key={i}
                                                href={child.path}
                                                className="block px-5 py-3 hover:bg-[#f89328] hover:text-white transition"
                                            >
                                                {child.name}
                                            </Link>

                                        ))}

                                    </div>

                                </>

                            ) : (

                                <Link
                                    href={link.path}
                                    className="relative group transition-all duration-300"
                                >

                                    <span className="hover:text-[#f89328] transition-colors">

                                        {link.name}

                                    </span>

                                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89328] transition-all duration-300 group-hover:w-full"></span>

                                </Link>

                            )}

                        </li>

                    ))}

                </ul>

                {/* Desktop Buttons */}

                <div className="hidden lg:flex items-center gap-3">

                    <Link
                        href="/check-free-credit-score"
                        className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition"
                    >
                        Free Credit Score
                    </Link>

                    <Link
                        href="/apply-loan"
                        className="bg-[#f89328] text-white px-6 py-2 rounded-full hover:scale-105 transition"
                    >
                        Apply Loan
                    </Link>

                </div>

                {/* Mobile Button */}

                <button
                    className="lg:hidden text-3xl"
                    onClick={() => setOpen(true)}
                >
                    <HiBars3 />
                </button>

            </div>

            {/* Mobile */}

            {open && (

                <div className="md:hidden">

                    <div
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={() => setOpen(false)}
                    />

                    <div className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl">

                        {/* Close */}

                        <div className="flex justify-end p-5 border-b">

                            <button
                                onClick={() => setOpen(false)}
                                className="text-3xl"
                            >
                                <HiXMark />
                            </button>

                        </div>

                        <ul className="p-6 flex flex-col gap-3">

                            {navLinks.map((link, index) => (

                                <li key={index}>

                                    {link.children ? (

                                        <>
                                            {/* About Button */}
                                            <button
                                                onClick={() => setAboutOpen(!aboutOpen)}
                                                className="flex justify-between items-center w-full px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-[#f89328] hover:text-white transition-all duration-300"
                                            >
                                                {link.name}

                                                <HiChevronDown
                                                    className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            {/* Dropdown */}
                                            {aboutOpen && (
                                                <div className="ml-4 mt-2 flex flex-col rounded-lg overflow-hidden">

                                                    {link.children.map((child, i) => (

                                                        <Link
                                                            key={i}
                                                            href={child.path}
                                                            className="block px-4 py-3 text-gray-700 hover:bg-[#f89328] hover:text-white transition-all duration-300"
                                                        >
                                                            {child.name}
                                                        </Link>

                                                    ))}

                                                </div>
                                            )}
                                        </>

                                    ) : (

                                        <Link
                                            href={link.path}
                                            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-[#f89328] hover:text-white transition-all duration-300"
                                        >
                                            {link.name}
                                        </Link>

                                    )}

                                </li>

                            ))}

                        </ul>

                        {/* Buttons */}

                        <div className="p-6 flex flex-col gap-4">

                            <Link
                                href="/check-free-credit-score"
                                className="bg-primary text-white py-3 rounded-full text-center"
                            >
                                Free Credit Score
                            </Link>

                            <Link
                                href="/apply-loan"
                                className="bg-[#f89328] text-white py-3 rounded-full text-center"
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