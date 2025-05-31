import { useRef, useState, useEffect } from "react";
import banner_1 from "../../assets/Images/bg_2.webp";
import banner_2 from "../../assets/Images/travelers.webp";
import { motion } from "framer-motion";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export function ImagesCarousel() {
    const images = useRef<string[]>([banner_2, banner_1]);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.current.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const [boxShadow, setBoxShadow] = useState("inset 40rem 0 70rem 0 #0c3352cc");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 770) {
                setBoxShadow("inset 8rem 0 15rem 0 #0c3352cc");
            } else {
                setBoxShadow("inset 40rem 0 70rem 0 #0c3352cc");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Carousel className="w-full relative overflow-hidden">
            <motion.div
                initial={{ x: "-80%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="h-full absolute z-30 text-white flex flex-col justify-center items-start gap-6 max-[431px]:gap-10 px-6 py-10 md:px-16 md:py-20 lg:px-20 lg:py-24 rounded-r-full"
                style={{ boxShadow }}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-1 w-[40%] bg-[#e02454] -mb-4"
                />

                <motion.h1
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-5xl lg:text-7xl font-medium pt-4"
                >
                    Welcome To <br />
                    <span className="text-[#e02454] italic">Urban Cruise</span>
                </motion.h1>

                <motion.span
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-xl lg:text-2xl font-medium"
                >
                    India's Most Preferred Vehicle Rental Company
                </motion.span>

                <motion.ul
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="list-disc marker:text-[#e02454] text-lg lg:text-xl flex flex-col md:flex-row justify-start items-start md:items-center gap-2 md:gap-10"
                >
                    <li>Premium & Royal Cars</li>
                    <li>Memorable rides with SUVs, Tempo Travellers, MiniBus</li>
                </motion.ul>
            </motion.div>

            <CarouselContent style={{ transform: `translateX(-${activeIndex * 100}%)`, transition: "transform 0.5s ease-in-out" }}>
                {images.current.map((img, idx) => (
                    <CarouselItem key={idx} className="flex-shrink-0 w-full">
                        <div className="h-screen md:h-[30rem] lg:h-[35rem] w-full">
                            <img
                                src={img}
                                alt={`Carousel Slide ${idx + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="max-[431px]:hidden" onClick={() => setActiveIndex((prev) => (prev - 1 + images.current.length) % images.current.length)} />
            <CarouselNext className="max-[431px]:hidden" onClick={() => setActiveIndex((prev) => (prev + 1) % images.current.length)} />

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
                {images.current.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-2 w-2 rounded-full ${activeIndex === idx ? "bg-[#e02454]" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </Carousel>
    );
}