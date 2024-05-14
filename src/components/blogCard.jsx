import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChatOutline } from '@mdi/js';

export default function BlogCard({ data }) {
	return (
		<div className="flex flex-col gap-4">
			<figure className="max-w-full">
				<img
					className="object-cover w-full 2xl:max-h-96 max-h-64"
					src={data.headerImage}
					alt="Post Image"
				/>
			</figure>
			<h2 className="text-center text-blue-300 hover:text-blue-600 mx-auto text-4xl font-light">
				<Link to={`/post/${data._id}`}>{data.title}</Link>
			</h2>
			<p className="text-left">{data.description}</p>
			<p className="flex gap-4 justify-start italic font-light">
				<Link
					className="text-blue-300 hover:text-blue-600"
					to={`/date/${new Date(data.date).getFullYear()}/page/1`}
				>
					{new Date(data.date).toLocaleDateString()}
				</Link>
				| {data.timeToRead} min read |
				<Link
					className="flex text-sm items-center text-blue-300 hover:text-blue-600"
					to={`/post/${data._id}`}
				>
					<Icon path={mdiChatOutline} size={1} />({data.comments.length})
				</Link>
			</p>
		</div>
	);
}

BlogCard.propTypes = {
	data: PropTypes.object,
};
