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
