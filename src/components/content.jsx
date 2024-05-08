import { Outlet } from 'react-router-dom';

//
export default function Content() {
	return (
		<div>
			<Outlet />
			<aside> THIS IS THE ASIDE </aside>
		</div>
	);
}
