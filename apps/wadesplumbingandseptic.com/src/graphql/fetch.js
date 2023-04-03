export async function getTip(uri) {
	const { data } = await fetch("https://wadesplumbingandseptic.byronw35.sg-host.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query NewQuery {
				post(id: ${uri}, idType: URI) {
					content(format: RENDERED)
					date
					categories {
						nodes {
							name
							posts {
								nodes {
									id
									title
									readingTime
									uri
									excerpt(format: RENDERED)
									featuredImage {
										node {
											altText
											sourceUrl(size: LARGE)
											sizes(size: LARGE)
										}
									}
								}
							}
						}
					}
					featuredImage {
						node {
							altText
							sourceUrl(size: LARGE)
							sizes(size: LARGE)
						}
					}
					title(format: RENDERED)
					author {
						node {
							name
						}
					}
					seo {
					  canonical
					  cornerstone
					  focuskw
					  fullHead
					  metaKeywords
					  metaDesc
					  metaRobotsNofollow
					  metaRobotsNoindex
					  opengraphAuthor
					  opengraphDescription
					  opengraphModifiedTime
					  opengraphPublishedTime
					  opengraphPublisher
					  opengraphSiteName
					  opengraphTitle
					  opengraphType
					  opengraphUrl
					  title
					  schema {
						articleType
						pageType
						raw
					  }
					  twitterDescription
					  twitterTitle
					}
				}
				posts(where: { orderby: { field: DATE, order: DESC } }) {
					nodes {
						id
						title
						readingTime
						uri
						excerpt(format: RENDERED)
						featuredImage {
							node {
								altText
								sourceUrl(size: LARGE)
								sizes(size: LARGE)
							}
						}
					}
				}
			}
	  `,
		}),
		next: { revalidate: 10 },
	}).then((res) => res.json());
	return { data };
}

export async function getTips() {
	const { data } = await fetch("https://wadesplumbingandseptic.byronw35.sg-host.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query NewQuery {
				posts(first: 100) {
					nodes {
						id
						title(format: RENDERED)
						excerpt(format: RENDERED)
						uri
						date
						readingTime
						author {
							node {
								id
								username
							}
						}
						featuredImage {
							node {
								altText
								sourceUrl(size: LARGE)
								sizes(size: LARGE)
							}
						}
					}
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

export async function HeaderLinks() {
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

//GraphQL Queries
export async function getService(searchQuery) {
	if (searchQuery === undefined) {
		return null;
	}
	const { data } = await fetch("https://wadesplumbingandseptic.byronw35.sg-host.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query NewQuery {
				services(first: 100, where: {search: "${searchQuery}"}) {
					edges {
						node {
							id
							title
							slug
							uri
							excerpt
							readingTime
							featuredImage {
								node {
									altText
									sizes(size: LARGE)
									slug
									sourceUrl(size: LARGE)
									title(format: RENDERED)
									uri
								}
							}
						}
					}
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