import Layout from "@/components/shared/layout/layout";
import React, { useEffect, useState } from "react";
import style from "../../styles/category.module.css";
import { IoIosArrowForward } from "react-icons/io";
import Lines from "@/components/news/categoryUi/lineCat/lines";
import { ImEye } from "react-icons/im";
import { GrFacebook, GrPinterest, GrTwitter } from "react-icons/gr";
import { BsLinkedin, BsReddit } from "react-icons/bs";
import { FaDigg } from "react-icons/fa";

const Details = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-07-20&sortBy=publishedAt&apiKey=fcca02606cb2467c8c1ec72c5f168d1e"
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data.articles.slice(0, 1)[0]);
      });
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-between w-[1200px] m-auto mt-4">
        <li className="list-none text-lg hover:text-blue-400 flex items-center">
          জাতীয় <IoIosArrowForward className="mx-2" /> ঢাকা
        </li>
      </div>
      <hr className="my-2" />
      <div className={style.detailsContainer}>
        <div className="w-[750px]">
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <br />
          <div className="flex items-end">
            <img className="w-[50px] mr-5" src="/noimage.gif" />
            <div>
              <h1 className="text-md">সোনারদেশ ২৪ ডেস্ক</h1>
              <hr />
              <p className="flex items-center text-sm">
                আপডেট করা হয়েছে মঙ্গলবার, ২৭ জুন, ২০২৩ /{" "}
                <ImEye className="mx-2" /> ১৯ বার পড়া হয়েছে
              </p>
            </div>
          </div>
          <br />
          <img className="w-full h-[450px]" src={data.urlToImage} alt="a" />
          <br />
          <h1 className="text-xl font-bold"> সোনারদেশ২৪: ডেস্কঃ </h1>
          <br />
          <p>
            আজ ২৭ জুন মঙ্গলবার পবিত্র হজ। আরাফাতের ময়দানে অবস্থান করাই হজের মূল
            আনুষ্ঠানিকতা। আজ এ ময়দান ‘লাব্বাইক আল্লাহুম্মা লাব্বাইক, লাব্বাইকা
            লা শারিকা লাকা লাব্বাইক, ইন্নাল হামদা ওয়াননি’মাতা লাকা ওয়াল মুলক, লা
            শারিকা লাক’ (আমি হাজির, হে আল্লাহ আমি হাজির, তোমার কোনো শরিক নেই, সব
            প্রশংসা ও নিয়ামত শুধু তোমারই, সব সাম্রাজ্যও তোমার) ধ্বনিতে মুখরিত
            হবে।
            <br />
            <br />
            মঙ্গলবার (২৭ জুন) আরাফাত দিবসে বিশ্বের দ্বিতীয় বৃহত্তম মসজিদ নামিরা
            থেকে হজের খুতবা ও নামাজ আদায়ের মধ্যদিয়ে পালিত হবে হজের মূল
            আনুষ্ঠানিকতা। আরাফাতে এ দিনের আনুষ্ঠানিকতাকে মূল হজ বলা হয়।
            <br /> <br />
            সোমবার (২৬ জুন) সকাল থেকে হজের আনুষ্ঠানিকতা শুরু হয়েছে। কেউ পায়ে
            হেঁটে আবার কেউ বাসে করে মিনায় জড়ো হয়েছেন। মিনা এরই মধ্যে বিশ্বের
            অন্যতম বৃহত্তম তাঁবুর শহরে পরিণত হয়েছে। হজে অংশগ্রহণকারী মুসল্লিরা
            আজ সূর্যাস্তের আগ পর্যন্ত আরাফাতের ময়দানে অবস্থান করবেন। সারা দিন
            ইবাদতে মশগুল থাকবেন। বিশ্বজুড়ে করোনাভাইরাস মহামারির পর চলতি বছর
            রেকর্ড সংখ্যক মুসল্লি পবিত্র হজ পালনের জন্য জড়ো হয়েছেন।
            <br /> <br />
            এই সংখ্যা ২০ লক্ষাধিক বলে জানিয়েছে সৌদির হজ ও ওমরাহ মন্ত্রণালয়।
            রোববার (২৫ জুন) বিকালে হজযাত্রীরা মক্কায় কাবাঘর তাওয়াফ বা প্রদক্ষিণ
            শুরু করেন। ইহরাম বেঁধে সেলাইবিহীন সাদা কাপড় পরে লাব্বাইক,
            আল্লাহুম্মা লাব্বাইক ধ্বনির মাধ্যমে শুরু হয় হজের আনুষ্ঠানিকতা।
            সোমবার (২৬ জুন) সকাল হজযাত্রীরা রওনা হন মিনার দিকে।
            <br /> <br />
            মক্কার মসজিদুল হারাম থেকে মিনার দূরত্ব পাঁচ কিলোমিটারের মতো। এখানে
            খোলা আকাশের নিচে ২৫ লাখ বর্গমিটার জায়গাজুড়ে শীতাতপ নিয়ন্ত্রিত
            লক্ষাধিক তাঁবু টানানো হয়েছে। এসব তাঁবুতে ২ লাখ ৬০ হাজার মানুষ থাকতে
            পারবে। পাকিস্তানের সাবেক ক্রিকেটার তৌফিক উমর ও লেগ স্পিনার রিয়াজ
            শেখ এরপর এবার করোনায় আক্রান্ত হয়েছেন শহীদ খান আফ্রিদি।
            <br /> <br />
            টুইটারে এক বার্তায় তিনি এ তথ্য নিশ্চিত করেছেন।
            <br />
            <br />
            টুইটারে আফ্রিদি লিখেছেন, বৃহস্পতিবার থেকে আমার শরীরটা ভাল যাচ্ছে না।
            শরীরে ব্যথা শুরু হয়েছে। আমার টেস্ট হয়েছে। এবং দু:খজনক হলো আমি
            পরীক্ষায় আমার করোনাভাইরাস ধরা পড়েছে। আমার দ্রুত আরোগ্যের জন্য
            দোয়া করবেন, ইনশা আল্লাহ।
            <br />
            <br />
            ক্রিকেটের পিচে শহীদ আফ্রিদির পদচারণ শুরু হয় ১৯৯৬ সালে।
            <br />
            <br />
            তিনি এ পর্যন্ত ২৭টি টেস্ট, ৩৯৮ ওডিআই এবং ৯৯টি টি-২০ খেলেছেন।
            <br />
            <br />
            তিনি ২০১১ সালে ওডিআই ওয়ার্ল্ড কাপে পাকিস্তান দলে নেতৃত্ব দেন।
            <br />
            <br />
            কিছু দিন আগে শহীদ আফ্রিদি ২০ হাজার ডলার দিয়ে বাংলাদেশের ক্রিকেটার
            মুশফিকুর রহিমের একটি ব্যাট কিনে নেন।
            <br />
            <br />
            দরিদ্রদের জন্য তহবিল তৈরির লক্ষ্যে তার একটি ঐতিহাসিক ব্যাট নিলামে
            তুলেছিলেন মুশফিক।
            <br />
            <br />
            করোনাভাইরাসে কাজের সুযোগ বন্ধ হয়ে যাওয়ার ফলে জীবনযাপন কষ্টকর হয়ে
            যাওয়া মানুষের সহায়তায় তহবিল তৈরির চেষ্টা করছিলেন তিনি।
          </p>
          <hr className="my-5" />
          <div className="my-10">
            <h1 className="text-2xl font-bold text-center">
              সংবাদটি শেয়ার করুন
            </h1>
            <div className=" flex justify-around items-center w-6/12 m-auto mt-4">
              <GrFacebook className="text-3xl text-white bg-blue-600 hover:text-blue-500 hover:bg-white cursor-pointer border" />

              <GrTwitter className="text-3xl  cursor-pointer bg-cyan-400 text-white border hover:text-cyan-400 hover:bg-white p-1 " />
              <BsLinkedin className="text-3xl text-white bg-blue-600 hover:text-blue-500 hover:bg-white cursor-pointer border" />

              <BsReddit className="text-3xl text-white bg-red-500 hover:text-red-500 hover:bg-white cursor-pointer border rounded-full" />

              <FaDigg className="text-3xl text-white bg-blue-600 hover:text-blue-500 hover:bg-white cursor-pointer border px-1" />

              <GrPinterest className="text-3xl text-white bg-red-500 hover:text-red-500 hover:bg-white cursor-pointer border rounded-full" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[380px] h-[600px] mt-10">
            <img
              className="h-full w-full"
              src="https://www.jcrew.com/brand_creative/2023/202303-Mar/fac_looks/w_fit_guide_pants_ANIMATING_06.gif"
            />
          </div>
          <Lines news={data} />
          <Lines news={data} />
          <Lines news={data} />
        </div>
      </div>
    </Layout>
  );
};

export default Details;
