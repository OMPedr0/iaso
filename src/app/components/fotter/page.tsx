"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Fotter = () => {


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
        <footer className="bg-neutral-800 p-2 flex flex-col items-center" 
        style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
        }}>
            <div className="flex">
                <a href="https://www.facebook.com/ias.ourondo">
                <Image
                    src="/face.svg"
                    alt="Logo"
                    className="ml-2"
                    width={24}
                    height={24}
                    priority
                />
                </a>
                <a href="">
                <Image
                    src="/insta.svg"
                    alt="Logo"
                    className="ml-4"
                    width={24}
                    height={24}
                    priority
                />
                </a>
               
            </div>

            <ul className="flex items-center justify-center space-x-8 p-4">
                <li className="text-stone-50 iceland">
                    <button
                        className="flex items-center  text-stone-50 hover:text-sky-800"
                        onClick={handleHomeClick}
                    >
                        Home
                    </button>
                </li>
                <li className="text-stone-50 iceland">
                    <button
                        className="flex items-center  text-stone-50 hover:text-sky-800"
                        onClick={handleBlogClick}
                    >
                        Blog
                    </button>
                </li>
                <li className="text-stone-50 iceland">
                    <button
                        className="flex items-center text-stone-50 hover:text-sky-800"
                        onClick={handleContactClick}
                    >
                        Contact
                    </button>
                </li>
            </ul>

            <h1 className="text-stone-50 poly text-center">
                © IASO - Instituto de Apoio Social do Ourondo
            </h1>
        </footer>
    );

}
export default Fotter;