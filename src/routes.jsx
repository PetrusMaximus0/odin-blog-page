import Root from './root';
//
export default [
	{
		path: '/',
		element: <Root />,
		errorElement: <h1>Error Page!</h1>,
		children: [
			{ index: true, element: <h1> This is the Index </h1> },
			{
				path: '/post/:id',
				element: <h1> This is a post with an ID </h1>,
			},
		],
	},
	{
		path: '/category/:id',
		element: <h1> List of posts by category </h1>,
	},
	{
		path: '/archive/:date',
		element: <h1> List of blogposts in this year, includes current year </h1>,
	},
];
