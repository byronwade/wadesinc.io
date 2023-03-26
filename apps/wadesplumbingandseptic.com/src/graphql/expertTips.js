import { gql } from "@apollo/client";
const EXPERTTIPS = gql`
	query NewQuery {
		posts {
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
`;

export { EXPERTTIPS };
