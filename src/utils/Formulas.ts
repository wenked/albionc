import { profitArgs } from '../utils/types';
import { itemConstObj } from './resourcesData';

const efficiency = (
	spect4: number,
	spect5: number,
	spect6: number,
	spect7: number,
	spect8: number
): number => {
	return (spect4 + spect5 + spect6 + spect7 + spect8) / 3.33333333333333;
};

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
			myArgs.SPECT4,
			myArgs.SPECT5,
			myArgs.SPECT6,
			myArgs.SPECT7,
			myArgs.SPECT8
		);
		if (item.includes('T4')) {
			spec = myArgs.SPECT4;
			craftVar = 2;
		}
		if (item.includes('T5')) {
			spec = myArgs.SPECT5;
			craftVar = 3;
		}
		if (item.includes('T6')) {
			spec = myArgs.SPECT6;
			craftVar = 4;
		}
		if (item.includes('T7')) {
			spec = myArgs.SPECT7;
			craftVar = 5;
		}
		if (item.includes('T8')) {
			spec = myArgs.SPECT8;
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

		return (
			((refWantedMinPrice - myCraftCost) * (1 - myArgs.marketTax / 100)) /
			myFocusCost
		);
	}
};

export const ConvertDate = (stringDateArray: string[]): string[] => {
	return stringDateArray
		.map((date) => new Date(date))
		.map((date) => date.toDateString());
};

export default getProfitPerFocus;
