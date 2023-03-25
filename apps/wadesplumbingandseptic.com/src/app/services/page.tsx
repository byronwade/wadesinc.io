"use client";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import Pagnation from "@/components/ui/Pagnation";
import Search from "@/components/ui/Search";

//GraphQL Queries
import { SERVICES } from "../../graphql/services";
import { CATEGORIES } from "../../graphql/categories";

export default function Services() {
	const { loading, error, data } = useQuery(SERVICES);
	const { loading: catergoryLoading, error: catergoryError, data: catergoryData } = useQuery(CATEGORIES);
	if (loading || catergoryLoading) return <div>Loading...</div>;
	if (error || catergoryError) return <div>{error?.message}</div>;

	const services = data.services.edges;
	const total = data.services.pageInfo.total;
	console.log(services);

	//data for the dropdown on the search bar
	const categories = catergoryData.categories.nodes;
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
								<a href="#" className="font-semibold text-brand-600 hover:text-brand-500">
									{` `}sending us an email{` `}
								</a>
								and we’ll get back to you as soon as we can.
							</p>
						</div>

						<Search categories={categories} placeholder={`We offer ${total} services...`} />

						<div className="flex mt-10 items-center justify-center">
							<div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
								{services.map((service, index) => {
									if (index % 4 === 0) {
										return (
											<Link href={service.node.uri} key={service.node.id} className="max-h-min relative group row-span-2 flex flex-col rounded border border-slate-200 bg-white">
												<div className="h-96 relative">
													<Image fill src={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"} className="w-full object-cover object-center rounded-t" alt={service?.node?.featuredImage?.node?.altText ? service.node.featuredImage.node.altText : "placeholder text"} />
												</div>
												<div className="p-10">
													<h3 className="text-xl font-medium text-gray-700">{service.node.title}</h3>
													<p className="mt-2 text-slate-500" dangerouslySetInnerHTML={{ __html: service.node.excerpt }} />
													<span className="group-hover:underline mt-2 inline-flex text-sky-500">Read More →</span>
												</div>
											</Link>
										);
									} else {
										return (
											<Link href={service.node.uri} key={service.node.id} className="group flex rounded border border-slate-200 bg-white">
												<div className="flex-1 p-10">
													<h3 className="text-xl font-medium text-gray-700">{service.node.title}</h3>
													<p className="mt-2 text-slate-500" dangerouslySetInnerHTML={{ __html: service.node.excerpt }} />
													<span className="group-hover:underline mt-2 inline-flex text-sky-500">Read More →</span>
												</div>
												<div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
													<div className="absolute inset-0">
														<Image fill src={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"} className="w-full object-cover object-center rounded-t" alt={service?.node?.featuredImage?.node?.altText ? service.node.featuredImage.node.altText : "placeholder text"} />
													</div>
												</div>
											</Link>
										);
									}
								})}
							</div>
						</div>

						<Pagnation pageMin={1} pageMax={services.length} total={total} />
					</div>
				</div>
			</div>
		</section>
	);
}
