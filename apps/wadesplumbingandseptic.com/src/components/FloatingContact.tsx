import { XMarkIcon } from "@heroicons/react/20/solid";

export default function FloatingContact() {
	return (
		<>
			<div className="hidden lg:blcok absolute top-0 right-0 pointer-events-none sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 mt-10">
				<div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-brand py-2.5 px-6 sm:rounded sm:py-3 sm:pr-3.5 sm:pl-4">
					<p className="text-sm leading-6 text-white">
						<a href="#">
							<strong className="font-semibold">Wades Inc</strong>
							<svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
								<circle cx={1} cy={1} r={1} />
							</svg>
							Join us in Denver from June 7 – 9 to see what’s coming next&nbsp;<span aria-hidden="true">&rarr;</span>
						</a>
					</p>
					<button type="button" className="-m-1.5 flex-none p-1.5">
						<span className="sr-only">Dismiss</span>
						<XMarkIcon className="h-5 w-5 text-black" aria-hidden="true" />
					</button>
				</div>
			</div>
		</>
	);
}
