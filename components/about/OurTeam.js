"use client";

import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

const teamMembers = [
    {
        id: 1,
        name: "Maya Devi",
        designation: "Director",
        phone: "+91 9871120204",
        image: "/about/Maya Devi.jpeg",
    },
    {
        id: 2,
        name: "Sahil Kumar",
        designation: "Backend Executive (UBL)",
        phone: "+91 9355565353",
        image: "/about/Sahil.jpeg",
    },

    {
        id: 3,
        name: "Monu",
        designation: "Backend Executive (UBL)",
        phone: "+91 9266877227",
        image: "/about/Monu.jpeg",
    },
    {
        id: 4,
        name: "Prashant Gupta",
        designation: "Backend Manager (Mortgage)",
        phone: "+91 9311979471",
        image: "/about/Prashant.jpeg",
    },
    {
        id: 5,
        name: "Prasun Rai",
        designation: "CRM",
        phone: "+91 9266877229",
        image: "/about/Prasun.jpeg",
    },
    {
        id: 6,
        name: "Sharwan",
        designation: "Backend Executive (PL)",
        phone: "+91 8700591757",
        image: "/about/Sarwan.jpeg",
    },
    {
        id: 7,
        name: "Shikha Kumari",
        designation: "Backend Executive (PL)",
        phone: "+91 9217964215",
        image: "/about/Shikha.jpeg",
    },

    {
        id: 8,
        name: "Neha Gupta",
        designation: "Regional Sales Manager",
        phone: "+91 9718750708",
        image: "/about/Neha Gupta.jpeg",
    },
    {
        id: 9,
        name: "Mohit",
        image: "/about/Mohit.jpeg",
         phone: "+91 98447137260",
         designation: "Sales Manager",
    },
    {
        id: 10,
        name: "Rajni Arora",
        designation: "Sales Manager",
        phone: "+91 9266877228",
        image: "/about/Rajini Madam.jpeg",
    },
    {
        id: 11,
        name: "Jatin Vakshi",
        designation: "Marketing Executive",
        phone: "+91 9355565353",
        image: "/about/Jatin Vakshi.jpeg",
    },



    {
        id: 12,
        name: "Komal Tiwari",
        designation: "Sales Manager",
        phone: "+91 9217974215",
        image: "/about/Komal Tiwari.jpeg",
    },


];

export default function OurTeam() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-white to-[#fff4e8] py-14 sm:py-16 lg:py-20">
            {/* Background Blur */}
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#272361]/10 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#f28c28]/10 blur-3xl"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-[#272361]/10 px-5 py-2 text-sm sm:text-base font-semibold text-[#272361]">
                        OUR TEAM
                    </span>

                    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
                        <span className="text-[#272361]">Meet Our</span>
                        <span className="text-[#f28c28]"> Experts</span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#f28c28]"></div>

                    <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        Behind every successful loan approval is a dedicated
                        professional. Meet the passionate team that powers
                        BIRMAYA FINTECH.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Top Line */}
                            <div className="h-2 w-full bg-[#f28c28]"></div>

                            <div className="p-5 sm:p-6">
                                {/* Image */}
                                <div className="relative mx-auto h-32 w-32 sm:h-36 sm:w-36">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#272361] to-[#f28c28] p-1">
                                        <div className="relative h-full w-full overflow-hidden rounded-full bg-white p-1">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes="(max-width:768px) 128px, 144px"
                                                className="rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                style={{ objectPosition: "center top" }}   // ya "50% 30%"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="mt-3 text-center text-xl font-bold text-[#272361] sm:text-2xl">
                                    {member.name}
                                </h3>

                                {/* Designation */}
                                <p className="mt-2 min-h-[18px] text-center text-sm font-semibold uppercase tracking-wide text-[#f28c28]">
                                    {member.designation}
                                </p>

                                {/* Divider */}
                                <div className="mx-auto my-5 h-1 w-14 rounded-full bg-[#272361]"></div>

                                {/* Phone */}
                                <a
                                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                                    className="flex items-center justify-center gap-3 text-sm text-gray-600 transition hover:text-[#f28c28]"
                                >
                                    <FaPhoneAlt className="text-[#f28c28]" />
                                    <span>{member.phone}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}