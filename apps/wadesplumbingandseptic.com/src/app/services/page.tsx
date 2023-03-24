"use client";
import Link from "next/link";
import Pagnation from "@/components/ui/Pagnation";
import Search from "@/components/ui/Search";

const catergories = [
	{ id: 1, name: "Septic" },
	{ id: 2, name: "Drain Clearing" },
	{ id: 3, name: "Plumbing" },
	{ id: 4, name: "Engineered Septic" },
	{ id: 5, name: "Residential" },
	{ id: 6, name: "Commercial" },
];

export default function Services() {
	return (
		<section className="bg-gray-50 relative overflow-hidden">
			<div className="py-16 px-6 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col space-y-6 justify-center items-start">
						<div>
							<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">We have 102 Services</h2>
							<p className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Search for any service</p>
							<p className="max-w-2xl text-lg leading-6 text-gray-600">
								Have a different question and can’t find the answer you’re looking for? Reach out to our support team by
								<a href="#" className="font-semibold text-brand-600 hover:text-brand-500">
									{` `}sending us an email{` `}
								</a>
								and we’ll get back to you as soon as we can.
							</p>
						</div>

						<Search catergories={catergories} />

						<div className="flex mt-10 items-center justify-center">
							<div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
								<Link href="/services/single" className="group row-span-2 flex flex-col rounded border border-slate-200 bg-white">
									<div className="h-1/2 flex-1">
										<img src="https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png" className="w-full object-cover object-right-top rounded-t" alt="omnichannel" />
									</div>
									<div className="p-10">
										<h3 className="text-xl font-medium text-gray-700">Omnichannel support center</h3>
										<p className="mt-2 text-slate-500">Chatwoot connects with popular customer communication channels like Email, Website live-chat, Facebook, Twitter, WhatsApp, Instagram, Line, etc., and helps you deliver a consistent customer experience across channels.</p>
										<span className="group-hover:underline mt-2 inline-flex text-sky-500">Read More →</span>
									</div>
								</Link>
								<Link href="/services/single" className="group flex rounded border border-slate-200 bg-white">
									<div className="flex-1 p-10">
										<h3 className="text-xl font-medium text-gray-700">A live-chat that fits your brand</h3>
										<p className="mt-2 text-slate-500">Connect with your website visitors, communicate with them in realtime and give them quality support with a live-chat widget that fits your brand.</p>
										<span className="group-hover:underline mt-2 inline-flex text-sky-500">Read More →</span>
									</div>
									<div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
										<div className="absolute inset-0">
											<img src="https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png" className="rounded-r h-full w-full object-cover object-left-top" alt="" />
										</div>
									</div>
								</Link>
								<Link href="/services/single" className="group flex rounded border border-slate-200 bg-white">
									<div className="flex-1 p-10">
										<h3 className="text-xl font-medium text-gray-700">Respond faster, with automated chatbots</h3>
										<p className="mt-2 text-slate-500">Integrate with chatbots using Rasa or Dialogflow to automate conversations. Qualify using chatbots and seamlessly handoff to human agents.</p>
										<span className="group-hover:underline mt-2 inline-flex text-sky-500">Read More →</span>
									</div>
									<div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
										<div className="absolute inset-0">
											<img src="https://d33wubrfki0l68.cloudfront.net/1205a454c4b64452a51930c9b0043f8db9ff8271/d202e/new/landing/chat-bot.png" className="rounded-r h-full w-full object-cover object-left-top" alt="" />
										</div>
									</div>
								</Link>
							</div>
						</div>

						<Pagnation pageMin={1} pageMax={1000} total={2000} />
					</div>
				</div>
			</div>
		</section>
	);
}
