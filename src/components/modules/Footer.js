import Link from 'next/link';

import Accordion from './Accordion';
import FooterContract from './FooterContract';

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

import { IoIosArrowUp } from "react-icons/io";

import { BiSupport } from "react-icons/bi";
import { BiBasket } from "react-icons/bi";


function Footer() {
    return (
        <div className='mt-2'>
            {/* Ipad & disktop Size */}
            <div className='z-10 hidden sm:inline-block w-full px-3 sm:px-4 border-t-1 border-t-gray-200 shadow-2xl shadow-gray-300 sm:mt-0'>

                {/* Logo & Button */}
                <div className='flex justify-between items-center w-full mt-2'>
                    <div className="flex justify-center items-center ">
                        <span className="font-bold text-red-600">ویترین</span>
                    </div>

                    <button className='hidden sm:flex justify-center items-center space-x-2 p-1.5 me-2.5 rounded-md border border-gray-200 hover:border-black hover:*:text-black transition cursor-pointer'>
                        <IoIosArrowUp className='text-[10px] text-gray-500 transition' />

                        <span className="text-[9px] text-gray-500 transition">بازگشت به بالا</span>
                    </button>
                </div>

                {/* Countact-Us__Menu */}
                <div className='flex justify-start w-full'>
                    <ul className='flex divide-x divide-gray-300 space-x-1 sm:space-x-1.5 md:space-x-2 p-1'>
                        <li className='pe-3'>
                            <span className='text-[5px] sm:text-[7px] md:text-[8px] text-gray-500'>تلفن پشتیبانی _ 044-4462-5920 </span>
                        </li>
                        <li className='pe-3'>
                            <span className='text-[5px] sm:text-[7px] md:text-[8px] text-gray-500'> 0914-545-0730 </span>
                        </li>
                        <li className=''>
                            <span className='text-[5px] sm:text-[7px] md:text-[8px] text-gray-500'> ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم </span>
                        </li>
                    </ul>
                </div>

                {/* Contract */}
                <div className='flex sm:justify-between md:justify-evenly items-center *:flex *:flex-col *:justify-center *:items-center sm:my-8 md:my-10'>
                    <FooterContract image="cash-on-delivery.svg" sectiontitle="امکان پرداخت درب محل" />
                    <FooterContract image="days-return.svg" sectiontitle="هفت روز زمانت بازگشت کالا" />
                    <FooterContract image="express-delivery.svg" sectiontitle="امکان تحویل اکسپرس" />
                    <FooterContract image="original-products.svg" sectiontitle="زمانت اصل بودن کالا" />
                    <FooterContract image="support.svg" sectiontitle="۷ روز هفته، ۲۴ ساعته" />
                </div>

                {/* Q & A || NewsLatter  */}
                <div className='flex justify-between items-center w-full *:flex *:justify-start'>

                    {/* Q & A */}
                    <div className='p-2'>
                        <ul className='flex flex-col *:w-full'>
                            <li className='mb-1 w-full'>
                                <span className="sm:text-[9px] md:text-[10px] lg:text-[12px] text-gray-800 "> با ویترین </span>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link href="/" className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">فروش در ویترین</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">فرصت های شغلی</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">گذارش تخلف در ویترین</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">تماس با ویترین</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">درباره ویترین</Link>
                            </li>
                        </ul>
                    </div>

                    <div className=''>
                        <ul className='flex flex-col *:w-full'>
                            <li className='mb-1 w-full'>
                                <span className="sm:text-[9px] md:text-[10px] lg:text-[12px] text-gray-800 "> با ویترین </span>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">فروش در ویترین</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">فرصت های شغلی</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">گذارش تخلف در ویترین</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">تماس با ویترین</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">درباره ویترین</Link>
                            </li>
                        </ul>
                    </div>

                    <div className=''>
                        <ul className='flex flex-col *:w-full'>
                            <li className='mb-1 w-full'>
                                <span className="sm:text-[9px] md:text-[10px] lg:text-[12px] text-gray-800 "> با ویترین </span>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">فروش در ویترین</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">فرصت های شغلی</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">گذارش تخلف در ویترین</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">تماس با ویترین</Link>
                            </li>
                            <li className='px-1 lg:my-0.5'>
                                <Link className='sm:text-[8px] lg:text-[9.5px] text-gray-500' href="/">درباره ویترین</Link>
                            </li>
                        </ul>
                    </div>


                    {/* NewsLatter */}
                    <div className=''>
                        <div className='flex flex-col w-full'>
                            <span className='w-full'>
                                <span className="sm:text-[9px] md:text-[10px] lg:text-[12px] text-gray-800 "> همراه ما باشید! </span>
                            </span>

                            <div className='w-[90%]'>
                                <div className='flex justify-between items-center  *:text-gray-400 sm:my-2 lg:my-4 *:cursor-pointer'>
                                    <Link href="/" className='sm:text-[17px] md:text-[20px]'>
                                        <FaLinkedin />
                                    </Link>
                                    <Link href="/" className='sm:text-[17px] md:text-[20px]'>
                                        <FaInstagram />
                                    </Link>
                                    <Link href="/" className='sm:text-[17px] md:text-[20px]'>
                                        <FaWhatsapp />
                                    </Link>
                                    <Link href="/" className='sm:text-[17px] md:text-[20px]'>
                                        <FaTwitter />
                                    </Link>
                                    <Link href="/" className='sm:text-[17px] md:text-[20px]'>
                                        <SiAparat />
                                    </Link>
                                </div>
                                <div className='flex flex-col justify-center items-start w-full'>
                                    <span className='sm:text-[8px] md:text-[10px] text-gray-800 '>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</span>

                                    <div className='flex justify-between items-center w-full mt-1.5'>
                                        <input placeholder='ایمیل شما' className='w-[78%] sm:py-1 lg:py-2 px-1 rounded-md sm:placeholder:text-[8px] md:placeholder:text-[10px] text-[12px] lg:text-[9px] sm:text-[10px] placeholder:text-gray-600 border-none focus:border-none outline-none focus:outline-none bg-gray-300' />
                                        <button className='w-[20%] sm:py-1.5 lg:py-2.5 px-1 rounded-md bg-red-500 text-white text-[8px] lg:text-[10px] cursor-pointer'>ثبت</button>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >

                {/* Enamad & Discription */}
                <div className='flex sm:flex-col md:flex-row justify-evenly items-center w-full my-5 border-t border-gray-300 py-5'>
                    {/* Discription */}
                    <div className='flex flex-col items-start justify-center sm:w-[100%] md:w-[60%]'>
                        <div className='mb-2'>
                            <p className='text-[12px] text-gray-800'> ویترین; فروشگاه اینترنتی ایران </p>
                        </div>
                        <div>
                            <span className='text-[8px] text-gray-500 leading-3'>فروشگاه آنلاین ما با ارائه مجموعه‌ای متنوع از محصولات باکیفیت، تلاش می‌کند تجربه‌ای سریع، مطمئن و لذت‌بخش از خرید اینترنتی را برای شما فراهم کند. تمامی کالاها با دقت انتخاب شده‌اند تا از نظر کیفیت، اصالت و ارزش خرید، انتظارات شما را برآورده کنند. امکان بررسی مشخصات، مقایسه محصولات و ثبت سفارش تنها در چند دقیقه، خرید را ساده‌تر از همیشه کرده است. با ارسال سریع، پشتیبانی پاسخگو و تضمین اصالت کالا، می‌توانید با اطمینان خرید خود را انجام دهید. هدف ما ایجاد تجربه‌ای رضایت‌بخش برای مشتریان است؛ از لحظه انتخاب محصول تا زمان تحویل سفارش. همواره تلاش می‌کنیم با ارائه قیمت‌های مناسب، تنوع بالا و خدمات قابل اعتماد، خرید آنلاین را به تجربه‌ای آسان و مطمئن تبدیل کنیم. در فروشگاه ما، رضایت مشتری در اولویت قرار دارد. به همین دلیل، اطلاعات کامل هر محصول، تصاویر باکیفیت و مشخصات دقیق در اختیار شما قرار گرفته است تا بتوانید بهترین انتخاب را داشته باشید. ما معتقدیم خرید اینترنتی باید سریع، شفاف و بدون دغدغه باشد و همواره در مسیر بهبود خدمات و افزایش کیفیت تجربه کاربران گام برمی‌داریم.</span>
                        </div>
                    </div>

                    {/* Enamd */}
                    <div className='flex justify-evenly items-center sm:w-[100&] md:w-[35%] *:p-2 sm:mt-4 md:mt-0 sm:space-x-2 md:space-x-0 *:border *:border-gray-300 '>
                        <Link href="/">
                            <img className='w-[60px] h-[80px] object-center object-cover' src='/Images/Validity/logo.png' alt='logo' />
                        </Link>
                        <Link href="/">
                            <img className='w-[60px] h-[80px] object-center object-cover' src='/Images/Validity/rezi.webp' alt='rezi' />
                        </Link>
                        <Link href="/">
                            <img className='w-[60px] h-[80px] object-center object-cover' src='/Images/Validity/sapra.webp' alt='sapra' />
                        </Link>
                        <Link href="/">
                            <img className='w-[60px] h-[80px] object-center object-cover' src='/Images/Validity/kasbokar.webp' alt='kasbokar' />
                        </Link>
                    </div>
                </div>
            </div >

            {/* Start Mobile Size */}
            < div className='z-10 sm:hidden flex flex-col gap-y-0.5 w-full p-2 *:py-1 border-t border-t-gray-300 shadow-xl mt-2' >
                <div className='flex justify-center items-center w-full'>
                    <button className='py-1.5 px-2 text-[10px] rounded-full text-gray-600 bg-white border border-gray-300 hover:text-black hover:border-gray-500 transition-all cursor-pointer'>رفتن به بالا</button>
                </div>

                <div className='flex justify-between items-center w-full border-b border-b-gray-300'>
                    <div className='flex items-center justify-center gap-x-1'>
                        <BiSupport className='text-[12px] border border-gray-300 rounded-full w-[20px] h-[20px] p-0.5 bg-white' />
                        <span className='text-[8px] text-gray-500'>هفت روز هفته, 24 ساعت</span>
                    </div>

                    <Link href="/contact-us" className='py-1.5 px-2 text-[9px] rounded-full bg-white text-gray-600 border border-gray-300 hover:text-white hover:bg-red-500 hover:border-white transition-all cursor-pointer'> تماس </Link>
                </div>

                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center justify-center gap-x-1'>
                        <BiBasket className='text-[12px] rounded-full w-[20px] h-[20px] p-0.5 bg-red-600 text-white' />
                        <span className='text-[8px] text-gray-500'>تجربه خرید بهتر در ویترین</span>
                    </div>
                </div>

                <div className='*:p-1'>
                    <Accordion sectiontitle="با ویترین" />
                    <Accordion sectiontitle="آموزش خرید" />
                    <Accordion sectiontitle="پشتیبانی" />
                </div>
            </div >
        </div>
    )
}

export default Footer
