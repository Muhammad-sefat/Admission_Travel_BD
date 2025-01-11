import React from "react";
import image from "../assets/contact.png";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#e7f8d9] h-[40vh] mb-8 rounded flex justify-center items-center text-4xl font-semibold">
        আমাদের সম্পর্কে
      </div>
      <div>
        <h2 className="text-left font-semibold text-2xl mb-5">
          ছোট করে জেনে নিন আমাদের শুরু থেকে এই পর্যন্তের যাত্রা সম্পর্কে...
        </h2>
        <div className=" flex justify-between items-center gap-5 text-left">
          <div className="w-[40%] space-y-3">
            <p>
              ২০১৭ সালে এডমিশন ট্রাভেলার বিডি প্রথম তার যাত্রা শুরু করে। মাত্র
              একটি বাস দিয়ে কুমিল্লা থেকে সিলেটের শাহজালাল বিজ্ঞান ও প্রযুক্তি
              বিশ্ববিদ্যালয়ে যাওয়ার মাধ্যমে আমাদের সেবাটি শুরু হয়। কোম্পানির
              ফাউন্ডার ও ব্যবস্থাপনা পরিচালক ও সংশ্লিষ্ট সকলের সঠিক পদক্ষেপ এবং
              সহযোগিতায় সেই একটি বাস থেকে আজ প্রতি বছর একাধিক বাস যাচ্ছে প্রায়
              প্রতিটি পাবলিক বিশ্ববিদ্যালয়ে। কুমিল্লা থেকে যাত্রা শুরু হলেও ২০২১
              সালে চট্টগ্রাম ও ২০২২ সালে ঢাকা থেকেও সার্ভিস চালু করা হয়। ঢাকা
              বিশ্ববিদ্যালয়, চট্টগ্রাম বিশ্ববিদ্যালয়, জাহাংগীরনগর বিশ্ববিদ্যালয়,
              রাজশাহী বিশ্ববিদ্যালয়, চুয়েট/কুয়েট/রুয়েট, কৃষিগুচ্ছ সহ আরো অনেক
              পাবলিক বিশ্ববিদ্যালয়ে আমাদের উদ্দেশ্যে আমাদের বাসগুলো ছেড়ে যায়।
            </p>
            <p>
              আমাদের সর্বোচ্চ চেষ্টা থাকে যেন প্রতিটি পরীক্ষার্থীকে সঠিক সময়ে
              তার পরীক্ষার কেন্দ্রে সুস্থভাবে পৌছে দিয়ে আবার তার বাসা পর্যন্ত
              ফিরিয়ে আনতে পারি। আমাদের প্রতিটি বাসে একজন করে অভিজ্ঞ গাইড থাকে।
              এসি/নন এসি সেরা মানের চেয়ারকোচ বাসগুলো আমরা নিয়ে থাকি। ভালো সেবায়
              আমরা প্রতিজ্ঞাবদ্ধ।
            </p>
          </div>

          <img className="w-[55%]" src={image} alt="image" />
        </div>
      </div>
      <div className="md:flex justify-between items-center px-14 bg-neutral h-[40vh] text-center text-white mt-5">
        <div className="text-2xl font-semibold text-left">
          আমাদের পরিসংখ্যান ২০২৪ সাল <br />
          পর্যন্ত...
        </div>
        <div>
          <p className="text-5xl font-bold mb-2">7,000 +</p>
          <p className="text-xl font-semibold">সেবা গ্রহীতা</p>
        </div>
        <div>
          <p className="text-5xl font-bold mb-2">500 +</p>
          <p className="text-xl font-semibold">সফল ট্রিপ</p>
        </div>
        <div>
          <p className="text-5xl font-bold mb-2">0</p>
          <p className="text-xl font-semibold">দূর্ঘটনা</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AboutUs;
