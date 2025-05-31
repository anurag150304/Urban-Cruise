import logo from "../assets/logo.webp";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export const Footer = () => {

    return (
        <footer className="bg-[#003a66] text-white pt-10 px-16">
            <div className="flex justify-center items-center gap-15 pb-10 max-[1200px]:flex-col max-[1200px]:gap-0">
                <div className="flex flex-col justify-start items-center w-[24%] gap-10  max-[1200px]:w-fit">
                    <img src={logo} alt="logo.png" className=" max-[1200px]:w-60 w-full" />
                    <div className="hidden flex-col justify-center items-center w-full min-[1200px]:flex">
                        <h1 className="text-lg font-semibold mb-2">Providing One Stop Solution</h1>
                        <p className="text-center opacity-70">Urban Cruise is a BUS RENTAL COMPANY providing One Stop Solution for hiring Car, SUV, Tempo Traveller, MiniBus & Luxury Bus on rent for all your Travel needs in We are available in 7 Cities of India- Mumbai, Thane, Pune, Delhi, Noida, Gurugram, Gaziabad.</p>
                    </div>
                </div>
                <div className="w-[76%] flex justify-center items-start gap-10 mt-20 max-[1200px]:flex-wrap">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h1 className="text-lg font-semibold border-b-2 border-b-white">Company</h1>
                        <ul className="flex flex-col justify-center items-center gap-2 opacity-70">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Career</li>
                            <li>Partner</li>
                            <li className="text-center">Happy Customers</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h1 className="text-lg font-semibold border-b-2 border-b-white">Info</h1>
                        <ul className="flex flex-col justify-center items-center gap-2 opacity-70">
                            <li>FAQ's</li>
                            <li>Blogs</li>
                            <li>News & Media</li>
                            <li>Privacy</li>
                            <li className="text-center">Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h1 className="text-lg font-semibold border-b-2 border-b-white">Office Locations</h1>
                        <ul className="flex flex-col justify-center items-center gap-2">
                            <li>
                                <h2 className="text-center text-lg font-semibold">URBAN CRUISE</h2>
                                <p className="text-center w-40 opacity-70">B-14, Gali No. 10, Shashi Garden, Mayur Vihar Phase 1, Delhi-110091</p>
                            </li>
                            <li>
                                <h2 className="text-center text-lg font-semibold">Phone :</h2>
                                <span className="text-center opacity-70">+91 932-404-8224</span><br />
                                <span className="text-center opacity-70">+91 892-894-6056</span>
                            </li>
                            <li>
                                <h2 className="text-center text-lg font-semibold">Email :</h2>
                                <span className="text-center opacity-70">delhi@urbancruise.in</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h1 className="text-lg font-semibold border-b-2 border-b-white">Follow Us On</h1>
                        <ul className="flex justify-center items-center gap-2 opacity-70 flex-wrap">
                            <li><FaInstagram className="text-2xl" /></li>
                            <li><BsTwitterX className="text-2xl" /></li>
                            <li><FaFacebookSquare className="text-2xl" /></li>
                            <li><FaYoutube className="text-2xl" /></li>
                            <li><FaLinkedin className="text-2xl" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t-1 border-t-white flex justify-center items-center py-10">
                <span className="text-center text-sm">Copyright © 2025 Urban Cruise | All rights reserved.</span>
            </div>
        </footer>
    )
}
