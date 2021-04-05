const initialState = {
	token: null,
	id: null,
	user: null,
	contact: {
		user: null,
		phone: null,
		email: null,
		github: null,
	},
	money: {
		income: null,
		expense: null,
		loan: [],
	},
	payment_his: {
		all: [],
		income: [],
		expense: [],
	},
	friend: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "setToken": {
			return {
				...state,
				token: "none",
			};
		}
		case "setAccount": {
			return {
				...state,
				id: action.id,
				user: action.user,
				contact: action.contact,
				money: action.money,
				payment_his: action.payment_his,
				friend: action.friend,
			};
		}
		case "UpdateAccount": {
			return {
				...state,
				contact: action.contact,
			};
		}
		case "sendPayment": {
			return {
				...state,
				money: action.money,
			};
		}
		case "rekapincome": {
			return {
				...state,
				payment_his: action.payment_his,
			};
		}
	}
	return state;
};

export default rootReducer;
