export default function BlogPage() {
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="relative">
					<header className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/background.png')] w-full h-[460px] xl:h-[537px] bg-no-repeat bg-cover bg-center bg-blend-darken relative">
						<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
						<div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
							<span className="block mb-4 text-gray-300">
								Published in{" "}
								<a href="#" className="font-semibold text-white hover:underline">
									World News
								</a>
							</span>
							<h1 className="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl">Flowbite Blocks Tutorial - Learn how to get started with custom sections using the Flowbite Blocks</h1>
							<p className="text-lg font-normal text-gray-300">Before going digital, you might scribbling down some ideas in a sketchbook.</p>
						</div>
					</header>
					<div className="flex relative z-20 justify-between p-6 -m-36 mx-4 max-w-screen-xl bg-white dark:bg-gray-800 rounded xl:-m-32 xl:p-9 xl:mx-auto">
						<article className="xl:w-[828px] w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
							<div className="flex flex-col lg:flex-row justify-between lg:items-center">
								<div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 lg:mb-0">
									<span>
										By{" "}
										<a href="#" className="text-gray-900 dark:text-white hover:underline no-underline font-semibold">
											Jese Leos
										</a>
									</span>
									<span className="bg-gray-300 dark:bg-gray-400 w-2 h-2 rounded-full" />
									<span>
										<time className="font-normal text-gray-500 dark:text-gray-400" dateTime="2022-03-08" title="August 3rd, 2022">
											August 3, 2022, 2:20am EDT
										</time>
									</span>
								</div>
								<aside aria-label="Share social media">
									<div className="space-x-1">
										<button data-tooltip-target="tooltip-facebook" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
											<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_13676_82298)">
													<path d="M18 9C18 4.02943 13.9706 0 9 0C4.02943 0 0 4.02943 0 9C0 13.4921 3.29115 17.2155 7.59375 17.8907V11.6016H5.30859V9H7.59375V7.01719C7.59375 4.76156 8.93742 3.51562 10.9932 3.51562C11.9776 3.51562 13.0078 3.69141 13.0078 3.69141V5.90625H11.873C10.755 5.90625 10.4062 6.60006 10.4062 7.3125V9H12.9023L12.5033 11.6016H10.4062V17.8907C14.7088 17.2155 18 13.4921 18 9Z" />
												</g>
												<defs>
													<clipPath id="clip0_13676_82298">
														<rect width={18} height={18} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</button>
										<div id="tooltip-facebook" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
											Share on Facebook
											<div className="tooltip-arrow" data-popper-arrow="" />
										</div>
										<button data-tooltip-target="tooltip-twitter" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
											<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path d="M5.66064 16.3131C12.4531 16.3131 16.1683 10.6856 16.1683 5.80539C16.1683 5.64555 16.1683 5.48643 16.1575 5.32803C16.8803 4.80525 17.5042 4.15794 18 3.41643C17.326 3.71523 16.611 3.9111 15.8789 3.99747C16.6499 3.53599 17.2269 2.81006 17.5025 1.95483C16.7776 2.38504 15.9845 2.6882 15.1574 2.85123C14.6006 2.25916 13.8642 1.86711 13.0621 1.73574C12.2601 1.60438 11.4371 1.74102 10.7205 2.12452C10.0039 2.50802 9.43367 3.11701 9.09806 3.85724C8.76245 4.59747 8.68016 5.42768 8.86392 6.21939C7.39567 6.14574 5.95932 5.76416 4.64809 5.09943C3.33686 4.4347 2.18007 3.50168 1.2528 2.36091C0.780546 3.17391 0.635904 4.13633 0.848325 5.05223C1.06075 5.96812 1.61426 6.76863 2.39616 7.29075C1.80842 7.27353 1.23349 7.11498 0.72 6.82851V6.87531C0.720233 7.72795 1.01539 8.55426 1.5554 9.21409C2.09542 9.87391 2.84705 10.3266 3.6828 10.4955C3.13911 10.6438 2.56866 10.6654 2.01528 10.5588C2.25136 11.2926 2.71082 11.9342 3.32943 12.394C3.94804 12.8539 4.69487 13.1089 5.46552 13.1235C4.69983 13.7253 3.82299 14.1703 2.88516 14.433C1.94733 14.6956 0.966911 14.7708 0 14.6542C1.68887 15.738 3.65394 16.3128 5.66064 16.3102" />
											</svg>
										</button>
										<div id="tooltip-twitter" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
											Share on Twitter
											<div className="tooltip-arrow" data-popper-arrow="" />
										</div>
										<button data-tooltip-target="tooltip-reddit" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
											<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_13676_82300)">
													<path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" />
													<path
														d="M15.0004 8.99997C15.0004 8.27365 14.411 7.68418 13.6846 7.68418C13.3267 7.68418 13.011 7.82102 12.7794 8.0526C11.8846 7.41049 10.6425 6.98944 9.27412 6.93681L9.87412 4.12628L11.8215 4.53681C11.8425 5.03155 12.2531 5.43155 12.7583 5.43155C13.2741 5.43155 13.6952 5.01049 13.6952 4.4947C13.6952 3.97891 13.2741 3.55786 12.7583 3.55786C12.3899 3.55786 12.0741 3.76839 11.9267 4.08418L9.7478 3.62102C9.68464 3.61049 9.62148 3.62102 9.56885 3.6526C9.51622 3.68418 9.48464 3.73681 9.46359 3.79997L8.80043 6.93681C7.40043 6.97891 6.1478 7.38944 5.24254 8.0526C5.01096 7.83155 4.68464 7.68418 4.33727 7.68418C3.61096 7.68418 3.02148 8.27365 3.02148 8.99997C3.02148 9.53681 3.33727 9.98944 3.80043 10.2C3.77938 10.3263 3.76885 10.4631 3.76885 10.6C3.76885 12.621 6.11622 14.2526 9.02149 14.2526C11.9267 14.2526 14.2741 12.621 14.2741 10.6C14.2741 10.4631 14.2636 10.3368 14.2425 10.2105C14.6741 9.99997 15.0004 9.53681 15.0004 8.99997ZM6.00043 9.93681C6.00043 9.42102 6.42148 8.99997 6.93727 8.99997C7.45306 8.99997 7.87412 9.42102 7.87412 9.93681C7.87412 10.4526 7.45306 10.8737 6.93727 10.8737C6.42148 10.8737 6.00043 10.4526 6.00043 9.93681ZM11.232 12.4105C10.5899 13.0526 9.36885 13.0947 9.01096 13.0947C8.65306 13.0947 7.42148 13.0421 6.7899 12.4105C6.69517 12.3158 6.69517 12.1579 6.7899 12.0631C6.88464 11.9684 7.04254 11.9684 7.13727 12.0631C7.53727 12.4631 8.40043 12.6105 9.02149 12.6105C9.64254 12.6105 10.4952 12.4631 10.9057 12.0631C11.0004 11.9684 11.1583 11.9684 11.2531 12.0631C11.3267 12.1684 11.3267 12.3158 11.232 12.4105ZM11.0636 10.8737C10.5478 10.8737 10.1267 10.4526 10.1267 9.93681C10.1267 9.42102 10.5478 8.99997 11.0636 8.99997C11.5794 8.99997 12.0004 9.42102 12.0004 9.93681C12.0004 10.4526 11.5794 10.8737 11.0636 10.8737Z"
														fill="white"
													/>
												</g>
												<defs>
													<clipPath id="clip0_13676_82300">
														<rect width={18} height={18} />
													</clipPath>
												</defs>
											</svg>
										</button>
										<div id="tooltip-reddit" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
											Post on Reddit
											<div className="tooltip-arrow" data-popper-arrow="" />
										</div>
										<button data-tooltip-target="tooltip-link" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
											<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
											</svg>
										</button>
										<div id="tooltip-link" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
											Share link
											<div className="tooltip-arrow" data-popper-arrow="" />
										</div>
										<button data-tooltip-target="tooltip-save" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
											<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
											</svg>
										</button>
										<div id="tooltip-save" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
											Save this article
											<div className="tooltip-arrow" data-popper-arrow="" />
										</div>
										<button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
											<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
											</svg>
										</button>
										{/* Dropdown menu */}
										<div id="dropdownDotsHorizontal" className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
											<ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Add to collection
													</a>
												</li>
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Report
													</a>
												</li>
											</ul>
										</div>
									</div>
								</aside>
							</div>
							<div className="prose lg:prose-xl">
								<p className="lead">At XYZ Plumbing, we understand the importance of protecting your privacy and personal information. This privacy policy explains how we collect, use, and protect the personal information you provide to us through our website.</p>
								<h2>What information do we collect?</h2>
								<p>When you visit our website, we may collect certain personal information from you, such as your name, email address, phone number, and any other information you choose to provide us. We may also collect information about your browsing behavior and usage of our website.</p>
								<h2>How do we use your information?</h2>
								<p>We may use your personal information to provide you with information about our services, to communicate with you about your inquiries or requests, and to improve our website and services. We may also use your information to send you marketing communications or promotional offers, unless you opt out of receiving such communications.</p>
								<h2>Do we share your information?</h2>
								<p>We do not sell, rent, or lease your personal information to third parties. However, we may share your information with trusted service providers who help us operate our website or provide services to you, such as payment processors, shipping companies, or marketing agencies. We require these third parties to protect your information and use it only for the purposes for which it was provided.</p>
								<h2>How do we protect your information?</h2>
								<p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. We use SSL encryption to secure sensitive information transmitted through our website. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your information.</p>
								<h2>Cookies</h2>
								<p>We may use cookies and other tracking technologies to collect information about your browsing behavior and usage of our website. Cookies are small text files that are stored on your device when you visit our website. You may choose to disable cookies in your browser settings, but this may affect your ability to use certain features of our website.</p>
								<h2>Links to other websites</h2>
								<p>Our website may contain links to other websites that are not owned or controlled by us. We are not responsible for the privacy practices of these websites, and we encourage you to read their privacy policies before providing any personal information to them.</p>
								<h2>Changes to this policy</h2>
								<p>We may update this privacy policy from time to time. If we make any material changes, we will notify you by posting the updated policy on our website or by email.</p>
								<h2>Contact us</h2>
								<p>
									If you have any questions or concerns about our privacy policy, please contact us at <a href="mailto:privacy@xyzplumbing.com">privacy@xyzplumbing.com</a>.
								</p>
							</div>
							<section className="mt-10 bg-[#fff] p-4 rounded border">
								<div className="flex justify-between items-center mb-6">
									<h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
									<div>
										<button type="button" className="py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-brand-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
											Subscribe
										</button>
									</div>
								</div>
								<form className="mb-6">
									<div className="mb-4 w-full bg-gray-50 rounded border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
										<div className="py-2 px-4 bg-gray-50 rounded-t-lg dark:bg-gray-800">
											<label htmlFor="comment" className="sr-only">
												Your comment
											</label>
											<textarea id="comment" rows={6} className="px-0 w-full text-sm text-gray-900 bg-gray-50 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required defaultValue={""} />
										</div>
										<div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
											<button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-brand rounded focus:ring-4 focus:ring-brand-200 dark:focus:ring-brand-900 hover:bg-brand-600">
												Post comment
											</button>
											<div className="flex pl-0 space-x-1 sm:pl-2">
												<button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
													<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
													</svg>
													<span className="sr-only">Attach file</span>
												</button>
												<button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
													<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
													</svg>
													<span className="sr-only">Set location</span>
												</button>
												<button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
													<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
													</svg>
													<span className="sr-only">Upload image</span>
												</button>
											</div>
										</div>
									</div>
								</form>
								<article className="p-6 mb-6 text-base bg-gray-50 rounded dark:bg-gray-700">
									<footer className="flex justify-between items-center mb-2">
										<div className="flex items-center">
											<p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
												<img className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael Gough" />
												Michael Gough
											</p>
											<p className="text-sm text-gray-600 dark:text-gray-400">
												<time dateTime="2022-02-08" title="February 8th, 2022">
													Feb. 8, 2022
												</time>
											</p>
										</div>
										<button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">
											<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
											</svg>
											<span className="sr-only">Comment settings</span>
										</button>
										{/* Dropdown menu */}
										<div id="dropdownComment1" className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
											<ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Edit
													</a>
												</li>
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Remove
													</a>
												</li>
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Report
													</a>
												</li>
											</ul>
										</div>
									</footer>
									<p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.</p>
									<div className="flex items-center mt-4 space-x-4">
										<button type="button" className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
											<svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
											</svg>
											11 Likes
										</button>
										<button type="button" className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
											<svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
											</svg>
											Reply
										</button>
									</div>
								</article>
								<article className="p-6 mb-6 ml-12 text-base bg-gray-50 rounded dark:bg-gray-700">
									<footer className="flex justify-between items-center mb-2">
										<div className="flex items-center">
											<p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
												<img className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese Leos" />
												Jese Leos
											</p>
											<p className="text-sm text-gray-600 dark:text-gray-400">
												<time dateTime="2022-02-12" title="February 12th, 2022">
													Feb. 12, 2022
												</time>
											</p>
										</div>
										<button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">
											<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
											</svg>
											<span className="sr-only">Comment settings</span>
										</button>
										{/* Dropdown menu */}
										<div id="dropdownComment2" className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
											<ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Edit
													</a>
												</li>
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Remove
													</a>
												</li>
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Report
													</a>
												</li>
											</ul>
										</div>
									</footer>
									<p className="text-gray-500 dark:text-gray-400">Much appreciated! Glad you liked it ☺️</p>
									<div className="flex items-center mt-4 space-x-4">
										<button type="button" className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
											<svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
											</svg>
											3 Likes
										</button>
										<button type="button" className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
											<svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
											</svg>
											Reply
										</button>
									</div>
								</article>
								<article className="p-6 mb-6 text-base bg-gray-50 rounded dark:bg-gray-700">
									<footer className="flex justify-between items-center mb-2">
										<div className="flex items-center">
											<p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
												<img className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green" />
												Bonnie Green
											</p>
											<p className="text-sm text-gray-600 dark:text-gray-400">
												<time dateTime="2022-03-12" title="March 12th, 2022">
													Mar. 12, 2022
												</time>
											</p>
										</div>
										<button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">
											<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
											</svg>
											<span className="sr-only">Comment settings</span>
										</button>
										{/* Dropdown menu */}
										<div id="dropdownComment3" className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
											<ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Edit
													</a>
												</li>
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Remove
													</a>
												</li>
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Report
													</a>
												</li>
											</ul>
										</div>
									</footer>
									<p className="text-gray-500 dark:text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
									<div className="flex items-center mt-4 space-x-4">
										<button type="button" className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
											<svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
											</svg>
											24 Likes
										</button>
										<button type="button" className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
											<svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
											</svg>
											Reply
										</button>
									</div>
								</article>
								<article className="p-6 text-base bg-gray-50 rounded dark:bg-gray-700">
									<footer className="flex justify-between items-center mb-2">
										<div className="flex items-center">
											<p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
												<img className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Helene Engels" />
												Helene Engels
											</p>
											<p className="text-sm text-gray-600 dark:text-gray-400">
												<time dateTime="2022-06-23" title="June 23rd, 2022">
													Jun. 23, 2022
												</time>
											</p>
										</div>
										<button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">
											<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
											</svg>
										</button>
										{/* Dropdown menu */}
										<div id="dropdownComment4" className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
											<ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Edit
													</a>
												</li>
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Remove
													</a>
												</li>
												<li>
													<a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
														Report
													</a>
												</li>
											</ul>
										</div>
									</footer>
									<p className="text-gray-500 dark:text-gray-400">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
									<div className="flex items-center mt-4 space-x-4">
										<button type="button" className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
											<svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
											</svg>
											9 Likes
										</button>
										<button type="button" className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
											<svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
											</svg>
											Reply
										</button>
									</div>
								</article>
							</section>
						</article>
						<aside className="hidden xl:block" aria-labelledby="sidebar-label">
							<div className="xl:w-[336px] sticky top-6">
								<h3 id="sidebar-label" className="sr-only">
									Sidebar
								</h3>
								<div className="mb-8">
									<h4 className="mb-2 text-sm font-bold text-gray-900 dark:text-white uppercase">Flowbite News morning headlines</h4>
									<p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">Get all the stories you need-to-know from the most powerful name in news delivered first thing every morning to your inbox</p>
									<button type="button" data-modal-toggle="newsletter-modal" className="text-white bg-brand hover:bg-brand-600 focus:ring-4 focus:ring-brand-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-brand-600 dark:hover:bg-brand-700 focus:outline-none dark:focus:ring-brand-800 text-center w-full">
										Subscribe
									</button>
								</div>
								<div className="mb-12">
									<h4 className="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase">Latest news</h4>
									<div className="mb-6 flex items-center">
										<a href="#" className="shrink-0">
											<img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png" className="mr-4 max-w-full w-24 h-24 rounded" alt="Image 1" />
										</a>
										<div>
											<h5 className="mb-2 text-lg font-bold leading-tight dark:text-white text-gray-900">Our first office</h5>
											<p className="mb-2 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone changes.</p>
											<a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-brand-600 dark:text-brand-500 hover:no-underline">
												Read in 9 minutes
											</a>
										</div>
									</div>
									<div className="mb-6 flex items-center">
										<a href="#" className="shrink-0">
											<img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png" className="mr-4 max-w-full w-24 h-24 rounded" alt="Image 2" />
										</a>
										<div>
											<h5 className="mb-2 text-lg font-bold leading-tight dark:text-white text-gray-900">Enterprise Design tips</h5>
											<p className="mb-2 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone changes.</p>
											<a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-brand-600 dark:text-brand-500 hover:no-underline">
												Read in 14 minutes
											</a>
										</div>
									</div>
									<div className="mb-6 flex items-center">
										<a href="#" className="shrink-0">
											<img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png" className="mr-4 max-w-full w-24 h-24 rounded" alt="Image 3" />
										</a>
										<div>
											<h5 className="mb-2 text-lg font-bold leading-tight dark:text-white text-gray-900">Partnered up with Google</h5>
											<p className="mb-2 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone changes.</p>
											<a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-brand-600 dark:text-brand-500 hover:no-underline">
												Read in 9 minutes
											</a>
										</div>
									</div>
								</div>
								<div>
									<a href="#" className="flex justify-center items-center mb-3 w-full h-48 bg-gray-100 rounded dark:bg-gray-700">
										<svg aria-hidden="true" className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
										</svg>
									</a>
									<p className="mb-2 text-sm font-light text-gray-500 dark:text-gray-400">Students and Teachers, save up to 60% on Flowbite Creative Cloud.</p>
									<p className="text-xs font-light text-gray-400 uppercase dark:text-gray-500">Ads placeholder</p>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>
			<aside aria-label="Related articles" className="py-8 lg:py-24 bg-white dark:bg-gray-900">
				<div className="px-4 mx-auto max-w-screen-xl">
					<h2 className="mb-6 lg:mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
					<div className="grid gap-6 lg:gap-12 md:grid-cols-2">
						<article className="flex flex-col xl:flex-row">
							<a href="#" className="mb-2 xl:mb-0">
								<img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mr-5 max-w-sm" alt="Image 1" />
							</a>
							<div className="flex flex-col justify-center">
								<h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
									<a href="#">Our first office</a>
								</h2>
								<p className="mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
								<a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-brand-600 dark:text-brand-500 hover:no-underline">
									Read in 2 minutes
								</a>
							</div>
						</article>
						<article className="flex flex-col xl:flex-row">
							<a href="#" className="mb-2 xl:mb-0">
								<img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mr-5 max-w-sm" alt="Image 2" />
							</a>
							<div className="flex flex-col justify-center">
								<h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
									<a href="#">Enterprise design tips</a>
								</h2>
								<p className="mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
								<a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-brand-600 dark:text-brand-500 hover:no-underline">
									Read in 12 minutes
								</a>
							</div>
						</article>
						<article className="flex flex-col xl:flex-row">
							<a href="#" className="mb-2 xl:mb-0">
								<img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mr-5 max-w-sm" alt="Image 3" />
							</a>
							<div className="flex flex-col justify-center">
								<h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
									<a href="#">We partnered up with Google</a>
								</h2>
								<p className="mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
								<a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-brand-600 dark:text-brand-500 hover:no-underline">
									Read in 8 minutes
								</a>
							</div>
						</article>
						<article className="flex flex-col xl:flex-row">
							<a href="#" className="mb-2 xl:mb-0">
								<img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mr-5 max-w-sm" alt="Image 4" />
							</a>
							<div className="flex flex-col justify-center">
								<h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
									<a href="#">Our first project with React</a>
								</h2>
								<p className="mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
								<a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-brand-600 dark:text-brand-500 hover:no-underline">
									Read in 12 minutes
								</a>
							</div>
						</article>
					</div>
				</div>
			</aside>
			<section className="bg-gray-50 dark:bg-gray-800">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-md sm:text-center">
						<h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
						<p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
						<form action="#">
							<div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
								<div className="relative w-full">
									<label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
										Email address
									</label>
									<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
										<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
											<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
										</svg>
									</div>
									<input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brand-500 dark:focus:border-brand-500" placeholder="Enter your email" type="email" id="email" required />
								</div>
								<div>
									<button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded border cursor-pointer bg-brand border-brand-600 sm:rounded-none sm:rounded-r-lg hover:bg-brand-600 focus:ring-4 focus:ring-brand-300 dark:bg-brand-600 dark:hover:bg-brand-700 dark:focus:ring-brand-800">
										Subscribe
									</button>
								</div>
							</div>
							<div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
								We care about the protection of your data.{" "}
								<a href="#" className="font-medium text-brand-600 dark:text-brand-500 hover:underline">
									Read our Privacy Policy
								</a>
								.
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
