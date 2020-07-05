/*
Formulas
city = user
craftfee = user
mySpec = user // myspec tiers
returnrate = user
markettax = user

baseFocusCost = const
itemValue = const 


raWminPrice = api
reFminPrice = api

 715: T8_FIBER                                                         : Ghost Hemp
 716: T4_FIBER_LEVEL1@1                                                : Uncommon Hemp

*/
export interface profitArgs {
	craftFee: number;
	mySpecT4: number;
	mySpecT5: number;
	mySpecT6: number;
	mySpecT7: number;
	mySpecT8: number;
	returnRate: number;
	marketTax: number;
}

const efficiency = (
	spect4: number,
	spect5: number,
	spect6: number,
	spect7: number,
	spect8: number
): number => {
	return (spect4 + spect5 + spect6 + spect7 + spect8) / 3.33333333333333;
};

type itemData = {
	[key: string]: {
		itemValue: number;
		baseFocusCost: number;
	};
};

const itemConstObj: itemData = {
	T3_FIBER: {
		itemValue: 6,
		baseFocusCost: 20,
	},
	T4_FIBER: {
		itemValue: 14,
		baseFocusCost: 48,
	},
	'T4_FIBER_LEVEL1@1': {
		itemValue: 30,
		baseFocusCost: 89,
	},
	'T4_FIBER_LEVEL2@2': {
		itemValue: 54,
		baseFocusCost: 143,
	},
	'T4_FIBER_LEVEL3@3': {
		itemValue: 102,
		baseFocusCost: 239,
	},
	T5_FIBER: {
		itemValue: 30,
		baseFocusCost: 89,
	},
	'T5_FIBER_LEVEL1@1': {
		itemValue: 62,
		baseFocusCost: 160,
	},
	'T5_FIBER_LEVEL2@2': {
		itemValue: 118,
		baseFocusCost: 269,
	},
	'T5_FIBER_LEVEL3@3': {
		itemValue: 230,
		baseFocusCost: 461,
	},
	T6_FIBER: {
		itemValue: 62,
		baseFocusCost: 160,
	},
	'T6_FIBER_LEVEL1@1': {
		itemValue: 126,
		baseFocusCost: 284,
	},
	'T6_FIBER_LEVEL2@2': {
		itemValue: 246,
		baseFocusCost: 487,
	},
	'T6_FIBER_LEVEL3@3': {
		itemValue: 486,
		baseFocusCost: 844,
	},
	T7_FIBER: {
		itemValue: 126,
		baseFocusCost: 284,
	},
	'T7_FIBER_LEVEL1@1': {
		itemValue: 254,
		baseFocusCost: 500,
	},
	'T7_FIBER_LEVEL2@2': {
		itemValue: 502,
		baseFocusCost: 866,
	},
	'T7_FIBER_LEVEL3@3': {
		itemValue: 998,
		baseFocusCost: 1508,
	},
	T8_FIBER: {
		itemValue: 254,
		baseFocusCost: 500,
	},
	'T8_FIBER_LEVEL1@1': {
		itemValue: 510,
		baseFocusCost: 877,
	},
	'T8_FIBER_LEVEL2@2': {
		itemValue: 1000,
		baseFocusCost: 1527,
	},
	'T8_FIBER_LEVEL3@3': {
		itemValue: 2000,
		baseFocusCost: 2666,
	},
	T3_HIDE: {
		itemValue: 6,
		baseFocusCost: 20,
	},
	T4_HIDE: {
		itemValue: 14,
		baseFocusCost: 48,
	},
	'T4_HIDE_LEVEL1@1': {
		itemValue: 30,
		baseFocusCost: 89,
	},
	'T4_HIDE_LEVEL2@2': {
		itemValue: 54,
		baseFocusCost: 143,
	},
	'T4_HIDE_LEVEL3@3': {
		itemValue: 102,
		baseFocusCost: 239,
	},
	T5_HIDE: {
		itemValue: 30,
		baseFocusCost: 89,
	},
	'T5_HIDE_LEVEL1@1': {
		itemValue: 62,
		baseFocusCost: 160,
	},
	'T5_HIDE_LEVEL2@2': {
		itemValue: 118,
		baseFocusCost: 269,
	},
	'T5_HIDE_LEVEL3@3': {
		itemValue: 230,
		baseFocusCost: 461,
	},
	T6_HIDE: {
		itemValue: 62,
		baseFocusCost: 160,
	},
	'T6_HIDE_LEVEL1@1': {
		itemValue: 126,
		baseFocusCost: 284,
	},
	'T6_HIDE_LEVEL2@2': {
		itemValue: 246,
		baseFocusCost: 487,
	},
	'T6_HIDE_LEVEL3@3': {
		itemValue: 486,
		baseFocusCost: 844,
	},
	T7_HIDE: {
		itemValue: 126,
		baseFocusCost: 284,
	},
	'T7_HIDE_LEVEL1@1': {
		itemValue: 254,
		baseFocusCost: 500,
	},
	'T7_HIDE_LEVEL2@2': {
		itemValue: 502,
		baseFocusCost: 866,
	},
	'T7_HIDE_LEVEL3@3': {
		itemValue: 998,
		baseFocusCost: 1508,
	},
	T8_HIDE: {
		itemValue: 254,
		baseFocusCost: 500,
	},
	'T8_HIDE_LEVEL1@1': {
		itemValue: 510,
		baseFocusCost: 877,
	},
	'T8_HIDE_LEVEL2@2': {
		itemValue: 1000,
		baseFocusCost: 1527,
	},
	'T8_HIDE_LEVEL3@3': {
		itemValue: 2000,
		baseFocusCost: 2666,
	},
	T3_ORE: {
		itemValue: 6,
		baseFocusCost: 20,
	},
	T4_ORE: {
		itemValue: 14,
		baseFocusCost: 48,
	},
	'T4_ORE_LEVEL1@1': {
		itemValue: 30,
		baseFocusCost: 89,
	},
	'T4_ORE_LEVEL2@2': {
		itemValue: 54,
		baseFocusCost: 143,
	},
	'T4_ORE_LEVEL3@3': {
		itemValue: 102,
		baseFocusCost: 239,
	},
	T5_ORE: {
		itemValue: 30,
		baseFocusCost: 89,
	},
	'T5_ORE_LEVEL1@1': {
		itemValue: 62,
		baseFocusCost: 160,
	},
	'T5_ORE_LEVEL2@2': {
		itemValue: 118,
		baseFocusCost: 269,
	},
	'T5_ORE_LEVEL3@3': {
		itemValue: 230,
		baseFocusCost: 461,
	},
	T6_ORE: {
		itemValue: 62,
		baseFocusCost: 160,
	},
	'T6_ORE_LEVEL1@1': {
		itemValue: 126,
		baseFocusCost: 284,
	},
	'T6_ORE_LEVEL2@2': {
		itemValue: 246,
		baseFocusCost: 487,
	},
	'T6_ORE_LEVEL3@3': {
		itemValue: 486,
		baseFocusCost: 844,
	},
	T7_ORE: {
		itemValue: 126,
		baseFocusCost: 284,
	},
	'T7_ORE_LEVEL1@1': {
		itemValue: 254,
		baseFocusCost: 500,
	},
	'T7_ORE_LEVEL2@2': {
		itemValue: 502,
		baseFocusCost: 866,
	},
	'T7_ORE_LEVEL3@3': {
		itemValue: 998,
		baseFocusCost: 1508,
	},
	T8_ORE: {
		itemValue: 254,
		baseFocusCost: 500,
	},
	'T8_ORE_LEVEL1@1': {
		itemValue: 510,
		baseFocusCost: 877,
	},
	'T8_ORE_LEVEL2@2': {
		itemValue: 1000,
		baseFocusCost: 1527,
	},
	'T8_ORE_LEVEL3@3': {
		itemValue: 2000,
		baseFocusCost: 2666,
	},
	T3_WOOD: {
		itemValue: 6,
		baseFocusCost: 20,
	},
	T4_WOOD: {
		itemValue: 14,
		baseFocusCost: 48,
	},
	'T4_WOOD_LEVEL1@1': {
		itemValue: 30,
		baseFocusCost: 89,
	},
	'T4_WOOD_LEVEL2@2': {
		itemValue: 54,
		baseFocusCost: 143,
	},
	'T4_WOOD_LEVEL3@3': {
		itemValue: 102,
		baseFocusCost: 239,
	},
	T5_WOOD: {
		itemValue: 30,
		baseFocusCost: 89,
	},
	'T5_WOOD_LEVEL1@1': {
		itemValue: 62,
		baseFocusCost: 160,
	},
	'T5_WOOD_LEVEL2@2': {
		itemValue: 118,
		baseFocusCost: 269,
	},
	'T5_WOOD_LEVEL3@3': {
		itemValue: 230,
		baseFocusCost: 461,
	},
	T6_WOOD: {
		itemValue: 62,
		baseFocusCost: 160,
	},
	'T6_WOOD_LEVEL1@1': {
		itemValue: 126,
		baseFocusCost: 284,
	},
	'T6_WOOD_LEVEL2@2': {
		itemValue: 246,
		baseFocusCost: 487,
	},
	'T6_WOOD_LEVEL3@3': {
		itemValue: 486,
		baseFocusCost: 844,
	},
	T7_WOOD: {
		itemValue: 126,
		baseFocusCost: 284,
	},
	'T7_WOOD_LEVEL1@1': {
		itemValue: 254,
		baseFocusCost: 500,
	},
	'T7_WOOD_LEVEL2@2': {
		itemValue: 502,
		baseFocusCost: 866,
	},
	'T7_WOOD_LEVEL3@3': {
		itemValue: 998,
		baseFocusCost: 1508,
	},
	T8_WOOD: {
		itemValue: 254,
		baseFocusCost: 500,
	},
	'T8_WOOD_LEVEL1@1': {
		itemValue: 510,
		baseFocusCost: 877,
	},
	'T8_WOOD_LEVEL2@2': {
		itemValue: 1000,
		baseFocusCost: 1527,
	},
	'T8_WOOD_LEVEL3@3': {
		itemValue: 2000,
		baseFocusCost: 2666,
	},
	T3_ROCK: {
		itemValue: 6,
		baseFocusCost: 20,
	},
	T4_ROCK: {
		itemValue: 14,
		baseFocusCost: 48,
	},
	T5_ROCK: {
		itemValue: 30,
		baseFocusCost: 89,
	},
	T6_ROCK: {
		itemValue: 54,
		baseFocusCost: 143,
	},
	T7_ROCK: {
		itemValue: 102,
		baseFocusCost: 239,
	},
	T8_ROCK: {
		itemValue: 30,
		baseFocusCost: 89,
	},
};
/*
rawMinPrice: number;
	refRecipeMinPrice: number;
	refWantedMinPrice: number;
*/

