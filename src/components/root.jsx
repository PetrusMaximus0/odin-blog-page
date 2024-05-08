import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiRobotIndustrialOutline } from '@mdi/js';

export default function Root() {
	return (
		<div className="h-screen max-w-screen-2xl px-1 mx-auto py-12 sm:px-6 lg:px-10 gap-8 grid grid-rows-[auto_1fr_auto]">
			<header className="mx-auto">
				<Link className="flex gap-2 items-center justify-center" to="/">
					<Icon path={mdiRobotIndustrialOutline} size={4} />
					<h1 className="font-extrabold text-4xl">
						The Industrial Techie
					</h1>
				</Link>
			</header>
			<Outlet />
			<footer className="text-center py-10 font-bold text-lg">
				<Link to="/"> THE BLOG PAGE </Link>
			</footer>
		</div>
	);
}
