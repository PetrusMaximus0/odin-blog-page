import {Outlet, useNavigation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiRobotIndustrialOutline } from '@mdi/js';
import SideBar from "./sideBar.tsx";

export default function Root() {
	const {state} = useNavigation();
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
			{ state === "idle" &&
				<div className="grid grid-rows-[auto_auto] gap-8 lg:grid-rows-1 lg:grid-cols-[1fr_minmax(auto,_320px)]">
					<main>
						<Outlet/>
					</main>
					<aside>
						<SideBar/>
					</aside>
				</div> || <p className={"flex h-full w-full items-center justify-center text-2xl"}> Loading...  </p>
			}
			<footer className="text-center py-10 font-bold text-lg">
				<Link to="/"> THE BLOG PAGE </Link>
			</footer>
		</div>
	);
}
