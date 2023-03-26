"use client";
import JobForm from "@/components/forms/JobForm";
import { gql, useQuery } from "@apollo/client";
import { usePathname } from "next/navigation";

const JOB = gql`
	query NewQuery($slug: ID!) {
		job(id: $slug, idType: SLUG) {
			title(format: RENDERED)
			uri
			JobsData {
				benefits {
					name
				}
				jobType
				location
				payRange
				qualifications
				shiftAndSchedule
			}
			content(format: RENDERED)
		}
	}
`;

export default function Job({ params }) {
	const pathname = usePathname();

	//graphql query
	const { loading, error, data } = useQuery(JOB, {
		variables: { slug: params.slug },
	});

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error?.message}</div>;

	console.log(data);

	return (
		<>
			<h1>{data?.job?.title}</h1>

			<ul>
				<li>Job Type: {data?.job?.JobsData?.jobType}</li>
				<li>Location: {data?.job?.JobsData?.location}</li>
				<li>Pay Range: {data?.job?.JobsData?.payRange}</li>
				<li>Qualifications: {data?.job?.JobsData?.qualifications}</li>
				<li>Shift and Schedule: {data?.job?.JobsData?.shiftAndSchedule}</li>
				<li>
					Benefits:
					<ul>
						{data?.job?.JobsData?.benefits?.map((benefit, index) => (
							<li key={index}>{benefit.name}</li>
						))}
					</ul>
				</li>
			</ul>
			<div dangerouslySetInnerHTML={{ __html: data?.job?.content }} />

			<div className="!mt-16">
				<h1 className="font-extrabold text-black sm:text-3xl lg:text-4xl mb-4">Apply with this form</h1>
				<JobForm pathname={pathname} />
			</div>
		</>
	);
}
