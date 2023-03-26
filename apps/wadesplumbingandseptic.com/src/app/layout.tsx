"use client";
import Header from "@/components/sections/Header";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Script from "next/script";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://wadesplumbingandseptic.byronw35.sg-host.com/graphql",
	cache: new InMemoryCache(),
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-gray-50 text-base">
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
