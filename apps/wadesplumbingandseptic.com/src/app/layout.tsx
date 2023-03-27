import Header from "@/components/sections/Header";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Script from "next/script";

async function HeaderLinks() {
	const { data } = await fetch("https://wadesplumbingandseptic.byronw35.sg-host.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query NewQuery {
				septic: category(id: "septic", idType: SLUG) {
					name
					services(where: { orderby: { field: DATE, order: DESC } }) {
						nodes {
							uri
							title(format: RENDERED)
							readingTime
						}
					}
				}
				plumbing: category(id: "plumbing", idType: SLUG) {
					name
					services(where: { orderby: { field: DATE, order: DESC } }) {
						nodes {
							uri
							title(format: RENDERED)
							readingTime
						}
					}
				}
				drainClearing: category(id: "drain-clearing", idType: SLUG) {
					name
					services(where: { orderby: { field: DATE, order: DESC } }) {
						nodes {
							uri
							title(format: RENDERED)
							readingTime
						}
					}
				}
				residential: category(id: "residential", idType: SLUG) {
					name
					services(where: { orderby: { field: DATE, order: DESC } }) {
						nodes {
							uri
							title(format: RENDERED)
							readingTime
						}
					}
				}
				commercial: category(id: "commercial", idType: SLUG) {
					name
					services(where: { orderby: { field: DATE, order: DESC } }) {
						nodes {
							uri
							title(format: RENDERED)
							readingTime
						}
					}
				}
				engineeredSeptic: category(id: "engineered-septic", idType: SLUG) {
					name
					services(where: { orderby: { field: DATE, order: DESC } }) {
						nodes {
							uri
							title(format: RENDERED)
							readingTime
						}
					}
				}
				drainage: category(id: "drainage", idType: SLUG) {
					name
					services(where: { orderby: { field: DATE, order: DESC } }) {
						nodes {
							uri
							title(format: RENDERED)
							readingTime
						}
					}
				}
				postsSeptic: category(id: "septic", idType: SLUG) {
					name
					posts(where: { orderby: { field: DATE, order: DESC } }) {
						nodes {
							uri
							title
							readingTime
						}
					}
				}
				postsPlumbing: category(id: "plumbing", idType: SLUG) {
					name
					posts(where: { orderby: { field: DATE, order: DESC } }) {
						nodes {
							uri
							title
							readingTime
						}
					}
				}
				featuredPost: posts(where: { onlySticky: true }) {
					nodes {
						uri
						title(format: RENDERED)
						readingTime
					}
				}
				expertTipsTotals: posts {
					pageInfo {
						total
					}
				}
				servicesTotals: services {
					pageInfo {
						total
					}
				}
			}
	  `,
		}),
		next: { revalidate: 10 },
	}).then((res) => res.json());
	return { data };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const { data } = await HeaderLinks();
	return (
		<html lang="en">
			<body className="bg-gray-50 text-base">
				<Header data={data} />
				{children}
				<Footer data={data} />
				<Script id="ze-snippet" strategy="lazyOnload" src="https://static.zdassets.com/ekr/snippet.js?key=06e45130-bfd2-4b2b-8137-28903b96f527"></Script>
			</body>
		</html>
	);
}
