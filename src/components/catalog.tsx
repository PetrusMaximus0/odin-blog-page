import Icon from '@mdi/react';
import { useEffect } from 'react';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ICatalogResponse } from '../interfaces';
import BlogCard from './blogCard';

export default function Catalog({ fromQuery = false }) {

	const { posts, page, lastPage } = useLoaderData() as ICatalogResponse;
	const { state } = useNavigation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [posts]);

	return (
		(posts.length > 0 && (
			<section>
				<ul
					className={
						fromQuery
							? 'grid gap-x-4 gap-y-8 sm:grid-cols-[repeat(auto-fill,minmax(100px,1fr)] sm:grid-rows-[repeat(auto-fill,1fr)]'
							: 'flex flex-col gap-8'
					}
				>
					{
						posts.map((blog) =>
							<li key={blog._id} className="">
								<BlogCard data={blog} />
							</li>)
					}
				</ul>
				{
					state === "loading" && <p className="mt-12 text-center text-lg"> Loading Page... </p>
					||
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
										.href + `${page - 1}`
									: `/page/${page - 1}`
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
										.href + `${page + 1}`
									: `/page/${page + 1}`
							}
						>
							Older Posts <Icon path={mdiArrowRight} size={1} />
						</Link>
							
					</div>					
				}
			</section>

		)) || <p className="text-center text-xl"> No results found. </p>
	);
}

Catalog.propTypes = {
	fromQuery: PropTypes.bool,
};



