import Link from "next/link";
import Image from "next/image";
import Pagnation from "@/components/ui/Pagnation";
import Search from "@/components/ui/Search";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

export const metadata = {
	title: "Services | Wade's Plumbing & Septic",
	description: "Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
	generator: "Next.js",
	applicationName: "Wade's Plumbing & Septic",
	referrer: "origin-when-cross-origin",
	keywords: ["Next.js", "React", "JavaScript"],
	authors: [{ name: "Byron Wade" }, { name: "Byron Wade", url: "https://www.wadesplumbingandseptic.com/" }],
	creator: "Byron Wade",
	publisher: "Byron Wade",
	alternates: {},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	category: "construction",
	bookmarks: ["https://www.wadesplumbingandseptic.com/services/"],
	twitter: {
		card: "summary_large_image",
		title: "Services | Wade's Plumbing & Septic",
		description: "Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
		creator: "@wadesplumbing",
		images: {
			url: "https://www.wadesplumbingandseptic.com/api/og?title=Services&link=www.wadesplumbingandseptic.com&description=Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
			alt: "Wade's Plumbing & Septic Social Logo",
		},
	},
	openGraph: {
		title: "Services | Wade's Plumbing & Septic",
		description: "Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
		url: "https://www.wadesplumbingandseptic.com/services/",
		siteName: "Wade's Plumbing & Septic",
		images: [
			{
				url: "https://www.wadesplumbingandseptic.com/api/og?title=Services&link=www.wadesplumbingandseptic.com&description=Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
				width: 800,
				height: 600,
			},
			{
				url: "https://www.wadesplumbingandseptic.com/api/og?title=Services&link=www.wadesplumbingandseptic.com&description=Looking for reliable plumbing services in the local area? Look no further than Wade's Plumbing & Septic! Our experienced team offers a wide range of plumbing services to meet all your needs.",
				width: 1800,
				height: 1600,
				alt: "Wade's Plumbing & Septic",
			},
		],
		locale: "en-US",
		type: "website",
	},
};

//GraphQL Queries
async function getService() {
	const { data } = await fetch("https://wadesplumbingandseptic.byronw35.sg-host.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query NewQuery {
				services(first: 100) {
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
	  `,
		}),
		next: { revalidate: 10 },
	}).then((res) => res.json());
	return { data };
}

export default async function Services() {
	const { data } = await getService();

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

						{/* <Search placeholder={`We offer ${total} services...`} /> */}

						<div className="flex mt-10 items-center justify-center">
							<div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
								{services.map((service, index) => {
									if (index % 4 === 0) {
										return (
											<Link href={service.node.uri} key={index} className="max-h-min relative group row-span-2 flex flex-col rounded border border-slate-200 bg-white">
												<div className="h-96 relative">
													<Image placeholder="blur" blurDataURL={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"} fill src={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"} className="w-full object-cover object-center rounded-t" alt={service?.node?.featuredImage?.node?.altText ? service.node.featuredImage.node.altText : "placeholder text"} />
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
							</div>
						</div>

						{/* <Pagnation pageMin={1} pageMax={services.length} total={total} /> */}
					</div>
				</div>
			</div>
		</section>
	);
}
