import PropTypes from 'prop-types';

const Comment = ({ data }) => {
	return (
		<li className="">
			<p className="flex justify-between items-center text font-semibold">
				<span>{data.author ? data.author : 'Anonymous'}</span>
				<span>
					#{data.id}, {data.timeStamp}
				</span>
			</p>
			<p className="text-sm">{data.text}</p>
		</li>
	);
};

Comment.propTypes = {
	data: PropTypes.object.required,
};

export default Comment;
