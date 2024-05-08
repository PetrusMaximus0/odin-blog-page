import { Outlet } from 'react-router-dom';
import SideBar from './sideBar';
import PropTypes from 'prop-types';

//
export default function Content({ renderAside = true }) {
	return (
		<div className="grid grid-rows-2 gap-x-2 md:grid-rows-1 md:grid-cols-[1fr_minmax(auto,_320px)]">
			<main className="">
				<Outlet />
			</main>
			{renderAside && (
				<aside className="">
					<SideBar />
				</aside>
			)}
		</div>
	);
}

Content.propTypes = {
	renderAside: PropTypes.bool.isRequired,
};
