"use client";
import Image from "next/image";
import ContactForm from "../ContactForm";
import { usePathname } from "next/navigation";

export default function HeroSection() {
	const pathname = usePathname();
	return (
		<section className="bg-black-400 relative overflow-hidden">
			<video autoPlay muted loop className="hidden md:block absolute w-auto brightness-50 min-w-full min-h-full max-w-none">
				<source src="/treeCompressed.mp4" type="video/mp4" />
			</video>
			<Image className="hidden md:block absolute bottom-0 right-10" src="/mario.png" height={100} width={100} alt="Mario Plumber" />
			<div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-12 xl:gap-0 lg:py-44 lg:grid-cols-12">
				<div className="z-10 place-self-center mr-auto mb-10 lg:col-span-7 xl:col-span-8 xl:mb-0 p-4 m:p-6 lg:p-8">
					<p className="text-sm md:text-lg font-semibold leading-8 tracking-tight inline-flex items-center rounded bg-brand-100 px-2.5 py-0.5 text-brand-800">Local Built Company</p>
					<h1 className="tracking-tight font-extrabold mt-2 text-4xl text-white sm:text-6xl dark:text-black">Where Quality Meets Community.</h1>
					<p className="mt-6 text-md md:text-lg leading-6 md:leading-8 text-white backdrop-blur-sm bg-white/30 p-4 rounded">
						&quot;Where Quality Meets Community&quot; represents our commitment to providing high-quality plumbing services to our local community. We believe that by delivering top-notch plumbing solutions with a focus on customer service, we can make a positive impact on the neighborhoods we serve. At Wade&apos;s Plumbing & Septic, we take pride in being more than just a plumbing company; we&apos;re a part of the community we serve, and we&apos;re dedicated to providing the best
						possible service to our friends and neighbors.
					</p>
					<p className="font-bold text-white mt-4">License Number (Plumbing & Septic): 1087260</p>
					{/* <div className="text-white grid gap-8 lg:grid-cols-2 pt-8">
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium backdrop-blur-sm bg-white/30 hover:bg-white/60 rounded ">
								<span className="w-full">Curious about our warranties?</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium backdrop-blur-sm bg-white/30 hover:bg-white/60 rounded ">
								<span className="w-full">Learn more about our local customer support team</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium backdrop-blur-sm bg-white/30 hover:bg-white/60 rounded ">
								<span className="w-full">Explore our list of services, plumbing & septic.</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
							<a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium backdrop-blur-sm bg-white/30 hover:bg-white/60 rounded ">
								<span className="w-full">Take a look as our map to see the areas we serve.</span>
								<svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</a>
						</div> */}
				</div>
				<div className="z-10 ustify-center p-4 max-w-screen-sm bg-white rounded  lg:mt-0 lg:col-span-5 xl:col-span-4 sm:p-6 lg:p-8 dark:bg-gray-800">
					<ContactForm pathname={pathname} />
				</div>
			</div>
		</section>
	);
}
