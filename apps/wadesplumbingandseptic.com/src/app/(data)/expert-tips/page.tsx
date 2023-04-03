import Link from "next/link";
import Image from "next/image";
import Pagnation from "@/components/ui/Pagnation";
import Search from "@/components/ui/Search";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { Suspense } from "react";
import { getTips } from "@/graphql/fetch";

export const metadata = {
	title: "Expert Tips | Wade's Plumbing & Septic",
	description: "Looking for expert plumbing tips in the local area? Look no further than Wade's Plumbing & Septic. Our blog has everything you need to know to keep your plumbing running smoothly.",
	generator: "Next.js",
	applicationName: "Wade's Plumbing & Septic",
	referrer: "origin-when-cross-origin",
	keywords: ["Next.js", "React", "JavaScript"],
	authors: [{ name: "Byron Wade" }, { name: "Byron Wade", url: "https://www.wadesplumbingandseptic.com/expert-tips/" }],
	creator: "Byron Wade",
	publisher: "Byron Wade",
	alternates: {},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	category: "construction",
	bookmarks: ["https://www.wadesplumbingandseptic.com/expert-tips/"],
	twitter: {
		card: "summary_large_image",
		title: "Expert Tips | Wade's Plumbing & Septic",
		description: "Looking for expert plumbing tips in the local area? Look no further than Wade's Plumbing & Septic. Our blog has everything you need to know to keep your plumbing running smoothly.",
		creator: "@wadesplumbing",
		images: {
			url: "https://www.wadesplumbingandseptic.com/api/og?title=Expert Tips&link=www.wadesplumbingandseptic.com&description=Looking for expert plumbing tips in the local area? Look no further than Wade's Plumbing & Septic. Our blog has everything you need to know to keep your plumbing running smoothly.",
			alt: "Wade's Plumbing & Septic Social Logo",
		},
	},
	openGraph: {
		title: "Expert Tips | Wade's Plumbing & Septic",
		description: "Looking for expert plumbing tips in the local area? Look no further than Wade's Plumbing & Septic. Our blog has everything you need to know to keep your plumbing running smoothly.",
		url: "https://www.wadesplumbingandseptic.com/expert-tips/",
		siteName: "Wade's Plumbing & Septic",
		images: [
			{
				url: "https://www.wadesplumbingandseptic.com/api/og?title=Expert Tips&link=www.wadesplumbingandseptic.com&description=Looking for expert plumbing tips in the local area? Look no further than Wade's Plumbing & Septic. Our blog has everything you need to know to keep your plumbing running smoothly.",
				width: 800,
				height: 600,
			},
			{
				url: "https://www.wadesplumbingandseptic.com/api/og?title=Expert Tips&link=www.wadesplumbingandseptic.com&description=Looking for expert plumbing tips in the local area? Look no further than Wade's Plumbing & Septic. Our blog has everything you need to know to keep your plumbing running smoothly.",
				width: 1800,
				height: 1600,
				alt: "Wade's Plumbing & Septic",
			},
		],
		locale: "en-US",
		type: "website",
	},
};

export default async function ExpertTips() {
	const { data } = await getTips();

	const tips = data?.posts?.nodes;
	const total = data?.posts?.pageInfo?.total;
	return (
		<Suspense fallback={<p>Loading content...</p>}>
			<section className="bg-gray-50 relative overflow-hidden">
				<div className="py-16 px-6 sm:py-24 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="flex flex-col space-y-6 justify-center items-start">
							<Suspense fallback={<p>Loading header...</p>}>
								<div>
									<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">We have {total} Expert Tips</h2>
									<p className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Tips from experts</p>
									<p className="max-w-2xl text-lg leading-6 text-gray-600">
										Have a different question and can’t find the answer you’re looking for? Reach out to our support team by
										<Link href="/contact-us" className="font-semibold text-brand-600 hover:text-brand-500">
											{` `}sending us an email{` `}
										</Link>
										and we’ll get back to you as soon as we can.
									</p>
								</div>
							</Suspense>

							{/* <Search placeholder="Search for a tip..." /> */}

							<div className="grid gird-col-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 auto-rows-auto gap-6 mt-10 items-stretch w-full">
								<Suspense fallback={<p>Loading content...</p>}>
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
								</Suspense>
							</div>

							{/* <Pagnation pageMin={1} pageMax={1000} total={2000} /> */}
						</div>
					</div>
				</div>
			</section>
		</Suspense>
	);
}
