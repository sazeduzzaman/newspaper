import Link from 'next/link';
import DynamicBanglaDate from '@/components/DynamicBanglaDate/page';
import SocialLinks from '@/components/SocialLinks/page';
import { newsCategory } from '@/lib/apis/NewsCategory';
import NewsCategory from './NewsCategory/NewsCategory';

export default async function Page() {
    const categoryItems = await newsCategory(); // Fetch data from the server

    return (
        <>
            {/* Top Bar */}
            <div className='bg-sky-700 dark:text-white text-white text-center px-4 py-2'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 items-center'>
                    {/* Current Date */}
                    <div className='text-start text-[14px]'>
                        <DynamicBanglaDate />
                    </div>

                    {/* Some Links */}
                    <div className='space-x-4 text-center'>
                        <Link href='#' className='hover:underline text-[14px]'>
                            বিজ্ঞাপন
                        </Link>
                        <Link
                            href='/epaper'
                            className='hover:underline text-[14px]'
                        >
                            ই-পেপার
                        </Link>
                        <Link
                            href='/search'
                            className='hover:underline text-[14px]'
                        >
                            আর্কাইভ
                        </Link>
                        <Link
                            href='/advertisement/adcost'
                            className='hover:underline text-[14px]'
                        >
                            বিজ্ঞাপনের মূল্য
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className='space-x-4'>
                        <SocialLinks />
                    </div>
                </div>
            </div>
            <NewsCategory categoryItems={categoryItems} />
        </>
    );
}
