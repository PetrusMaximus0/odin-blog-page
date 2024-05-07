import { PropTypes } from 'prop-types';

const BlogPost = ({ blogpost }) => {
	return (
		<section className="bg-slate-400 p-4 flex flex-col gap-8">
			<h2 className="text-center py-4 text-5xl font-light">
				{blogpost.title}
			</h2>
			<p className="flex gap-4 text-sm font-semibold">
				<span>{blogpost.author}</span>
				<span>{blogpost.date}</span>
				<span>{blogpost.timeToRead} min read</span>
			</p>
			<p className="text-pretty font-light text-lg">{blogpost.text}</p>
		</section>
	);
};

BlogPost.propTypes = {
	blogpost: PropTypes.object.required,
};

export default BlogPost;
