import Banner from "@/components/Banner";
import LogoCloud from "@/components/pageSections/LogoCloud";
import FAQ from "@/components/pageSections/FAQ";
import Testimonials from "@/components/pageSections/Testimonials";
import Image from "next/image";

export const metadata = {
	title: {
		default: "Wades Plumbing and Septic",
		template: "%s | Wades Plumbing and Septic",
	},
	description: "Wades Plumbing and Septic is a...",
	openGraph: {
		title: "Wades Plumbing and Septic",
		description: "The React Framework for the Web",
		type: "article",
		publishedTime: "2023-01-01T00:00:00.000Z",
		authors: ["Seb", "Josh"],
		url: "https://nextjs.org",
		images: [
			{
				url: "https://nextjs.org/og.png",
				width: 800,
				height: 600,
			},
		],
	},
	robots: {
		index: true,
	},
};

export default function Home() {
	return (
		<main className="relative isolate overflow-hidden">
			<Banner />
			<section>
				<div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
					<div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
						<p className="mt-10 text-lg font-semibold leading-8 tracking-tight text-brand-600">Local Built Company</p>
						<h1 className="tracking-tight font-extrabold mt-2 text-4xl text-black sm:text-6xl dark:text-white">We are not your normal plumbing company.</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
						<div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
							<a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-brand rounded-lg hover:bg-brand-600 focus:ring-4 focus:ring-brand-300 dark:focus:ring-brand-900">
								Contact Us
							</a>
							<a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
								<svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
								</svg>
								Our Work
							</a>
						</div>
					</div>
					<div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
						<div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
							<Image src="/team.jpg" alt="App screenshot" width={2432} height={1442} className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10" />
						</div>
					</div>
				</div>
			</section>
			<LogoCloud />
			<FAQ />
			<Testimonials />
		</main>
	);
}
