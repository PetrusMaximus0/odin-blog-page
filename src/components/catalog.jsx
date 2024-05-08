import { Link } from 'react-router-dom';
import BlogCard from './blogCard';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
export default function Catalog({ fromQuery = false }) {
	return (
		<section className="">
			<ul
				className={
					fromQuery
						? 'grid gap-x-4 gap-y-8 sm:grid-cols-3 sm:grid-rows-3'
						: 'flex flex-col gap-8'
				}
			>
				<li className="">
					<BlogCard />
				</li>
				<li className="">
					<BlogCard />
				</li>
				<li className="">
					<BlogCard />
				</li>
				<li className="">
					<BlogCard />
				</li>
				<li className="">
					<BlogCard />
				</li>
				<li className="">
					<BlogCard />
				</li>
				<li className="">
					<BlogCard />
				</li>
				<li className="">
					<BlogCard />
				</li>
				<li className="">
					<BlogCard />
				</li>
			</ul>
			<div className="flex justify-around gap-4 mt-12">
				<Link
					className="flex items-center gap-1 hover:text-blue-600 text-blue-300"
					to="/"
				>
					<Icon path={mdiArrowLeft} size={1} />
					Earlier Posts
				</Link>
				<Link
					className="flex items-center gap-1 hover:text-blue-600 text-blue-300"
					to="/"
				>
					Older Posts <Icon path={mdiArrowRight} size={1} />
				</Link>
			</div>
		</section>
	);
}
