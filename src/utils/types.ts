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

export interface itemPriceData {
	item_id: string;
	city: string;
	quality: number;
	sell_price_min: number;
	sell_price_min_date: string;
	sell_price_max: number;
	sell_price_max_date: string;
	buy_price_min: number;
	buy_price_min_date: string;
	buy_price_max: number;
	buy_price_max_date: string;
}

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

export type itemData = {
	[key: string]: {
		itemValue: number;
		baseFocusCost: number;
	};
};
