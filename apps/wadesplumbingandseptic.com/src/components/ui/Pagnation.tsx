export default function Pagnation({ pageMin, pageMax, total }) {
	return (
		<>
			<nav className="flex w-full items-center justify-between" aria-label="Pagination">
				<div className="hidden sm:block">
					<p className="text-sm text-gray-700">
						Showing <span className="font-medium">{pageMin}</span> to <span className="font-medium">{pageMax}</span> of <span className="font-medium">{total}</span> results
					</p>
				</div>
				<div className="flex flex-1 justify-between sm:justify-end">
					<a href="#" className="relative inline-flex items-center rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
						Previous
					</a>
					<a href="#" className="relative ml-3 inline-flex items-center rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
						Next
					</a>
				</div>
			</nav>
		</>
	);
}
