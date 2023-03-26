"use client";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import { ArrowLongRightIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

const JOBS = gql`
	query NewQuery {
		categories(where: { slug: "jobs" }) {
			nodes {
				children {
					nodes {
						jobs {
							nodes {
								title(format: RENDERED)
								uri
								JobsData {
									jobType
									location
									payRange
									shiftAndSchedule
								}
							}
						}
						name
					}
				}
				name
			}
		}
	}
`;

export default function Jobs() {
	const { loading, error, data } = useQuery(JOBS);
	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error?.message}</div>;

	const {
		categories: { nodes },
	} = data;

	console.log(nodes);

	return (
		<section className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
			<div className="space-y-6 relative flex flex-col overflow-hidden">
				{nodes?.map((category) =>
					category?.children?.nodes?.map((child) => (
						<Fragment key={child.id}>
							<h2 className="text-lg font-bold leading-6 text-black">{child.name}</h2>
							{child?.jobs?.nodes?.map((job, index) => (
								<div key={index} className="relative flex flex-col overflow-hidden">
									<div className="bg-white shadow shadow-gray-100 w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded">
										<div>
											<span className="text-brand-800 text-sm">Engineering</span>
											<h3 className="font-bold mt-px">{job.title}</h3>
											<div className="flex items-center gap-3 mt-2">
												<span className="bg-brand-100 text-brand-700 rounded-full px-3 py-1 text-sm">{job.JobsData.shiftAndSchedule}</span>
												<span className="text-slate-600 text-sm flex gap-1 items-center">
													<MapPinIcon className="h-4 w-4" />
													{job.JobsData.location}
												</span>
												<span className="text-green-600 text-sm flex gap-1 items-center">{job.JobsData.payRange}</span>
											</div>
										</div>
										<div>
											<Link href={`/about-us/${job.uri}`} className="bg-brand text-black font-medium px-4 py-2 rounded flex gap-1 items-center">
												Apply Now <ArrowLongRightIcon className="self-center ml-3 h-4 w-4" />
											</Link>
										</div>
									</div>
								</div>
							))}
						</Fragment>
					))
				)}
			</div>
		</section>
	);
}
