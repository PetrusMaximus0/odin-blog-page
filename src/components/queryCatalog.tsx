import { useParams } from 'react-router-dom';
import Catalog from './catalog';

export default function QueryCatalog() {
	//
	const { queryType, query, name } = useParams();

	//
	return (
		<>
			{(queryType === 'search' && (
				<h1 className="text-5xl mb-8">{`Search results for: "${query}"`}</h1>
			)) || (
				<h1 className="text-5xl mb-8 ">
					<span className="capitalize">{queryType}: </span> {name || query}{' '}
				</h1>
			)}
			<Catalog fromQuery={true} />
		</>
	);
}
