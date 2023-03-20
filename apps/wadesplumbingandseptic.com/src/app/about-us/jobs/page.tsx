"use client";

export default function Example() {
	return (
		<div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
			<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">Frequently asked questions</h2>
			<p className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Learn more about our company</p>
			<div className="relative flex flex-col overflow-hidden">
				<div className="border bg-white shadow shadow-gray-100 w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded">
					<div>
						<span className="text-brand-800 text-sm">Engineering</span>
						<h3 className="font-bold mt-px">Senior Full Stack Backend Engineer</h3>
						<div className="flex items-center gap-3 mt-2">
							<span className="bg-brand-100 text-brand-700 rounded-full px-3 py-1 text-sm">Full-time</span>
							<span className="text-slate-600 text-sm flex gap-1 items-center">
								{" "}
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>{" "}
								Remote, UK
							</span>
						</div>
					</div>
					<div>
						<button className="bg-brand text-white font-medium px-4 py-2 rounded flex gap-1 items-center">
							Apply Now{" "}
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
