export interface IPostArchive {
	date: number;
	number: number;
}

export interface ICatalogLoaderParams {
	id?: string;
	itemNumber?: string;
	pageNumber?: string;
	queryType?: string;
	query?: string;
	name?: string;
}

export interface ICatalogResponse {
	posts: IPost[];
	page: number;
	lastPage: number;
	queryName: string;
}

export interface IComment {
	_id: string;
	date: Date;
	author: string;
	text: string;
}

export interface ICommentFormData {
	author?: string;
	text?: string;
}

export interface IPost {
	_id: string;
	author: string;
	title: string;
	description: string;
	text: string;
	date: Date;
	timeToRead: string;
	comments: IComment[];
	headerImage: string;
}

export interface IRootResponse {
	categories: ICategory[];
	archives: IPostArchive[];
}

export interface ICategory {
	_id: string;
	name: string;
	posts: IPost[];
}
