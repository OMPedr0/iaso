"use client"

import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const NavBar = () => {

    const [navbar, setNavbar] = useState(false);
    const router = useRouter();


    function handleHomeClick() {
        router.push("/");
    }

    function handleBlogClick() {
        router.push("/blog");
    }

    function handleContactClick() {
        router.push("/contact");
    }







    return (
        <div className="bg-neutral-800 p-2 flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex items-center">
                <a href="/">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    className="ml-2"
                    width={100}
                    height={24}
                    priority
                />
                </a>


                <div className="md:hidden ml-24">
                    <button
                        className="p-2 text-stone-50 rounded-md outline-none focus:border-gray-400 focus:border hover:text-gray-400 transition-colors duration-300"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                    }`}
            >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
                    <li className="text-stone-50">
                        <button
                            className={`flex items-center  text-stone-50 hover:text-sky-800`}
                            onClick={handleHomeClick}
                        >
                            Home
                        </button>
                    </li>
                    <li className="text-stone-50">
                        <button
                            className={`flex items-center  text-stone-50 hover:text-sky-800`}
                            onClick={handleBlogClick}
                        >
                            Blog
                        </button>
                    </li>
                    <li className="text-stone-50">
                        <button
                            className={`flex items-center  text-stone-50 hover:text-sky-800`}
                            onClick={handleContactClick}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );




}

export default NavBar;