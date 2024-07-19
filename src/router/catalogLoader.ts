import { apiBaseURL } from '../config';
import { ICatalogLoaderParams, ICatalogResponse } from '../interfaces';

export const catalogLoader = async ({
	params,
}: {
	params: ICatalogLoaderParams;
}) => {
	//
	if (!params.itemNumber) {
		params.itemNumber = '3';
	}

	//
	if (!params.pageNumber) {
		params.pageNumber = '1';
	}

	const baseUrl = `${apiBaseURL}/posts?page=${params.pageNumber}&items=${params.itemNumber}`;
	let url = baseUrl;

	//
	if (params.queryType) {
		url += `&queryType=${params.queryType}&query=${params.query}`;
	}

	//
	const posts = await fetch(url, {
		mode: 'cors',
		method: 'GET',
		headers: {
			'content-type': 'application/json',
		},
	})
		.then((res) => {
			if (res.status >= 400) {
				throw new Error(`Server error with status ${res.status}`);
			}
			return res.json();
		})
		.then((res) => {
			return res;
		})
		.catch((error) => console.error(error));

	return {
		posts: posts.allPosts,
		page: parseInt(params.pageNumber),
		lastPage: posts.lastPage,
		queryName: params.name ? params.name : '',
	} as ICatalogResponse;
};
