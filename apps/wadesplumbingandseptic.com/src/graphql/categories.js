import { gql } from "@apollo/client";
const CATEGORIES = gql`
	query NewQuery {
		categories {
			nodes {
				id
				name
			}
		}
	}
`;

export { CATEGORIES };
