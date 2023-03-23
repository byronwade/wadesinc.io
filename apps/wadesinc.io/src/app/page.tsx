export const metadata = {
	title: {
		default: "Wades Inc",
		template: "%s | Wades Inc",
	},
	description: "Wades Inc is a...",
	openGraph: {
		title: "Wades Inc",
		description: "The React Framework for the Web",
		type: "article",
		publishedTime: "2023-01-01T00:00:00.000Z",
		authors: ["Seb", "Josh"],
		url: "https://nextjs.org",
		images: [
			{
				url: "https://nextjs.org/og.png",
				width: 800,
				height: 600,
			},
		],
	},
	robots: {
		index: true,
	},
};

export default function Home() {
	return (
		<>
			<div className="flex flex-col h-screen justify-between">
				<nav className="flex flex-row">
					<div className="p-4">
						<h1 className="font-bold text-3xl text-black">Wade&apos;s Inc</h1>
					</div>
				</nav>

				<div className="mb-auto mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:py-40 lg:px-8">
					<div>Wades Inc is a company</div>
				</div>

				<footer className="bg-black text-center p-6">
					<p className="text-xs leading-5 text-gray-400">
						&copy; 2023 Wade&apos;s, Inc. All rights reserved. Designed by{" "}
						<a className="text-brand hover:underline font-bold" href="https://www.byronwade.com/">
							Byron Wade
						</a>{" "}
						using <a href="www.tailwindcss.com">Tailwind</a> and <a href="www.nextjs.com">Next.js</a>
					</p>
				</footer>
			</div>
		</>
	);
}
