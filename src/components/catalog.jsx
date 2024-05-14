import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import BlogCard from './blogCard';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function Catalog({ fromQuery = false }) {
	const { posts, page, lastPage } = useLoaderData();
	const { state } = useNavigation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [posts]);
	return (
		(posts.length > 0 && state !== 'loading' && (
			<section className="">
				<ul
					className={
						fromQuery
							? 'grid gap-x-4 gap-y-8 sm:grid-cols-[repeat(auto-fill,minmax(100px,1fr)] sm:grid-rows-[repeat(auto-fill,1fr)]'
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
							to={
								fromQuery
									? new URL('.', window.origin + location.pathname)
											.href + `${parseInt(page) - 1}`
									: `/page/${parseInt(page) - 1}`
							}
						>
							<Icon path={mdiArrowLeft} size={1} />
							Earlier Posts
						</Link>
						<Link
							className={
								lastPage
									? 'invisible'
									: 'flex items-center gap-1 hover:text-blue-600 text-blue-300'
							}
							to={
								fromQuery
									? new URL('.', window.origin + location.pathname)
											.href + `${parseInt(page) + 1}`
									: `/page/${parseInt(page) + 1}`
							}
						>
							Older Posts <Icon path={mdiArrowRight} size={1} />
						</Link>
					</div>
				)) || <p className="mt-12 text-center text-lg">Loading Page...</p>}
			</section>
		)) || <p className="text-center text-xl">No results found.</p>
	);
}

Catalog.propTypes = {
	fromQuery: PropTypes.bool,
};
