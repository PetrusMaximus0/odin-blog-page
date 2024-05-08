import Root from './components/root';
import Content from './components/content';
import BlogPost from './components/blogPost';
import Catalog from './components/catalog';
import ErrorPage from './components/errorPage';
import QueryCatalog from './components/queryCatalog';

//
export default [
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Content />,
				children: [
					{
						path: '/',
						element: <Catalog />,
					},
					{
						path: '/post/:id',
						element: <BlogPost />,
					},
				],
			},

			{
				path: '/list/:type/:query',
				element: <QueryCatalog />,
			},
		],
	},
];
