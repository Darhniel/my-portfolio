import Link from "next/link";
import Image from "next/image";
import Form from './Form'

export default function Main() {

    return (
        <>
            <section className="relative h-auto md:h-screen min-h-[40rem] max-h-[120rem] hero pb-4">
                <div className="static  md:absolute md:top-1/2 md:left-1/2 w-11/12 max-w-[90rem] md:-translate-x-1/2 md:-translate-y-1/2 container">
                    <h1 className="uppercase tracking-normal text-center text-6xl pt-40 lg:text-7xl text-white">Hey, My name is Daniel</h1>
                    <p className="mt-12 mx-auto text-xl lg:text-3xl text-center text-white">A Frontend Web Developer focused on building the Frontend of Websites and Web Applications.</p>
                    <Link href={`#projects`} className="mt-12 md:mt-20 mx-auto text-center block text-xl lg:text-3xl py-4 px-16 w-min text-p-brown font-semibold bg-white uppercase rounded-lg mb-20 hover:transition-all hover:duration-500 hover:-translate-y-2 hover:bg-p-brown hover:text-white">Projects</Link>
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
                <div></div>
            </section>
            <section id="about" className="pt-16 pb-8 bg-[#FAFAFA]">
                <div className="mb-16">
                    <h2 className="uppercase text-4xl text-center font-semibold">About Me</h2>
                    <span className="block h-2 w-12 my-4 mx-auto bg-p-brown rounded-lg"></span>
                    <p className="text-p-grey font-semibold text-center px-4 md:pr-0">
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology...
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:w-[64rem] lg:mx-auto lg:grid-cols-2 lg:gap-24">
                    <div>
                        <h3 className="font-bold text-2xl pl-4 mb-6">Get to know me!</h3>
                        <p className="text-p-grey font-medium px-4 mb-4 md:pr-0">
                            Hey! It&lsquo;s <strong>Daniel</strong> and I&lsquo;m a <strong>Frontend Web Developer</strong> located in Lagos, Nigeria. You can check out some of my work in the projects section.
                        </p>
                        <p className="text-p-grey font-medium px-4 md:pr-0">
                            I&lsquo;m available for <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have an opportunity that matches my skills and experience then don&lsquo;t hesitate to contact me here.
                        </p>
                        <Link href={`#contact`} className="block ml-4 rounded-lg uppercase py-4 px-16 w-min mt-8 bg-p-brown font-semibold text-white hover:transition-all hover:duration-500 hover:-translate-y-2">Contact</Link>
                    </div>
                    <div className="ml-4">
                        <h3 className="font-bold text-2xl mb-6">My Skills</h3>
                        <div className="flex flex-wrap">
                            <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">html</div>
                            <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">css</div>
                            <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">javascript</div>
                            <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">react</div>
                            <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">git</div>
                            <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">github</div>
                            <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">responsive design</div>
                            <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">python</div>
                            <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">node js</div>
                            <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">next js</div>
                            <div className="uppercase bg-p-bg-grey mb-4 mr-4 text-lg font-semibold text-p-grey rounded-lg py-2 px-4">express</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" className="py-16">
                <div className="mb-16">
                    <h2 className="uppercase text-4xl text-center font-semibold">Projects</h2>
                    <span className="block h-2 w-12 my-4 mx-auto bg-p-brown rounded-lg"></span>
                    <p className="text-p-grey font-semibold text-center">
                        Here you will find some of the personal and clients projects that I created, with each project having it&lsquo;s own case study.....
                    </p>
                </div>
                <div>
                    <div className="flex flex-col items-center gap-8 md:w-[60rem] md:mx-auto md:flex-row md:justify-center">
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
                            <h3 className="text-center uppercase text-4xl mb-8 md:text-left md:mb-4">Movie Buddy</h3>
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
                </div>
            </section>
            <section id="contact" className="py-16 px-4 md:p-16 hero">
                <h2 className="uppercase text-4xl text-center font-semibold text-white">Contact</h2>
                <span className="block h-2 w-12 my-4 mx-auto bg-white rounded-lg"></span>
                <p className="text-white font-medium text-center">
                    Feel free to contact me by submitting te form below and I will get back to you as soon as possible.
                </p>
                <Form />
                {/* <form action="" className="md:w-1/2 mx-auto bg-white rounded-lg mt-8 p-8">
                    <div className="mb-6">
                        <label htmlFor="name" className="text-p-grey font-semibold block mb-2">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" className="bg-p-bg-grey w-full py-2 px-4 rounded-lg outline-none placeholder:font-semibold"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-p-grey font-semibold block mb-2">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" className="bg-p-bg-grey w-full py-2 px-4 rounded-lg outline-none placeholder:font-semibold"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-p-grey font-semibold block mb-2">Message</label>
                        <textarea name="message" id="message" cols={30} rows={10} placeholder="Enter Your Message" className="bg-p-bg-grey w-full py-2 px-4 rounded-lg outline-none placeholder:font-semibold">

                        </textarea>
                    </div>

                    <input type="submit" value="submit" className="block rounded-lg uppercase py-4 px-16 w-full mt-8 bg-p-brown font-semibold text-white hover:transition-all hover:duration-500 hover:-translate-y-2 cursor-pointer" />
                </form> */}
            </section>
        </>
    )
}