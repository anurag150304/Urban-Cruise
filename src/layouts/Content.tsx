import { ImagesCarousel } from "../components/reusable/img-carousel"
import section_img from "../assets/Images/ssection_img.webp";
import background from "../assets/Images/background.jpg";
import enquiry from "../assets/Images/enquiry.jpg";
import select_vehicle from "../assets/Images/select_vehicle.jpg";
import book_vehicle from "../assets/Images/book_vehicle.jpg";
import { FaPlay } from "react-icons/fa"
import { motion } from "framer-motion";
import { useState } from "react";

export const Content = () => {
    const [isHovered1, setIsHovered1] = useState<boolean>(false);
    const [isHovered2, setIsHovered2] = useState<boolean>(false);
    const [isHovered3, setIsHovered3] = useState<boolean>(false);

    return (
        <main className="bg-white relative flex flex-col justify-start items-center text-[#002e51] max-w-[1500px] min-[1500px]:left-1/2 min-[1500px]:-translate-x-1/2">
            <ImagesCarousel />
            <section className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 p-6 my-10">
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={section_img}
                        alt="section.png"
                        className="w-full object-cover rounded-xl h-96 max-[431px]:h-56"
                    />
                </div>

                {/* Text Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-5 max-[431px]:items-center">
                    <span className="text-sm font-medium opacity-70 border-b border-[#000000b5]">
                        ABOUT URBAN CRUISE
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold max-[431px]:text-center">
                        Welcome to the <span className="text-[#e02454]"><br className="hidden sm:block" />Bus rental</span> Services
                    </h1>
                    <p className="opacity-70 leading-6 text-sm sm:text-base">
                        Urban Cruise is a One Stop Solution for hiring Car, SUV, Tempo Traveller, MiniBus & Luxury Bus on rent for all your travel needs. We are available in 7 cities of India — Mumbai, Thane, Pune, Delhi, Noida, Gurugram, Ghaziabad.
                    </p>

                    {/* Features & Button */}
                    <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6 sm:gap-10 w-full">
                        <ul className="flex flex-col justify-center items-start gap-3 list-disc marker:text-[#e02454] opacity-80 text-sm sm:text-base">
                            <li className="hover:text-black max-[431px]:ml-4">We don’t just plan trips; we craft journeys that become stories.</li>
                            <li className="hover:text-black max-[431px]:ml-4">Wherever you dream to go, we’re already paving the way.</li>
                            <li className="hover:text-black max-[431px]:ml-4">More than destinations — we bring you the joy of discovery.</li>
                        </ul>

                        <a
                            href="https://www.youtube.com/watch?v=yrUUVpiBL_Y"
                            className="bg-[#003a66] text-white py-4 px-5 rounded-md flex flex-col justify-center items-center gap-2 text-sm font-semibold hover:bg-[#002647] transition max-[431px]:self-center"
                        >
                            <div className="flex justify-center items-center border-b border-[#ffffff76] w-[70%] pb-2">
                                <FaPlay className="text-[#e02454] text-lg" />
                            </div>
                            <span className="text-center">Watch the Video</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className='flex flex-col justify-start items-center gap-5 p-4 mb-10 w-full' style={{ backgroundImage: `url(${background})` }}>
                <span className="text-sm font-medium opacity-70 border-b-1 border-b-[#000000b5]">HOW IT WORKS</span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">Book <span className="text-[#e02454]">Your Vehicles</span><br /> In 3 Steps</h1>
                <div className="flex justify-between items-center gap-6 mb-20 max-[1200px]:flex-col max-[1200px]:gap-15 max-[1200px]:mb-0">
                    <motion.div
                        className="h-64 relative cursor-pointer rounded"
                        initial="initial"
                        onHoverStart={() => setIsHovered1(true)}
                        onHoverEnd={() => setIsHovered1(false)}
                        animate={isHovered1 ? "hover" : "initial"}
                    >
                        <motion.img
                            src={enquiry}
                            alt="enquiry.png"
                            variants={{
                                initial: { y: 0, scale: 1 },
                                hover: { y: 15, scale: 1.02 }
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="object-cover h-full w-full"
                        />

                        {/* Blue Box */}
                        <motion.div
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                hover: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute top-22 left-1/2 -translate-x-1/2 w-[80%] z-20 bg-[#003366] text-white text-center py-8 px-4 rounded shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-2">Enquiry</h3>
                            <p className="text-sm leading-snug">
                                Share your Travel Plan with us through Call, Email, Whatsapp, Request a Quote
                            </p>
                        </motion.div>
                        <motion.div
                            variants={{
                                initial: { opacity: 1, y: 20, backgroundColor: "#ffffff", color: "#003a66" },
                                hover: {
                                    opacity: 1,
                                    y: 0,
                                    backgroundColor: "#e02454",
                                    color: "#fff"
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                backgroundColor: { delay: 0.1, duration: 0.3 },
                            }}
                            className="absolute left-1/2 -translate-x-1/2 py-4 -bottom-2 z-20 w-[80%] text-center text-lg font-semibold shadow-md rounded"
                        >
                            {isHovered1 ? "Explore More" : "Enquiry"}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="h-64 relative cursor-pointer rounded"
                        initial="initial"
                        onHoverStart={() => setIsHovered2(true)}
                        onHoverEnd={() => setIsHovered2(false)}
                        animate={isHovered2 ? "hover" : "initial"}
                    >
                        <motion.img
                            src={select_vehicle}
                            alt="select.png"
                            variants={{
                                initial: { y: 0, scale: 1 },
                                hover: { y: 15, scale: 1.02 }
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="object-cover h-full w-full"
                        />

                        {/* Blue Box */}
                        <motion.div
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                hover: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute top-22 left-1/2 -translate-x-1/2 w-[80%] z-20 bg-[#003366] text-white text-center py-8 px-4 rounded shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-2">Select Vehicle</h3>
                            <p className="text-sm leading-snug">
                                Our Team will provide Best Suitable Vehicle Options with Best Value Pricing.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={{
                                initial: { opacity: 1, y: 20, backgroundColor: "#ffffff", color: "#003a66" },
                                hover: {
                                    opacity: 1,
                                    y: 0,
                                    backgroundColor: "#e02454",
                                    color: "#fff"
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                backgroundColor: { delay: 0.1, duration: 0.3 },
                            }}
                            className="absolute left-1/2 -translate-x-1/2 py-4 -bottom-2 z-20 w-[80%] text-center text-lg font-semibold shadow-md rounded"
                        >
                            {isHovered2 ? "Explore More" : "Select Vehicle"}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="h-64 relative cursor-pointer rounded"
                        initial="initial"
                        onHoverStart={() => setIsHovered3(true)}
                        onHoverEnd={() => setIsHovered3(false)}
                        animate={isHovered3 ? "hover" : "initial"}
                    >
                        <motion.img
                            src={book_vehicle}
                            alt="book.png"
                            variants={{
                                initial: { y: 0, scale: 1 },
                                hover: { y: 15, scale: 1.02 }
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="object-cover h-full w-full"
                        />

                        {/* Blue Box */}
                        <motion.div
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                hover: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute top-22 left-1/2 -translate-x-1/2 w-[80%] z-20 bg-[#003366] text-white text-center py-8 px-4 rounded shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-2">Book Vehicle</h3>
                            <p className="text-sm leading-snug">
                                Book our Premium & Royal Quality Vehicles on Rent & Enjoy a memorable journey.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={{
                                initial: { opacity: 1, y: 20, backgroundColor: "#ffffff", color: "#003a66" },
                                hover: {
                                    opacity: 1,
                                    y: 0,
                                    backgroundColor: "#e02454",
                                    color: "#fff"
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                backgroundColor: { delay: 0.1, duration: 0.3 },
                            }}
                            className="absolute left-1/2 -translate-x-1/2 py-4 -bottom-2 z-20 w-[80%] text-center text-lg font-semibold shadow-md rounded"
                        >
                            {isHovered3 ? "Explore More" : "Book Vehicle"}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
