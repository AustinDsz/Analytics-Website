import React from 'react'

export default function Main() {
    

  return (
    <div class="pt-24">
    
    {/* Feature */}
    <div class="flex justify-center items-center hover:cursor-pointer">
    <div class="border-2 border-red-300 px-3 py-2 rounded-full bg-red-50 font-medium">
        <span class="border-2 border-red-400 p-1 rounded-full text-red-500 bg-white">New feature</span>
        <span class="text-red-500 ml-2">Check out the team dashboard <span class="text-red-400 text-base ml-2">→</span></span>
    </div>
    </div>

    {/* Heading */}
    <div class='flex justify-center items-center mt-10'>
        <h1 class="text-5xl font-semibold text-center">Beautiful Analytics to grow smarter</h1>
    </div>

    {/* Subheading */}
    <div class='flex justify-center items-center mt-10'>
        <p class="text-stone-500 text-center">
        Powerful,self-serve product and growth analytics to help you convert, engage,<br/>
      and retain more users. Trusted by over 4,000 startups
        </p>
    </div>

    {/* buttons */}
    <div class="flex justify-center items-center mb-4 mt-10">

    <button class="flex border-[1px] p-2 rounded-full">
        <span class="text-stone-500">
            <img src='circle-play.svg'/>
        </span>
        <span class="ml-2 text-stone-500 font-semibold">Demo</span>
    </button>

    <button class="flex p-2 rounded-full ml-2 bg-red-500 text-white font-semibold">
        Sign up
    </button>
    
    </div>

    {/* Image example */}
    <div class="flex justify-center items-center mt-10 mx-2">
        <img src="aichatbot.png" width={`1216px`} class="border-4 border-black rounded-lg"/>
    </div>

    {/* Social proof section */}
    <div class="flex flex-col justify-between mx-10 my-24 border-b-[1px] gap-5 py-24">
        <h3 class="flex justify-center items-center">Join 4,000+ companies already growing</h3>

        <div class="flex gap-3">
            <div>
                <img src="Boltshift.svg"/>
            </div>
            <div>
                <img src="LightBox.svg" />
            </div>
            <div>
                <img src="Featherdev.svg" />
            </div>
            <div>
                <img src="Sphererule.svg" />
            </div>
            <div>
                <img src="Globalbank.svg" />
            </div>
            <div>
                <img src="Nietzsche.svg" />
            </div>
        </div>
    </div>

    </div>
  )
}
