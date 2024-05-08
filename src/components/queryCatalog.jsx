import Catalog from './catalog';

export default function QueryCatalog() {
	return (
		<main>
			<Catalog fromQuery={true} />
		</main>
	);
}
