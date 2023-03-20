export default function HeroSection() {
	return (
		<section className="relative bg-[url('/redwoods.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
			{/* <Banner /> */}
			<div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-12 xl:gap-0 lg:py-44 lg:grid-cols-12">
				<div className="place-self-center mr-auto mb-10 lg:col-span-7 xl:col-span-8 xl:mb-0 p-4 m:p-6 lg:p-8">
					<p className="text-lg font-semibold leading-8 tracking-tight inline-flex items-center rounded-md bg-brand-100 px-2.5 py-0.5 text-brand-800">Local Built Company</p>
					<h1 className="tracking-tight font-extrabold mt-2 text-4xl text-white sm:text-6xl dark:text-black">Where Quality Meets Community.</h1>
					<p className="mt-6 text-lg leading-8 text-white backdrop-blur-sm bg-white/30 p-4 rounded">
						&quot;Where Quality Meets Community&quot; represents our commitment to providing high-quality plumbing services to our local community. We believe that by delivering top-notch plumbing solutions with a focus on customer service, we can make a positive impact on the neighborhoods we serve. At Wade&apos;s Plumbing & Septic, we take pride in being more than just a plumbing company; we&apos;re a part of the community we serve, and we&apos;re dedicated to providing the best
						possible service to our friends and neighbors.
					</p>
					<p className="font-bold text-white mt-4">License Number (Plumbing & Septic): 252345</p>
					{/* <div className="text-white grid gap-8 lg:grid-cols-2 pt-8">
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium backdrop-blur-sm bg-white/30 hover:bg-white/60 rounded ">
								<span className="w-full">Curious about our warranties?</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium backdrop-blur-sm bg-white/30 hover:bg-white/60 rounded ">
								<span className="w-full">Learn more about our local customer support team</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium backdrop-blur-sm bg-white/30 hover:bg-white/60 rounded ">
								<span className="w-full">Explore our list of services, plumbing & septic.</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium backdrop-blur-sm bg-white/30 hover:bg-white/60 rounded ">
								<span className="w-full">Take a look as our map to see the areas we serve.</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
						</div> */}
				</div>
				<div className="justify-center p-4 max-w-screen-sm bg-white rounded  lg:mt-0 lg:col-span-5 xl:col-span-4 sm:p-6 lg:p-8 dark:bg-gray-800">
					<form action="#" method="POST" className="lg:flex-auto">
						<div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
							<div>
								<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
									First name
								</label>
								<div className="mt-2.5">
									<input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
								</div>
							</div>
							<div>
								<label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
									Last name
								</label>
								<div className="mt-2.5">
									<input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
								</div>
							</div>
							<div>
								<label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
									Phone
								</label>
								<div className="mt-2.5">
									<input id="phone" name="phone" type="text" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
								</div>
							</div>
							<div>
								<label htmlFor="text" className="block text-sm font-semibold leading-6 text-gray-900">
									Address
								</label>
								<div className="mt-2.5">
									<input id="address" name="address" type="text" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
									Message
								</label>
								<div className="mt-2.5">
									<textarea id="message" name="message" rows={4} className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" defaultValue={""} />
								</div>
							</div>
						</div>
						<div className="mt-10">
							<button type="submit" className="block w-full rounded-md bg-brand-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
								Get a Quote
							</button>
						</div>
						<p className="mt-4 text-sm leading-6 text-gray-700">
							By submitting this form, I agree to the{" "}
							<a href="#" className="font-semibold text-brand-600">
								privacy&nbsp;policy
							</a>
							.
						</p>
					</form>
				</div>
			</div>
		</section>
	);
}
