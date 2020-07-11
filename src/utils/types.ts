export type actionResourceArgs =
	| { type: 'ADD_ITEMID'; item_id: string }
	| { type: 'ADD_CRAFTFEE'; craftFee: number }
	| {
			type: 'ADD_SPECT4';
			SPECT4: number;
	  }
	| { type: 'ADD_SPECT5'; SPECT5: number }
	| { type: 'ADD_SPECT6'; SPECT6: number }
	| { type: 'ADD_SPECT7'; SPECT7: number }
	| { type: 'ADD_SPECT8'; SPECT8: number }
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
	SPECT4: number;
	SPECT5: number;
	SPECT6: number;
	SPECT7: number;
	SPECT8: number;
	returnRate: number;
	marketTax: number;
}

export type itemData = {
	[key: string]: {
		itemValue: number;
		baseFocusCost: number;
	};
};

export type formatedItem = {
	[key: string]: string;
};

export interface itemChartPrices {
	data: {
		item_count: number[];
		prices_avg: number[];
		timestamps: string[];
	};
	item_id: string;
	location: string;
	quality: number;
}
