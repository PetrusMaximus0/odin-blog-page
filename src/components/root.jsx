import { Outlet } from 'react-router-dom';

export default function Root() {
	return (
		<>
			<header> HEADER </header>
			<Outlet />
			<footer> FOOTER </footer>
		</>
	);
}
