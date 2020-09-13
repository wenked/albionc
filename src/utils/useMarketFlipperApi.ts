import useSWR from 'swr';
import axios from 'axios';

export const useMarketFlipperApi = <Data = any, Error = any>(
	query: string = '',
	quality: number
) => {
	const { isValidating, data, error } = useSWR<Data, Error>(
		[query, quality],
		async (query, quality) => {
			const response = await axios.get(
				`https://www.albion-online-data.com/api/v2/stats/Prices/${query}?qualities=${quality}
                `
			);

			return response.data;
		}
	);

	return { data, error, isValidating };
};
