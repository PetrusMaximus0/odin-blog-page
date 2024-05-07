import { Navigate } from 'react-router-dom';
import App from './App';

//
export default [
	{
		path: '/',
		element: <Navigate to="/post/latest" />,
	},
	{
		path: '/post/:id',
		element: <App />,
	},
];
