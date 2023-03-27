"use client";
import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Example() {
	const pathname = usePathname();
	return (
		<section className="relative flex flex-row">
			<div className="hidden md:block w-full md:w-1/2 relative">
				<Image placeholder="blur" blurDataURL="/placeholder.webp" className="object-cover h-full w-full brightness-80" src="/trees-river.jpg" width={1500} height={1500} alt="Redwood trees" />
				<div className="absolute bottom-10 right-10">
					<p className="text-white backdrop-blur-sm bg-white/30 p-2 rounded">
						Photo by a local resident{" "}
						<a className="underline" href="#">
							Luca Bravo
						</a>
						.
					</p>
				</div>
			</div>
			<div className="w-full md:w-1/2 mx-auto">
				<div className="py-16 px-6 sm:py-24 lg:px-8">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900">Let’s talk about your project</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">We help homeowners and businesses fix thier problems.</p>
					<div className="mt-16 flex flex-col gap-10 sm:gap-y-20 lg:flex-row">
						<div className="hidden md:block">
							<h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Points of contact</h3>
							<h4 className="mb-1 font-medium text-gray-900 dark:text-white">Wade&apos;s Plumbing & Septic</h4>
							<address className="text-sm font-normal text-gray-500 non-italic">
								7737 hwy 9
								<br />
								Ben Lomond, CA, 95005
							</address>
							<div className="mt-4 space-y-4">
								<div>
									<h4 className="mb-1 font-medium text-gray-900 dark:text-white">Information &amp; Sales</h4>
									<p className="text-sm font-medium text-brand-600 hover:underline dark:text-brand-500">
										<a href="mailto:support@wadesinc.io">support@wadesinc.io</a>
									</p>
								</div>
								<div>
									<h4 className="mb-1 font-medium text-gray-900 dark:text-white">Support</h4>
									<p className="text-sm font-medium text-brand-600 hover:underline dark:text-brand-500">
										<a href="mailto:support@wadesinc.io">support@wadesinc.io</a>
									</p>
								</div>
								<div>
									<h4 className="mb-1 font-medium text-gray-900 dark:text-white">Verification of Employment</h4>
									<p className="text-sm font-medium text-brand-600 hover:underline dark:text-brand-500">
										<a href="mailto:support@wadesinc.io">support@wadesinc.io</a>
									</p>
								</div>
							</div>
						</div>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}
