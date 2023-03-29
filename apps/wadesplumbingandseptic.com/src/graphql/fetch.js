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
