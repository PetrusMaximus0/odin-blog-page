import Icon from '@mdi/react';
import { mdiMagnify, mdiCogOutline, mdiArchiveCogOutline } from '@mdi/js';
import { Link } from 'react-router-dom';
function SideBar() {
	return (
		<div className="flex flex-col gap-4">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log('Submitted!');
				}}
				className="flex h-fit text-slate-900"
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
					{
						<li className="flex items-center justify-start gap-1 hover:text-blue-600 text-blue-300">
							<Icon path={mdiCogOutline} size={0.9} />
							<Link to="/">Category(1)</Link>
						</li>
					}
				</ul>
			</section>
			<section>
				<h1 className="text-2xl font-bold mb-2">Archives</h1>
				<ul className="flex flex-col gap-1">
					<li className="flex items-center justify-start gap-1 hover:text-blue-600 text-blue-300">
						<Icon path={mdiArchiveCogOutline} size={0.9} />
						<Link to="/">20XX(1)</Link>
					</li>
				</ul>
			</section>
		</div>
	);
}

export default SideBar;
