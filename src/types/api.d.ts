/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateLike
// ====================================================

export interface CreateLike_CreateLike {
	__typename: "CreateLikeResponse";
	res: boolean;
	error: string | null;
}

export interface CreateLike {
	CreateLike: CreateLike_CreateLike;
}

export interface CreateLikeVariables {
	feedId: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteLike
// ====================================================

export interface DeleteLike_DeleteLike {
	__typename: "DeleteLikeResponse";
	res: boolean;
	error: string | null;
}

export interface DeleteLike {
	DeleteLike: DeleteLike_DeleteLike;
}

export interface DeleteLikeVariables {
	feedId: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFeeds
// ====================================================

export interface GetFeeds_GetFeeds_feeds_user {
	__typename: "User";
	id: string;
	firstName: string;
	profilePhoto: string;
}

export interface GetFeeds_GetFeeds_feeds_likes {
	__typename: "Like";
	userId: string | null;
}

export interface GetFeeds_GetFeeds_feeds {
	__typename: "Feed";
	id: string;
	photo: string;
	text: string | null;
	user: GetFeeds_GetFeeds_feeds_user | null;
	likes: (GetFeeds_GetFeeds_feeds_likes | null)[] | null;
	updateAt: string;
}

export interface GetFeeds_GetFeeds {
	__typename: "GetFeedsResponse";
	res: boolean;
	error: string | null;
	feeds: (GetFeeds_GetFeeds_feeds | null)[] | null;
}

export interface GetFeeds {
	GetFeeds: GetFeeds_GetFeeds;
}

export interface GetFeedsVariables {
	page: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SocialLogin
// ====================================================

export interface SocialLogin_SocialLogin {
	__typename: "SocialLoginResponse";
	res: boolean;
	error: string | null;
	token: string | null;
}

export interface SocialLogin {
	SocialLogin: SocialLogin_SocialLogin;
}

export interface SocialLoginVariables {
	googleId: string;
	firstName: string;
	lastName: string;
	profilePhoto: string;
	email: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserById
// ====================================================

export interface GetUserById_GetUserById_user_feeds {
	__typename: "Feed";
	id: string;
	photo: string;
}

export interface GetUserById_GetUserById_user {
	__typename: "User";
	firstName: string;
	profilePhoto: string;
	feeds: (GetUserById_GetUserById_user_feeds | null)[] | null;
	isEmailVerified: boolean | null;
	isPhoneVerified: boolean | null;
	email: string | null;
	phone: string | null;
	fbId: string | null;
	googleId: string | null;
}

export interface GetUserById_GetUserById {
	__typename: "GetUserByIdResponse";
	res: boolean;
	error: string | null;
	user: GetUserById_GetUserById_user | null;
}

export interface GetUserById {
	GetUserById: GetUserById_GetUserById;
}

export interface GetUserByIdVariables {
	userId: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUser
// ====================================================

export interface GetCurrentUser_GetCurrentUser_user_likes {
	__typename: "Like";
	feedId: string | null;
}

export interface GetCurrentUser_GetCurrentUser_user {
	__typename: "User";
	id: string;
	firstName: string;
	profilePhoto: string;
	likes: (GetCurrentUser_GetCurrentUser_user_likes | null)[] | null;
	email: string | null;
	phone: string | null;
}

export interface GetCurrentUser_GetCurrentUser {
	__typename: "GetCurrentUserResponse";
	res: boolean;
	user: GetCurrentUser_GetCurrentUser_user | null;
}

export interface GetCurrentUser {
	GetCurrentUser: GetCurrentUser_GetCurrentUser;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
