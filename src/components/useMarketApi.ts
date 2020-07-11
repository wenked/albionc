import useSWR from 'swr';
import axios from 'axios';

export const useMarketApi = <Data = any, Error = any>(query: string = '') => {
	const { isValidating, data, error } = useSWR<Data, Error>(
		query,
		async (query) => {
			const response = await axios.get(
				`https://www.albion-online-data.com/api/v2/stats/Charts/${query}`
			);

			return response.data;
		}
	);

	return { data, error, isValidating };
};
