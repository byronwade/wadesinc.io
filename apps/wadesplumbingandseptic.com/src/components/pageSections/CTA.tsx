export default function CTA() {
	return (
		<section className="dark:bg-black bg-white border-t">
			<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
				<div className="max-w-screen-md">
					<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">Customer Support</h2>
					<p className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Let's find more that brings us together.</p>
					<p className="mb-8 text-gray-500 sm:text-xl dark:text-gray-400">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
					<div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
						<a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-brand rounded-lg hover:bg-brand-600 focus:ring-4 focus:ring-brand-300 dark:focus:ring-brand-900">
							Contact Us
						</a>
						<a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
							<svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
							</svg>
							View more
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
