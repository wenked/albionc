export type actionResourceArgs =
	| { type: 'ADD_ITEMID'; item_id: string }
	| { type: 'ADD_CRAFTFEE'; craftFee: number }
	| {
			type: 'ADD_SPECT4';
			mySpecT4: number;
	  }
	| { type: 'ADD_SPECT5'; mySpecT5: number }
	| { type: 'ADD_SPECT6'; mySpecT6: number }
	| { type: 'ADD_SPECT7'; mySpecT7: number }
	| { type: 'ADD_SPECT8'; mySpecT8: number }
	| { type: 'ADD_MARKETTAX'; marketTax: number }
	| { type: 'ADD_RETURNRATE'; returnRate: number };
