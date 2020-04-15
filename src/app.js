import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 4500}));
store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000}));
store.dispatch(addExpense({ description: 'rent', amount: 109500}));

const state = store.getState();
const visibileExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibileExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'));