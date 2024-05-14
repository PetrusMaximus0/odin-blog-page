import Root from './components/root';
import Content from './components/content';
import BlogPost from './components/blogPost';
import Catalog from './components/catalog';
import ErrorPage from './components/errorPage';
import QueryCatalog from './components/queryCatalog';

// A fetch request for the blogposts and the categories.
const rootLoader = async () => {
	//
	return fetch('http://localhost:3000/posts/shortlist', {
		mode: 'cors',
		type: 'GET',
		headers: {
			'content-type': 'application/json',
		},
	})
		.then((res) => {
			if (res.status >= 400) {
				throw new Error('Server error with status', res.status);
			}
			return res.json();
		})
		.then((res) => {
			const archives = [];
			res.posts.forEach((post) => {
				const index = archives.findIndex(
					(element) => element.date === new Date(post.date).getFullYear()
				);
				if (index === -1) {
					archives.push({
						date: new Date(post.date).getFullYear(),
						number: 1,
					});
				} else {
					archives[index].number += 1;
				}
			});

			return {
				categories: res.categories,
				archives: archives.sort((a, b) => b.date - a.date),
			};
		})
		.catch((error) => console.error(error));

	//
};

const catalogLoader = async ({ params }) => {
	//
	if (!params.itemNumber) {
		params.itemNumber = 3;
	}

	//
	if (!params.pageNumber || isNaN(params.pageNumber)) {
		params.pageNumber = 1;
	}

	const baseUrl = `http://localhost:3000/posts?page=${params.pageNumber}&items=${params.itemNumber}`;
	let url = baseUrl;

	//
	if (params.queryType) {
		url += `&queryType=${params.queryType}&query=${params.query}`;
	}

	//
	const posts = await fetch(url, {
		mode: 'cors',
		type: 'GET',
		headers: {
			'content-type': 'application/json',
		},
	})
		.then((res) => {
			if (res.status >= 400) {
				throw new Error('Server error with status', res.status);
			}
			return res.json();
		})
		.then((res) => {
			return res;
		})
		.catch((error) => console.error(error));

	return {
		posts: posts.allPosts,
		page: params.pageNumber,
		lastPage: posts.lastPage,
		queryName: params.name ? params.name : '',
	};
};

const blogpostLoader = async ({ params }) => {
	return fetch(`http://localhost:3000/posts/${params.id}`, {
		method: 'GET',
		mode: 'cors',
		headers: {
			'content-type': 'application/json',
		},
	})
		.then((res) => {
			if (res.status >= 400) {
				throw new Error('Server error with status: ', res.status);
			}
			return res.json();
		})
		.then((res) => res)
		.catch((error) => {
			console.error(error);
		});
};

//
export default [
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				loader: rootLoader,
				element: <Content />,
				children: [
					{
						path: '/',
						loader: catalogLoader,
						element: <Catalog />,
					},
					{
						path: '/page/:pageNumber',
						loader: catalogLoader,
						element: <Catalog />,
					},
					{
						path: '/post/:id',
						loader: blogpostLoader,
						element: <BlogPost />,
					},
					{
						path: ':queryType/:query/:name/page/:pageNumber/',
						loader: catalogLoader,
						element: <QueryCatalog />,
					},
					{
						path: ':queryType/:query/page/:pageNumber/',
						loader: catalogLoader,
						element: <QueryCatalog />,
					},
				],
			},
		],
	},
];
