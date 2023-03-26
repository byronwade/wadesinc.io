const faqs = [
	{
		id: 1,
		question: "What&apos; the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		id: 2,
		question: "What&apos; the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		id: 3,
		question: "What&apos; the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		id: 4,
		question: "What&apos; the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	// More questions...
];

export default function FAQ() {
	return (
		<section className="bg-white relative overflow-hidden">
			<div className="py-16 px-6 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">Frequently asked questions</h2>
					<p className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Learn more about our company</p>
					<p className="max-w-2xl text-lg leading-6 text-gray-600">
						Have a different question and can’t find the answer you’re looking for? Reach out to our support team by
						<a href="#" className="font-semibold text-brand-600 hover:text-brand-500">
							{` `}sending us an email{` `}
						</a>
						and we’ll get back to you as soon as we can.
					</p>
					<div className="mt-20">
						<dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
							{faqs.map((faq, index) => (
								<div key={index}>
									<dt className="text-xl font-semibold leading-7 text-black">{faq.question}</dt>
									<dd className="mt-2 text-lg leading-7 text-gray-600">{faq.answer}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</section>
	);
}
