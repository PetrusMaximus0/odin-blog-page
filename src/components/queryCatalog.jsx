import { useParams } from 'react-router-dom';
import Catalog from './catalog';
import PropTypes from 'prop-types';

export default function QueryCatalog({ queryType }) {
	const { query } = useParams();
	console.log(query, queryType);
	return (
		<main>
			{(queryType === 'search' && (
				<h1 className="text-5xl mb-8">{`Search results for: "${query}"`}</h1>
			)) || (
				<h1 className="text-5xl mb-8 ">
					{' '}
					<span className="capitalize">{queryType}: </span> {query}{' '}
				</h1>
			)}
			<Catalog fromQuery={true} />
		</main>
	);
}

QueryCatalog.propTypes = {
	queryType: PropTypes.string,
};