const getProfitPerFocus = (
	myArgs: profitArgs,
	rawMinPrice: number | undefined,
	refRecipeMinPrice: number | undefined,
	refWantedMinPrice: number | undefined,
	item: string
): number | undefined => {
	let spec = 0;
	let craftVar = 0;

	if (rawMinPrice && refRecipeMinPrice && refWantedMinPrice !== undefined) {
		let myEfficiency = efficiency(
			myArgs.mySpecT4,
			myArgs.mySpecT5,
			myArgs.mySpecT6,
			myArgs.mySpecT7,
			myArgs.mySpecT8
		);
		if (item.includes('T4')) {
			spec = myArgs.mySpecT4;
			craftVar = 2;
		}
		if (item.includes('T5')) {
			spec = myArgs.mySpecT5;
			craftVar = 3;
		}
		if (item.includes('T6')) {
			spec = myArgs.mySpecT6;
			craftVar = 4;
		}
		if (item.includes('T7')) {
			spec = myArgs.mySpecT7;
			craftVar = 5;
		}
		if (item.includes('T8')) {
			spec = myArgs.mySpecT8;
			craftVar = 5;
		}

		const mySilverFee = Math.ceil(
			(myArgs.craftFee / 100) * (itemConstObj[item].itemValue * 5)
		);

		const myFocusCost =
			itemConstObj[item].baseFocusCost *
			Math.pow(0.5, (myEfficiency + spec * 2.5) / 100);

		const myCraftCost =
			(craftVar * rawMinPrice + refRecipeMinPrice) *
				(1 - myArgs.returnRate / 100) +
			mySilverFee;
		console.log(rawMinPrice, refRecipeMinPrice, refWantedMinPrice);
		return (
			((refWantedMinPrice - myCraftCost) * (1 - myArgs.marketTax / 100)) /
			myFocusCost
		);
	}
};

export default getProfitPerFocus;
