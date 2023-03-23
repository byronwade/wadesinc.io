"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const people = [
	{ id: 1, name: "Septic" },
	{ id: 2, name: "Drain Clearing" },
	{ id: 3, name: "Plumbing" },
	{ id: 4, name: "Engineered Septic" },
	{ id: 5, name: "Residential" },
	{ id: 6, name: "Commercial" },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Services() {
	const [selected, setSelected] = useState(people[3]);
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

						<form className="flex w-full space-x-2 items-center mt-4">
							<Listbox value={selected} onChange={setSelected}>
								{({ open }) => (
									<>
										<div className="relative">
											<Listbox.Button className="relative min-w-[170px] cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-600 sm:text-sm sm:leading-6">
												<span className="block truncate">{selected.name}</span>
												<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
													<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
												</span>
											</Listbox.Button>

											<Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
												<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
													{people.map((person) => (
														<Listbox.Option key={person.id} className={({ active }) => classNames(active ? "bg-brand-600 text-white" : "text-gray-900", "relative cursor-default select-none py-2 pl-3 pr-9")} value={person}>
															{({ selected, active }) => (
																<>
																	<span className={classNames(selected ? "font-semibold" : "font-normal", "block truncate")}>{person.name}</span>

																	{selected ? (
																		<span className={classNames(active ? "text-white" : "text-brand-600", "absolute inset-y-0 right-0 flex items-center pr-4")}>
																			<CheckIcon className="h-5 w-5" aria-hidden="true" />
																		</span>
																	) : null}
																</>
															)}
														</Listbox.Option>
													))}
												</Listbox.Options>
											</Transition>
										</div>
									</>
								)}
							</Listbox>
							<label htmlFor="simple-search" className="sr-only">
								Search
							</label>
							<div className="relative w-full">
								<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
									</svg>
								</div>
								<input type="text" id="simple-search" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brand-500 dark:focus:border-brand-500" placeholder="We have 203 Services..." required />
							</div>
							<button type="submit" className="p-2.5 text-sm font-medium text-white bg-brand-700 rounded-lg border border-brand-700 hover:bg-brand-800 focus:ring-4 focus:outline-none focus:ring-brand-300 dark:bg-brand-600 dark:hover:bg-brand-700 dark:focus:ring-brand-800">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</button>
						</form>

						<div className="flex mt-10 items-center justify-center">
							<div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
								<div className="row-span-2 flex flex-col rounded border border-slate-200 bg-white">
									<div className="h-1/2 flex-1">
										<img src="https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png" className="w-full object-cover object-right-top rounded-t" alt="omnichannel" />
									</div>
									<div className="p-10">
										<h3 className="text-xl font-medium text-gray-700">Omnichannel support center</h3>
										<p className="mt-2 text-slate-500">Chatwoot connects with popular customer communication channels like Email, Website live-chat, Facebook, Twitter, WhatsApp, Instagram, Line, etc., and helps you deliver a consistent customer experience across channels.</p>
										<Link href="/services/single" className="mt-2 inline-flex text-sky-500">
											Read More →
										</Link>
									</div>
								</div>
								<div className="flex rounded border border-slate-200 bg-white">
									<div className="flex-1 p-10">
										<h3 className="text-xl font-medium text-gray-700">A live-chat that fits your brand</h3>
										<p className="mt-2 text-slate-500">Connect with your website visitors, communicate with them in realtime and give them quality support with a live-chat widget that fits your brand.</p>
										<Link href="/services/single" className="mt-2 inline-flex text-sky-500">
											Read More →
										</Link>
									</div>
									<div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
										<div className="absolute inset-0">
											<img src="https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png" className="rounded-r h-full w-full object-cover object-left-top" alt="" />
										</div>
									</div>
								</div>
								<div className="flex rounded border border-slate-200 bg-white">
									<div className="flex-1 p-10">
										<h3 className="text-xl font-medium text-gray-700">Respond faster, with automated chatbots</h3>
										<p className="mt-2 text-slate-500">Integrate with chatbots using Rasa or Dialogflow to automate conversations. Qualify using chatbots and seamlessly handoff to human agents.</p>
										<Link href="/services/single" className="mt-2 inline-flex text-sky-500">
											Read More →
										</Link>
									</div>
									<div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
										<div className="absolute inset-0">
											<img src="https://d33wubrfki0l68.cloudfront.net/1205a454c4b64452a51930c9b0043f8db9ff8271/d202e/new/landing/chat-bot.png" className="rounded-r h-full w-full object-cover object-left-top" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>

						<nav className="flex w-full items-center justify-between" aria-label="Pagination">
							<div className="hidden sm:block">
								<p className="text-sm text-gray-700">
									Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">20</span> results
								</p>
							</div>
							<div className="flex flex-1 justify-between sm:justify-end">
								<a href="#" className="relative inline-flex items-center rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
									Previous
								</a>
								<a href="#" className="relative ml-3 inline-flex items-center rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
									Next
								</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</section>
	);
}
