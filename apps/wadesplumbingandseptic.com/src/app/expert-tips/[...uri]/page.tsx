"use client";
import Comments from "@/components/comments/Comments";
import NewsletterSection from "@/components/sections/NewsletterSection";
import RelatedArticlesSection from "@/components/sections/RelatedArticlesSection";
import Sidebar from "@/components/sections/Sidebar";
import Link from "next/link";

import { useQuery, gql } from "@apollo/client";
import Image from "next/image";

const TIPS = gql`
	query NewQuery($uri: ID!) {
		post(id: $uri, idType: URI) {
			content(format: RENDERED)
			date
			categories {
				nodes {
					name
				}
			}
			featuredImage {
				node {
					altText
					sourceUrl(size: LARGE)
				}
			}
			title(format: RENDERED)
			author {
				node {
					name
				}
			}
		}
	}
`;

export default function BlogPage({ params }) {
	//graphql query
	const { loading, error, data } = useQuery(TIPS, {
		variables: { uri: `/${params.uri.join("/")}` },
	});

	if (loading) return <div>Submitting...</div>;
	if (error) return <div>{error.message}</div>;
	const tips = data.post;
	console.log(tips);

	//format data
	const dateObj = new Date(tips.date); // Convert the string to a Date object
	const formattedDate = dateObj.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); // Format the date as "Month Day, Year"
	const formattedTime = dateObj.toLocaleTimeString([], { hour: "numeric", minute: "numeric", hour12: true }); // Format the time as "hh:mm AM/PM"

	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="relative">
					<header className="w-full h-[460px] xl:h-[537px] relative">
						<Image className="w-full object-cover object-center" fill src={tips?.featuredImage?.node?.sourceUrl ? tips.featuredImage.node.sourceUrl : "/placeholder.webp"} alt={tips?.featuredImage?.node?.altText ? tips.featuredImage.node.altText : "placeholder image"} />
						<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
						<div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
							<span className="block mb-4 text-gray-300">
								Published in{" "}
								<a href="#" className="font-semibold text-white hover:underline">
									{tips.categories.nodes.map((categories, index) => (
										<span key={categories.name}>
											{categories.name}
											{index !== tips.categories.nodes.length - 1 && ", "}
										</span>
									))}
								</a>
							</span>
							<h1 className="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl">
								<div dangerouslySetInnerHTML={{ __html: tips.title }} />
							</h1>
						</div>
					</header>
					<div className="flex relative z-20 justify-between p-6 -m-36 mx-4 max-w-screen-xl bg-white dark:bg-gray-800 rounded xl:-m-32 xl:p-9 xl:mx-auto">
						<article className="xl:w-[828px] w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
							<div className="flex flex-col lg:flex-row justify-between lg:items-center">
								<div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 lg:mb-0">
									{tips?.author ? (
										<>
											<span>
												By{" "}
												<a href="#" className="text-gray-900 dark:text-white hover:underline no-underline font-semibold">
													{tips.author.node.name}
												</a>
											</span>
											<span className="bg-gray-300 dark:bg-gray-400 w-2 h-2 rounded-full" />
										</>
									) : null}
									<span>
										<time className="font-normal text-gray-500 dark:text-gray-400" dateTime={tips.date} title={`${formattedDate} at ${formattedTime}`}>
											{formattedDate} at {formattedTime}
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
								<div dangerouslySetInnerHTML={{ __html: tips.content }} />
							</div>
							{/* <Comments /> */}
						</article>
						<Sidebar />
					</div>
				</div>
			</section>
			<RelatedArticlesSection />
			<NewsletterSection />
		</>
	);
}
