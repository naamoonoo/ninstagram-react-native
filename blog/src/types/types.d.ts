export interface IBlog {
	id: string;
	title: string;
	text: string;
}

export interface IBlogContext {
	state: IBlog[];
	addBlogPost: any;
	deleteBlogPost: any;
	editBlogPost: any;
}
