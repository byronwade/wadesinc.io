import JobForm from "@/components/forms/JobForm";

async function getJob(slug) {
	const { data } = await fetch("https://wadesplumbingandseptic.byronw35.sg-host.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query NewQuery {
				job(id: ${slug}, idType: SLUG) {
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
	  `,
		}),
		next: { revalidate: 10 },
	}).then((res) => res.json());
	return { data };
}

export default async function Job({ params }) {
	const { data } = await getJob(`"${params.slug}"`);

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
				<JobForm />
			</div>
		</>
	);
}
