// src/pages/HomePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";



const HomePage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close mobile menu when link is clicked
    };
    const navigate = useNavigate();
    return (
        <div className="font-sans">
            {/* Header */}
            <header className="bg-white fixed w-full shadow z-50 rounded-b-full py-3">
                <div className="container mx-auto px-4 md:py-4  sm:py-3 flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-xl xl:text-2xl font-bold text-indigo-600 flex items-center gap-2 ml-8 xl:ml-8">
                        <span className="material-symbols-outlined text-2xl xl:text-4xl">
                            prescriptions
                        </span>
                        DocPen
                    </h1>


                    {/* Hamburger Icon (Mobile) */}
                    <button
                        className="md:hidden text-indigo-600 mr-5  focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-icons text-8xl">
                            {isMenuOpen ? "close" : "menu"}
                        </span>
                    </button>


                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-3 items-center mr-9 p-3">
                        {["Home", "About", "Services", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium hover:bg-indigo-600 hover:text-white transition duration-300 cursor-pointer"
                            >
                                {item}
                            </a>
                        ))}
                        <p
                            onClick={() => navigate("/login")}
                            className="px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-600 hover:text-white transition duration-300 cursor-pointer"
                        >
                            Sign In
                        </p>
                        <p
                            onClick={() => navigate("/register")}
                            className="px-4 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-300 cursor-pointer"
                        >
                            Register
                        </p>
                    </nav>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden px-4 pb-4 space-y-2 mt-2 bg-white">
                        {["Home", "About", "Services", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={handleLinkClick}
                                className="block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium hover:bg-indigo-600 hover:text-white transition duration-300"
                            >
                                {item}
                            </a>
                        ))}
                        <p
                            onClick={() => {
                                handleLinkClick();
                                navigate("/signin");
                            }}
                            className="block px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-600 hover:text-white transition duration-300 cursor-pointer"
                        >
                            Sign In
                        </p>
                        <p
                            onClick={() => {
                                handleLinkClick();
                                navigate("/register");
                            }}
                            className="block px-4 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-300 cursor-pointer"
                        >
                            Register
                        </p>
                    </div>
                )}
            </header>



            {/* Hero Section */}
            <section
                id="home"
                className="relative text-white min-h-screen flex items-center justify-center px-6 text-center pt-32 overflow-hidden"
            >
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="https://videos.pexels.com/video-files/7195710/7195710-uhd_2732_1440_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay (optional for dark tint) */}
                <div className="absolute top-0 left-0 w-full h-full  opacity-60 z-10"></div>

                {/* Content */}
                <div className="relative z-20">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to DocPen</h2>
                    <p className="text-lg mb-6">
                        Welcome to our online prescription site! Get ready to manage your medications with ease
                    </p>
                    <p className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-200 transition inline-block cursor-pointer">
                        Contact Us
                    </p>
                    <div className="mt-10 flex justify-center">
                        <a href="#about" className="animate-bounce text-white hover:text-indigo-200 transition">
                            <span class="material-symbols-outlined">arrow_downward</span>
                        </a>
                    </div>
                </div>
            </section>


            {/* About Section */}
            <section id="about" className="py-20 px-4 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold text-indigo-600 mb-4">About Us</h3>
                    <p className="text-gray-700">

                        DocPen (or your chosen site name) has been proudly serving the Kochi community for 8 years. We're more than just an online platform; we're a team of dedicated professionals committed to making your medication management simple and secure. We offer comprehensive services designed to cater to all your prescription needs, from easy refills to direct doctor consultations. Join our community of satisfied users and experience the difference that expert, convenient care makes.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-4 ">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold text-indigo-600 mb-12">Our Services</h3>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {[
                            {
                                title: "Simple Prescription Access",
                                desc: "Effortlessly find and understand your medications, ensuring you're always informed about your treatment."
                            },
                            {
                                title: "Confidential Care, Online",
                                desc: "Manage your health needs with privacy and ease through our secure and user-friendly platform."
                            },
                            {
                                title: "Your Health Journey, Simplified",
                                desc: "From initial consultation to seamless refills, we're here to support your complete medical prescription process."
                            }
                        ].map((service) => (
                            <div
                                key={service.title}
                                className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
                            >
                                <h4 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h4>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Developer Docs Section with Video Background */}
            <section className="relative py-20 px-4 bg-indigo-50 overflow-hidden mt-3">
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="https://videos.pexels.com/video-files/6129934/6129934-hd_1920_1080_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay for better contrast */}
                <div className="absolute top-0 left-0 w-full h-full  opacity-60 z-10"></div>

                {/* Text Content */}
                <div className="relative z-20 max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center text-white">
                    <div>
                        <h4 class="text-xl text-indigo-200 font-semibold mb-2">Trusted medical guidance</h4>
                        <h1 class="text-4xl font-bold mb-4">Your Guide to Prescriptions & Wellness</h1>
                        <p class="text-indigo-100 mb-4">
                            Navigate your medications with confidence, accessing clear details on usage, interactions, and general health information.
                        </p>
                        <p class="inline-flex items-center text-white hover:underline font-medium cursor-pointer">
                            Explore Details
                        </p>
                    </div>
                </div>
            </section>


            {/* Features Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
                    {/* Left Block */}
                    <div class="bg-indigo-50 rounded-lg  p-6 shadow-xl">
                        <h3 class="text-2xl font-bold text-indigo-600 mb-4">Simplify Your Prescription Process</h3>
                        <p class="text-gray-600 mb-4">
                            Connect effortlessly with doctors and manage your medication needs online. Whether it's a new script or a refill, we make getting your meds simple and secure.
                        </p>
                        <div class="bg-indigo-100 p-4 rounded">
                            <h4 class="text-xl font-semibold mb-2">Why Choose Our Service?</h4>
                            <p class="text-gray-700 mb-3">
                                We offer a blend of professional medical consultation, efficient prescription processing, and robust data security, ensuring a reliable and convenient health management experience.
                            </p>
                            <p class="block w-full text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 cursor-pointer">
                                Manage My Prescriptions
                            </p>
                        </div>
                    </div>

                    {/* Right Feature Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                        {[
                            {
                                icon: "MedicalServices", // Icon for medical services/doctors
                                title: "Certified Doctors",
                                desc: "Consult with licensed medical professionals who provide trusted online prescriptions and health advice."
                            },
                            {
                                icon: "ReceiptLong", // Icon for prescriptions/documents
                                title: "e-Prescription & Refills",
                                desc: "Easily get new prescriptions or refill existing ones, all managed digitally for your convenience."
                            },
                            {
                                icon: "Event", // Icon for scheduling
                                title: "Flexible Consultations",
                                desc: "Book virtual appointments at times that suit you—available on weekdays, weekends, or evenings."
                            },
                            {
                                icon: "LocalPharmacy", // Icon for pharmacy/medication
                                title: "Medication Delivery Support",
                                desc: "We help streamline the process of getting your prescribed medications delivered right to your doorstep."
                            },
                        ].map((feature) => (
                            <div key={feature.title} className="bg-gray-50 rounded p-4 shadow-xl">
                                <div className="text-indigo-600 text-3xl">
                                    <span className="material-icons-round">{feature.icon}</span>
                                </div>
                                <h4 className="text-lg font-semibold text-indigo-600 mt-2">{feature.title}</h4>
                                <p className="text-gray-600 mt-1">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-gray-100 rounded-4xl mx-8 my-5">
                <div className="max-w-xl mx-auto text-center animate-fade-in">
                    <h3 className="text-3xl font-bold text-indigo-600 mb-6 flex justify-center items-center gap-2">
                        <span className="material-icons text-8xl text-indigo-500 ">email</span>
                        Contact Us
                    </h3>
                    <p className="text-gray-600 mb-8">Have questions? Reach out to our team—we’d love to help you get started!</p>
                    <form className="space-y-4 text-left">
                        <div className="flex items-center gap-2">
                            <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div className="flex items-start gap-2">
                            <textarea rows="4" placeholder="Message" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className=" bg-indigo-600 text-white px-2 py-3 rounded hover:bg-indigo-700 transition duration-300 w-50% sm:w-auto">
                                <span className="material-icons align-middle mr-1">send</span>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            

            <Footer/>
        </div>
    );
};

export default HomePage;
