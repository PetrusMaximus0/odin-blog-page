import { Outlet } from 'react-router-dom';
import SideBar from './sideBar';
import PropTypes from 'prop-types';

//
export default function Content({ renderAside = true }) {
	return (
		<div className="grid grid-rows-[auto_auto] gap-8 lg:grid-rows-1 lg:grid-cols-[1fr_minmax(auto,_320px)]">
			<main>
				<Outlet />
			</main>
			{renderAside && (
				<aside>
					<SideBar />
				</aside>
			)}
		</div>
	);
}

Content.propTypes = {
	renderAside: PropTypes.bool,
};
