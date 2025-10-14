"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type NavLink = {
    label: string
    href: string
    dropdown?: { label: string; href: string }[]
}

const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    {
        label: "Service",
        href: "/UI-Components/Service",
        dropdown: [
            { label: "Service", href: "/UI-Components/Service" },
            { label: "Service Details", href: '/UI-Components/Service/serviceDetails?id=1' }
        ]
    },
    {
        label: "Projects",
        href: "/UI-Components/Projects",
        dropdown: [
            { label: "Projects", href: "/UI-Components/Projects" },
            { label: "Project Details", href: '/UI-Components/Projets/projectDetails?id=2' }
        ]
    },
    {
        label: "Blogs",
        href: "/UI-Components/Blogs",
        dropdown: [
            { label: "Blogs", href: "/UI-Components/Blogs" },
            { label: "Blog Details", href: '/UI-Components/Blogs/blogsDetails?id=2' }
        ]
    },
    {
        label: "Pages",
        href: "/UI-Components/Pages/About",
        dropdown: [
            { label: "About", href: "/UI-Components/Pages/About" },
            { label: "Doctor", href: '/UI-Components/Pages/doctor' },
            { label: "Doctor details", href: "/UI-Components/Pages/doctorDetails?id=3" },
            { label: "Pricing", href: "/UI-Components/Pages/Pricing" }
        ]
    },
    { label: "Contact Us", href: "/UI-Components/Pages/Contact" }
]

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [isFixed, setIsFixed] = useState(false)

    const toggleDropdown = (label: string) => {
        setActiveDropdown((prev) => (prev === label ? null : label))
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Fecha o menu mobile ao clicar em um link
    const handleLinkClick = () => {
        setMobileMenuOpen(false)
        setActiveDropdown(null)
    }

    return (
        <div className={`w-full bg-white z-[9999] shadow-sm transition-all py-4 lg:py-2 duration-500 ${isFixed ? "fixed top-0 left-0 z-[50] fixed-nav" : ""}`}>
            <div className="flex items-center justify-between px-[8%] lg:px-[12%] pb-2 lg:pb-0 text-gray-700">
                <Link href="/" className='text-4xl font-bold Merienda text-black'>
                    Medi<span className="text-[var(--prim-color)]">Care+</span>
                </Link>

                {/* Desktop Navbar */}
                <nav className="hidden lg:flex space-x-6 menu-link relative">
                    {navLinks.map((link) =>
                        link.dropdown ? (
                            <div key={link.label} className="relative group z-[9999]">
                                <Link href={link.href} className='flex items-center gap-1 text-lg font-semibold'>
                                    {link.label} <i className='ri-arrow-down-s-line'></i>
                                </Link>
                                <div className="absolute left-0 top-full opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-2 group-hover:pointer-events-auto transition-all duration-300 bg-white shadow-xl border border-gray-100 rounded-lg min-w-[150px]">
                                    {link.dropdown.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className='block font-semibold px-3 py-2 rounded-md hover:bg-[var(--prim-color)] hover:text-white transition-all'
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link 
                                className='text-lg font-semibold' 
                                key={link.label}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                <button className='nav-button items-center cursor-pointer font-bold p-3 hidden lg:flex'>
                    <i className="bi bi-telephone pe-3 text-4xl"></i>
                    <div className="flex flex-col items-start">
                        <p className="text-gray-500 font-medium">Need Help?</p>
                        +(91) 123 456 789
                    </div>
                </button>
                
                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center justify-between gap-4">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className='text-2xl focus:outline-none'
                        aria-label="Toggle menu"
                    >
                        <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden transition-all duration-500 ${mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <nav className="flex flex-col px-[8%] py-3 space-y-2">
                    {navLinks.map((link) =>
                        link.dropdown ? (
                            <div key={link.label} className="flex flex-col border border-gray-300 rounded-lg overflow-hidden text-black">
                                <button
                                    onClick={() => toggleDropdown(link.label)}
                                    className='flex items-center justify-between px-4 py-3 text-lg font-semibold bg-white hover:bg-gray-50 transition-colors'
                                >
                                    <span>{link.label}</span>
                                    <i className={`ri-arrow-down-s-line transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`}></i>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.label ? 'max-h-[500px]' : 'max-h-0'}`}>
                                    <div className="flex flex-col bg-[var(--prim-light)] border-t border-gray-200">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={handleLinkClick}
                                                className='block text-black font-semibold px-6 py-3 hover:bg-[var(--prim-color)] hover:text-white transition-all'
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link 
                                className='text-lg font-semibold px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors' 
                                key={link.label}
                                href={link.href}
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>
            </div>
        </div>
    )
}

export default Navbar