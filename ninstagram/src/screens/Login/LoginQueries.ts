import { gql } from "apollo-boost";

export const SOCIAL_LOGIN = gql`
	mutation SocialLogin(
		$googleId: String!
		$firstName: String!
		$lastName: String!
		$profilePhoto: String!
		$email: String!
	) {
		SocialLogin(
			googleId: $googleId
			firstName: $firstName
			lastName: $lastName
			profilePhoto: $profilePhoto
			email: $email
		) {
			res
			error
			token
		}
	}
`;
