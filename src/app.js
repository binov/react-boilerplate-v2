import React from 'react';
import ReactDOM from 'react-dom';
// Provider allows us to provide the store to all
// of the components that make up the application
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
//import './playground/promises';

const store = configureStore();
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleComponents = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleComponents);
// });

// store.dispatch(addExpense({description: 'Water bill', amount: 300}));
// store.dispatch(addExpense({description: 'Gas bill', amount: 500, createdAt: 1000}));
// store.dispatch(addExpense({description: 'Rent', amount: 109500}));



const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

// We can pass JSX into a component and that can access it via props.children
ReactDOM.render(<LoadingPage/>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
   if(user) {
       store.dispatch(login(user.uid));
       renderApp();
       if (history.location.pathname === '/') {
           history.push('/dashboard');
       }
   } else {
       store.dispatch(logout());
       renderApp(); 
      history.push('/');
   }
});



