"use client";
import Image from "next/image";

const stats = [
	{ label: "Transactions every 24 hours", value: "44 million" },
	{ label: "Assets under holding", value: "$119 trillion" },
	{ label: "New users annually", value: "46,000" },
];
const values = [
	{
		name: "Be world-class",
		description: "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
	},
	{
		name: "Share everything you know",
		description: "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
	},
	{
		name: "Always learning",
		description: "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
	},
	{
		name: "Be supportive",
		description: "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
	},
	{
		name: "Take responsibility",
		description: "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.",
	},
	{
		name: "Enjoy downtime",
		description: "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
	},
];
const team = [
	{
		name: "Byron Wade",
		role: "Owner / CEO",
		imageUrl: "/team/byron.jpg",
	},
	{
		name: "Dave Clark",
		role: "Co-Owner / CFO",
		imageUrl: "/team/byron.jpg",
	},
	{
		name: "Hayley Woods",
		role: "Office Admin",
		imageUrl: "/team/byron.jpg",
	},
	{
		name: "Lizzy Clark",
		role: "CSR",
		imageUrl: "/team/byron.jpg",
	},
	{
		name: "Corey Mcclemans",
		role: "Project Manager / Sales",
		imageUrl: "/team/byron.jpg",
	},
];

export default function Example() {
	return (
		<div className="mb-44">
			<main className="isolate">
				{/* Hero section */}
				<div className="relative">
					<div className="overflow-hidden">
						<div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-16">
							<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
								<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
									<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our team is offering a new customer service.</h1>
									<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.</p>
								</div>
								<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
									<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
										<div className="relative">
											<img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
											<div className="pointer-events-none absolute inset-0 rounded" />
										</div>
									</div>
									<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
										<div className="relative">
											<img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
											<div className="pointer-events-none absolute inset-0 rounded" />
										</div>
										<div className="relative">
											<img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
											<div className="pointer-events-none absolute inset-0 rounded" />
										</div>
									</div>
									<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
										<div className="relative">
											<img src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
											<div className="pointer-events-none absolute inset-0 rounded" />
										</div>
										<div className="relative">
											<img src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
											<div className="pointer-events-none absolute inset-0 rounded" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Content section */}
				<div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
						<div className="mt-6 flex flex-col gap-y-20 gap-x-8 lg:flex-row">
							<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
								<p className="text-xl leading-8 text-gray-600">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
								<div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
									<p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
									<p className="mt-10">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
								</div>
							</div>
							<div className="lg:flex lg:flex-auto lg:justify-center">
								<dl className="w-64 space-y-8 xl:w-80">
									{stats.map((stat) => (
										<div key={stat.label} className="flex flex-col-reverse gap-y-4">
											<dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
											<dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
										</div>
									))}
								</dl>
							</div>
						</div>
					</div>
				</div>

				{/* Image section */}
				<div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
					<Image src="/team.jpg" alt="Wades Plumbing & Septic team photo" width={1216} height={486} className="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
				</div>

				{/* Values section */}
				<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
					</div>
					<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{values.map((value) => (
							<div key={value.name}>
								<dt className="font-semibold text-gray-900">{value.name}</dt>
								<dd className="mt-1 text-gray-600">{value.description}</dd>
							</div>
						))}
					</dl>
				</div>

				{/* Team section */}
				<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo vel facere repellendus ut eos dolores similique.</p>
					</div>
					<ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-5">
						{team.map((person) => (
							<li key={person.name}>
								<Image src={person.imageUrl} width={96} height={96} alt="Photo of Byron Wade" className="mx-auto h-24 w-24 rounded-full" />
								<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
								<p className="text-sm leading-6 text-gray-600">{person.role}</p>
							</li>
						))}
					</ul>
				</div>
			</main>
		</div>
	);
}
