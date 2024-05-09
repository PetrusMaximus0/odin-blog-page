import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import blogContent from '../../tests/blogContent';

export default function BlogPost({ data = blogContent.posts[0] }) {
	return (
		<article className="flex flex-col">
			<h1 className="text-5xl font-semibold">{data.title}</h1>
			<p className="italic">
				Posted in <span className="font-bold">{data.date}</span> by{' '}
				<Link
					to={`/author/${data.author}`}
					className="text-blue-300 hover:text-blue-500"
				>
					{data.author}
				</Link>
			</p>
			<p className="italic font-semibold mb-6">{data.timeToRead} min read</p>
			<p>{data.text}</p>
		</article>
	);
}

BlogPost.propTypes = {
	data: PropTypes.object,
};
