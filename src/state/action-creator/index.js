export const depositMoney = (amount) => {
	return (dispatch) => {
		dispatch({ // Action
			type: 'DEPOSIT',
			payload: amount,
		});
	};
};

export const withdrawMoney = (amount) => {
	return (dispatch) => {
		dispatch({ // Action
			type: 'WITHDRAW',
			payload: amount,
		});
	};
};
