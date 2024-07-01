import Link from "next/link";
import { getCurrentYear } from "../lib/utils";
import SocialLinks from "./SocialLinks";
const Footer = () => {
    return (
        <footer className="w-full bg-slate-200 bottom-0">
        <div className="container flex justify-between items-center flex-wrap py-2">
           <div className="sm:w-full md:w-2/6"> 
            <p className="text-left text-xs neutrals m-0">
            © <span>{getCurrentYear()}</span> Utsargo Roy. All rights reserved.
            </p>
            </div>
            <div className="sm:w-full md:w-2/6">
            <SocialLinks />
            </div>
            <div className="sm:w-full md:w-2/6"> 
            <p className="text-right text-xs m-0">Built with <Link href="https://nextjs.org/" target="_blank">NextJS</Link> and <Link href="https://tailwindcss.com/" target="_blank">Tailwind CSS</Link></p>
            </div>
        </div>
        </footer>
    );
    }

export default Footer;