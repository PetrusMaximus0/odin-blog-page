import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function BlogCard({ data }) {
	return (
		<div className="flex flex-col gap-4">
			<figure className="max-w-full">
				<img
					className="object-cover w-full h-44"
					src={data.headerImage}
					alt="Post Image"
				/>
			</figure>
			<h2 className="text-center text-blue-300 hover:text-blue-600 mx-auto text-4xl font-light">
				<Link to={`/post/${data._id}`}>{data.title}</Link>
			</h2>
			<p className="text-left">{data.description}</p>
			<p className="text-left italic font-light">
				<Link
					className="text-blue-300 hover:text-blue-600"
					to={`/year/${new Date(data.date).getFullYear()}`}
				>
					{new Date(data.date).toLocaleDateString()}
				</Link>{' '}
				- {data.timeToRead} min read
			</p>
		</div>
	);
}

BlogCard.propTypes = {
	data: PropTypes.object,
};
