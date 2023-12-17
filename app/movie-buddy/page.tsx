import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Header />
            <section className="relative h-auto md:h-screen min-h-[40rem] max-h-[120rem] hero pb-4">
                <div className="static  md:absolute md:top-1/2 md:left-1/2 w-11/12 max-w-[90rem] md:-translate-x-1/2 md:-translate-y-1/2 container">
                    <h1 className="uppercase tracking-normal text-center text-6xl pt-40 lg:text-7xl text-white">Movie Buddy</h1>
                    <p className="mt-12 mx-auto text-xl lg:text-3xl text-center text-white">Movie Buddy is a comprehensive web application designed to provide users with a seamless movie searching and browsing experience. With a user-friendly interface and powerful search capabilities. It also allows movie enthusiasts to explore a vast collection of films, discover detailed information about each movie, and make informed decisions on what to watch next.</p>
                    <Link href={`#projects`} className="mt-12 md:mt-20 mx-auto text-center block text-xl lg:text-3xl py-4 px-16 w-72 text-p-brown font-semibold bg-white uppercase rounded-lg mb-20 hover:transition-all hover:duration-500 hover:-translate-y-2 hover:bg-p-brown hover:text-white">Live Link</Link>
                </div>
                <div className="hidden lg:block lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:border-[2px] lg:border-[#eeeeee]">
                    <div className="w-12 p-2 border-b-[2px] hover:bg-[#895C5C]">
                        <Link href="https://github.com/Darhniel">
                            <Image 
                                src={`/github-ico.png`}
                                alt=""
                                width={40}
                                height={40}
                            />
                        </Link>
                        
                    </div>
                    <div  className="w-12 p-2 hover:bg-[#895C5C]">
                        <Link href="https://twitter.com/aspiring_god?s=08">
                            <Image 
                                src={`/twitter-ico.png`}
                                alt=""
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="py-20 flex flex-col items-center gap-8 md:w-[60rem] md:mx-auto md:justify-center">
                <div className="px-4 w-11/12 md:w-[30rem]">
                    <Image
                        src={`/project-mockup-example.jpeg`}
                        alt="Software Screenshot"
                        loading="lazy"
                        width={60}
                        height={60}
                        className="w-full"
                    />
                </div>
                <div className="md:w-[25rem]">
                    <h3 className="text-center capitalize font-semibold text-4xl mb-8 md:text-left md:mb-4">Project overview</h3>
                    <p className="text-center text-p-grey leading-6 px-4 md:text-left md:px-0">
                        Movie Buddy is a comprehensive web application designed to provide users with a seamless movie searching and browsing experience. With a user-friendly interface and powerful search capabilities.
                    </p>
                    <p className="text-center text-p-grey leading-6 mb-8 px-6 md:text-left md:px-0">
                        It also allows movie enthusiasts to explore a vast collection of films, discover detailed information about each movie, and make informed decisions on what to watch next.
                    </p>
                    <Link
                        href="./movie-buddy"
                        className="bg-p-brown py-4 px-8 mx-auto block w-44 rounded-lg uppercase md:ml-0 font-semibold text-white text-center hover:transition-all hover:duration-500 hover:-translate-y-2"
                        target="_blank"
                    >
                        Case Study
                    </Link>
                </div>
            </div>

            <div className="w-1/2 mx-auto">
                <h3 className="font-bold text-2xl mb-6">My Skills</h3>
                <div className="flex flex-wrap">
                    <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">tailwind css</div>
                    <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">typescript</div>
                    <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">git</div>
                    <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">github</div>
                    <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">responsive design</div>
                    <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">next js</div>
                    <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">tmdb api</div>
                </div>
            </div>

            <Footer />
        </>
    )
}