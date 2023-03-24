import { gql } from "@apollo/client";
const SERVICES = gql`
	query NewQuery {
		services(first: 11) {
			edges {
				node {
					id
					title
					slug
					uri
					excerpt
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
		}
	}
`;

export { SERVICES };
