import { BlogTypes } from "../types/enums";
import createDataContext from "./createDataContext";

const blogReducer = (state, action: { type: BlogTypes; paylaod: any }) => {
	switch (action.type) {
		case BlogTypes.ADD:
			return [...state, action.paylaod];
		case BlogTypes.DELETE:
			return state.filter(post => post.id !== action.paylaod);
		default:
			return state;
	}
};

const actions = {
	addBlogPost(dispatch) {
		return (title: string, text: string) => {
			const newBlogPost = {
				id: Math.floor(Math.random() * 999999999).toString(),
				title,
				text
			};
			dispatch({ type: BlogTypes.ADD, paylaod: newBlogPost });
		};
	},

	deleteBlogPost(dispatch) {
		return (id: string) => {
			dispatch({ type: BlogTypes.DELETE, paylaod: id });
		};
	}
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ ...actions },
	[]
);
