"use client";
import Link from "next/link";
import Image from "next/image";
import Pagnation from "@/components/ui/Pagnation";
import Search from "@/components/ui/Search";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { Suspense } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { getService } from "@/graphql/fetch";
import { useState, useEffect } from "react";

// export const metadata = {
// 	title: "Services | Wade's Plumbing & Septic",
// 	description: "Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
// 	generator: "Next.js",
// 	applicationName: "Wade's Plumbing & Septic",
// 	referrer: "origin-when-cross-origin",
// 	keywords: ["Next.js", "React", "JavaScript"],
// 	authors: [{ name: "Byron Wade" }, { name: "Byron Wade", url: "https://www.wadesplumbingandseptic.com/" }],
// 	creator: "Byron Wade",
// 	publisher: "Byron Wade",
// 	alternates: {},
// 	formatDetection: {
// 		email: false,
// 		address: false,
// 		telephone: false,
// 	},
// 	category: "construction",
// 	bookmarks: ["https://www.wadesplumbingandseptic.com/services/"],
// 	twitter: {
// 		card: "summary_large_image",
// 		title: "Services | Wade's Plumbing & Septic",
// 		description: "Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
// 		creator: "@wadesplumbing",
// 		images: {
// 			url: "https://www.wadesplumbingandseptic.com/api/og?title=Services&link=www.wadesplumbingandseptic.com&description=Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
// 			alt: "Wade's Plumbing & Septic Social Logo",
// 		},
// 	},
// 	openGraph: {
// 		title: "Services | Wade's Plumbing & Septic",
// 		description: "Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
// 		url: "https://www.wadesplumbingandseptic.com/services/",
// 		siteName: "Wade's Plumbing & Septic",
// 		images: [
// 			{
// 				url: "https://www.wadesplumbingandseptic.com/api/og?title=Services&link=www.wadesplumbingandseptic.com&description=Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
// 				width: 800,
// 				height: 600,
// 			},
// 			{
// 				url: "https://www.wadesplumbingandseptic.com/api/og?title=Services&link=www.wadesplumbingandseptic.com&description=Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
// 				width: 1800,
// 				height: 1600,
// 				alt: "Wade's Plumbing & Septic",
// 			},
// 		],
// 		locale: "en-US",
// 		type: "website",
// 	},
// };

const SERVICES_QUERY = gql`
	query NewQuery($searchQuery: String!) {
		services(first: 100, where: { search: $searchQuery, orderby: { field: TITLE, order: ASC } }) {
			edges {
				node {
					id
					title
					slug
					uri
					excerpt
					readingTime
					featuredImage {
						node {
							altText
							sizes(size: LARGE)
							slug
							sourceUrl(size: LARGE)
							title(format: RENDERED)
							uri
						}
					}
				}
			}
			pageInfo {
				total
			}
		}
	}
`;

export default function Services() {
	const [searchQuery, setSearchQuery] = useState("");
	const [search, setSearch] = useState("");
	const { loading, error, data, refetch } = useQuery(SERVICES_QUERY, {
		variables: { searchQuery },
	});

	const handleChange = (event) => {
		setSearch(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setSearchQuery(search);
	};

	useEffect(() => {
		refetch({ searchQuery });
	}, [searchQuery]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const services = data.services.edges;
	const total = data.services.pageInfo.total;
	return (
		<section className="bg-gray-50 relative overflow-hidden">
			<div className="py-16 px-6 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col space-y-6 justify-center items-start">
						<div>
							<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">We have {total} Services</h2>
							<p className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Search for any service</p>
							<p className="max-w-2xl text-lg leading-6 text-gray-600">
								Have a different question and can’t find the answer you’re looking for? Reach out to our support team by
								<Link href="/contact-us" className="font-semibold text-brand-600 hover:text-brand-500">
									{` `}sending us an email{` `}
								</Link>
								and we’ll get back to you as soon as we can.
							</p>
						</div>

						<form onSubmit={handleSubmit} className="flex w-full space-x-2 items-center mt-4">
							<label htmlFor="simple-search" className="sr-only">
								Search
							</label>
							<div className="relative w-full !m-0">
								<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
									</svg>
								</div>
								<input value={search} onChange={handleChange} type="text" className="border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brand-500 dark:focus:border-brand-500" placeholder={`We offer ${total} services..`} required />
							</div>
							<button type="submit" className="p-2.5 text-base font-medium text-white bg-brand-700 rounded-lg border border-brand-700 hover:bg-brand-800 focus:ring-4 focus:outline-none focus:ring-brand-300 dark:bg-brand-600 dark:hover:bg-brand-700 dark:focus:ring-brand-800">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</button>
						</form>

						<div className="flex mt-10 items-center justify-center">
							<div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
								<Suspense fallback={<p className="text-base text-black">Loading feed...</p>}>
									{services.map((service, index) => {
										if (index % 4 === 0) {
											return (
												<Link href={service.node.uri} key={index} className="max-h-min relative group row-span-2 flex flex-col rounded border border-slate-200 bg-white">
													<div className="h-96 relative">
														<Image
															placeholder="blur"
															blurDataURL={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"}
															fill
															sizes={service?.node?.featuredImage?.node?.sizes}
															src={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"}
															className="w-full object-cover object-center rounded-t"
															alt={service?.node?.featuredImage?.node?.altText ? service.node.featuredImage.node.altText : "placeholder text"}
														/>
													</div>
													<div className="p-10">
														<h3 className="text-xl font-medium text-gray-700">{service.node.title}</h3>
														<div className="mt-2 text-slate-500" dangerouslySetInnerHTML={{ __html: service.node.excerpt }} />
														<span className="group-hover:underline mt-2 inline-flex text-sky-500">
															Read in {service.node.readingTime} min <ArrowLongRightIcon className="inline-block self-center ml-3 w-4 h-4" />
														</span>
													</div>
												</Link>
											);
										} else {
											return (
												<Link href={service.node.uri} key={service.node.id} className="group flex rounded border border-slate-200 bg-white">
													<div className="flex-1 p-10">
														<h3 className="text-xl font-medium text-gray-700">{service.node.title}</h3>
														<div className="mt-2 text-slate-500" dangerouslySetInnerHTML={{ __html: service.node.excerpt }} />
														<span className="group-hover:underline mt-2 inline-flex text-sky-500">
															Read in {service.node.readingTime} min <ArrowLongRightIcon className="inline-block self-center ml-3 w-4 h-4" />
														</span>
													</div>
													<div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
														<div className="absolute inset-0">
															<Image
																placeholder="blur"
																blurDataURL={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"}
																fill
																sizes={service?.node?.featuredImage?.node?.sizes}
																src={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"}
																className="w-full object-cover object-center rounded-t"
																alt={service?.node?.featuredImage?.node?.altText ? service.node.featuredImage.node.altText : "placeholder text"}
															/>
														</div>
													</div>
												</Link>
											);
										}
									})}
								</Suspense>
							</div>
						</div>

						<Pagnation pageMin={1} pageMax={services.length} total={total} />
					</div>
				</div>
			</div>
		</section>
	);
}
