"use client";

export default function Example() {
	return (
		<div className="mx-auto max-w-7xl py-16">
			<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">Frequently asked questions</h2>
			<p className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Learn more about our company</p>
			<p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
				Have a different question and can’t find the answer you’re looking for? Reach out to our support team by
				<a href="#" className="font-semibold text-brand-600 hover:text-brand-500">
					{` `}sending us an email{` `}
				</a>
				and we’ll get back to you as soon as we can.
			</p>

			<form className="mt-4">
				<div className="flex">
					<label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Your Email
					</label>
					<button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-t-1 border-b-1 border-l-1 border-gray-300 rounded-l hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
						All categories{" "}
						<svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</button>
					<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
						<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
							<li>
								<button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
									Mockups
								</button>
							</li>
							<li>
								<button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
									Templates
								</button>
							</li>
							<li>
								<button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
									Design
								</button>
							</li>
							<li>
								<button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
									Logos
								</button>
							</li>
						</ul>
					</div>
					<div className="relative w-full">
						<input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r border-l-gray-50 border-l-2 border border-gray-300 focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-brand-500" placeholder="Search Mockups, Logos, Design Templates..." required="" />
						<button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-brand-700 rounded-r border border-brand-700 hover:bg-brand-800 focus:ring-4 focus:outline-none focus:ring-brand-300 dark:bg-brand-600 dark:hover:bg-brand-700 dark:focus:ring-brand-800">
							<svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
							<span className="sr-only">Search</span>
						</button>
					</div>
				</div>
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
							<a href="" className="mt-2 inline-flex text-sky-500">
								Read More →
							</a>
						</div>
					</div>
					<div className="flex rounded border border-slate-200 bg-white">
						<div className="flex-1 p-10">
							<h3 className="text-xl font-medium text-gray-700">A live-chat that fits your brand</h3>
							<p className="mt-2 text-slate-500">Connect with your website visitors, communicate with them in realtime and give them quality support with a live-chat widget that fits your brand.</p>
							<a href="" className="mt-2 inline-flex text-sky-500">
								Read More →
							</a>
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
							<a href="" className="mt-2 inline-flex text-sky-500">
								Read More →
							</a>
						</div>
						<div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
							<div className="absolute inset-0">
								<img src="https://d33wubrfki0l68.cloudfront.net/1205a454c4b64452a51930c9b0043f8db9ff8271/d202e/new/landing/chat-bot.png" className="rounded-r h-full w-full object-cover object-left-top" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<nav className="flex items-center justify-between py-3" aria-label="Pagination">
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
	);
}
