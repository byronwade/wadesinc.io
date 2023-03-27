"use client";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client";

//GraphQL Queries
import { SERVICES } from "../../../graphql/services";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

export default function ServicesCard() {
	const { loading, error, data } = useQuery(SERVICES);
	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error?.message}</div>;

	const services = data.services.edges;
	return (
		<>
			{services.map((service, index) => {
				if (index % 4 === 0) {
					return (
						<Link href={service.node.uri} key={index} className="max-h-min relative group row-span-2 flex flex-col rounded border border-slate-200 bg-white">
							<div className="h-96 relative">
								<Image placeholder="blur" blurDataURL={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"} fill src={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"} className="w-full object-cover object-center rounded-t" alt={service?.node?.featuredImage?.node?.altText ? service.node.featuredImage.node.altText : "placeholder text"} />
							</div>
							<div className="p-10">
								<h3 className="text-xl font-medium text-gray-700">{service.node.title}</h3>
								<p className="mt-2 text-slate-500" dangerouslySetInnerHTML={{ __html: service.node.excerpt }} />
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
								<p className="mt-2 text-slate-500" dangerouslySetInnerHTML={{ __html: service.node.excerpt }} />
								<span className="group-hover:underline mt-2 inline-flex text-sky-500">
									Read in {service.node.readingTime} min <ArrowLongRightIcon className="inline-block self-center ml-3 w-4 h-4" />
								</span>
							</div>
							<div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
								<div className="absolute inset-0">
									<Image placeholder="blur" blurDataURL={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"} fill src={service?.node?.featuredImage?.node?.sourceUrl ? service.node.featuredImage.node.sourceUrl : "/placeholder.webp"} className="w-full object-cover object-center rounded-t" alt={service?.node?.featuredImage?.node?.altText ? service.node.featuredImage.node.altText : "placeholder text"} />
								</div>
							</div>
						</Link>
					);
				}
			})}
		</>
	);
}
