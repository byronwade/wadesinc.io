"use client";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import Pagnation from "@/components/ui/Pagnation";
import Search from "@/components/ui/Search";

//GraphQL Queries
import { EXPERTTIPS } from "../../graphql/expertTips";
import { CATEGORIES } from "../../graphql/categories";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

export default function ExpertTips() {
	const { loading, error, data } = useQuery(EXPERTTIPS);
	const { loading: catergoryLoading, error: catergoryError, data: catergoryData } = useQuery(CATEGORIES);
	if (loading || catergoryLoading) return <div>Loading...</div>;
	if (error || catergoryError) return <div>{error?.message}</div>;

	const tips = data.posts.nodes;
	const total = data.posts.pageInfo.total;
	console.log(tips);

	//data for the dropdown on the search bar
	const categories = catergoryData.categories.nodes;
	return (
		<section className="bg-gray-50 relative overflow-hidden">
			<div className="py-16 px-6 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col space-y-6 justify-center items-start">
						<div>
							<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">We have {total} Expert Tips</h2>
							<p className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Tips from experts</p>
							<p className="max-w-2xl text-lg leading-6 text-gray-600">
								Have a different question and can’t find the answer you’re looking for? Reach out to our support team by
								<a href="#" className="font-semibold text-brand-600 hover:text-brand-500">
									{` `}sending us an email{` `}
								</a>
								and we’ll get back to you as soon as we can.
							</p>
						</div>

						<Search categories={categories} placeholder="Search for a tip..." />

						<div className="grid grid-cols-4 auto-rows-auto gap-6 mt-10 items-stretch w-full">
							{tips.map((tip, index) => {
								if (index % 7 === 0) {
									return (
										<Link href={`/expert-tips/${tip.uri}`} key={index} className="max-h-90 w-full relative group col-span-2 row-span-2">
											<div className="z-20">
												<p className="z-20 md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
												<div className="z-20 absolute bottom-0 left-0 md:p-10 p-6">
													<h2 className="text-xl font-semibold 5 text-white">{tip.title}</h2>
													<span className="group-hover:underline focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
														<p className="pr-2 text-sm font-medium leading-none">
															Read in {tip.readingTime} min <ArrowLongRightIcon className="inline-block self-center ml-3 w-4 h-4" />
														</p>
													</span>
												</div>
											</div>
											<Image placeholder="blur" blurDataURL={tip?.node?.featuredImage?.node?.sourceUrl ? tip.node.featuredImage.node.sourceUrl : "/placeholder.webp"} width={500} height={500} src={tip?.featuredImage?.node?.sourceUrl ? tip.featuredImage.node.sourceUrl : "/placeholder.webp"} className="brightness-75 z-10 h-full w-full object-cover object-center rounded" alt={tip?.featuredImage?.node?.altText ? tip.featuredImage.node.altText : "placeholder text"} />
										</Link>
									);
								} else {
									return (
										<Link href={`/expert-tips/${tip.uri}`} key={tip.id} className="max-h-45 w-full relative group row-span-1">
											<div className="z-20">
												<p className="z-20 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
												<div className="z-20 absolute bottom-0 left-0 p-6">
													<h2 className="text-xl font-semibold 5 text-white">{tip.title}</h2>
													<span className="group-hover:underline focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
														<p className="pr-2 text-sm font-medium leading-none">
															Read in {tip.readingTime} min <ArrowLongRightIcon className="inline-block self-center ml-3 w-4 h-4" />
														</p>
													</span>
												</div>
											</div>
											<Image placeholder="blur" blurDataURL={tip?.node?.featuredImage?.node?.sourceUrl ? tip.node.featuredImage.node.sourceUrl : "/placeholder.webp"} width={250} height={250} src={tip?.featuredImage?.node?.sourceUrl ? tip.featuredImage.node.sourceUrl : "/placeholder.webp"} className="brightness-75 z-10 h-full w-full object-cover object-center rounded" alt={tip?.featuredImage?.node?.altText ? tip.featuredImage.node.altText : "placeholder text"} />
										</Link>
									);
								}
							})}
						</div>

						<Pagnation pageMin={1} pageMax={1000} total={2000} />
					</div>
				</div>
			</div>
		</section>
	);
}
