"use client";
import Header from "@/components/sections/Header";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Script from "next/script";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const metadata = {
	title: {
		default: "Wades Plumbing and Septic",
		template: "%s | Wades Plumbing and Septic",
	},
	description: "Wades Plumbing and Septic is a...",
	openGraph: {
		title: "Wades Plumbing and Septic",
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

const client = new ApolloClient({
	uri: "https://wadesplumbingandseptic.byronw35.sg-host.com/graphql",
	cache: new InMemoryCache(),
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-gray-50">
				<ApolloProvider client={client}>
					<Header />
					{children}
					<Footer />
				</ApolloProvider>
				<Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=06e45130-bfd2-4b2b-8137-28903b96f527"></Script>
			</body>
		</html>
	);
}
