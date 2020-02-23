import { gql } from "apollo-boost";

export const LIKE_CREATE = gql`
	mutation CreateLike($feedId: String!) {
		CreateLike(feedId: $feedId) {
			res
			error
		}
	}
`;

export const LIKE_DELETE = gql`
	mutation DeleteLike($feedId: String!) {
		DeleteLike(feedId: $feedId) {
			res
			error
		}
	}
`;
