import { Link } from 'react-router-dom';

export default function ErrorPage() {
	return (
		<p className="text-2xl text-center my-10 mx-auto">
			Woops, there seems to be an error! Stay calm and{' '}
			<Link className="text-blue-300" to="/">
				click here
			</Link>{' '}
			to return to main page
		</p>
	);
}
