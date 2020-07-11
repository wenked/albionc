import { actionResourceArgs, profitArgs } from './types';

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
			return { ...state, SPECT4: action.SPECT4 };
		case 'ADD_SPECT5':
			return { ...state, SPECT5: action.SPECT5 };
		case 'ADD_SPECT6':
			return { ...state, SPECT6: action.SPECT6 };
		case 'ADD_SPECT7':
			return { ...state, SPECT7: action.SPECT7 };
		case 'ADD_SPECT8':
			return { ...state, SPECT8: action.SPECT8 };
	}
};

export default itemDataReducer;
