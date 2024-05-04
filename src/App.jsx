import './App.scss';

function App() {
	return (
		<div className="grid min-h-screen w-full grid-rows-[auto_1fr_auto]">
			<header className="container bg-slate-200 min-w-full">
				<h1 className="p-4 text-3xl text-center uppercase font-light">
					{' '}
					The Blogger{' '}
				</h1>
			</header>
			<div className="container mx-auto my-4 grid gap-4 grid-rows-[auto_1fr] lg:grid-rows-none lg:grid-cols-[1fr_260px]">
				<main className="bg-slate-300 p-4 flex flex-col justify-start gap-4">
					<section className="bg-slate-400 ">
						<p>Blogpost Element</p>
					</section>
					<section className="bg-slate-400 ">
						<ul className="flex flex-col gap-2">
							<li>Commment1</li>
							<li>Commment1</li>
							<li>Commment1</li>
							<li>Commment1</li>
							<li>Commment1</li>
						</ul>
					</section>
				</main>
				<aside className="bg-slate-300 p-4">
					<ul>
						<li>A blog post link</li>
						<li>A blog post link</li>
						<li>A blog post link</li>
						<li>A blog post link</li>
						<li>A blog post link</li>
						<li>A blog post link</li>
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
