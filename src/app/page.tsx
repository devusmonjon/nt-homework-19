"use client";

import Image from "next/image";
import { useEffect, useState } from "react"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { IData } from "@/interfaces";


const Page = () => {
  const [data, setdata] = useState<IData[]>([
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "kSvXw@example.com",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    }
  ]);
  const [cardHover, setCardHover] = useState<boolean>(false);

  const images: string [] = [
    "/images/avatars/1.jpg",
    "/images/avatars/2.jpg",
    "/images/avatars/3.jpg",
    "/images/avatars/4.jpg",
    "/images/avatars/5.jpg",
    "/images/avatars/6.jpg",
    "/images/avatars/7.jpg",
    "/images/avatars/8.jpg",
    "/images/avatars/9.jpg",
    "/images/avatars/10.jpg",
  ]

  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const cardHoverHandler = () => {
    setCardHover(!cardHover);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setdata(data.slice(0, 10)))
  }, [])

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...sliderSetting}>
        {data.map((item: IData, idx) => (
          <div key={item.id} className="bg-white h-[450px] text-black rounded-xl overflow-hidden cursor-pointer">
            <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center overflow-hidden">
              <Image src={images[idx]} alt="image" width={176} height={176} className="w-full h-full object-cover" />
            </div>
            <div className={`flex flex-col justify-start items-center gap-4 p-4 h-[calc(450px_-_224px)] hover:h-full hover:translate-y-[-224px] bg-white transition ${cardHover && "active"} card`}>
              <p className="text-xl font-semibold">{item.name}</p>
              <p>{item.email}</p>
              <ul className={`w-full flex-col gap-2 transition-all duration-300 hidden`}>
                <li className="w-full flex items-center justify-start gap-2">
                  <span className="font-semibold">username: </span>
                  <p className="text-lg font-light">{item.username}</p>
                </li>
                <li className="w-full flex items-center justify-start gap-2">
                  <span className="font-semibold">address: </span>
                  <p className="text-lg font-light">{item.address.city}</p>
                </li>
                <li className="w-full flex items-center justify-start gap-2">
                  <span className="font-semibold">phone: </span>
                  <p className="text-lg font-light">{item.phone}</p>
                </li>
                <li className="w-full flex items-center justify-start gap-2">
                  <span className="font-semibold">website: </span>
                  <p className="text-lg font-light">{item.website}</p>
                </li>
                <li className="w-full flex items-center justify-start gap-2">
                  <span className="font-semibold">company: </span>
                  <p className="text-lg font-light">{item.company.name}</p>
                </li>
              </ul>
              <button className={`bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl`}>Read More</button>
            </div>
          </div>
        ))}
        </Slider>
        <Link href={"/posts"} className="w-full flex justify-center mt-10"><button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl mt-4">posts</button></ Link>
      </div>
    </div>
  )
}

export default Page