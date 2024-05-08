import Root from './components/root';
import { Outlet } from 'react-router-dom';

//
export default [
	{
		path: '/',
		element: <Root />,
		errorElement: <h1>Error Page!</h1>,
		children: [
			{
				path: '/',
				element: (
					<>
						<Outlet />
						<aside> This is the aside content</aside>
					</>
				),
				children: [
					{
						path: '/',
						element: <main>This is the Main Content</main>,
					},
					{
						path: '/post/:id',
						element: <main>Post with ID</main>,
					},
				],
			},

			{
				path: '/list/:type/:query',
				element: <h1>List of blogposts by query type and query</h1>,
			},
		],
	},
];
