import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function BlogPost() {
	const data = useLoaderData();
	//
	const [allComments, setAllComments] = useState(
		data.comments.sort((a, b) => new Date(b.date) - new Date(a.date))
	);
	//
	const [postingComment, setPostingComment] = useState(false);
	const [commentData, setCommentData] = useState({});
	const [expandCommentInput, setExpandCommentInput] = useState(false);
	const handleCommentInputChange = (e) => {
		if (postingComment) return;
		setCommentData({ author: commentData.author, text: e.target.value });
	};
	const handleAuthorInputChange = (e) => {
		if (postingComment) return;
		setCommentData({ author: e.target.value, text: commentData.text });
	};
	//
	const handleCommentSubmit = (e) => {
		if (postingComment) return;
		e.preventDefault();
		setPostingComment(true);
		const payload = { author: commentData.author, text: commentData.text };
		fetch(`http://localhost:3000/posts/${data._id}/comment`, {
			mode: 'cors',
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(payload),
		})
			.then((res) => {
				if (res.status >= 400) {
					throw new Error('Error with status: ', res.status);
				}
				return res.json();
			})
			.then((res) => {
				if (res.errors) {
					setCommentData({
						author: res.formData.author,
						text: res.formData.message,
					});
				} else {
					setExpandCommentInput(false);
					setCommentData({ author: '', text: '' });
				}
			})
			.catch((error) => console.error(error))
			.finally(() => {
				console.log(payload);
				setPostingComment(false);
				setAllComments(
					[
						...allComments,
						{
							author: payload.author || 'Anonymous User',
							text: payload.text,
							date: new Date(),
						},
					].sort((a, b) => new Date(b.date) - new Date(a.date))
				);
			});
	};
	//
	const handleCommentCancel = () => {
		if (postingComment) return;
		setExpandCommentInput(false);
		setCommentData({ author: '', text: '' });
	};

	return (
		<div className="flex flex-col gap-10">
			<article className="flex flex-col">
				<figure className="max-w-full">
					<img
						className="object-cover w-full 2xl:max-h-96 max-h-64"
						src={data.headerImage}
						alt="Post Image"
					/>
				</figure>
				<h1 className="text-5xl font-semibold">{data.title}</h1>
				<p className="italic">
					Posted in{' '}
					<span className="font-bold">
						{new Date(data.date).toLocaleString()}
					</span>{' '}
					by{' '}
					<Link
						to={`/author/${data.author}/page/1`}
						className="text-blue-300 hover:text-blue-500"
					>
						{data.author}
					</Link>
				</p>
				<p className="italic font-semibold mb-6">
					{data.timeToRead} min read
				</p>
				<p>{data.text}</p>
			</article>
			<form
				onSubmit={handleCommentSubmit}
				className="flex flex-col gap-2"
				id="comment"
				action=""
			>
				<label className="font-bold" htmlFor="message">
					Leave a comment
				</label>
				<textarea
					className="resize-none bg-slate-900 rounded"
					name="message"
					id="message"
					cols="30"
					rows={expandCommentInput ? '4' : '1'}
					onFocus={() => setExpandCommentInput(true)}
					maxLength={300}
					onChange={handleCommentInputChange}
					value={commentData.text}
					required
				></textarea>

				{postingComment && (
					<p className="text-xl text-center"> Posting your comment ... </p>
				)}

				<div
					className={
						expandCommentInput && !postingComment
							? 'flex items-center justify-end mt-2 gap-4'
							: 'hidden'
					}
				>
					<label htmlFor="author" className="mr-auto font-bold text-sm">
						Your Name(Optional)
						<input
							className="bg-slate-900 ml-4 text-lg rounded"
							type="text"
							name="author"
							id="author"
							value={commentData.author}
							onChange={handleAuthorInputChange}
						/>
					</label>
					<button
						type="button"
						onClick={handleCommentCancel}
						className="px-4 py-1"
					>
						Cancel
					</button>
					<button className="px-4 py-1 bg-blue-200 text-slate-700 rounded">
						Post
					</button>
				</div>
			</form>
			{data.comments.length > 0 && (
				<ul className="flex flex-col justify-start gap-5">
					{allComments.map((comment) => {
						return (
							<li className="flex flex-col" key={comment._id}>
								<header className="flex items-center justify-between text-sm">
									<h3 className="font-bold">
										{comment.author === ''
											? 'Anonymous Commenter'
											: comment.author}
									</h3>
									{new Date(comment.date).toLocaleString()}
								</header>
								<p>{comment.text}</p>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

BlogPost.propTypes = {
	data: PropTypes.object,
};
