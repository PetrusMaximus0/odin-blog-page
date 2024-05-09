import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import BlogCard from './blogCard';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import PropTypes from 'prop-types';

export default function Catalog({ fromQuery = false }) {
	const { posts, page } = useLoaderData();
	const { state } = useNavigation();
	return (
		<section className="">
			<ul
				className={
					fromQuery
						? 'grid gap-x-4 gap-y-8 sm:grid-cols-3 sm:grid-rows-3'
						: 'flex flex-col gap-8'
				}
			>
				{posts.map((blog) => {
					return (
						<li key={blog._id} className="">
							<BlogCard data={blog} />
						</li>
					);
				})}
			</ul>
			{(state !== 'loading' && (
				<div className="flex justify-around gap-4 mt-12">
					<Link
						className={
							page > 1
								? 'flex items-center gap-1 hover:text-blue-600 text-blue-300'
								: 'invisible'
						}
						to={`/page/${parseInt(page) - 1}`}
					>
						<Icon path={mdiArrowLeft} size={1} />
						Earlier Posts
					</Link>
					<Link
						className={
							posts.length < 3
								? 'invisible'
								: 'flex items-center gap-1 hover:text-blue-600 text-blue-300'
						}
						to={`/page/${parseInt(page) + 1}`}
					>
						Older Posts <Icon path={mdiArrowRight} size={1} />
					</Link>
				</div>
			)) || <p className="mt-12 text-center text-lg">Loading Page...</p>}
		</section>
	);
}

Catalog.propTypes = {
	fromQuery: PropTypes.bool,
};
