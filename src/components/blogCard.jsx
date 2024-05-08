import { Link } from 'react-router-dom';

export default function blogCard() {
	return (
		<div className="flex flex-col gap-4">
			<figure className="max-w-full">
				<img
					className="object-cover w-full h-44"
					src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Post Image"
				/>
			</figure>
			<h2 className="text-center text-blue-300 hover:text-blue-600 mx-auto text-4xl font-light">
				<Link to="/">The Post Title</Link>
			</h2>
			<p className="text-left">
				We’ve moved the official Unturned Wiki to unturned.wiki.gg! Tell us
				what you think on our Forum, and get the wiki.gg Redirect browser
				extension!
			</p>
			<p className="text-left italic font-light">
				<Link
					className="text-blue-300 hover:text-blue-600"
					to="/list/date/thisDate"
				>
					February 27, 2024
				</Link>{' '}
				- 5 min read
			</p>
		</div>
	);
}
