import { profitArgs } from '../utils/Formulas';
import { actionResourceArgs } from './types';
/*console.log(
	getProfitPerFocus({
		item: 'T8_FIBER_LEVEL1@1',
		craftFee: 0.13,
		rawMinPrice: 10597,
		refMinPrice: 15683,
		refWantedMinPrice: 39300,
		mySpec: {
			spect4: 100,
			spect5: 100,
			spect6: 100,
			spect7: 100,
			spect8: 100,
		},
		marketTax: 0.03,
		returnRate: 0.54,
	}),
	'teste'
);
*/

export const itemDataReducer = (
	state: profitArgs,
	action: actionResourceArgs
) => {
	switch (action.type) {
		case 'ADD_ITEMID':
			return { ...state, item_id: action.item_id };
		case 'ADD_CRAFTFEE':
			return { ...state, craftFee: action.craftFee };
		case 'ADD_MARKETTAX':
			return { ...state, marketTax: action.marketTax };
		case 'ADD_RETURNRATE':
			return { ...state, returnRate: action.returnRate };
		case 'ADD_SPECT4':
			return { ...state, mySpecT4: action.mySpecT4 };
		case 'ADD_SPECT5':
			return { ...state, mySpecT5: action.mySpecT5 };
		case 'ADD_SPECT6':
			return { ...state, mySpecT6: action.mySpecT6 };
		case 'ADD_SPECT7':
			return { ...state, mySpecT7: action.mySpecT7 };
		case 'ADD_SPECT8':
			return { ...state, mySpecT8: action.mySpecT8 };
	}
};

export default itemDataReducer;
