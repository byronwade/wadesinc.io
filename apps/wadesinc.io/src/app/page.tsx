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
		<main>
			<h1>Wades Inc</h1>
		</main>
	);
}
