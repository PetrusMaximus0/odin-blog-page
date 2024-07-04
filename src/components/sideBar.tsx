import Icon from '@mdi/react';
import { mdiMagnify, mdiCogOutline, mdiArchiveCogOutline } from '@mdi/js';
import { Link, useNavigate, useLoaderData } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IRootResponse } from '../interfaces';
import { FormEvent } from 'react';

function SideBar() {
	const { categories, archives } = useLoaderData() as IRootResponse;
	
	//
	const navigate = useNavigate();
	const handleSearchFormSubmit = (e : FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// redirect to the queryCatalog with the query
		navigate(`search/${e.currentTarget.query.value.replace(/\W+/g, ' ')}/page/1`);
		e.currentTarget.query.value = '';
	};

	return (
		<div className="flex flex-col gap-4 items-center md:items-stretch">
			<form
				onSubmit={handleSearchFormSubmit}
				className="flex h-fit text-slate-900 justify-center"
				action=""
				id="search"
				name="search"
			>
				<label className="collapse" htmlFor="query">
					Search
				</label>
				<input
					className="px-2 py-1 min-w-0 mr-2"
					type="search"
					name="query"
					id="query"
					placeholder="Search for a post..."
					required
				/>
				<button
					type="submit"
					className="bg-blue-200 text-slate-700 active:bg-slate-900 active:text-slate-200 hover:bg-slate-200 hover:text-slate-900 flex justify-between items-center gap-1 px-3 py-1 rounded"
				>
					<span className="text-lg">Search</span>
					<Icon className="" path={mdiMagnify} size={1} />
				</button>
			</form>
			<section>
				<h1 className="text-2xl font-bold mb-2">Categories</h1>
				<ul className="flex flex-col gap-1">
					{categories.map((category) => (
						<li
							key={category._id}
							className="flex items-center justify-start gap-1 hover:text-blue-600 text-blue-300"
						>
							<Icon
								className="text-blue-100"
								path={mdiCogOutline}
								size={0.9}
							/>
							<Link
								to={`/categories/${category._id}/${category.name}/page/1`}
							>{`${category.name} (${category.posts.length})`}</Link>
						</li>
					))}
				</ul>
			</section>
			<section>
				<h1 className="text-2xl font-bold mb-2">Archives</h1>
				<ul className="flex flex-col gap-1">
					{archives.map((element) => (
						<li
							key={element.date}
							className="flex items-center justify-start gap-1 hover:text-blue-600 text-blue-300"
						>
							<Icon
								className="text-blue-100"
								path={mdiArchiveCogOutline}
								size={0.9}
							/>
							<Link
								to={`date/${element.date}/page/1/`}
							>{`${element.date} (${element.number})`}</Link>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}

SideBar.propTypes = {
	categories: PropTypes.object,
	posts: PropTypes.object,
};

export default SideBar;
