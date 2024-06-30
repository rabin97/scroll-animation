"use client";
import Nav from "@/components/Nav";
import Image from "next/image";

import fanta from "@/assets/images/fanta.png";
import orange_slice from "@/assets/images/orange_slice.png";
import orange_half_slice from "@/assets/images/orange_half_slice.png";
import leafs from "@/assets/images/leaves.png";

import fanta_1 from "@/assets/images/fanta_1.png"
import fanta_2 from "@/assets/images/fanta_3.png"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#second",
        start: "0% 95%",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      }
    })
    const tl_second = gsap.timeline({
      scrollTrigger: {
        trigger: "#second",
        start: "40% 50%",
        end: "60% 50%",
        scrub: 1,
        // markers: true,
        // pin: true,
      }
    })
    const tl_third = gsap.timeline({
      scrollTrigger: {
        trigger: "#third",
        start: "0% 95%",
        end: "70% 70%",
        scrub: 1,
        // markers: true,
        // pin: true,
      }
    })




    gsap.to("#title", {
      opacity: 1,
      duration: 1,
      fontSize: "30vw"
    })
    gsap.to("#fanta", {
      delay: 1,
      opacity: 1,
      duration: 1,
      width: "50%",
    })

    tl.to("#fanta", {
      top: "155%",
      left: "27%",
      rotate: 0,
    }, "a")
    tl.to("#orange_slice", {
      top: "125%",
      left: "27%",
      rotate: 0,
    }, "a")
    tl_second.to("#fanta_1", {
      opacity: 1,
      rotate: 12,
      duration: 1.2,
      left: "65%",
      width: "50%",
      maxWidth: "35rem",

    })
    tl_second.to("#fanta_2", {
      opacity: 1,
      duration: 1.4,
      rotate: -12,
      left: "44%",

    })

    tl_third.to("#fanta_1", {
      top: "150%",
      left: "27%",
      scale: 1.3,
      rotate: 0,
      delay: 0.7,
      // zIndex: 999
    }, "a")
    tl_third.to("#fanta", {
      top: "248%",
      left: "46.3%",
      rotate: 0,
      delay: 0.7,
    }, "a")
    tl_third.to("#fanta_2", {
      top: "150%",
      left: "160%",
      scale: 1.3,
      rotate: 0,
      delay: 0.7,
      // zIndex: 50
    }, "a")


  }, [])


  return (
    <main className="min-h-screen w-full  m-auto overflow-hidden">
      <div
        id="first"
        className="first w-full relative h-screen bg-cover  bg-center "
        style={{ backgroundImage: `url(/bg_1.jpg)` }}

      >
        <div id="title" className="uppercase text-[0vw] font-semibold text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0">FANTa</div>
        <Image
          id="fanta"
          src={fanta}
          alt="fanta"
          width={400}
          height={400}
          className="object-contain  -rotate-12 z-50 opacity-0 w-[50%] max-w-96 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          id="orange_slice"
          src={orange_slice}
          alt="fanta"
          width={400}
          height={400}
          className="object-contain w-[45%] max-w-56 z-[45] absolute left-[50%] top-[20%] transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={orange_half_slice}
          alt="fanta"
          width={400}
          height={400}
          className="object-contain z-[55] w-[45%] max-w-72 absolute left-[60%] top-[76%] transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={leafs}
          alt="fanta"
          width={400}
          height={400}
          className="object-contain z-20 w-[50%] max-w-72 absolute -bottom-[4%] left-0 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div
        className="w-full h-[30%] bg-black opacity-90 z-40 absolute -bottom-[20%] filter blur-3xl"
      />

      <div
        id="second"
        className="w-full  h-screen bg-cover  bg-center grid grid-cols-2 "
        style={{ backgroundImage: `url(/bg_1.jpg)` }}
      >
        <div className=" flex size-full relative items-end justify-center">

          <Image
            id="fanta_1"
            src={fanta_1}
            alt="fanta"
            width={400}
            height={400}
            className="object-contain z-[49] opacity-0  w-[50%] max-w-96 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            id="fanta_2"
            src={fanta_2}
            alt="fanta"
            width={400}
            height={400}
            className="object-contain opacity-0 z-[49] w-[70%] max-w-[30rem] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />

          <div className="size-full transform translate-y-64 -translate-x-6"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg "
              style={{
                transform: "rotateX(70deg)",
              }}
            >
              <path fill="#FF0066" d="M68.1,-38.9C81.2,-16.7,79.8,14.3,66,31.3C52.2,48.4,26.1,51.6,4.8,48.8C-16.5,46,-33.1,37.3,-40.6,23.9C-48.1,10.4,-46.7,-7.9,-38.4,-27.3C-30.1,-46.7,-15.1,-67.4,6.2,-71C27.5,-74.6,55.1,-61.2,68.1,-38.9Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <div className="p-6   flex flex-col justify-center items-start ">
          <div
            className="w-[30%] h-[30%] bg-black opacity-90 z-10 absolute filter blur-3xl"
          />
          <div className="text-[4vw] text-white text-left z-20">Different Flavour</div>
          <p className="text-sm text-white z-20 leading-7 tracking-wide pt-4 line-clamp-6" >
            Fanta, a popular fruit-flavored soft drink, comes in a variety of flavors to suit diverse tastes. The original Fanta Orange offers a tangy citrus experience, while Fanta Grape provides a sweet and rich taste. Fanta Pineapple is tropical and refreshing, perfect for a summer day. Fanta Strawberry offers a sweet, fruity flavor, and Fanta Berry mixes multiple berry flavors for a unique taste. Other flavors include Fanta Lemon, with a zesty kick, and Fanta Green Apple, which delivers a crisp, tart sensation. Each Fanta flavor brings a unique twist to the classic soda experience, appealing to a wide range of palates.
          </p>

        </div>

      </div>
      <div
        className="w-full h-[30%] bg-black opacity-90  absolute -bottom-[124%] filter blur-3xl"
      />

      <div
        id="third"
        className="w-full  h-screen bg-cover  bg-center"
        style={{ backgroundImage: `url(/bg_1.jpg)` }}
      >
        <div className="size-full grid grid-cols-3 ">
          <div className="p-6 flex z-30 items-end">
            <div className="w-[80%] relative  bg-[#FAE50A] h-[70%] rounded-2xl">
              <div className="text-[6vh] font-semibold text-white absolute bottom-[2%] left-1/2 transform -translate-x-1/2">Lemon</div>

            </div>

          </div>
          <div className="p-6 flex items-end ">
            <div className="w-[80%] relative bg-[#FE5D37] h-[70%] rounded-2xl">
              <div className="text-[6vh] font-semibold text-white absolute bottom-[2%] left-1/2 transform -translate-x-1/2">Orange</div>

            </div>

          </div>
          <div className="p-6 flex items-end ">
            <div className="w-[80%] relative bg-[#579604] h-[70%] rounded-2xl">
              <div className="text-[6vh] font-semibold text-white absolute bottom-[2%] left-1/2 transform -translate-x-1/2">Fruit</div>

            </div>

          </div>
        </div>



      </div>
    </main>
  );
}
