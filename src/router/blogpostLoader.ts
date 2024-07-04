import { ICatalogLoaderParams } from "../interfaces";
import { apiBaseURL } from "../config";

export const blogpostLoader = async ({ params }: { params: ICatalogLoaderParams }) => {
	return fetch(`${apiBaseURL}/posts/${params.id}`, {
		method: 'GET',
		mode: 'cors',
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
		.then((res) => res)
		.catch((error) => {
			console.error(error);
		});
};