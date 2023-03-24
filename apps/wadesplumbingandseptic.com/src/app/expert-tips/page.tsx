import Link from "next/link";
import Pagnation from "@/components/ui/Pagnation";
import Search from "@/components/ui/Search";

const catergories = [
	{ id: 1, name: "Septic" },
	{ id: 2, name: "Drain Clearing" },
	{ id: 3, name: "Plumbing" },
	{ id: 4, name: "Engineered Septic" },
	{ id: 5, name: "Residential" },
	{ id: 6, name: "Commercial" },
];

export default function ExpertTips() {
	return (
		<section className="bg-gray-50 relative overflow-hidden">
			<div className="py-16 px-6 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col space-y-6 justify-center items-start">
						<div>
							<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">We have 102 Expert Tips</h2>
							<p className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Tips from experts</p>
							<p className="max-w-2xl text-lg leading-6 text-gray-600">
								Have a different question and can’t find the answer you’re looking for? Reach out to our support team by
								<a href="#" className="font-semibold text-brand-600 hover:text-brand-500">
									{` `}sending us an email{` `}
								</a>
								and we’ll get back to you as soon as we can.
							</p>
						</div>

						<Search catergories={catergories} />

						<div className="flex mt-10 items-stretch">
							<div className="md:w-1/2">
								<div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
									<Link href="/expert-tips/single" className="sm:w-1/2 relative group">
										<div>
											<p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
											<div className="absolute bottom-0 left-0 p-6">
												<h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
												<p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
												<span className="group-hover:underline focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
													<p className="pr-2 text-sm font-medium leading-none">Read More</p>
													<svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</div>
										</div>
										<img src="https://i.ibb.co/DYxtCJq/img-1.png" className="w-full rounded" alt="chair" />
									</Link>
									<Link href="/expert-tips/single" className="sm:w-1/2 sm:mt-0 mt-4 relative group">
										<div>
											<p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
											<div className="absolute bottom-0 left-0 p-6">
												<h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
												<p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
												<span className="group-hover:underline focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
													<p className="pr-2 text-sm font-medium leading-none">Read More</p>
													<svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</div>
										</div>
										<img src="https://i.ibb.co/3C5HvxC/img-2.png" className="w-full rounded" alt="wall design" />
									</Link>
								</div>
								<Link href="/expert-tips/single" className="relative group">
									<div>
										<p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
										<div className="absolute bottom-0 left-0 md:p-10 p-6">
											<h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
											<p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
											<span className="group-hover:underline focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
												<p className="pr-2 text-sm font-medium leading-none">Read More</p>
												<svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</div>
									</div>
									<img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block rounded" />
									<img className="w-full mt-4 sm:hidden rounded" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
								</Link>
							</div>
							<div className="md:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
								<Link href="/expert-tips/single" className="relative group">
									<div>
										<p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
										<div className="absolute bottom-0 left-0 md:p-10 p-6">
											<h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
											<p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
											<span className="group-hover:underline focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
												<p className="pr-2 text-sm font-medium leading-none">Read More</p>
												<svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</div>
									</div>
									<img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" className="w-full sm:block hidden rounded" />
									<img className="w-full sm:hidden rounded" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
								</Link>
								<div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
									<Link href="/expert-tips/single" className="group relative w-full">
										<div>
											<p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
											<div className="absolute bottom-0 left-0 p-6">
												<h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
												<p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
												<span className="group-hover:underline focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
													<p className="pr-2 text-sm font-medium leading-none">Read More</p>
													<svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</div>
										</div>
										<img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full rounded" alt="chair" />
									</Link>
									<Link href="/expert-tips/single" className="relative w-full sm:mt-0 mt-4 group">
										<div>
											<p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
											<div className="absolute bottom-0 left-0 p-6">
												<h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
												<p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
												<span className="group-hover:underline focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
													<p className="pr-2 text-sm font-medium leading-none">Read More</p>
													<svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</div>
										</div>
										<img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full rounded" alt="wall design" />
									</Link>
								</div>
							</div>
						</div>

						<Pagnation pageMin={1} pageMax={1000} total={2000} />
					</div>
				</div>
			</div>
		</section>
	);
}
