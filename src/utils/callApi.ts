import axios from 'axios';

const callApi = async (
	city: string | undefined,
	resource: string | undefined
) => {
	if (resource === 'FIBER') {
		const rawResourceResponse = await axios.get(
			`https://www.albion-online-data.com/api/v2/stats/Prices/T3_FIBER%2CT4_FIBER%2CT4_FIBER_LEVEL1%401%2CT4_FIBER_LEVEL2%402%2CT4_FIBER_LEVEL3%403%2CT5_FIBER%2CT5_FIBER_LEVEL1%401%2CT5_FIBER_LEVEL2%402%2CT5_FIBER_LEVEL3%403%2CT6_FIBER%2CT7_FIBER%2CT7_FIBER_LEVEL1%401%2CT7_FIBER_LEVEL2%402%2CT7_FIBER_LEVEL3%403%2CT8_FIBER%2CT8_FIBER_LEVEL1%401%2CT8_FIBER_LEVEL2%402%2CT8_FIBER_LEVEL3%403?locations=${city}`
		);
		const refinedResourceResponse = await axios.get(
			`https://www.albion-online-data.com/api/v2/stats/Prices/T3_CLOTH%2CT4_CLOTH%2CT4_CLOTH_LEVEL1%401%2CT4_CLOTH_LEVEL2%402%2CT4_CLOTH_LEVEL3%403%2CT5_CLOTH%2CT5_CLOTH_LEVEL1%401%2CT5_CLOTH_LEVEL2%402%2CT5_CLOTH_LEVEL3%403%2CT6_CLOTH%2CT7_CLOTH%2CT7_CLOTH_LEVEL1%401%2CT7_CLOTH_LEVEL2%402%2CT7_CLOTH_LEVEL3%403%2CT8_CLOTH%2CT8_CLOTH_LEVEL1%401%2CT8_CLOTH_LEVEL2%402%2CT8_CLOTH_LEVEL3%403?locations=${city}`
		);

		return {
			raw: rawResourceResponse.data,
			refined: refinedResourceResponse.data,
		};
	}
	if (resource === 'WOOD') {
		const rawResourceResponse = await axios.get(
			`https://www.albion-online-data.com/api/v2/stats/Prices/T3_WOOD%2CT4_WOOD%2CT4_WOOD_LEVEL1%401%2CT4_WOOD_LEVEL2%402%2CT4_WOOD_LEVEL3%403%2CT5_WOOD%2CT5_WOOD_LEVEL1%401%2CT5_WOOD_LEVEL2%402%2CT5_WOOD_LEVEL3%403%2CT6_WOOD%2CT7_WOOD%2CT7_WOOD_LEVEL1%401%2CT7_WOOD_LEVEL2%402%2CT7_WOOD_LEVEL3%403%2CT8_WOOD%2CT8_WOOD_LEVEL1%401%2CT8_WOOD_LEVEL2%402%2CT8_WOOD_LEVEL3%403?locations=${city}`
		);
		const refinedResourceRespose = await axios.get(
			`https://www.albion-online-data.com/api/v2/stats/Prices/T3_PLANKS%2CT4_PLANKS%2CT4_PLANKS_LEVEL1%401%2CT4_PLANKS_LEVEL2%402%2CT4_PLANKS_LEVEL3%403%2CT5_PLANKS%2CT5_PLANKS_LEVEL1%401%2CT5_PLANKS_LEVEL2%402%2CT5_PLANKS_LEVEL3%403%2CT6_PLANKS%2CT7_PLANKS%2CT7_PLANKS_LEVEL1%401%2CT7_PLANKS_LEVEL2%402%2CT7_PLANKS_LEVEL3%403%2CT8_PLANKS%2CT8_PLANKS_LEVEL1%401%2CT8_PLANKS_LEVEL2%402%2CT8_PLANKS_LEVEL3%403?locations=${city}`
		);
		return {
			raw: rawResourceResponse.data,
			refined: refinedResourceRespose.data,
		};
	}
	if (resource === 'ORE') {
		const rawResourceResponse = await axios.get(
			`https://www.albion-online-data.com/api/v2/stats/Prices/T3_ORE%2CT4_ORE%2CT4_ORE_LEVEL1%401%2CT4_ORE_LEVEL2%402%2CT4_ORE_LEVEL3%403%2CT5_ORE%2CT5_ORE_LEVEL1%401%2CT5_ORE_LEVEL2%402%2CT5_ORE_LEVEL3%403%2CT6_ORE%2CT7_ORE%2CT7_ORE_LEVEL1%401%2CT7_ORE_LEVEL2%402%2CT7_ORE_LEVEL3%403%2CT8_ORE%2CT8_ORE_LEVEL1%401%2CT8_ORE_LEVEL2%402%2CT8_ORE_LEVEL3%403?locations=${city}`
		);
		const refinedResourceResponse = await axios.get(
			`https://www.albion-online-data.com/api/v2/stats/Prices/T3_METALBAR%2CT4_METALBAR%2CT4_METALBAR_LEVEL1%401%2CT4_METALBAR_LEVEL2%402%2CT4_METALBAR_LEVEL3%403%2CT5_METALBAR%2CT5_METALBAR_LEVEL1%401%2CT5_METALBAR_LEVEL2%402%2CT5_METALBAR_LEVEL3%403%2CT6_METALBAR%2CT7_METALBAR%2CT7_METALBAR_LEVEL1%401%2CT7_METALBAR_LEVEL2%402%2CT7_METALBAR_LEVEL3%403%2CT8_METALBAR%2CT8_METALBAR_LEVEL1%401%2CT8_METALBAR_LEVEL2%402%2CT8_METALBAR_LEVEL3%403?locations=${city}`
		);
		return {
			raw: rawResourceResponse.data,
			refined: refinedResourceResponse.data,
		};
	}
	if (resource === 'HIDE') {
		const rawResourceResponse = await axios.get(
			`https://www.albion-online-data.com/api/v2/stats/Prices/T3_HIDE%2CT4_HIDE%2CT4_HIDE_LEVEL1%401%2CT4_HIDE_LEVEL2%402%2CT4_HIDE_LEVEL3%403%2CT5_HIDE%2CT5_HIDE_LEVEL1%401%2CT5_HIDE_LEVEL2%402%2CT5_HIDE_LEVEL3%403%2CT6_HIDE%2CT7_HIDE%2CT7_HIDE_LEVEL1%401%2CT7_HIDE_LEVEL2%402%2CT7_HIDE_LEVEL3%403%2CT8_HIDE%2CT8_HIDE_LEVEL1%401%2CT8_HIDE_LEVEL2%402%2CT8_HIDE_LEVEL3%403?locations=${city}`
		);
		const refinedResourceResponse = await axios.get(
			`https://www.albion-online-data.com/api/v2/stats/Prices/T3_LEATHER%2CT4_LEATHER%2CT4_LEATHER_LEVEL1%401%2CT4_LEATHER_LEVEL2%402%2CT4_LEATHER_LEVEL3%403%2CT5_LEATHER%2CT5_LEATHER_LEVEL1%401%2CT5_LEATHER_LEVEL2%402%2CT5_LEATHER_LEVEL3%403%2CT6_LEATHER%2CT7_LEATHER%2CT7_LEATHER_LEVEL1%401%2CT7_LEATHER_LEVEL2%402%2CT7_LEATHER_LEVEL3%403%2CT8_LEATHER%2CT8_LEATHER_LEVEL1%401%2CT8_LEATHER_LEVEL2%402%2CT8_LEATHER_LEVEL3%403?locations=${city}`
		);
		return {
			raw: rawResourceResponse.data,
			refined: refinedResourceResponse.data,
		};
	}
	if (resource === 'ROCK') {
		const rawResourceResponse = await axios.get(
			`https://www.albion-online-data.com/api/v2/stats/Prices/T3_ROCK%2CT4_ROCK%2CT4_ROCK_LEVEL1%401%2CT4_ROCK_LEVEL2%402%2CT4_ROCK_LEVEL3%403%2CT5_ROCK%2CT5_ROCK_LEVEL1%401%2CT5_ROCK_LEVEL2%402%2CT5_ROCK_LEVEL3%403%2CT6_ROCK%2CT7_ROCK%2CT7_ROCK_LEVEL1%401%2CT7_ROCK_LEVEL2%402%2CT7_ROCK_LEVEL3%403%2CT8_ROCK%2CT8_ROCK_LEVEL1%401%2CT8_ROCK_LEVEL2%402%2CT8_ROCK_LEVEL3%403?locations=${city}`
		);
		const refinedResourceResponse = await axios.get(
			`https://www.albion-online-data.com/api/v2/stats/Prices/T3_STONEBLOCK%2CT4_STONEBLOCK%2CT5_STONEBLOCK%2CT6_STONEBLOCK%2CT7_STONEBLOCK%2CT8_STONEBLOCK?locations=${city}`
		);
		return {
			raw: rawResourceResponse.data,
			refined: refinedResourceResponse.data,
		};
	}
};

export default callApi;
