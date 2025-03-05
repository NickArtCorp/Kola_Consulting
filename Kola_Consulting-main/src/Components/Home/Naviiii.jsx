import React, { useState } from "react";
import './Navbar.css';
import 'flowbite';
import { ThemeProvider } from "@material-tailwind/react";
import { DarkThemeToggle } from "flowbite-react";
import Logo from "../../Images/KolaConsulting.jpg";
import LanguageSwitcher from './LanguageSwitcher';
import '../../i18n';

const Navbar = () => {
    const [isDropdownHovered, setIsDropdownHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

    const toggleDropdown = () => {
        setIsDropdownHovered(!isDropdownHovered);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
    };

    return (
        <ThemeProvider>
            <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-opacity-30 font-sans">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-16 ml-[250px]" alt="Kola-Consulting Logo" />
                    </a>
                    <button
                        data-collapse-toggle="mega-menu-full"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mega-menu-full"
                        aria-expanded={isMobileMenuOpen} // Reflect the state of the mobile menu
                        onClick={toggleMobileMenu} // Toggle mobile menu on click
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div 
                        id="mega-menu-full" 
                        className={`items-center justify-between font-medium w-full md:flex md:w-auto md:order-1 ${
                            isMobileMenuOpen ? "block" : "hidden" // Show/hide based on mobile menu state
                        }`}
                    >
                        <ul className="flex flex-col p-4 md:p-0 mb-[-1px] border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-5 md:border-0">
                            <li>
                                <a href="/Kola-consulting/" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-[#C34C5B] md:p-0 dark:text-white md:dark:hover:text-[#C34C5B] dark:hover:bg-gray-700 dark:hover:text-[#C34C5B] md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                            </li>
                            <li className="relative">
                                <button id="mega-menu-full-dropdown-button" onClick={toggleDropdown} className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#C34C5B] md:p-0 dark:text-white md:dark:hover:text-[#C34C5B] dark:hover:bg-gray-700 dark:hover:text-[#C34C5B] md:dark:hover:bg-transparent dark:border-gray-700">
                                    About Us 
                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                                {isDropdownHovered && (
                                    <div 
                                        id="mega-menu-full-dropdown" 
                                        className={`absolute left-0 top-[50px] w-[250px] bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 transition-all duration-300 ease-in-out backdrop-blur-md bg-opacity-60 border border-gray-200 dark:border-gray-700 
                                        ${isDropdownHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                                        onMouseEnter={() => setIsDropdownHovered(true)}
                                        onMouseLeave={() => setIsDropdownHovered(false)}
                                    >
                                        <div className="grid px-4 py-5 text-gray-900 dark:text-white sm:grid-cols-1 md:px-6">
                                            <ul>
                                                <li>
                                                    <a href="/Kola-consulting/Insights" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="relative text-gray-900 dark:text-white group-hover:text-[#C34C5B] transition-all duration-300">
                                                            Insights
                                                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C34C5B] transition-all duration-300 group-hover:w-full"></span>
                                                        </span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Kola-consulting/Our_Team" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="relative text-gray-900 dark:text-white group-hover:text-[#C34C5B] transition-all duration-300">
                                                            Our Team
                                                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C34C5B] transition-all duration-300 group-hover:w-full"></span>
                                                        </span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Kola-consulting/Our_Code_Of_Ethics" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="relative text-gray-900 dark:text-white group-hover:text-[#C34C5B] transition-all duration-300">
                                                            Our Code of Ethics
                                                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C34C5B] transition-all duration-300 group-hover:w-full"></span>
                                                        </span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Kola-consulting/Contact" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="relative text-gray-900 dark:text-white group-hover:text-[#C34C5B] transition-all duration-300">
                                                            Contact Us
                                                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C34C5B] transition-all duration-300 group-hover:w-full"></span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li>
                                <a href="/Kola-consulting/Services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C34C5B] md:p-0 dark:text-white md:dark:hover:text-[#C34C5B] dark:hover:bg-gray-700 dark:hover:text-[#C34C5B] md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="/Kola-consulting/Realisation" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C34C5B] md:p-0 dark:text-white md:dark:hover:text-[#C34C5B] dark:hover:bg-gray-700 dark:hover:text-[#C34C5B] md:dark:hover:bg-transparent dark:border-gray-700">Realisation</a>
                            </li>
                            <li>
                                <DarkThemeToggle />
                            </li>
                            <LanguageSwitcher />
                        </ul>
                    </div>
                </div>
            </nav>
        </ThemeProvider>
    );
}

export default Navbar;