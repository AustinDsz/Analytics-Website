import React from 'react'

export default function Blog() {
  return (
    <>
        <div class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
            <div class="absolute inset-0">
                <div class="h-1/3 bg-white sm:h-2/3"></div>
            </div>
            <div class="relative mx-auto max-w-7xl">
                <div class="text-left">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest blog.</h2>
                    <p class="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                    Tool and strategies modern teams need to help their companies grow.</p>
                </div>
                <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

                    <div class="flex flex-col overflow-hidden">
                        <div class="flex-shrink-0">
                            <img class="h-48 w-full object-cover" src="blog1.png" alt=""/>
                        </div>
                        <div class="flex flex-1 flex-col justify-between bg-white p-6">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600">
                                    <a href="#" class="hover:underline">Design</a>
                                </p>
                                <a href="#" class="mt-2 block">
                                    <p class="text-xl font-semibold text-gray-900">UX review presentations</p>
                                    <p class="mt-3 text-base text-gray-500">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                                </a>
                            </div>
                            <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                    <a href="#">
                                        <span class="sr-only">Olivia Rhye</span>
                                        <img class="h-10 w-10 rounded-full" src="olivia.png" alt=""/>
                                    </a>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">
                                        <a href="#" class="hover:underline">Olivia Rhye</a>
                                    </p>
                                    <div class="flex space-x-1 text-sm text-gray-500">
                                        <time datetime="2020-03-16">20 Jan 2024</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col overflow-hidden">
                        <div class="flex-shrink-0">
                            <img class="h-48 w-full object-cover" src="blog2.png" alt=""/>
                        </div>
                        <div class="flex flex-1 flex-col justify-between bg-white p-6">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600">
                                    <a href="#" class="hover:underline">Product</a>
                                </p>
                                <a href="#" class="mt-2 block">
                                    <p class="text-xl font-semibold text-gray-900">Migrating to Linear 101</p>
                                    <p class="mt-3 text-base text-gray-500">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
                                </a>
                            </div>
                            <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                    <a href="#">
                                        <span class="sr-only">Phoenix Baker</span>
                                        <img class="h-10 w-10 rounded-full" src="phoenix.png" alt=""/>
                                    </a>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">
                                        <a href="#" class="hover:underline">Phoenix Baker</a>
                                    </p>
                                    <div class="flex space-x-1 text-sm text-gray-500">
                                        <time datetime="2020-03-10">19 Jan 2024</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col overflow-hidden">
                        <div class="flex-shrink-0">
                            <img class="h-48 w-full object-cover" src="blog3.png" alt=""/>
                        </div>
                        <div class="flex flex-1 flex-col justify-between bg-white p-6">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600">
                                    <a href="#" class="hover:underline">Software Engineering</a>
                                </p>
                                <a href="#" class="mt-2 block">
                                    <p class="text-xl font-semibold text-gray-900">Building your API stack</p>
                                    <p class="mt-3 text-base text-gray-500">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
                                </a>
                            </div>
                            <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                    <a href="#">
                                        <span class="sr-only">Lana Steiner</span>
                                        <img class="h-10 w-10 rounded-full" src="steiner.png" alt=""/>
                                    </a>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">
                                        <a href="#" class="hover:underline">Lana Steiner</a>
                                    </p>
                                    <div class="flex space-x-1 text-sm text-gray-500">
                                        <time datetime="2020-02-12">18 Jan 2024</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
