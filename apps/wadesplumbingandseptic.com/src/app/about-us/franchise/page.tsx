"use client";
import Image from "next/image";

export default function Example() {
	return (
		<section className="bg-gray-50 relative overflow-hidden">
			<Image fill className="object-right-top object-cover pointer-events-none" src="/background.png" alt="Background image for our plumbing website" />
			<div className="relative z-1 py-16 px-6 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="prose max-w-2xl bg-white p-4 md:p-8 rounded">
						<Image src="/WadesLogo.png" width={100} height={100} alt="Wade' Plumbing & Septic Logo" />
						<h1>Frianchise</h1>
						<p>Franchise info</p>
					</div>
				</div>
			</div>
		</section>
	);
}
