import Link from "next/link";
import { PhotoIcon } from "@heroicons/react/20/solid";

export default function CTA() {
	return (
		<section className="dark:bg-black bg-white border-t">
			<div className="mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
				<div className="flex flex-col sm:flex-row justify-between items-center">
					<div className="pr-4 basis-full sm:basis-9/12 md:basis-9/12 lg:basis-10/12">
						<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">Customer Support</h2>
						<p className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Let&apos;s find more that brings us together.</p>
						<p className="mb-8 text-gray-500 sm:text-xl dark:text-gray-400">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
					</div>
					<div className="flex flex-col space-y-4 basis-full sm:basis-3/12 md:basis-3/12 lg:basis-2/12">
						<Link href="/contact-us" className="w-full inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-brand rounded-lg hover:bg-brand-600 focus:ring-4 focus:ring-brand-300 dark:focus:ring-brand-900">
							Get a Quote
						</Link>
						<Link href="/our-work" className="w-full inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
							<PhotoIcon className="mr-2 -ml-1 w-5 h-5" />
							Our Work
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
