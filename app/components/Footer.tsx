import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='flex flex-col md:flex-row md:gap-96 md:items-center md:justify-center text-white bg-footer-black'>
            <div className='my-8 mx-8'>
                <h2 className='font-semibold uppercase mb-8'>social</h2>
                <ul className='flex gap-4'>
                    <li>
                        <Link href="https://github.com/Darhniel">
                            <Image 
                                src={`/github-ico.png`}
                                alt=""
                                width={30}
                                height={30}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/aspiring_god?s=08">
                            <Image 
                                src={`/twitter-ico.png`}
                                alt=""
                                width={30}
                                height={30}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='m-8'>
                <h2 className='font-semibold uppercase mb-8'>Daniel</h2>
                <p className='max-w-xl'>
                    A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                </p>
            </div>
        </footer>
    )
}