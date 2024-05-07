import Comment from './components/comment';
import './App.scss';
import BlogPost from './components/blogpost';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

//
import mockBlogposts from './mockData';

//

function App() {
	const { id } = useParams();
	const [blogposts, setBlogposts] = useState(mockBlogposts);
	const [currentPost, setCurrentPost] = useState(mockBlogposts[0]);

	useEffect(() => {
		//
		if (id === 'latest') {
			setCurrentPost(blogposts[0]);
			return;
		}

		//
		const index = blogposts.findIndex((element) => {
			return element.id === id;
		});
		index !== -1
			? setCurrentPost({ ...blogposts[index] })
			: setCurrentPost(blogposts[0]);
	}, [id, blogposts]);

	// Render the blogpost depending on the ID

	return (
		<div className="bg-slate-300 grid min-h-screen w-full grid-rows-[auto_1fr_auto]">
			<header className="container bg-slate-200 min-w-full">
				<h1 className="p-4 text-3xl text-center uppercase font-light">
					The Blogger
				</h1>
			</header>
			<div className="container mx-auto px-4 my-4 grid gap-4 grid-rows-[auto_1fr] lg:grid-rows-none lg:grid-cols-[1fr_260px]">
				<main className="bg-slate-300 flex flex-col gap-4">
					<BlogPost blogpost={currentPost} />

					<section className="bg-slate-400 flex-grow p-4">
						<button
							onClick={() => alert('Not Yet Implemented')}
							className="mb-4 text-lg"
						>
							Add Comment
						</button>
						<ul className="flex flex-col gap-2">
							{currentPost.comments.map((comment) => {
								return <Comment key={comment.id} data={comment} />;
							})}
						</ul>
					</section>
				</main>
				<aside className="bg-slate-400 p-4">
					<h2 className="text-center text-4xl mb-4 font-light">
						Blogpost List
					</h2>
					<ul className="flex flex-col items-center sm:flex-row flex-wrap justify-between gap-2">
						{blogposts.map((post) => {
							return (
								<li
									className={
										post.id === id
											? 'px-4 py-1 bg-slate-500 w-full rounded-lg'
											: 'px-4 py-1 w-full rounded-lg'
									}
									key={post.id}
								>
									<Link to={`/post/${post.id}`}>
										<h3 className="font-semibold">{post.title}</h3>
										<p>
											{post.author} - {post.date}
										</p>
									</Link>
								</li>
							);
						})}
					</ul>
				</aside>
			</div>
			<footer className="container min-w-full bg-slate-200">
				<p className="p-4 text-2xl text-center">This is the footer</p>
			</footer>
		</div>
	);
}

export default App;
