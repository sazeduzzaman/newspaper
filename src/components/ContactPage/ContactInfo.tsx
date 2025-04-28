import Link from "next/link";
import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        <div className="text-black py-20">
          <div className="border-b-2 border-[#165588] pb-2 w-1/3">
            <h1 className="text-3xl font-bold text-[#165588]">Contact Us</h1>
          </div>
          <div className="pt-8 space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-[#165588]">
                Head Office
              </h4>
              <p>71-16 35th Ave, Jackson Heights, NY 11372, USA</p>
              <ul className="mt-2 space-y-1">
                <li>
                  Office:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    +1646 267-7751
                  </Link>
                </li>
                <li>
                  Advertisement:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    +1646 267-7751
                  </Link>
                </li>
                <li>
                  Fax:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    718-865-9130
                  </Link>
                </li>
                <li>
                  ePaper:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    +1646 267-7751
                  </Link>{" "}
                  (10am-6pm, Phone & WhatsApp)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#165588]">Email</h4>
              <p>info@ajkalusa.com</p>
              <ul className="mt-2 space-y-1">
                <li>
                  Print Ad Sales:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    ad@ajkalusa.com
                  </Link>
                </li>
                <li>
                  Digital Ad Sales:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    adsales@ajkalusa.com
                  </Link>
                </li>
                <li>Fax: +1646 267-7751</li>
                <li>
                  ePaper:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    epaper@ajkalusa.com
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#165588]">
                Follow us on
              </h4>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link href="/" className="hover:underline text-gray-400">
                    facebook.com/Dailyajkalusa
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline text-gray-400">
                    twitter.com/ajkalusa
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline text-gray-400">
                    instagram.com/ajkalusa
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline text-gray-400">
                    youtube.com/ajkalusa
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-black py-20">
          <div className="border-b-2 border-[#165588] pb-2 w-1/3">
            <h1 className="text-3xl font-bold text-[#165588]">যোগাযোগ করুন</h1>
          </div>

          <div className="pt-8 space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-[#165588]">
                প্রধান কার্যালয়
              </h4>
              <p>
                ৭১-১৬ ৩৫তম এভিনিউ, জ্যাকসন হাইটস, এনওয়াই ১১৩৭২, যুক্তরাষ্ট্র
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  অফিস:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    +১৬৪৬ ২৬৭-৭৭৫১
                  </Link>
                </li>
                <li>
                  বিজ্ঞাপন:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    +১৬৪৬ ২৬৭-৭৭৫১
                  </Link>
                </li>
                <li>
                  ফ্যাক্স:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    ৭১৮-৮৬৫-৯১৩০
                  </Link>
                </li>
                <li>
                  ই-পেপার:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    +১৬৪৬ ২৬৭-৭৭৫১
                  </Link>{" "}
                  (সকাল ১০টা থেকে সন্ধ্যা ৬টা, ফোন এবং হোয়াটসঅ্যাপ)
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#165588]">ইমেইল</h4>
              <p>info@ajkalusa.com</p>
              <ul className="mt-2 space-y-1">
                <li>
                  প্রিন্ট বিজ্ঞাপন:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    ad@ajkalusa.com
                  </Link>
                </li>
                <li>
                  ডিজিটাল বিজ্ঞাপন:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    adsales@ajkalusa.com
                  </Link>
                </li>
                <li>ফ্যাক্স: +১৬৪৬ ২৬৭-৭৭৫১</li>
                <li>
                  ই-পেপার:{" "}
                  <Link href="/" className="hover:underline text-gray-400">
                    epaper@ajkalusa.com
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#165588]">
                আমাদের অনুসরণ করুন
              </h4>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link href="/" className="hover:underline text-gray-400">
                    facebook.com/Dailyajkalusa
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline text-gray-400">
                    twitter.com/ajkalusa
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline text-gray-400">
                    instagram.com/ajkalusa
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline text-gray-400">
                    youtube.com/ajkalusa
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
