import React from 'react'

export default function Features() {
  return (
    <>
    <div class="py-24">
        <div class="flex flex-col justify-center items-center">
        <h2 class="font-bold text-red-500 text-sm">Features</h2>
        <h1 class="text-3xl font-medium mt-2">Analytics that feels like it's from the future</h1>
        <p class="mt-2 text-center text-gray-500">Powerful, self-serve product and growth analytics to help you convert, engage,<br/> 
            and retain more users. Trusted by over 4,000 startups.
        </p>
        </div>

    <div class="grid grid-cols-3 mt-10">

        <div class="flex flex-col justify-center items-center bg-blue">
            <img src='message.svg'/>
            <h1 class="font-medium">Share team inboxes</h1>
            <p class="text-sm text-center  text-gray-500 m-2">
            Whether you have a team of 2 or 200, our shared<br/>
            team inboxes keep everyone on the same page<br/>
                and in the loop.
            </p>
        </div>
        
        <div class="flex flex-col justify-center items-center bg-blue">
            <img src="Thunder.svg"/>
            <h1 class="font-medium">Deliver instant answers</h1>
            <p class="text-sm text-center text-gray-500 m-2">
        An all-in-one customer service platform that helps <br/>
        you balance everything your customers need to be <br/>
                            happy.
            </p>
        </div>
        
        <div class="flex flex-col justify-center items-center bg-blue">
            <img src="Manage.svg"/>
            <h1 class="font-medium">Manage your team with reports</h1>
            <p class="text-sm text-center text-gray-500 m-2">
            Measure what matters with Untitled’s easy-to-use <br/>
            reports. You can filter, export, and drilldown on the<br/> 
            data in a couple clicks.
            </p>
        </div>
        
        <div class="flex flex-col justify-center items-center bg-blue">
            <img src="Connect.svg"/>
            <h1 class="font-medium">Connect with customers</h1>
            <p class="text-sm text-center text-gray-500 m-2">
            Solve a problem or close a sale in real-time with <br/>
            chat. If no one is available, customers are <br/>
            seamlessly routed to email without confusion.
            </p>
        </div>
        
        <div class="flex flex-col justify-center items-center bg-blue">
            <img src="Tools.svg"/>
            <h1 class="font-medium">Connect the tools you already use</h1>
            <p class="text-sm text-center text-gray-500 m-2">
            Explore 100+ integrations that make your <br/>
            day-to-day workflow more efficient and familiar.<br/>
            Plus, our extensive developer tools.
            </p>
        </div>
        
        <div class="flex flex-col justify-center items-center bg-blue">
            <img src="People.svg"/>
            <h1 class="font-medium">Our people make the difference</h1>
            <p class="text-sm text-center text-gray-500 m-2">
            We’re an extension of your customer service team,<br/>
            and all of our resources are free. Chat to our <br/>
            friendly team 24/7 when you need help.
            </p>
        </div>
    
    </div>
    
    </div>
    </>
  )
}
