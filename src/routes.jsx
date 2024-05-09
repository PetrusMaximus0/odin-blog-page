import Root from './components/root';
import Content from './components/content';
import BlogPost from './components/blogPost';
import Catalog from './components/catalog';
import ErrorPage from './components/errorPage';
import QueryCatalog from './components/queryCatalog';
import { defer } from 'react-router-dom';

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
			return res;
		})
		.catch((error) => console.error(error));

	//
};

const catalogLoader = async ({ params }) => {
	if (isNaN(params.pageNumber)) {
		params = { pageNumber: 1 };
	}
	return defer({
		posts: await fetch(
			`http://localhost:3000/posts?page=${params.pageNumber}`,
			{
				mode: 'cors',
				type: 'GET',
				headers: {
					'content-type': 'application/json',
				},
			}
		)
			.then((res) => {
				if (res.status >= 400) {
					throw new Error('Server error with status', res.status);
				}
				return res.json();
			})
			.then((res) => {
				return res;
			})
			.catch((error) => console.error(error)),
		page: await params.pageNumber,
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
				loader: rootLoader, //this needs the aside content, that means the short list.
				element: <Content />,
				children: [
					{
						path: '/',
						loader: catalogLoader, //This needs 6 blog post cards.
						element: <Catalog />,
					},
					{
						path: '/page/:pageNumber',
						loader: catalogLoader, //This needs 6 blog post cards.
						element: <Catalog />,
					},
					{
						path: '/post/:id',
						element: <BlogPost />,
					},
				],
			},

			{
				path: '/year/:query',
				element: <QueryCatalog queryType={'year'} />,
			},
			{
				path: '/category/:query',
				element: <QueryCatalog queryType={'category'} />,
			},
			{
				path: '/search/:query',
				element: <QueryCatalog queryType={'search'} />,
			},
			{
				path: '/author/:query',
				element: <QueryCatalog queryType={'author'} />,
			},
		],
	},
];
