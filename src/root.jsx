import { Outlet } from 'react-router-dom';

export default function Root() {
	return (
		<>
			<header> HEADER </header>
			<main>
				<Outlet />
			</main>
			<aside> ASIDE </aside>
			<footer> FOOTER </footer>
		</>
	);
}
