import Link from "next/link";
import React from "react";

const AboutInfo = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="text-black py-20">
          <div className="border-b-2 border-[#165588] pb-2 w-[20%]">
            <h1 className="text-3xl font-bold text-[#165588]">About Us</h1>
          </div>
          <div className="pt-8 space-y-6">
            <p className="text-justify">
              Welcome to Weekly Ajkal, your premier source for insightful news
              and captivating stories. Established with a vision to provide a
              comprehensive perspective on the events shaping our world, Weekly
              Ajkal stands as a beacon of journalistic integrity and excellence
              in today's media landscape.
            </p>
            <div>
              <img
                className="w-2/4"
                src="/assets/images/others/fb-logo.jpg"
                alt=""
              />
            </div>
            <p className="text-justify">
              At Weekly Ajkal, we believe in the transformative power of
              information. As your trusted weekly companion, we endeavor to
              bring you the latest developments and thought-provoking analyses
              from around the globe. Our dedicated team of journalists, writers,
              and editors are committed to delivering accurate, balanced, and
              impactful reporting that informs, educates, and inspires.
            </p>
            <p className="text-justify">
              Our coverage spans a wide spectrum of topics, ranging from
              breaking news and current affairs to in-depth features and
              cultural highlights. Whether you're interested in politics,
              business, technology, arts, or sports, Weekly Ajkal has something
              for everyone. We strive to capture the pulse of society,
              amplifying diverse voices and perspectives to foster greater
              understanding and empathy
            </p>
            <p className="text-justify">
              As advocates for transparency and accountability, we hold
              ourselves to the highest standards of ethical journalism. Our
              commitment to truth and accuracy is unwavering, ensuring that our
              readers can rely on us as a trusted source of information in an
              era of misinformation and fake news.
            </p>
            <p className="text-justify">
              Weekly Ajkal is more than just a news outlet; it's a community of
              engaged and informed individuals who share a passion for knowledge
              and insight. We invite you to join us on this journey as we
              explore the complexities of our world, celebrate the richness of
              human experience, and seek to make a positive impact in our
              communities.
            </p>
            <p className="text-justify">
              Thank you for choosing Weekly Ajkal as your weekly window to the
              world. Together, let's embark on a journey of discovery,
              enlightenment, and growth with each edition.
            </p>
          </div>
        </div>
        <div className="text-black py-20">
          <div className="border-b-2 border-[#165588] pb-2 w-[58%]">
            <h1 className="text-3xl font-bold text-[#165588]">
              সাপ্তাহিক আজকাল এর নিয়ে
            </h1>
          </div>

          <div className="pt-8 space-y-6">
            <p className="text-justify">
              Weekly Ajkal-এ আপনাকে স্বাগতম, এটি আপনার সাপ্তাহিক নিউজ এবং
              আকর্ষণীয় গল্পের প্রধান উৎস। একটি বিস্তৃত দৃষ্টিভঙ্গি প্রদান করার
              লক্ষ্য নিয়ে প্রতিষ্ঠিত, Weekly Ajkal আমাদের পৃথিবীকে প্রভাবিত করা
              ঘটনাগুলির উপর একটি পূর্ণাঙ্গ দৃষ্টিভঙ্গি প্রদান করে। এটি আজকের
              মিডিয়া পরিসরে সাংবাদিকতার সততা এবং উৎকর্ষতার একটি আলোচক হিসেবে
              দাঁড়িয়ে রয়েছে।
            </p>
            <div>
              <img
                className="w-full"
                src="/assets/images/others/banner.jpg"
                alt="ফেসবুক লোগো"
              />
            </div>
            <p className="text-justify">
              Weekly Ajkal-এ, আমরা তথ্যের রূপান্তরক ক্ষমতায় বিশ্বাস করি। আপনার
              বিশ্বস্ত সাপ্তাহিক সঙ্গী হিসেবে, আমরা আপনাকে বিশ্বের সর্বশেষ
              উন্নয়ন এবং চিন্তনীয় বিশ্লেষণগুলি নিয়ে আসার চেষ্টা করি। আমাদের
              নিবেদিত সাংবাদিক, লেখক এবং সম্পাদকদের দল সঠিক, সুষম এবং প্রভাবশালী
              প্রতিবেদন প্রদান করতে প্রতিশ্রুতিবদ্ধ, যা তথ্য দেয়, শিক্ষা দেয়
              এবং অনুপ্রাণিত করে।
            </p>
            <p className="text-justify">
              আমাদের কভারেজের মধ্যে রয়েছে বিস্তৃত বিষয়বস্তু, যা ব্রেকিং নিউজ
              এবং বর্তমান ঘটনাগুলি থেকে শুরু করে গভীর বিশ্লেষণ এবং সাংস্কৃতিক
              হাইলাইট পর্যন্ত। আপনি যদি রাজনীতি, ব্যবসা, প্রযুক্তি, শিল্প বা
              ক্রীড়া সম্পর্কে আগ্রহী হন, তবে Weekly Ajkal সবার জন্য কিছু না
              কিছু নিয়ে এসেছে। আমরা সমাজের ধারা ধারণ করতে চেষ্টা করি, বিভিন্ন
              কণ্ঠস্বর এবং দৃষ্টিভঙ্গি প্রচারের মাধ্যমে আরও বেশি বোঝাপড়া এবং
              সহানুভূতির জন্য।
            </p>
            <p className="text-justify">
              স্বচ্ছতা এবং জবাবদিহিতার পক্ষে পক্ষাবলম্বনকারী হিসেবে, আমরা আমাদের
              সাংবাদিকতার নীতিতে সর্বোচ্চ মান বজায় রাখি। সত্য এবং সঠিকতার প্রতি
              আমাদের প্রতিশ্রুতি অবিচলিত, যাতে আমাদের পাঠকরা আমাদেরকে
              বিশ্বাসযোগ্য তথ্যের উৎস হিসেবে বিশ্বাস করতে পারে, মিথ্যা নিউজ এবং
              ভুল তথ্যের যুগে।
            </p>
            <p className="text-justify">
              Weekly Ajkal শুধুমাত্র একটি নিউজ আউটলেট নয়; এটি জ্ঞানের প্রতি
              আগ্রহী এবং তথ্যপ্রযুক্ত ব্যক্তিদের একটি সম্প্রদায়, যারা জ্ঞান এবং
              দৃষ্টিভঙ্গির প্রতি আগ্রহী। আমরা আপনাকে আমাদের সাথে এই যাত্রায় যোগ
              দিতে আমন্ত্রণ জানাচ্ছি, যেখানে আমরা আমাদের পৃথিবীর জটিলতা অন্বেষণ
              করি, মানব অভিজ্ঞতার ঐতিহ্য উদযাপন করি, এবং আমাদের সম্প্রদায়গুলিতে
              ইতিবাচক প্রভাব ফেলতে চাই।
            </p>
            <p className="text-justify">
              Weekly Ajkal-কে আপনার সাপ্তাহিক জানালা হিসেবে বেছে নেওয়ার জন্য
              আপনাকে ধন্যবাদ। একসাথে, আসুন আমরা প্রতিটি সংস্করণ নিয়ে অনুসন্ধান,
              আলোকিতকরণ এবং বৃদ্ধি করার এই যাত্রায় এগিয়ে যাই।
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
