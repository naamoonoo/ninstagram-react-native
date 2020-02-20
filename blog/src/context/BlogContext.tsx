import { BlogTypes } from "../types/enums";
import createDataContext from "./createDataContext";

const blogReducer = (state, action: { type: BlogTypes; paylaod: any }) => {
	switch (action.type) {
		case BlogTypes.ADD:
			return [...state, action.paylaod];
		case BlogTypes.DELETE:
			return state.filter(post => post.id !== action.paylaod);
		case BlogTypes.EDIT:
			return state.map(post =>
				post.id === action.paylaod.id ? action.paylaod : post
			);
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
	},

	editBlogPost(dispatch) {
		return (id: string, title: string, text: string) => {
			const updatedBlogPost = {
				id,
				title,
				text
			};
			console.log(updatedBlogPost);
			dispatch({ type: BlogTypes.EDIT, paylaod: updatedBlogPost });
		};
	}
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ ...actions },
	[]
);
