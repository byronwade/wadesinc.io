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
