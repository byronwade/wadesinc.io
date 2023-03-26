import { gql } from "@apollo/client";
const CATEGORIESANDSERVICES = gql`
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
`;

export { CATEGORIESANDSERVICES };