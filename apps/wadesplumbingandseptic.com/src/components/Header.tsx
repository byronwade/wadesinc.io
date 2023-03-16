"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
	{ name: "Home", href: "/", current: true },
	{ name: "Residential", href: "/residential", current: false },
	{ name: "Commercial", href: "/commercial", current: false },
	{ name: "Services", href: "/services", current: false },
	{ name: "Our Work", href: "/portfolio", current: false },
	{ name: "About Us", href: "/about-us", current: false },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	return (
		<Disclosure as="nav" className="bg-black text-white sticky top-0 z-50">
			{({ open }) => (
				<>
					<div className="bg-black-200">
						<div className="hidden lg:flex mx-auto max-w-7xl px-6 lg:px-8 p-1 items-center justify-end text-sm space-x-10 pr-4">
							<div>Mon - Fri 9:00am - 5:00pm</div>
							<a className="hover:underline" href="tel:+18312254344">
								831.225.4344
							</a>
							<a target="_blank" className="hover:underline" href="https://www.google.com/maps/place/Wade's+Plumbing+%26+Septic/@37.0691872,-122.0863327,17z/data=!4m15!1m8!3m7!1s0x808e45d553ee3671:0x11e65c09abb0758b!2s7737+CA-9,+Ben+Lomond,+CA+95005!3b1!8m2!3d37.0691829!4d-122.084144!16s%2Fg%2F11jzwrnb7h!3m5!1s0x6b4df86479b11ce3:0x6dc60026b2e543b9!8m2!3d37.0691829!4d-122.084144!16s%2Fg%2F11np4mj1hk" rel="noreferrer">
								7737 HWY 9, Ben Lomond, CA, 95005
							</a>
						</div>
					</div>
					<div className="flex p-3 items-center justify-between mx-auto max-w-7xl px-6 lg:px-8">
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
							{navigation.map((item) => (
								<Link className={classNames(item.current ? "text-brand" : "hover:underline")} key={item.name} href={item.href}>
									{item.name}
								</Link>
							))}
							<Link href="/contact-us" className="inline-flex justify-center rounded font-bold px-3.5 py-2.5 bg-brand text-black hover:bg-brand-600">
								Contact Us
							</Link>
						</div>
					</div>
					<div className="hidden md:block bg-brand  text-black font-bold p-2 px-4">
						<div className="flex justify-start mx-auto max-w-7xl px-6 lg:px-8 space-x-6">
							<Link className="hover:underline" href="/">
								Septic
							</Link>
							<Link className="hover:underline" href="/">
								Septic
							</Link>
							<Link className="hover:underline" href="/">
								Septic
							</Link>
							<Link className="hover:underline" href="/">
								Septic
							</Link>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden">
						<div className="space-y-1 px-2 pt-2 pb-3">
							{navigation.map((item) => (
								<Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")} aria-current={item.current ? "page" : undefined}>
									{item.name}
								</Disclosure.Button>
							))}
							<Link href="/contact-us" className="inline-flex justify-center rounded font-bold py-1 px-2 w-full bg-brand text-black hover:bg-brand-600">
								Contact Us
							</Link>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
