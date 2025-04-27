import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks/page";

const Footer = () => {
  return (
    <div>
      <div className="main-bg">
        <div className="container mx-auto  sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-6 justify-center items-center">
            <div className="col-span-12 xl:col-span-8">
              <img
                className="w-[250px] bg-white p-3"
                src="https://ajkal.us/_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fsettings%2Flogo_red.png&w=384&q=75"
                alt="Footer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto sm:px-0 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-6 justify-center items-start">
            <div>
              <ul>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    বাংলাদেশ
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    সারা বাংলা
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    প্রবাস
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    কমিউনিটি সংবাদ
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    অন্যান্য
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    যোগাযোগ করুন
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    বাংলাদেশ
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    সারা বাংলা
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    প্রবাস
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    কমিউনিটি সংবাদ
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    অন্যান্য
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    যোগাযোগ করুন
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    বাংলাদেশ
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    সারা বাংলা
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    প্রবাস
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    কমিউনিটি সংবাদ
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    অন্যান্য
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    যোগাযোগ করুন
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    বাংলাদেশ
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    সারা বাংলা
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    প্রবাস
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    কমিউনিটি সংবাদ
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    অন্যান্য
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/page1" className="footer-links hover:underline">
                    যোগাযোগ করুন
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              ডাউনলোড করুন।
              <div>
                <Link href={"#"}>
                  <img
                    className="w-[180px]"
                    src="https://ajkal.us/img/settings/play.png"
                    alt=""
                  />
                </Link>
                <Link href={"#"}>
                  <img
                    className="w-[180px]"
                    src="	https://ajkal.us/img/settings/applestore.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto sm:px-0 pb-10 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center">
            <div className="">
              <h1 className="text-3xl">সম্পাদক ও প্রকাশক : শাহ্‌ নেওয়াজ</h1>
              <p className="pt-5 pb-1">
                ফোন:{" "}
                {"+1646 267-7751".replace(
                  /\d/g,
                  (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]
                )}{" "}
                ফ্যাক্স:{" "}
                {"+718-865-9130".replace(
                  /\d/g,
                  (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]
                )}
              </p>
              <p className="pb-1">
                ঠিকানাঃ ৭১-১৬ ৩৫th Ave, Jackson Heights, NY ১১৩৭২, USA.
              </p>
              <p className="pb-1">
                ইমেইল: ajkalnews@gmail.com , editor@ajkalusa.com
              </p>
              <p className="pb-1">
                কপিরাইট ©{" "}
                {new Date()
                  .getFullYear()
                  .toString()
                  .replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)])}{" "}
                সাপ্তাহিক আজকাল কর্তৃক সর্বসত্ব ® সংরক্ষিত
              </p>
            </div>

            <div className="">
              <p className="text-end pe-3 pb-5">অনুসরণ করুন</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto sm:px-0 py-3 second-bg">
        <div className="container mx-auto sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-start">
            <div className="">
              <small>
                এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি ছাড়া ব্যবহার
                বেআইনি।
              </small>
            </div>
            <div className="">
              <Link href={'https://flixzaglobal.com/'} target="_blank">
                <p className="text-end flex justify-end">
                  <small>Developed With Love By</small>
                  {/* <img src="https://control.ajkal.us/flixzaglobal.webp" alt="Flixza Global" className="p-2">< */}
                  <img
                    className="w-[80px] ps-3"
                    src="https://control.ajkal.us/flixzaglobal.webp"
                    alt=""
                  />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
