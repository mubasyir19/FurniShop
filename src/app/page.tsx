"use client";

import { ListProduct } from "@/services/data";
import { formatPrice } from "@/services/helper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-screen w-full bg-home bg-cover bg-right bg-no-repeat">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-30">
          <div className="w-3/4 text-center xl:w-1/2">
            <h1 className="text-2xl font-semibold text-white lg:text-6xl">
              Creative Home Simpify Your Furniture
            </h1>
            <p className="mt-7 text-sm text-white lg:text-xl">
              Do i have consent to record this meeting gain locaion,
              root-and-branch, review, nor game plan who&apos;s the goto
            </p>
            <button className="mt-7 rounded-md bg-white bg-opacity-60 px-9 py-2 text-sm font-semibold text-white lg:px-20 lg:py-4 lg:text-xl">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section className="-mt-40 w-full bg-gradient-to-t from-white to-transparent p-6 lg:-mt-20">
        <div className="container mx-auto grid grid-cols-2 gap-y-8 rounded-2xl bg-primary-green px-4 py-8 lg:grid-cols-4 lg:px-20 lg:py-9">
          <div className="border-r border-white px-6 text-center">
            <p className="text-2xl font-semibold text-white lg:text-4xl">7</p>
            <p className="text-sm font-normal text-white lg:text-xl">
              Years Experience
            </p>
          </div>
          <div className="px-6 text-center md:border-r md:border-white">
            <p className="text-2xl font-semibold text-white lg:text-4xl">2</p>
            <p className="text-sm font-normal text-white lg:text-xl">
              Opened in country
            </p>
          </div>
          <div className="border-r border-white px-6 text-center">
            <p className="text-2xl font-semibold text-white lg:text-4xl">
              10k+
            </p>
            <p className="text-sm font-normal text-white lg:text-xl">
              Furniture sold
            </p>
          </div>
          <div className="px-6 text-center">
            <p className="text-2xl font-semibold text-white lg:text-4xl">
              260+
            </p>
            <p className="text-sm font-normal text-white lg:text-xl">
              Variant Furniture
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col px-6 py-12 lg:flex-row-reverse lg:items-center lg:gap-x-24 lg:px-24">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-black lg:text-4xl">
            We Create Your Home More Aestetic
          </h2>
          <p className="mt-4 text-sm font-normal text-black lg:text-xl">
            Furnitre power is a software as services for multiperpose business
            management system,{" "}
          </p>
          <div className="mt-5">
            <div className="point mt-5 flex gap-x-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 12.4444C0 5.57157 5.57157 0 12.4444 0C15.7449 0 18.9102 1.31111 21.244 3.64489C23.5778 5.97868 24.8889 9.14397 24.8889 12.4444C24.8889 19.3173 19.3173 24.8889 12.4444 24.8889C5.57157 24.8889 0 19.3173 0 12.4444ZM12.0833 17.0614L18.3055 10.8391C18.7934 10.3512 18.7934 9.56001 18.3055 9.07204C17.8175 8.58406 17.0263 8.58406 16.5384 9.07204L11.1997 14.4231L8.34992 11.5609C8.03425 11.2453 7.57416 11.122 7.14296 11.2375C6.71175 11.3531 6.37494 11.6899 6.2594 12.1211C6.14386 12.5523 6.26714 13.0124 6.58281 13.328L10.3161 17.0614C10.5498 17.297 10.8679 17.4295 11.1997 17.4295C11.5315 17.4295 11.8496 17.297 12.0833 17.0614Z"
                  fill="#23262F"
                />
              </svg>
              <div className="">
                <p className="text-base font-semibold text-black lg:text-xl">
                  Valuation Services
                </p>
                <p className="mt-2 text-black lg:text-base">
                  Sometimes features require a short description. This can be
                  detailed description
                </p>
              </div>
            </div>
            <div className="point mt-5 flex gap-x-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 12.4444C0 5.57157 5.57157 0 12.4444 0C15.7449 0 18.9102 1.31111 21.244 3.64489C23.5778 5.97868 24.8889 9.14397 24.8889 12.4444C24.8889 19.3173 19.3173 24.8889 12.4444 24.8889C5.57157 24.8889 0 19.3173 0 12.4444ZM12.0833 17.0614L18.3055 10.8391C18.7934 10.3512 18.7934 9.56001 18.3055 9.07204C17.8175 8.58406 17.0263 8.58406 16.5384 9.07204L11.1997 14.4231L8.34992 11.5609C8.03425 11.2453 7.57416 11.122 7.14296 11.2375C6.71175 11.3531 6.37494 11.6899 6.2594 12.1211C6.14386 12.5523 6.26714 13.0124 6.58281 13.328L10.3161 17.0614C10.5498 17.297 10.8679 17.4295 11.1997 17.4295C11.5315 17.4295 11.8496 17.297 12.0833 17.0614Z"
                  fill="#23262F"
                />
              </svg>
              <div className="">
                <p className="text-base font-semibold text-black lg:text-xl">
                  Development of Furniture Modelss
                </p>
                <p className="mt-2 text-black lg:text-base">
                  Sometimes features require a short description. This can be
                  detailed description
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/chair.png"
            width={554}
            height={443}
            alt="sofa"
            className="mt-12 h-auto w-full rounded-2xl"
          />
        </div>
      </section>
      <section className="flex flex-col items-center gap-x-16 px-6 py-12 lg:flex-row lg:pl-24 lg:pr-0">
        <div className="flex flex-row items-center justify-center gap-x-5 lg:flex-col lg:justify-start">
          <h2 className="text-2xl font-semibold text-black lg:text-4xl">
            New In Store Now
          </h2>
          <p className="text-sm font-normal text-black lg:mt-20 lg:text-base">
            Get the latest items immediately with promo prices
          </p>
          <Link
            href="#"
            className="mt-12 hidden text-base font-medium text-black underline lg:block"
          >
            Check All
          </Link>
        </div>
        <div className="mt-6 flex min-w-0 gap-x-4 overflow-x-auto whitespace-nowrap">
          <div className="card-etalase relative shrink-0">
            <Image
              src="/images/chair2.png"
              width={265}
              height={400}
              alt="etalase"
              className="h-72 w-48 rounded-md"
            />
            <p className="absolute inset-x-0 bottom-5 text-center text-lg font-semibold text-white">
              Chair
            </p>
          </div>
          <div className="card-etalase relative shrink-0">
            <Image
              src="/images/bed.png"
              width={265}
              height={400}
              alt="etalase"
              className="h-72 w-48 rounded-md"
            />
            <p className="absolute inset-x-0 bottom-5 text-center text-lg font-semibold text-white">
              Bed
            </p>
          </div>
          <div className="card-etalase relative shrink-0">
            <Image
              src="/images/cupboard.png"
              width={265}
              height={400}
              alt="etalase"
              className="h-72 w-48 rounded-md"
            />
            <p className="absolute inset-x-0 bottom-5 text-center text-lg font-semibold text-white">
              Cupboard
            </p>
          </div>
          <div className="card-etalase relative shrink-0">
            <Image
              src="/images/lightning.png"
              width={265}
              height={400}
              alt="etalase"
              className="h-72 w-48 rounded-md"
            />
            <p className="absolute inset-x-0 bottom-5 text-center text-lg font-semibold text-white">
              Lightning
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-x-28 px-6 py-12 lg:flex-row lg:px-24">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-black lg:text-4xl">
            The Best Furniture Manufacturer of your choice
          </h2>
          <p className="mt-4 text-sm font-normal text-black lg:text-xl">
            Furnitre power is a software as services for multiperpose business
            management system, expecially for them who are running two or more
            business exploree the future Furnitre power is a software as
            services \
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/kitchen.png"
            width={786}
            height={96}
            alt="kitchen"
            className="mt-12 h-60 w-full rounded-md object-cover"
          />
        </div>
      </section>
      <section className="px-6 py-12 lg:px-24">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-black lg:text-4xl">
            All Product
          </h2>
          <p className="mt-2 text-sm font-normal text-black lg:text-base">
            The products we provide only for you as our service are selected
            from the best products with number 1 quality in the world
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {ListProduct.map((item, index) => (
            <div key={index} className="card-product">
              <div className="relative rounded-2xl border border-[#102637] border-opacity-10 bg-white p-2.5">
                <Image
                  src={item.images}
                  width={140}
                  height={154}
                  alt=""
                  className="h-full w-full"
                />
                <button className="absolute bottom-2.5 right-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-third-gray text-black lg:h-7 lg:w-7 lg:text-base">
                  +
                </button>
              </div>
              <div className="mt-2">
                <h5 className="truncate text-base font-semibold text-black lg:text-2xl">
                  {item.name}
                </h5>
                <div className="mt-1 flex items-center gap-x-2">
                  <p className="text-xs font-normal text-black lg:text-base">
                    {formatPrice(item.discount)}
                  </p>
                  <p className="text-xs font-normal text-gray-400 line-through lg:text-base">
                    {formatPrice(item.price)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center gap-x-10 px-6 py-12 lg:flex-row lg:px-24">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-black lg:text-4xl">
            What People Saying About Us
          </h2>
          <div className="mt-8">
            <div className="profile flex items-center gap-x-5">
              <Image
                src="/images/customer.png"
                width={80}
                height={80}
                alt="customer"
                className="h-10 w-10 rounded-full"
              />
              <div className="">
                <p className="text-xs font-semibold text-black lg:text-xl">
                  Josh Smith
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Manager of The New York Times
                </p>
              </div>
            </div>
            <p className="testimonial mt-7 lg:text-xl">
              “They are have a perfect touch for make something so professional
              ,interest and useful for a lot of people .”
            </p>
          </div>
        </div>
        <div className="mt-8 lg:w-1/2">
          <Image
            src="/images/living-room.png"
            width={562}
            height={340}
            alt="living room"
            className="h-52 w-full rounded-xl lg:h-full"
          />
        </div>
      </section>
      <section className="h-full w-full bg-cta bg-cover bg-top px-6 py-10 text-center lg:flex lg:bg-center lg:px-24 lg:py-40 lg:text-start">
        <div className="hidden lg:block lg:w-1/2"></div>
        <div className="lg:w-1/2">
          <div className="px-11 lg:px-0">
            <h2 className="text-2xl font-semibold text-white lg:text-4xl">
              Get More Discount Off Your Order
            </h2>
            <p className="mt-5 text-sm font-normal text-white lg:text-xl">
              Join our mailing list
            </p>
          </div>
          <form
            onClick={() => alert("Under maintenance")}
            className="mt-8 flex items-center gap-x-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="grow rounded-lg px-5 py-3 text-base text-black placeholder:text-xs placeholder:text-third-gray focus:outline-none lg:py-4 lg:placeholder:text-base"
            />
            <button className="rounded-lg bg-secondary-dark px-6 py-4 text-xs font-semibold text-white lg:text-xl">
              Shop Now
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
