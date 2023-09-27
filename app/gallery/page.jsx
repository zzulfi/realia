import React from 'react'
import GalleryHeader from '../components/GalleryHeader'
import Image from 'next/image'

function page() {
  return (
    <main className="h-screen w-screen overflow-x-hidden">
      <div className='p-10 md:p-16'>

      <GalleryHeader></GalleryHeader>
      </div>
  {/* zoomed frame */}
  {/* desktop only */}
  {/* <div className="hidden md:block fixed rounded-t-2xl z-50 border-x-[1rem] border-t-[1rem] border-b-[4rem] border-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-500">
    <button className="bg-white h-10 w-10 absolute top-2 right-2 rounded-full opacity-60 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={24}
        viewBox="0 -960 960 960"
        width={24}
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </button>
    <Image fill
      className="h-auto max-w-full"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
      alt=""
    />
    <div className="flex absolute pt-5 left-1/2 -translate-x-1/2 gap-2">
      <button className="h-6 bg-gray-300 rounded-2xl ">
        <p className="px-2 text-sm">Islamic</p>
      </button>
      <button className="h-6 bg-gray-300 rounded-2xl ">
        <p className="px-2 text-sm">Latest</p>
      </button>
      <button className="h-6 bg-gray-300 rounded-2xl ">
        <p className="px-2 text-sm">CHS</p>
      </button>
      <button className="h-6 bg-gray-300 rounded-2xl ">
        <p className="px-2 text-sm">SMS</p>
      </button>
    </div>
  </div> */}
  {/* mobile only */}
  {/* <div
    id="zoom-mobile"
    className="absolute z-50 h-full w-full right-0 bg-white md:hidden translate-x-full transition-all duration-500"
  >
    <button
      // onclick="document.getElementById('zoom-mobile').classList.add('translate-x-full')"
      className="bg-gray-100 h-10 w-10 absolute top-5 left-5 rounded-full opacity-60 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={24}
        viewBox="0 -960 960 960"
        width={24}
      >
        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
      </svg>
    </button>
    <Image fill
      className="w-[90%] mx-auto mt-24 mb-2"
      src="/chr"
      alt=""
    />
    <div className="flex py-5 gap-2 justify-center">
      <button className="h-6 bg-gray-300 rounded-2xl ">
        <p className="px-2 text-sm">Islamic</p>
      </button>
      <button className="h-6 bg-gray-300 rounded-2xl ">
        <p className="px-2 text-sm">Latest</p>
      </button>
      <button className="h-6 bg-gray-300 rounded-2xl ">
        <p className="px-2 text-sm">CHS</p>
      </button>
      <button className="h-6 bg-gray-300 rounded-2xl ">
        <p className="px-2 text-sm">SMS</p>
      </button>
    </div>
    <div className="flex flex-wrap gap-2 justify-center ">
      <div
        className="h-24 w-24 bg-red-500 rounded overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            'url("./chr.jpg")'
        }}
      ></div>
      <div
        className="h-24 w-24 bg-red-500 rounded overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            'url("./chr.jpg")'
        }}
      ></div>
      <div
        className="h-24 w-24 bg-red-500 rounded overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg")'
        }}
      ></div>
    </div>
  </div> */}
  {/* up */}
  <div className=" w-full overflow-hidden flex text-5xl lg:text-6xl font-black gap-2 text-color1 items-end py-5 lg:py-10 bg-background transition-all duration-500">
    <h1 className="-ml-24 opacity-50">Gallery</h1>
    <h1>Gallery</h1>
    <h1 className="opacity-50">Gallery</h1>
    <h1 className="opacity-50">Gallery</h1>
    <h1 className="opacity-50">Gallery</h1>
    <h1 className="opacity-50">Gallery</h1>
    <h1 className="opacity-50">Gallery</h1>
    <h1 className="opacity-50">Gallery</h1>
    <h1 className="opacity-50">Gallery</h1>
    <h1 className="opacity-50">Gallery</h1>
    <h1 className="opacity-50">Gallery</h1>
  </div>
  {/* gallery */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 pt-5 lg:pt-10 transition-all duration-500 ">
    <div className="grid gap-4">
      <div>
        <Image fill
          // onclick="document.getElementById('zoom-mobile').classList.remove('translate-x-full')"
          className="h-auto max-w-full rounded-lg"
          src="/chr.jpg"
          alt=""
        />
      </div>
      <div>
        <Image fill
          className="h-auto max-w-full rounded-lg"
          src="/cont.jpeg"
          alt=""
        />
      </div>
      <div>
        <Image fill
          className="h-auto max-w-full rounded-lg"
          src="/gaz.jpeg"
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <Image fill
          className="h-auto max-w-full rounded-lg"
          src="/tri.jpeg"
          alt=""
        />
        {/* realia image in this frame in phone only */}
      </div>
      <div>
        <Image fill
          className="h-auto max-w-full rounded-lg"
          src="/her.jpeg"
          alt=""
        />
      </div>
      <div>
        <Image fill
          className="h-auto max-w-full rounded-lg"
          src="/ing.jpeg"
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <Image fill
          className="h-auto max-w-full rounded-lg"
          src="/f-lg.jpg"
          alt=""
        />
      </div>
      <div>
        <Image fill
          className="h-auto max-w-full rounded-lg"
          src="/gft.jpeg"
          alt=""
        />
      </div>
      <div>
        <Image fill
          className="h-auto max-w-full rounded-lg"
          src="/artwork.jpg"
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <Image fill
          className="h-auto max-w-full rounded-lg"
          src="/box.jpeg"
          alt=""
        />
        {/* realia image in this frame in desktop only */}
      </div>
      <div>
        <Image fill
          className="h-auto max-w-full rounded-lg mt-2"
          src="/1.jpg"
          alt=""
        />
        <Image fill
          className="h-auto max-w-full rounded-lg mt-2"
          src="/2.jpg"
          alt=""
        />
        <Image fill
          className="h-auto max-w-full rounded-lg mt-2"
          src="/3.jpg"
          alt=""
        />
        <Image fill
          className="h-auto max-w-full rounded-lg mt-2"
          src="/4.jpg"
          alt=""
        />
      </div>
      <div>
        <Image fill
          className="h-auto max-w-full rounded-lg"
          src="/lg-ing.jpeg"
          alt=""
        />
      </div>
    </div>
  </div>
</main>
  )
}

export default page
