import { gql } from "apollo-boost";

export const GET_LIKERS = gql`
	query GetLikers($feedId: String!) {
		GetLikers(feedId: $feedId) {
			res
			error
			likes {
				id
			}
		}
	}
`;
