import Image from "next/image";
export default function Discounts() {
	return (
		<section className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
			<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">Discounts</h2>
			<p className="mb-6 text-4xl tracking-tight font-extrabold text-black dark:text-white">Learn more about our company</p>
			<div className="relative flex flex-col overflow-hidden">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-8">
					<div className="flex flex-col items-center text-center space-y-4 w-full p-6 bg-white overflow-hidden rounded-xl border-4 border-dashed border-gray-500">
						<Image src="/WadesLogo.png" width={100} height={100} alt="Wade' Plumbing & Septic Logo" />
						<div>
							<h2 className="font-extrabold text-lg">20% OFF DRAIN CLEARING</h2>
							<p>Lorem ipsum..</p>
						</div>
						<div>
							Contact us today at{" "}
							<a href="tel:8314306011" className="text-brand hover:underline">
								(831) 430-6011
							</a>{" "}
							or{" "}
							<a href="mailto:support@wadesinc.io" className="text-brand hover:underline">
								support@wadesinc.io
							</a>
							<p className="mt-2 text-red font-bold">Expires: Jan 03, 2021</p>
						</div>
					</div>

					<div className="flex flex-col items-center text-center space-y-4 w-full p-6 bg-white overflow-hidden rounded-xl border-4 border-dashed border-gray-500">
						<Image src="/WadesLogo.png" width={100} height={100} alt="Wade' Plumbing & Septic Logo" />
						<div>
							<h2 className="font-extrabold text-lg">20% OFF DRAIN CLEARING</h2>
							<p>Lorem ipsum..</p>
						</div>
						<div>
							Contact us today at{" "}
							<a href="tel:8314306011" className="text-brand hover:underline">
								(831) 430-6011
							</a>{" "}
							or{" "}
							<a href="mailto:support@wadesinc.io" className="text-brand hover:underline">
								support@wadesinc.io
							</a>
							<p className="mt-2 text-red font-bold">Expires: Jan 03, 2021</p>
						</div>
					</div>

					<div className="flex flex-col items-center text-center space-y-4 w-full p-6 bg-white overflow-hidden rounded-xl border-4 border-dashed border-gray-500">
						<Image src="/WadesLogo.png" width={100} height={100} alt="Wade' Plumbing & Septic Logo" />
						<div>
							<h2 className="font-extrabold text-lg">20% OFF DRAIN CLEARING</h2>
							<p>Lorem ipsum..</p>
						</div>
						<div>
							Contact us today at{" "}
							<a href="tel:8314306011" className="text-brand hover:underline">
								(831) 430-6011
							</a>{" "}
							or{" "}
							<a href="mailto:support@wadesinc.io" className="text-brand hover:underline">
								support@wadesinc.io
							</a>
							<p className="mt-2 text-red font-bold">Expires: Jan 03, 2021</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
