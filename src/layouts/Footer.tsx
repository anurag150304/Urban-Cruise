import logo from "../assets/logo.webp";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-[#003a66] text-white relative pt-10 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1500px] min-[1500px]:left-1/2 min-[1500px]:-translate-x-1/2">
            <div className="flex flex-wrap justify-between gap-10 pb-10">
                {/* Left Logo + Info */}
                <div className="w-full md:w-[35%] flex flex-col items-center md:items-start gap-6">
                    <img src={logo} alt="logo.png" className="w-48 md:w-60" />
                    <div className="hidden md:flex flex-col items-start">
                        <h1 className="text-lg font-semibold mb-2">Providing One Stop Solution</h1>
                        <p className="text-left opacity-70">
                            Urban Cruise is a BUS RENTAL COMPANY providing One Stop Solution for hiring Car, SUV, Tempo Traveller, MiniBus & Luxury Bus on rent. Available in 7 Cities: Mumbai, Thane, Pune, Delhi, Noida, Gurugram, Gaziabad.
                        </p>
                    </div>
                </div>

                {/* Right Columns */}
                <div className="w-full md:w-[60%] flex flex-wrap justify-between gap-8">
                    {/* Company */}
                    <div className="flex flex-col items-center md:items-start gap-3 w-[45%] sm:w-[30%]">
                        <h1 className="text-lg font-semibold border-b-2 border-white">Company</h1>
                        <ul className="flex flex-col items-center md:items-start gap-2 opacity-70">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Career</li>
                            <li>Partner</li>
                            <li className="text-center">Happy Customers</li>
                        </ul>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col items-center md:items-start gap-3 w-[45%] sm:w-[30%]">
                        <h1 className="text-lg font-semibold border-b-2 border-white">Info</h1>
                        <ul className="flex flex-col items-center md:items-start gap-2 opacity-70">
                            <li>FAQ's</li>
                            <li>Blogs</li>
                            <li>News & Media</li>
                            <li>Privacy</li>
                            <li className="text-center">Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* Office Locations */}
                    <div className="flex flex-col items-center md:items-start gap-3 w-full sm:w-[45%]">
                        <h1 className="text-lg font-semibold border-b-2 border-white">Office Locations</h1>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li>
                                <h2 className="text-center md:text-left text-lg font-semibold">URBAN CRUISE</h2>
                                <p className="text-center md:text-left opacity-70">B-14, Gali No. 10, Shashi Garden, Mayur Vihar Phase 1, Delhi-110091</p>
                            </li>
                            <li>
                                <h2 className="text-center md:text-left text-lg font-semibold">Phone:</h2>
                                <span className="opacity-70 block text-center md:text-left">+91 932-404-8224</span>
                                <span className="opacity-70 block text-center md:text-left">+91 892-894-6056</span>
                            </li>
                            <li>
                                <h2 className="text-center md:text-left text-lg font-semibold">Email:</h2>
                                <span className="opacity-70 block text-center md:text-left">delhi@urbancruise.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center md:items-start gap-3 w-full sm:w-[45%]">
                        <h1 className="text-lg font-semibold border-b-2 border-white">Follow Us On</h1>
                        <ul className="flex gap-4 flex-wrap justify-center md:justify-start opacity-70">
                            <li><FaInstagram className="text-2xl" /></li>
                            <li><BsTwitterX className="text-2xl" /></li>
                            <li><FaFacebookSquare className="text-2xl" /></li>
                            <li><FaYoutube className="text-2xl" /></li>
                            <li><FaLinkedin className="text-2xl" /></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white pt-6 pb-10 text-center">
                <span className="text-sm opacity-70">
                    © 2025 Urban Cruise | All rights reserved.
                </span>
            </div>
        </footer>
    );
};