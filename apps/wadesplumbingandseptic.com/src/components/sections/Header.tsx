"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { ArrowLongRightIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { BanknotesIcon, Bars3Icon, MegaphoneIcon, BriefcaseIcon, CheckBadgeIcon, CurrencyDollarIcon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { CATEGORIESANDSERVICES } from "../../graphql/header";

const navigation = [
	{ name: "Home", href: "/", current: true },
	// { name: "Residential", href: "/residential", current: false },
	// { name: "Commercial", href: "/commercial", current: false },
	{ name: "Services", href: "/services", current: false },
	{ name: "Expert Tips", href: "/expert-tips", current: false },
	// { name: "Our Work", href: "/portfolio", current: false },
	{ name: "About Us", href: "/about-us", current: false },
	{ name: "Get a Quote", href: "/contact-us", current: false },
];

const solutions = [
	{
		name: "Team & Company",
		description: "Get to know our team and company",
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
	{
		name: "Promotions & Discounts",
		description: "Find a discount here",
		href: "/about-us/promotions",
		icon: MegaphoneIcon,
	},
	// {
	// 	name: "Reviews",
	// 	description: "Our Reviews are top notch",
	// 	href: "/about-us/reviews",
	// 	icon: StarIcon,
	// },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	const { loading, error, data } = useQuery(CATEGORIESANDSERVICES);
	// if (loading) return <div>Loading...</div>;
	// if (error) return <div>{error?.message}</div>;
	return (
		<Disclosure as="nav" className="bg-black text-white sticky top-0 z-50">
			{({ open }) => (
				<>
					<div className="relitive flex p-3 items-center justify-between mx-auto max-w-7xl px-6 lg:px-8">
						<Link className="flex items-center space-x-4" href="/">
							<Image className="w-auto h-auto" src="/WadesLogo.png" width={40} height={40} alt="Wade's Plumbing & Septic Logo" />
							<h1 className="font-bold text-2xl hidden xl:inline-flex">Wades Plumbing & Septic</h1>
						</Link>
						<div className="flex font-bold items-center md:hidden">
							<Disclosure.Button className="inline-flex items-center justify-center rounded p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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

							{/* SERVICES SECTION */}
							<Popover>
								<Popover.Button className="inline-flex items-center gap-x-1 hover:underline">
									Services
									<ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
								<Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 -translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 -translate-y-1">
									<Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-black pt-[112px] shadow">
										{({ close }) => (
											<div className="mx-auto max-w-7xl py-10 px-6 lg:px-8">
												<div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
													<div className="grid grid-cols-6 col-span-6 gap-x-6 sm:gap-x-8">
														<div className="flex flex-col space-y-6">
															<h3 className="text-sm font-bold leading-6 text-brand">{data?.residential?.name}</h3>
															<div className="flex flex-col space-y-4">
																{data?.residential?.services?.nodes.slice(0, 4).map((services, index) => (
																	<Link
																		key={index}
																		href={services.uri}
																		onClick={async () => {
																			await fetch(services.uri, { method: "POST" });
																			close();
																		}}
																		className="font-normal hover:underline text-sm"
																	>
																		{services.title}
																	</Link>
																))}
															</div>
														</div>
														<div className="flex flex-col space-y-6">
															<h3 className="text-sm font-bold leading-6 text-brand">{data?.commercial?.name}</h3>
															<div className="flex flex-col space-y-4">
																{data?.commercial?.services?.nodes.slice(0, 4).map((services, index) => (
																	<Link
																		key={index}
																		href={services.uri}
																		onClick={async () => {
																			await fetch(services.uri, { method: "POST" });
																			close();
																		}}
																		className="font-normal hover:underline text-sm"
																	>
																		{services.title}
																	</Link>
																))}
															</div>
														</div>
														<div className="flex flex-col space-y-6">
															<h3 className="text-sm font-bold leading-6 text-brand">{data?.drainClearing?.name}</h3>
															<div className="flex flex-col space-y-4">
																{data?.drainClearing?.services?.nodes.slice(0, 4).map((services, index) => (
																	<Link
																		key={index}
																		href={services.uri}
																		onClick={async () => {
																			await fetch(services.uri, { method: "POST" });
																			close();
																		}}
																		className="font-normal hover:underline text-sm"
																	>
																		{services.title}
																	</Link>
																))}
															</div>
														</div>
														<div className="flex flex-col space-y-6">
															<h3 className="text-sm font-bold leading-6 text-brand">{data?.septic?.name}</h3>
															<div className="flex flex-col space-y-4">
																{data?.septic?.services?.nodes.slice(0, 4).map((services, index) => (
																	<Link
																		key={index}
																		href={services.uri}
																		onClick={async () => {
																			await fetch(services.uri, { method: "POST" });
																			close();
																		}}
																		className="font-normal hover:underline text-sm"
																	>
																		{services.title}
																	</Link>
																))}
															</div>
														</div>
														<div className="flex flex-col space-y-6">
															<h3 className="text-sm font-bold leading-6 text-brand">{data?.engineeredSeptic?.name}</h3>
															<div className="flex flex-col space-y-4">
																{data?.engineeredSeptic?.services?.nodes.slice(0, 4).map((services, index) => (
																	<Link
																		key={index}
																		href={services.uri}
																		onClick={async () => {
																			await fetch(services.uri, { method: "POST" });
																			close();
																		}}
																		className="font-normal hover:underline text-sm"
																	>
																		{services.title}
																	</Link>
																))}
															</div>
														</div>
														<div className="flex flex-col space-y-6">
															<h3 className="text-sm font-bold leading-6 text-brand">{data?.drainage?.name}</h3>
															<div className="flex flex-col space-y-4">
																{data?.drainage?.services?.nodes.slice(0, 4).map((services, index) => (
																	<Link
																		key={index}
																		href={services.uri}
																		onClick={async () => {
																			await fetch(services.uri, { method: "POST" });
																			close();
																		}}
																		className="font-normal hover:underline text-sm"
																	>
																		{services.title}
																	</Link>
																))}
															</div>
														</div>
													</div>

													<div className="bg-brand p-4 rounded relative col-span-3 flex flex-wrap items-center justify-between">
														<div className="w-full lg:w-1/2">
															<h2 className="text-lg font-semibold leading-8 tracking-tight text-black-600">We have {data?.servicesTotals?.pageInfo?.total} Services</h2>
															<p className="mb-4 text-4xl tracking-tight font-extrabold text-black">Search for any service</p>
														</div>
														<div className="w-fulllg:w-1/2">
															<div className="flex flex-wrap lg:justify-end">
																<Link
																	href="/services"
																	onClick={async () => {
																		await fetch("/services", { method: "POST" });
																		close();
																	}}
																	className="hover:text-brand my-1 mr-4 inline-block rounded bg-white bg-opacity-[15%] py-4 px-6 text-base font-medium text-black transition hover:bg-opacity-100 md:px-9 lg:px-6 xl:px-9"
																>
																	See all of our services
																</Link>
																<Link
																	onClick={async () => {
																		await fetch("/contact-us", { method: "POST" });
																		close();
																	}}
																	href="/contact-us"
																	className="my-1 inline-block rounded bg-black py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-80 md:px-9 lg:px-6 xl:px-9"
																>
																	Get a free quote
																</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										)}
									</Popover.Panel>
								</Transition>
							</Popover>

							{/* EXPERT TIPS SECTION */}
							<Popover>
								<Popover.Button className="inline-flex items-center gap-x-1 hover:underline">
									Expert Tips
									<ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
								<Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 -translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 -translate-y-1">
									<Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-black pt-[112px] shadow">
										{({ close }) => (
											<div className="mx-auto max-w-7xl py-10 px-6 lg:px-8">
												<div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2">
													<div className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-3">
														<div className="flex flex-col">
															<h3 className="text-sm font-bold leading-6 text-brand">Featured Post</h3>
															{data?.featuredPost?.nodes.slice(0, 1).map((post, index) => (
																<Link
																	key={index}
																	href={`/expert-tips/${post.uri}`}
																	onClick={async () => {
																		await fetch(`/expert-tips/${post.uri}`, { method: "POST" });
																		close();
																	}}
																	className="group space-y-2 mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg"
																>
																	<h2 id="featured-post" className="mt-4 text-1xl font-bold tracking-tight text-white sm:text-2xl">
																		{post.title}
																	</h2>

																	<div className="inline-flex items-center font-normal hover:underline text-sm">
																		<span className="group-hover:underline">Read in {post.readingTime} min</span>
																		<ArrowLongRightIcon className="self-center ml-3 w-4 h-4" />
																	</div>
																</Link>
															))}
														</div>
														<div className="flex flex-col space-y-6">
															<h3 className="text-sm font-bold leading-6 text-brand">{data?.postsSeptic?.name}</h3>
															<div className="flex flex-col space-y-4">
																{data?.postsSeptic?.posts?.nodes.slice(0, 2).map((post, index) => (
																	<Link
																		key={index}
																		href={`/expert-tips/${post.uri}`}
																		onClick={async () => {
																			await fetch(`/expert-tips/${post.uri}`, { method: "POST" });
																			close();
																		}}
																	>
																		<div className="space-y-2 group relative max-w-xl">
																			<h2 className="text-lg text-white">
																				<div>
																					<span className="absolute inset-0" />
																					{post.title}
																				</div>
																			</h2>

																			<div className="inline-flex items-center font-normal hover:underline text-sm">
																				<span className="group-hover:underline">Read in {post.readingTime} min</span>
																				<ArrowLongRightIcon className="self-center ml-3 w-4 h-4" />
																			</div>
																		</div>
																	</Link>
																))}
															</div>
														</div>
														<div className="flex flex-col space-y-6">
															<h3 className="text-sm font-bold leading-6 text-brand">{data?.postsPlumbing?.name}</h3>
															<div className="flex flex-col space-y-4">
																{data?.postsPlumbing?.posts?.nodes.slice(0, 2).map((post, index) => (
																	<Link
																		key={index}
																		href={`/expert-tips/${post.uri}`}
																		onClick={async () => {
																			await fetch(`/expert-tips/${post.uri}`, { method: "POST" });
																			close();
																		}}
																	>
																		<div className="space-y-2 group relative max-w-xl">
																			<h2 className="text-lg text-white">
																				<div>
																					<span className="absolute inset-0" />
																					{post.title}
																				</div>
																			</h2>

																			<div className="inline-flex items-center font-normal hover:underline text-sm">
																				<span className="group-hover:underline">Read in {post.readingTime} min</span>
																				<ArrowLongRightIcon className="self-center ml-3 w-4 h-4" />
																			</div>
																		</div>
																	</Link>
																))}
															</div>
														</div>
													</div>

													<div className="bg-brand p-4 rounded relative col-span-2 flex flex-wrap items-center justify-between">
														<div className="w-full lg:w-1/2">
															<h2 className="text-lg font-semibold leading-8 tracking-tight text-black-600">We have {data?.expertTipsTotals?.pageInfo?.total} Expert Tips</h2>
															<p className="mb-4 text-4xl tracking-tight font-extrabold text-black">Search for any Tip or Post</p>
														</div>
														<div className="w-fulllg:w-1/2">
															<div className="flex flex-wrap lg:justify-end">
																<Link
																	href="/expert-tips"
																	onClick={async () => {
																		await fetch("/expert-tips", { method: "POST" });
																		close();
																	}}
																	className="hover:text-brand my-1 mr-4 inline-block rounded bg-white bg-opacity-[15%] py-4 px-6 text-base font-medium text-black transition hover:bg-opacity-100 md:px-9 lg:px-6 xl:px-9"
																>
																	See all of our tips
																</Link>
																<Link
																	onClick={async () => {
																		await fetch("/contact-us", { method: "POST" });
																		close();
																	}}
																	href="/contact-us"
																	className="my-1 inline-block rounded bg-black py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-80 md:px-9 lg:px-6 xl:px-9"
																>
																	Get a free quote
																</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										)}
									</Popover.Panel>
								</Transition>
							</Popover>

							{/* ABOUT US SECTION */}
							<Popover>
								<Popover.Button className="inline-flex items-center gap-x-1 hover:underline">
									About Us & More
									<ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
								<Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 -translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 -translate-y-1">
									<Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-black pt-[112px] shadow">
										{({ close }) => (
											<div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-6 lg:gap-4 lg:px-8 xl:gap-8">
												{solutions.map((item, index) => (
													<Link
														href={item.href}
														onClick={async () => {
															await fetch(item.href, { method: "POST" });
															close();
														}}
														key={index}
														className="group relative -mx-3 flex gap-6 rounded p-3 text-sm leading-6 hover:bg-black-600 sm:flex-col sm:p-6"
													>
														<div className="flex h-11 w-11 flex-none items-center justify-center rounded bg-black-400 group-hover:bg-white">
															<item.icon className="h-6 w-6 text-gray-600 group-hover:text-brand-600" aria-hidden="true" />
														</div>
														<div>
															<div className="font-semibold text-gray-900">
																{item.name}
																<span className="absolute inset-0" />
															</div>
															<p className="mt-1 text-gray-600">{item.description}</p>
														</div>
													</Link>
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
					<div className="hidden md:block bg-brand text-black font-bold py-1 px-4 shadow">
						<div className="hidden lg:flex mx-auto max-w-7xl px-6 lg:px-8 p-1 items-center justify-center text-sm space-x-10 pr-4">
							<div>Mon - Fri 9:00am - 5:00pm</div>
							<a className="text-lg font-extrabold hover:underline" href="tel:+18312254344">
								831.225.4344
							</a>
							<a target="_blank" className="hover:underline" href="https://www.google.com/maps/place/Wade'+Plumbing+%26+Septic/@37.0691872,-122.0863327,17z/data=!4m15!1m8!3m7!1s0x808e45d553ee3671:0x11e65c09abb0758b!2s7737+CA-9,+Ben+Lomond,+CA+95005!3b1!8m2!3d37.0691829!4d-122.084144!16s%2Fg%2F11jzwrnb7h!3m5!1s0x6b4df86479b11ce3:0x6dc60026b2e543b9!8m2!3d37.0691829!4d-122.084144!16s%2Fg%2F11np4mj1hk" rel="noreferrer">
								7737 HWY 9, Ben Lomond, CA, 95005
							</a>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden">
						<div className="space-y-3 px-2 pt-2 pb-3">
							{navigation.map((item, index) => (
								<Link
									key={index}
									href={item.href}
									onClick={async () => {
										await fetch(item.href, { method: "POST" });
										close();
									}}
								>
									<Disclosure.Button as="button" className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded px-3 py-2 text-base font-bold")} aria-current={item.current ? "page" : undefined}>
										{item.name}
									</Disclosure.Button>
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
