import React from 'react'

export default function Footer() {
  return (
    <>
        <div class="p-16">
            <div class="grid grid-cols-6">
                <div class="flex flex-col gap-2 font-semibold text-gray-700">
                    <p class="text-sm text-gray-500 font-semibold">Product</p>
                    <p>Overview</p>
                    <p>Features</p>
                    <p>Solutions</p>
                    <p>Tutorials</p>
                    <p>Pricing</p>
                    <p>Releases</p>
                </div>
                <div class="flex flex-col  gap-2 font-semibold text-gray-700">
                    <p class="text-sm text-gray-500 font-semibold">Company</p>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>News</p>
                    <p>Media kit</p>
                    <p>Contact</p>
                </div>
                <div class="flex flex-col gap-2 font-semibold text-gray-700">
                    <p class="text-sm text-gray-500 font-semibold">Resources</p>
                    <p>Blog</p>
                    <p>Newsletter</p>
                    <p>Events</p>
                    <p>Help centre</p>
                    <p>Tutorials</p>
                    <p>Support</p>
                </div>
                <div class="flex flex-col gap-2 font-semibold text-gray-700">
                    <p class="text-sm text-gray-500 font-semibold">Use cases</p>
                    <p>Startups</p>
                    <p>Enterprise</p>
                    <p>Government</p>
                    <p>Saas Centre</p>
                    <p>Marketplaces</p>
                    <p>Ecommerce</p>
                </div>
                <div class="flex flex-col gap-2 font-semibold text-gray-700">
                    <p class="text-sm text-gray-500 font-semibold">Social</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                    <p>Facebook</p>
                    <p>GitHub</p>
                    <p>AngelList</p>
                    <p>Dribble</p>
                </div>
                <div class="flex flex-col gap-2 font-semibold text-gray-700">
                    <p class="text-sm text-gray-500 font-semibold">Legal</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                    <p>Licenses</p>
                    <p>Settings</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
        <div class=" p-10">
            <div class="border-t-[1px] p-10 flex justify-between">
                    <img src="logo.svg" />
                    <p class="text-gray-500">© 2077 zysktechnologies. All rights reserved.</p>
            </div>
        </div>
    </>
  )
}
