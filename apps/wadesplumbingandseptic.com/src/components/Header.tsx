"use client";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon, Bars3Icon, CheckBadgeIcon, XMarkIcon, CurrencyDollarIcon, BanknotesIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const navigation = [
	{ name: "Home", href: "/", current: true },
	// { name: "Residential", href: "/residential", current: false },
	// { name: "Commercial", href: "/commercial", current: false },
	{ name: "Services", href: "/services", current: false },
	{ name: "Rebates & Financing", href: "/financing", current: false },
	// { name: "Our Work", href: "/portfolio", current: false },
	{ name: "About Us", href: "/about-us", current: false },
];
const featuredPost = {
	id: 1,
	title: "We’re incredibly proud to announce we have secured $75m in Series B",
	href: "#",
	description: "Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.",
	date: "Mar 16, 2020",
	datetime: "2020-03-16",
	author: {
		name: "Michael Foster",
		href: "#",
		imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
};
const posts = [
	{
		id: 1,
		title: "Boost your conversion rate",
		href: "#",
		description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
		date: "Mar 10, 2020",
		datetime: "2020-03-16",
		author: {
			name: "Lindsay Walton",
			href: "#",
			imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		id: 2,
		title: "Boost your conversion rate",
		href: "#",
		description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
		date: "Mar 10, 2020",
		datetime: "2020-03-16",
		author: {
			name: "Lindsay Walton",
			href: "#",
			imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	// More posts...
];

const solutions = [
	{
		name: "Our Team",
		description: "Get to know our team",
		href: "/about-us",
		icon: UserCircleIcon,
	},
	{
		name: "Warranties",
		description: "Learn about our warranties",
		href: "/about-us/warranties",
		icon: CheckBadgeIcon,
	},
	{
		name: "Rebates",
		description: "Find some rebates",
		href: "/about-us/rebates",
		icon: CurrencyDollarIcon,
	},
	{ name: "Financing", description: "Our financing is top notch", href: "/about-us/financing", icon: BanknotesIcon },
	{
		name: "Job Opertunities",
		description: "Find your dream job",
		href: "/about-us/jobs",
		icon: BriefcaseIcon,
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	return (
		<Disclosure as="nav" className="isolate bg-black text-white sticky top-0 z-50">
			{({ open }) => (
				<>
					<div className="relitive flex p-3 items-center justify-between mx-auto max-w-7xl px-6 lg:px-8">
						<Link className="flex items-center space-x-4" href="/">
							<Image src="/WadesLogo.png" width={40} height={40} alt="Wade's Plumbing & Septic Logo" />
							<h1 className="font-bold text-2xl hidden xl:inline-flex">Wades Plumbing & Septic</h1>
						</Link>
						<div className="flex font-bold items-center md:hidden">
							<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
								<span className="sr-only">Open main menu</span>
								{open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
							</Disclosure.Button>
						</div>
						<div className="hidden md:flex space-x-8 items-center font-bold">
							{/* {navigation.map((item) => (
								<Link className={classNames(item.current ? "text-brand" : "hover:underline")} key={item.name} href={item.href}>
									{item.name}
								</Link>
							))} */}
							<Link className="hover:underline" href="/">
								Home
							</Link>
							<Popover>
								<Popover.Button className="inline-flex items-center gap-x-1 hover:underline">
									Services
									<ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
								<Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 -translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 -translate-y-1">
									<Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-black pt-[112px] shadow">
										{({ close }) => (
											<div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-10 gap-x-8 py-10 px-6 lg:grid-cols-3 lg:px-8">
												<div className="grid grid-cols-4 col-span-2 gap-x-6 sm:gap-x-8">
													<div className="flex flex-col space-y-6">
														<h3 className="text-sm font-bold leading-6 text-brand">Residential</h3>
														<div className="flex flex-col space-y-1">
															<Link
																href="/residential"
																onClick={async () => {
																	await fetch("/residential", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Residential
															</Link>
															<Link
																href="/commercial"
																onClick={async () => {
																	await fetch("/commercial", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Commercial
															</Link>
															<Link
																href="/medical"
																onClick={async () => {
																	await fetch("/medical", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Medical
															</Link>
															<Link
																href="/industrial"
																onClick={async () => {
																	await fetch("/industrial", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Industrial
															</Link>
														</div>

														<Link
															href="/industrial"
															onClick={async () => {
																await fetch("/industrial", { method: "POST" });
																close();
															}}
															className="inline-flex items-center font-normal hover:underline"
														>
															<span>See more</span>
															<svg className="self-center ml-3 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
															</svg>
														</Link>
													</div>
													<div className="flex flex-col space-y-6">
														<h3 className="text-sm font-bold leading-6 text-brand">Commercial</h3>
														<div className="flex flex-col space-y-1">
															<Link
																href="/residential"
																onClick={async () => {
																	await fetch("/residential", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Residential
															</Link>
															<Link
																href="/commercial"
																onClick={async () => {
																	await fetch("/commercial", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Commercial
															</Link>
															<Link
																href="/medical"
																onClick={async () => {
																	await fetch("/medical", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Medical
															</Link>
															<Link
																href="/industrial"
																onClick={async () => {
																	await fetch("/industrial", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Industrial
															</Link>
														</div>

														<Link
															href="/industrial"
															onClick={async () => {
																await fetch("/industrial", { method: "POST" });
																close();
															}}
															className="inline-flex items-center font-normal hover:underline"
														>
															<span>See more</span>
															<svg className="self-center ml-3 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
															</svg>
														</Link>
													</div>
													<div className="flex flex-col space-y-6">
														<h3 className="text-sm font-bold leading-6 text-brand">Drain Clearing</h3>
														<div className="flex flex-col space-y-1">
															<Link
																href="/residential"
																onClick={async () => {
																	await fetch("/residential", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Residential
															</Link>
															<Link
																href="/commercial"
																onClick={async () => {
																	await fetch("/commercial", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Commercial
															</Link>
															<Link
																href="/medical"
																onClick={async () => {
																	await fetch("/medical", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Medical
															</Link>
															<Link
																href="/industrial"
																onClick={async () => {
																	await fetch("/industrial", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Industrial
															</Link>
														</div>

														<Link
															href="/industrial"
															onClick={async () => {
																await fetch("/industrial", { method: "POST" });
																close();
															}}
															className="inline-flex items-center font-normal hover:underline"
														>
															<span>See more</span>
															<svg className="self-center ml-3 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
															</svg>
														</Link>
													</div>
													<div className="flex flex-col space-y-6">
														<h3 className="text-sm font-bold leading-6 text-brand">Septic</h3>
														<div className="flex flex-col space-y-1">
															<Link
																href="/residential"
																onClick={async () => {
																	await fetch("/residential", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Residential
															</Link>
															<Link
																href="/commercial"
																onClick={async () => {
																	await fetch("/commercial", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Commercial
															</Link>
															<Link
																href="/medical"
																onClick={async () => {
																	await fetch("/medical", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Medical
															</Link>
															<Link
																href="/industrial"
																onClick={async () => {
																	await fetch("/industrial", { method: "POST" });
																	close();
																}}
																className="font-normal hover:underline"
															>
																Industrial
															</Link>
														</div>

														<Link
															href="/industrial"
															onClick={async () => {
																await fetch("/industrial", { method: "POST" });
																close();
															}}
															className="inline-flex items-center font-normal hover:underline"
														>
															<span>See more</span>
															<svg className="self-center ml-3 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
															</svg>
														</Link>
													</div>
												</div>
												<div className="flex flex-col space-y-4">
													<div>
														<a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
															<h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-white">View Our Work</h5>
															<p className="font-normal text-gray-700 dark:text-gray-400">Take a look at all of our work, everything from septic to commerical and underground.</p>
														</a>
													</div>
													<div>
														<a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
															<h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-white">View Our Work</h5>
															<p className="font-normal text-gray-700 dark:text-gray-400">Take a look at all of our work, everything from septic to commerical and underground.</p>
														</a>
													</div>
												</div>
											</div>
										)}
									</Popover.Panel>
								</Transition>
							</Popover>
							<Popover>
								<Popover.Button className="inline-flex items-center gap-x-1 hover:underline">
									Expert Tips
									<ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
								<Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 -translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 -translate-y-1">
									<Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-black pt-[112px] shadow">
										{({ close }) => (
											<div className="mx-auto py-10 max-w-7xl px-6 lg:px-8">
												<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-3 lg:px-8">
													<article className="space-y-6 mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
														<h3 className="text-sm font-bold leading-6 text-brand">Featured Post</h3>
														<h2 id="featured-post" className="mt-4 text-1xl font-bold tracking-tight text-white sm:text-2xl">
															{featuredPost.title}
														</h2>
														<p className="mt-4 text-md text-white-800">{featuredPost.description}</p>

														<Link
															href="/expert-tips"
															onClick={async () => {
																await fetch("/expert-tips", { method: "POST" });
																close();
															}}
															className="inline-flex items-center font-normal hover:underline"
														>
															<span>See more</span>
															<svg className="self-center ml-3 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
															</svg>
														</Link>
													</article>
													<div className="flex flex-col space-y-6">
														<h3 className="text-sm font-bold leading-6 text-brand">Septic</h3>
														{posts.map((post) => (
															<article key={post.id} className="pb-6">
																<div className="space-y-6 group relative max-w-xl">
																	<h2 className="text-lg text-white group-hover:text-gray-600">
																		<a href={post.href}>
																			<span className="absolute inset-0" />
																			{post.title}
																		</a>
																	</h2>
																	<p className="mt-4 text-sm text-white-800">{post.description}</p>

																	<Link
																		href="/expert-tips"
																		onClick={async () => {
																			await fetch("/expert-tips", { method: "POST" });
																			close();
																		}}
																		className="inline-flex items-center font-normal hover:underline"
																	>
																		<span>See more</span>
																		<svg className="self-center ml-3 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																			<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
																		</svg>
																	</Link>
																</div>
															</article>
														))}
													</div>
													<div className="flex flex-col space-y-6">
														<h3 className="text-sm font-bold leading-6 text-brand">Plumbing</h3>
														{posts.map((post) => (
															<article key={post.id} className="pb-6">
																<div className="space-y-6 group relative max-w-xl">
																	<h2 className="text-lg text-white group-hover:text-gray-600">
																		<a href={post.href}>
																			<span className="absolute inset-0" />
																			{post.title}
																		</a>
																	</h2>
																	<p className="mt-4 text-sm text-white-800">{post.description}</p>

																	<Link
																		href="/industrial"
																		onClick={async () => {
																			await fetch("/industrial", { method: "POST" });
																			close();
																		}}
																		className="inline-flex items-center font-normal hover:underline"
																	>
																		<span>See more</span>
																		<svg className="self-center ml-3 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																			<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
																		</svg>
																	</Link>
																</div>
															</article>
														))}
													</div>
												</div>
											</div>
										)}
									</Popover.Panel>
								</Transition>
							</Popover>
							<Popover>
								<Popover.Button className="inline-flex items-center gap-x-1 hover:underline">
									About Us
									<ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
								<Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 -translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 -translate-y-1">
									<Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-black pt-[112px] shadow">
										{({ close }) => (
											<div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-5 lg:gap-4 lg:px-8 xl:gap-8">
												{solutions.map((item) => (
													<div key={item.name} className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6">
														<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-400 group-hover:bg-white">
															<item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
														</div>
														<div>
															<Link
																href={item.href}
																onClick={async () => {
																	await fetch(item.href, { method: "POST" });
																	close();
																}}
																className="font-semibold text-gray-900"
															>
																{item.name}
																<span className="absolute inset-0" />
															</Link>
															<p className="mt-1 text-gray-600">{item.description}</p>
														</div>
													</div>
												))}
											</div>
										)}
									</Popover.Panel>
								</Transition>
							</Popover>

							<Link href="/contact-us" className="inline-flex justify-center rounded font-bold px-3.5 py-2.5 bg-brand text-black hover:bg-brand-600">
								Get a Quote
							</Link>
						</div>
					</div>
					<div className="hidden md:block bg-brand  text-black font-bold py-1 px-4">
						<div className="hidden lg:flex mx-auto max-w-7xl px-6 lg:px-8 p-1 items-center justify-center text-sm space-x-10 pr-4">
							<div>Mon - Fri 9:00am - 5:00pm</div>
							<a className="text-lg font-extrabold hover:underline" href="tel:+18312254344">
								831.225.4344
							</a>
							<a target="_blank" className="hover:underline" href="https://www.google.com/maps/place/Wade's+Plumbing+%26+Septic/@37.0691872,-122.0863327,17z/data=!4m15!1m8!3m7!1s0x808e45d553ee3671:0x11e65c09abb0758b!2s7737+CA-9,+Ben+Lomond,+CA+95005!3b1!8m2!3d37.0691829!4d-122.084144!16s%2Fg%2F11jzwrnb7h!3m5!1s0x6b4df86479b11ce3:0x6dc60026b2e543b9!8m2!3d37.0691829!4d-122.084144!16s%2Fg%2F11np4mj1hk" rel="noreferrer">
								7737 HWY 9, Ben Lomond, CA, 95005
							</a>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden">
						<div className="space-y-1 px-2 pt-2 pb-3">
							{navigation.map((item) => (
								<Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-bold")} aria-current={item.current ? "page" : undefined}>
									{item.name}
								</Disclosure.Button>
							))}
							<Link href="/contact-us" className="inline-flex justify-center rounded font-bold py-1 px-2 w-full bg-brand text-black hover:bg-brand-600">
								Get a Quote
							</Link>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
