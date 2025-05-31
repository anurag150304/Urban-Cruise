import { useState } from "react";
import logo from "../assets/logo.webp";
import { SlCalender } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion";
import { HoverBtn } from "../components/reusable/hover-btn";
import { RxCross1 } from "react-icons/rx";
import { RiMenu3Fill } from "react-icons/ri";

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Desktop Header - Top Info Bar */}
            <div className="hidden min-[1200px]:flex relative flex-col justify-start shadow-md max-w-[1500px] min-[1500px]:left-1/2 min-[1500px]:-translate-x-1/2">
                <div className="bg-[#003a66] text-white py-3.5 px-20 text-sm flex justify-between items-center">
                    <ul className="flex justify-center items-center gap-9 list-disc">
                        <li><span className="text-[#e02454]">Email : </span><a>delhi@urbancruise.in</a></li>
                        <li><span className="text-[#e02454]">Call now : </span><span>+000 723 123 21</span></li>
                    </ul>
                    <ul className="list-disc marker:text-[#e02454] flex justify-center items-center gap-9">
                        <li><a href="/instagram">Instagram</a></li>
                        <li><a href="/facebook">Facebook</a></li>
                        <li><a href="/twitter">Twitter</a></li>
                        <li><a href="/linkdlin">Linkedln</a></li>
                    </ul>
                </div>
            </div>

            {/* Desktop Sticky Navbar */}
            <nav className="hidden min-[1200px]:flex sticky top-0 bg-white z-50 shadow-md py-3 px-20 justify-between items-center max-w-[1500px] min-[1500px]:left-1/2 min-[1500px]:-translate-x-[35.30%]">
                <a href="/">
                    <img src={logo} alt="logo.png" className="w-44" />
                </a>
                <div className="flex justify-center items-center gap-1">
                    <HoverBtn text="About Us" options={["Careers", "Patner Program", "Happy Customers", "Contact Us"]} />
                    <HoverBtn text="Our Vehicles" options={["Cars & SUVs", "Luxury Cars, SUVs, Vans", "Tempo Traveler", "Mini Bus", "Luxury Bus"]} />
                    <HoverBtn text="Servicies" options={["Char Dham Yarta", "Wedding Travel", "Corporate Travel", "Vacations", "Local Travel"]} />
                    <HoverBtn text="INFO's" options={["FAQs", "News & Media"]} />
                    <HoverBtn text="Blog" options={["Blog Classic", "Blog Single"]} />
                </div>
                <button className="py-3 px-5 bg-[#e02454] text-white rounded-full font-semibold text-sm flex justify-center items-center gap-2">
                    <SlCalender className="text-lg" /> Get a Quote
                </button>
            </nav>

            {/* Mobile Header */}
            <header className="hidden max-[1200px]:flex justify-between items-center py-2 px-9 shadow-md sticky top-0 z-50 bg-white w-full">
                <a href="/">
                    <img src={logo} alt="logo.png" className="w-40" />
                </a>
                <button onClick={toggleMenu} className="focus:outline-none">
                    {isOpen ? <RxCross1 className="text-2xl cursor-pointer" /> : <RiMenu3Fill className="text-2xl opacity-80 cursor-pointer" />}
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobileMenu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.1 }}
                            className="absolute top-22 left-1/2 transform -translate-x-1/2 w-[95%] bg-white shadow-md z-50 flex flex-col items-center gap-4 p-4 border-gray-200 border-t-2 border-t-[#e02454] text-sm font-medium">
                            <a href="/" className="w-full text-[#003a66] hover:text-[#e02454] font-medium border-b-1 border-b-[#0000005d] p-4">Home</a>
                            <a href="/about" className="w-full text-[#003a66] hover:text-[#e02454] font-medium border-b-1 border-b-[#0000005d] p-4">About</a>
                            <a href="/services" className="w-full text-[#003a66] hover:text-[#e02454] font-medium border-b-1 border-b-[#0000005d] p-4">Services</a>
                            <a href="/contact" className="w-full text-[#003a66] hover:text-[#e02454] font-medium p-4 pb-1">Contact</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>

    )
}
