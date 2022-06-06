import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

export const App = () => {
	const account = useSelector((state) => state.account);

	const dispatch = useDispatch();

	const { depositMoney, withdrawMoney } = bindActionCreators(
		actionCreators,
		dispatch,
	);

	return (
		<div>
			<h2>{account}</h2>
			<div>
				<button onClick={() => depositMoney(100)}>Deposit</button>
				<button onClick={() => withdrawMoney(100)}>Withdraw</button>
			</div>
		</div>
	);
};
