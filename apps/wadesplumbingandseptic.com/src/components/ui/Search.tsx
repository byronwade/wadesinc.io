export default function Search({ placeholder }) {
	return (
		<>
			<form className="flex w-full space-x-2 items-center mt-4">
				<label htmlFor="simple-search" className="sr-only">
					Search
				</label>
				<div className="relative w-full">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
						</svg>
					</div>
					<input type="text" id="simple-search" className="border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brand-500 dark:focus:border-brand-500" placeholder={placeholder} required />
				</div>
				<button type="submit" className="p-2.5 text-base font-medium text-white bg-brand-700 rounded-lg border border-brand-700 hover:bg-brand-800 focus:ring-4 focus:outline-none focus:ring-brand-300 dark:bg-brand-600 dark:hover:bg-brand-700 dark:focus:ring-brand-800">
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</button>
			</form>
		</>
	);
}
