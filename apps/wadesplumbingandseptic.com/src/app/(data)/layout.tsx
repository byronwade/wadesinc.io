"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://wadesplumbingandseptic.byronw35.sg-host.com/graphql",
	cache: new InMemoryCache(),
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
