import NewsletterSection from "@/components/sections/NewsletterSection";
import RelatedArticlesSection from "@/components/sections/RelatedArticlesSection";
import Sidebar from "@/components/sections/Sidebar";
import ContactForm from "@/components/forms/ContactForm";

import Image from "next/image";
import SocialBar from "@/components/sections/SocialBar";

async function getService(slug) {
	const { data } = await fetch("https://wadesplumbingandseptic.byronw35.sg-host.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query NewQuery {
				service(id: ${slug}, idType: SLUG) {
					content(format: RENDERED)
					date
					categories {
						nodes {
							name
							posts {
								nodes {
									id
									title
									readingTime
									uri
									excerpt(format: RENDERED)
									featuredImage {
										node {
											altText
											sourceUrl(size: LARGE)
										}
									}
								}
							}
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
				posts(where: { orderby: { field: DATE, order: DESC } }) {
					nodes {
						id
						title
						readingTime
						uri
						excerpt(format: RENDERED)
						featuredImage {
							node {
								altText
								sourceUrl(size: LARGE)
							}
						}
					}
				}
			}
	  `,
		}),
		next: { revalidate: 10 },
	}).then((res) => res.json());
	return { data };
}

export default async function ServicesPage({ params }) {
	const { data } = await getService(`"${params.slug}"`);

	const service = data?.service;
	const RelatedPosts = data?.service?.categories;
	const NewestPosts = data?.posts;
	console.log(service);

	//format data
	const dateObj = new Date(service?.date); // Convert the string to a Date object
	const formattedDate = dateObj.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); // Format the date as "Month Day, Year"
	const formattedTime = dateObj.toLocaleTimeString([], { hour: "numeric", minute: "numeric", hour12: true }); // Format the time as "hh:mm AM/PM"

	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="py-16 px-6 sm:py-24 lg:px-8">
					<div className="flex justify-between px-4 mx-auto max-w-screen-xl">
						<article className="space-y-4 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
							<div className="w-full relative">
								<Image sizes={service?.featuredImage?.node?.sizes} priority className="w-full mb-6 brightness-75 rounded" width={1000} height={1000} src={service?.featuredImage?.node?.sourceUrl ? service.featuredImage.node.sourceUrl : "/placeholder.webp"} alt={service?.featuredImage?.node?.altText ? service.featuredImage.node.altText : "/placeholder.webp"} />
								<div className="absolute space-y-1 p-6 bottom-0 left-0 mx-auto w-full">
									<span className="block text-gray-100">
										Published in{" "}
										<a href="#" className="font-semibold text-white hover:underline">
											{service?.categories?.nodes.map((categories, index) => (
												<span key={index}>
													{categories?.name}
													{index !== service?.categories?.nodes?.length - 1 && ", "}
												</span>
											))}
										</a>
									</span>
									<h1 dangerouslySetInnerHTML={{ __html: service?.title }} className="max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl" />
								</div>
							</div>
							<div className="flex flex-col lg:flex-row justify-between lg:items-center">
								<div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 lg:mb-0">
									{service?.author ? (
										<>
											<span>
												By{" "}
												<a href="#" className="text-gray-900 dark:text-white hover:underline no-underline font-semibold">
													{service?.author?.node?.name}
												</a>
											</span>
											<span className="bg-gray-300 dark:bg-gray-400 w-2 h-2 rounded-full" />
										</>
									) : null}
									<span>
										<time className="font-normal text-gray-500 dark:text-gray-400" dateTime={service?.date} title={`${formattedDate} at ${formattedTime}`}>
											{formattedDate} at {formattedTime}
										</time>
									</span>
								</div>
								<SocialBar />
							</div>
							<div className="prose">
								<div dangerouslySetInnerHTML={{ __html: service?.content }} />
							</div>
							<div className="!mt-16">
								<h1 className="font-extrabold text-black sm:text-3xl lg:text-4xl mb-4">Get a free quote</h1>
								<ContactForm />
							</div>
						</article>
						<Sidebar NewestPosts={NewestPosts} />
					</div>
				</div>
			</section>
			<RelatedArticlesSection posts={RelatedPosts} />
			<NewsletterSection />
		</>
	);
}
