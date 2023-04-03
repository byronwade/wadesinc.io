import NewsletterSection from "@/components/sections/NewsletterSection";
import RelatedArticlesSection from "@/components/sections/RelatedArticlesSection";
import Sidebar from "@/components/sections/Sidebar";
import ContactForm from "@/components/forms/ContactForm";

import Image from "next/image";
import SocialBar from "@/components/sections/SocialBar";
import { Metadata } from "next";

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
					seo {
					  canonical
					  cornerstone
					  focuskw
					  fullHead
					  metaKeywords
					  metaDesc
					  metaRobotsNofollow
					  metaRobotsNoindex
					  opengraphAuthor
					  opengraphDescription
					  opengraphModifiedTime
					  opengraphPublishedTime
					  opengraphPublisher
					  opengraphSiteName
					  opengraphTitle
					  opengraphType
					  opengraphUrl
					  title
					  schema {
						articleType
						pageType
						raw
					  }
					  twitterDescription
					  twitterTitle
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

export async function generateMetadata({ params }): Promise<Metadata> {
	const { data } = await getService(`"/${params.slug}"`);
	const seo = data?.service?.seo;
	console.log(seo);
	return {
		title: data?.service?.title || "This is a title to the service",
		description: seo?.metaDesc || seo?.opengraphDescription || "This is a Service from Wade's Plumbing & Septic",
		generator: "Next.js",
		applicationName: "Wade's Plumbing & Septic",
		referrer: "origin-when-cross-origin",
		keywords: seo?.metaKeywords,
		authors: [{ name: data?.service?.author?.node?.name }, { name: data?.service?.author?.node?.name, url: `https://www.wadesplumbingandseptic.com/expert-tips/${params.slug}` }],
		creator: "Byron Wade",
		publisher: data?.service?.author?.node?.name,
		alternates: {},
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		category: "construction",
		bookmarks: [`https://www.wadesplumbingandseptic.com/services/${params.slug}`],
		twitter: {
			card: "summary_large_image",
			title: seo?.twitterTitle || seo?.title || data?.service?.title,
			description: seo?.twitterDescription || seo?.metaDesc || seo?.opengraphDescription,
			creator: "@wadesplumbing",
			images: [`https://www.wadesplumbingandseptic.com/api/og?title=${data?.service?.title}&discription=${seo?.metaDesc.slice(0, 200) || seo?.opengraphDescription.slice(0, 200) || "This is a Service from Wade's Plumbing & Septic"}`],
		},
		openGraph: {
			title: seo?.opengraphTitle || seo?.title,
			description: seo?.opengraphDescription || seo?.metaDesc,
			url: `https://www.wadesplumbingandseptic.com/services/${params?.slug}`,
			siteName: seo?.opengraphTitle || seo?.title,
			images: [
				{
					url: `https://www.wadesplumbingandseptic.com/api/og?title=${data?.service?.title}&discription=${seo?.metaDesc.slice(0, 200) || seo?.opengraphDescription.slice(0, 200) || "This is a Service from Wade's Plumbing & Septic"}}`,
					width: 800,
					height: 600,
				},
				{
					url: `https://www.wadesplumbingandseptic.com/api/og?title=${data?.service?.title}&discription=${seo?.metaDesc.slice(0, 200) || seo?.opengraphDescription.slice(0, 200) || "This is a Service from Wade's Plumbing & Septic"}}`,
					width: 1800,
					height: 1600,
					alt: "My custom alt",
				},
			],
			locale: "en-US",
			type: "website",
		},
	};
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
								<Image sizes={service?.featuredImage?.node?.sizes} priority className="w-full mb-6 rounded" width={1000} height={1000} src={service?.featuredImage?.node?.sourceUrl ? service.featuredImage.node.sourceUrl : "/placeholder.webp"} alt={service?.featuredImage?.node?.altText ? service.featuredImage.node.altText : "/placeholder.webp"} />
								<div className="space-y-1 py-6 mx-auto w-full">
									<span className="block text-gray-600">
										Published in{" "}
										<span className="font-semibold text-black">
											{service?.categories?.nodes.map((categories, index) => (
												<span key={index}>
													{categories?.name}
													{index !== service?.categories?.nodes?.length - 1 && ", "}
												</span>
											))}
										</span>
									</span>
									<h1 dangerouslySetInnerHTML={{ __html: service?.title }} className="max-w-4xl text-2xl font-extrabold leading-none text-black sm:text-3xl lg:text-4xl" />
								</div>
							</div>
							<div className="flex flex-col lg:flex-row justify-between lg:items-center">
								<div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 lg:mb-0">
									{service?.author ? (
										<>
											<span>
												By <span className="text-gray-900 dark:text-white no-underline font-semibold">{service?.author?.node?.name}</span>
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
