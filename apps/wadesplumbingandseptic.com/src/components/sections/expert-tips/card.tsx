"use client";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client";

//GraphQL Queries
import { EXPERTTIPS } from "../../../graphql/expertTips";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

export default function ExpertTipsCards() {
	const { loading, error, data } = useQuery(EXPERTTIPS);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error?.message}</div>;

	const tips = data.posts.nodes;
	console.log(tips);
	return (
		<>
			{tips.map((tip, index) => {
				if (index % 7 === 0) {
					return (
						<Link href={`/expert-tips/${tip.uri}`} key={index} className="max-h-90 w-full relative group col-spane-1 row-span-1 xl:col-span-2 xl:row-span-2">
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
		</>
	);
}
