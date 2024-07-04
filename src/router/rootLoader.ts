import { IPostArchive, IRootResponse } from "../interfaces";
import { apiBaseURL } from "../config";

// A fetch request for the blogposts and the categories.
export const rootLoader = async () => {
	//
	const url = `${apiBaseURL}/posts/shortlist`;
	return fetch(url, {
		mode: 'cors',
		method: 'GET',
		headers: {
			'content-type': 'application/json',
		},
	})
		.then((res) => {
			if (res.status >= 400) {
				throw new Error(`Server error with status ${ res.status }`);
			}
			return res.json();
		})
		.then((res) => {

			const archives: IPostArchive[] = []				
			res.posts.forEach((post: IPostArchive) => {
				//
				const index = archives.findIndex((element) => element.date === new Date(post.date).getFullYear());

				//
				if (index === -1) {
					archives.push({ date: new Date(post.date).getFullYear(), number: 1});
				} else {
					archives[index].number += 1;
				}

			});

			return {
				categories: res.categories,
				archives: archives.sort((a, b) => b.date - a.date),
			} as IRootResponse;
		})
		.catch((error) => console.error(error));

	//
};