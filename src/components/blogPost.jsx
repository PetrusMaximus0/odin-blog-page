import { Link } from 'react-router-dom';

export default function BlogPost() {
	return (
		<article className="flex flex-col">
			<h1 className="text-5xl font-semibold">Title of the article</h1>
			<p className="italic">
				Posted in <span className="font-bold">December 1, 2023</span> by{' '}
				<Link
					to="/list/author/MrShiggles"
					className="text-blue-300 hover:text-blue-500"
				>
					Mr Shiggles
				</Link>
			</p>
			<p className="italic font-semibold mb-6">2 min read</p>
			<p>
				Here goes some Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Optio enim recusandae cum doloremque incidunt facilis ducimus
				dolore hic temporibus? Reiciendis recusandae, ipsa voluptas at enim
				earum. Quibusdam adipisci molestias vel.
			</p>
		</article>
	);
}
