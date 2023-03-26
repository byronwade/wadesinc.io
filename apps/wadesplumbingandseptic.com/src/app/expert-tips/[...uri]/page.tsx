"use client";
import NewsletterSection from "@/components/sections/NewsletterSection";
import RelatedArticlesSection from "@/components/sections/RelatedArticlesSection";
import Sidebar from "@/components/sections/Sidebar";

import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import SocialBar from "@/components/sections/SocialBar";

const TIPS = gql`
	query NewQuery($uri: ID!) {
		post(id: $uri, idType: URI) {
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
`;

export default function BlogPage({ params }) {
	//graphql query
	const { loading, error, data } = useQuery(TIPS, {
		variables: { uri: `/${params.uri.join("/")}` },
	});

	if (loading) return <div>Submitting...</div>;
	if (error) return <div>{error.message}</div>;
	const tips = data.post;
	const RelatedPosts = data.post.categories;
	const NewestPosts = data.posts;

	//format data
	const dateObj = new Date(tips.date); // Convert the string to a Date object
	const formattedDate = dateObj.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); // Format the date as "Month Day, Year"
	const formattedTime = dateObj.toLocaleTimeString([], { hour: "numeric", minute: "numeric", hour12: true }); // Format the time as "hh:mm AM/PM"

	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="relative">
					<header className="w-full h-[460px] xl:h-[537px] relative">
						<Image sizes={tips?.featuredImage?.node?.sizes} priority className="w-full object-cover object-center" fill src={tips?.featuredImage?.node?.sourceUrl ? tips.featuredImage.node.sourceUrl : "/placeholder.webp"} alt={tips?.featuredImage?.node?.altText ? tips.featuredImage.node.altText : "placeholder image"} />
						<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
						<div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
							<span className="block mb-4 text-gray-300">
								Published in{" "}
								<a href="#" className="font-semibold text-white hover:underline">
									{tips.categories.nodes.map((categories, index) => (
										<span key={index}>
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
								<SocialBar />
							</div>
							<div className="prose lg:prose-xl">
								<div dangerouslySetInnerHTML={{ __html: tips.content }} />
							</div>
							{/* <Comments /> */}
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
