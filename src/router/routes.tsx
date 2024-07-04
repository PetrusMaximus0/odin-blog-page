// Component imports
import Root from '../components/root';
import Content from '../components/content';
import BlogPost from '../components/blogPost';
import Catalog from '../components/catalog';
import ErrorPage from '../components/errorPage';
import QueryCatalog from '../components/queryCatalog';

// Loader Imports
import { catalogLoader } from './catalogLoader';
import { rootLoader } from './rootLoader'; 
import { blogpostLoader } from './blogpostLoader';

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
