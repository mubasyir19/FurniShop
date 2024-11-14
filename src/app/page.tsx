'use client';

import { ListProduct } from '@/services/data';
import { formatPrice } from '@/services/helper';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className='bg-home bg-no-repeat bg-right bg-cover h-screen w-full '>
        <div className='h-full w-full bg-black bg-opacity-30 flex items-center justify-center'>
          <div className='text-center w-3/4'>
            <h1 className='text-2xl text-white font-bold'>Creative Home Simpify Your Furniture</h1>
            <p className='text-sm mt-7 text-white'>
              Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who&apos;s
              the goto
            </p>
            <button className='px-9 py-2 bg-white bg-opacity-60 font-bold text-sm text-white rounded-md mt-7'>
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section className='px-6 -mt-40 bg-gradient-to-t from-white to-transparent'>
        <div className='bg-primary-green rounded-2xl grid grid-cols-2 px-4 py-8 gap-y-8'>
          <div className='px-6 text-center border-r border-white'>
            <p className='text-2xl font-semibold text-white'>7</p>
            <p className='text-sm font-normal text-white'>Year Experience</p>
          </div>
          <div className='px-6 text-center md:border-r md:border-white'>
            <p className='text-2xl font-semibold text-white'>2</p>
            <p className='text-sm font-normal text-white'>Opened in country</p>
          </div>
          <div className='px-6 text-center border-r border-white'>
            <p className='text-2xl font-semibold text-white'>10k+</p>
            <p className='text-sm font-normal text-white'>Furniture sold</p>
          </div>
          <div className='px-6 text-center'>
            <p className='text-2xl font-semibold text-white'>260+</p>
            <p className='text-sm font-normal text-white'>Variant Furniture</p>
          </div>
        </div>
      </section>
      <section className='py-12 px-6'>
        <div className=''>
          <h2 className='text-black text-2xl font-semibold'>We Create Your Home More Aestetic</h2>
          <p className='text-black text-sm font-normal mt-4'>
            Furnitre power is a software as services for multiperpose business management system,{' '}
          </p>
          <div className=''>
            <div className='point flex gap-x-4 mt-5'>
              <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0 12.4444C0 5.57157 5.57157 0 12.4444 0C15.7449 0 18.9102 1.31111 21.244 3.64489C23.5778 5.97868 24.8889 9.14397 24.8889 12.4444C24.8889 19.3173 19.3173 24.8889 12.4444 24.8889C5.57157 24.8889 0 19.3173 0 12.4444ZM12.0833 17.0614L18.3055 10.8391C18.7934 10.3512 18.7934 9.56001 18.3055 9.07204C17.8175 8.58406 17.0263 8.58406 16.5384 9.07204L11.1997 14.4231L8.34992 11.5609C8.03425 11.2453 7.57416 11.122 7.14296 11.2375C6.71175 11.3531 6.37494 11.6899 6.2594 12.1211C6.14386 12.5523 6.26714 13.0124 6.58281 13.328L10.3161 17.0614C10.5498 17.297 10.8679 17.4295 11.1997 17.4295C11.5315 17.4295 11.8496 17.297 12.0833 17.0614Z'
                  fill='#23262F'
                />
              </svg>
              <div className=''>
                <p className='text-base font-semibold text-black'>Valuation Services</p>
                <p className='mt-2 text-black'>
                  Sometimes features require a short description. This can be detailed description
                </p>
              </div>
            </div>
            <div className='point flex gap-x-4 mt-5'>
              <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0 12.4444C0 5.57157 5.57157 0 12.4444 0C15.7449 0 18.9102 1.31111 21.244 3.64489C23.5778 5.97868 24.8889 9.14397 24.8889 12.4444C24.8889 19.3173 19.3173 24.8889 12.4444 24.8889C5.57157 24.8889 0 19.3173 0 12.4444ZM12.0833 17.0614L18.3055 10.8391C18.7934 10.3512 18.7934 9.56001 18.3055 9.07204C17.8175 8.58406 17.0263 8.58406 16.5384 9.07204L11.1997 14.4231L8.34992 11.5609C8.03425 11.2453 7.57416 11.122 7.14296 11.2375C6.71175 11.3531 6.37494 11.6899 6.2594 12.1211C6.14386 12.5523 6.26714 13.0124 6.58281 13.328L10.3161 17.0614C10.5498 17.297 10.8679 17.4295 11.1997 17.4295C11.5315 17.4295 11.8496 17.297 12.0833 17.0614Z'
                  fill='#23262F'
                />
              </svg>
              <div className=''>
                <p className='text-base font-semibold text-black'>Development of Furniture Modelss</p>
                <p className='mt-2 text-black'>
                  Sometimes features require a short description. This can be detailed description
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src='/images/chair.png'
          width={554}
          height={443}
          alt='sofa'
          className='w-full h-auto rounded-2xl mt-12'
        />
      </section>
      <section className='py-12 px-6'>
        <div className='flex items-center justify-center gap-x-5'>
          <h2 className='text-2xl text-black font-semibold'>New In Store Now</h2>
          <p className='text-sm text-black font-normal'>Get the latest items immediately with promo prices</p>
        </div>
        <div className='flex gap-x-4 mt-6 overflow-x-auto whitespace-nowrap min-w-0'>
          <div className='relative card-etalase shrink-0'>
            <Image src='/images/chair2.png' width={265} height={400} alt='etalase' className='rounded-md w-48 h-72' />
            <p className='text-white text-lg font-semibold absolute bottom-5 inset-x-0 text-center'>Chair</p>
          </div>
          <div className='relative card-etalase shrink-0'>
            <Image src='/images/bed.png' width={265} height={400} alt='etalase' className='rounded-md w-48 h-72' />
            <p className='text-white text-lg font-semibold absolute bottom-5 inset-x-0 text-center'>Bed</p>
          </div>
          <div className='relative card-etalase shrink-0'>
            <Image src='/images/cupboard.png' width={265} height={400} alt='etalase' className='rounded-md w-48 h-72' />
            <p className='text-white text-lg font-semibold absolute bottom-5 inset-x-0 text-center'>Cupboard</p>
          </div>
          <div className='relative card-etalase shrink-0'>
            <Image
              src='/images/lightning.png'
              width={265}
              height={400}
              alt='etalase'
              className='rounded-md w-48 h-72'
            />
            <p className='text-white text-lg font-semibold absolute bottom-5 inset-x-0 text-center'>Lightning</p>
          </div>
        </div>
      </section>
      <section className='py-12 px-6'>
        <div className=''>
          <h2 className='text-2xl text-black font-semibold'>The Best Furniture Manufacturer of your choice</h2>
          <p className='mt-4 text-black text-sm font-normal'>
            Furnitre power is a software as services for multiperpose business management system, expecially for them
            who are running two or more business exploree the future Furnitre power is a software as services \
          </p>
        </div>
        <Image
          src='/images/kitchen.png'
          width={786}
          height={96}
          alt='kitchen'
          className='mt-12 w-full h-60 rounded-md'
        />
      </section>
      <section className='py-12 px-6'>
        <div className='text-center'>
          <h2 className='text-black font-semibold text-2xl'>All Product</h2>
          <p className='mt-2 text-sm text-black font-normal'>
            The products we provide only for you as our service are selected from the best products with number 1
            quality in the world
          </p>
        </div>
        <div className='mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4'>
          {ListProduct.map((item, index) => (
            <div key={index} className='card-product'>
              <div className='relative bg-white p-2.5 border border-[#102637] border-opacity-10 rounded-2xl'>
                <Image src={item.images} width={140} height={154} alt='' className='w-full h-full' />
                <button className='absolute bottom-2.5 right-2.5 bg-third-gray text-black flex justify-center items-center rounded-full h-4 w-4'>
                  +
                </button>
              </div>
              <div className='mt-2'>
                <h5 className='text-base text-black font-semibold truncate'>{item.name}</h5>
                <div className='mt-1 flex items-center gap-x-2'>
                  <p className='text-xs text-black font-normal'>{formatPrice(item.discount)}</p>
                  <p className='text-xs text-gray-400 font-normal line-through'>{formatPrice(item.price)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='py-12 px-6'>
        <div className=''>
          <h2 className='text-black text-2xl font-semibold'>What People Saying About Us</h2>
          <div className='mt-8 '>
            <div className='profile flex gap-x-5 items-center'>
              <Image
                src='/images/customer.png'
                width={80}
                height={80}
                alt='customer'
                className='rounded-full h-10 w-10'
              />
              <div className=''>
                <p className='font-semibold text-xs text-black'>Josh Smith</p>
                <p className='mt-1 text-xs text-gray-400  '>Manager of The New York Times</p>
              </div>
            </div>
            <p className='testimonial mt-7'>
              “They are have a perfect touch for make something so professional ,interest and useful for a lot of people
              .”
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <Image
            src='/images/living-room.png'
            width={562}
            height={340}
            alt='living room'
            className='rounded-xl h-52 w-full'
          />
        </div>
      </section>
      <section className='bg-cta w-full h-full bg-cover bg-top py-10 px-6 text-center'>
        <div className='px-11'>
          <h2 className='text-2xl text-white font-semibold'>Get More Discount Off Your Order</h2>
          <p className='text-sm text-white font-normal mt-5'>Join our mailing list</p>
        </div>
        <form onClick={() => alert('Under maintenance')} className='mt-8 flex gap-x-4 items-center'>
          <input
            type='email'
            name='email'
            placeholder='Your email address'
            className='py-3 px-5 text-base text-black grow rounded-lg placeholder:text-xs placeholder:text-third-gray focus:outline-none'
          />
          <button className='bg-secondary-dark py-4 px-6 text-xs font-semibold text-white rounded-lg'>Shop Now</button>
        </form>
      </section>
    </>
  );
}
