import React from 'react'

export default function Trial() {
  return (
    <>
        <div class="p-16">
            <div class="flex flex-col justify-center items-center">
                    <h1 class="text-4xl font-bold">Start your free trial</h1>
                    <p class="mt-4 text-gray-500">Join over 4,000+ startups already growing with Untitled.</p>
                    <div class="flex gap-2">
                        <button class="rounded-lg bg-white py-3 px-4 mt-4 text-black font-medium border-2 border-gray-300 ">Learn more</button>
                        <button class="rounded-lg bg-red-500 py-3 px-4 mt-4 text-white font-medium">Get started</button>
                    </div>
            </div>
        </div>
    </>
  )
}
