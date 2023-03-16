export default function LogoCloud() {
	return (
		<section>
			<div className="bg-black py-24 sm:py-32 dark:bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-600">Brands we use</h2>
						<p className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-black">Trusted by the world’s most innovative teams</p>
						<div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
							<img className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/transistor-logo-white.svg" alt="Transistor" width={158} height={48} />
							<img className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/reform-logo-white.svg" alt="Reform" width={158} height={48} />
							<img className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/tuple-logo-white.svg" alt="Tuple" width={158} height={48} />
							<img className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/savvycal-logo-white.svg" alt="SavvyCal" width={158} height={48} />
							<img className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/statamic-logo-white.svg" alt="Statamic" width={158} height={48} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
