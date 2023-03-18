import Banner from "@/components/Banner";
import LogoCloud from "@/components/pageSections/LogoCloud";
import FAQ from "@/components/pageSections/FAQ";
import Testimonials from "@/components/pageSections/Testimonials";
import Image from "next/image";
import FloatingContact from "@/components/FloatingContact";

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
			<section className="bg-[url('/redwoods.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
				<div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-12 xl:gap-0 lg:py-44 lg:grid-cols-12">
					<div className="place-self-center mr-auto mb-10 lg:col-span-7 xl:col-span-8 xl:mb-0 p-4 m:p-6 lg:p-8">
						<p className="text-lg font-semibold leading-8 tracking-tight text-brand-600">Local Built Company</p>
						<h1 className="tracking-tight font-extrabold mt-2 text-4xl text-white sm:text-6xl dark:text-black">We are not your normal plumbing company.</h1>
						<p className="mt-6 text-lg leading-8 text-white">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
						<div className="grid gap-8 lg:grid-cols-2 pt-8">
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium bg-white hover:bg-white-100 rounded border border-gray-200 shadow">
								<span className="w-full">Curious about our warranties?</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium bg-white hover:bg-white-100 rounded border border-gray-200 shadow">
								<span className="w-full">Learn more about our local customer support team</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium bg-white hover:bg-white-100 rounded border border-gray-200 shadow">
								<span className="w-full">Explore our list of services, plumbing & septic.</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium bg-white hover:bg-white-100 rounded border border-gray-200 shadow">
								<span className="w-full">Take a look as our map to see the areas we serve.</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
						</div>
					</div>
					<div className="justify-center p-4 max-w-screen-sm bg-white rounded border border-gray-200 shadow lg:mt-0 lg:col-span-5 xl:col-span-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
						<form action="#" method="POST" className="lg:flex-auto">
							<div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
								<div>
									<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
										First name
									</label>
									<div className="mt-2.5">
										<input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
									</div>
								</div>
								<div>
									<label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
										Last name
									</label>
									<div className="mt-2.5">
										<input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
									</div>
								</div>
								<div>
									<label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
										Phone
									</label>
									<div className="mt-2.5">
										<input id="phone" name="phone" type="text" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
									</div>
								</div>
								<div>
									<label htmlFor="text" className="block text-sm font-semibold leading-6 text-gray-900">
										Address
									</label>
									<div className="mt-2.5">
										<input id="address" name="address" type="text" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
									</div>
								</div>
								<div className="sm:col-span-2">
									<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
										Message
									</label>
									<div className="mt-2.5">
										<textarea id="message" name="message" rows={4} className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" defaultValue={""} />
									</div>
								</div>
							</div>
							<div className="mt-10">
								<button type="submit" className="block w-full rounded-md bg-brand-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
									Let’s talk
								</button>
							</div>
							<p className="mt-4 text-sm leading-6 text-gray-700">
								By submitting this form, I agree to the{" "}
								<a href="#" className="font-semibold text-brand-600">
									privacy&nbsp;policy
								</a>
								.
							</p>
						</form>
					</div>
				</div>
			</section>
			<LogoCloud />
			<FAQ />
			<Testimonials />
		</main>
	);
}
