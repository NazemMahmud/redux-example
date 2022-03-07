/**
 * Redux CDN Link: https://cdnjs.com/libraries/redux
 */

import {combineReducers, createStore} from 'redux';

/** Action creators */
const createPolicy = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name, amount
        }
    };
};

const deletePolicy = name => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    };
};

const createClaim = (name, amountToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name, amountToCollect
        }
    };
};

/** ------------------------------------------------------------------------------------------------- */
/** Reducer */
// initial / previous state, action
const claimHistory = (oldClaimsList = [], action) => {
    if (action.type === 'CREATE_CLAIM') { // do something
        // don't modify existing claim list, return a new array; oldClaimsList.push(action.payload)
        return [...oldClaimsList, action.payload];
    }
    // don't care
    return oldClaimsList;
};

const accounting = (totalMoney = 0, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return totalMoney - action.payload.amountToCollect;
    }

    if (action.type === 'CREATE_POLICY') {
        return totalMoney + action.payload.amount;
    }


    return totalMoney;
};

const policies = (policyList = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...policyList, action.payload.name];
    }

    if (action.type === 'DELETE_POLICY') {
        return policyList.filter(name => name !== action.payload.name);
    }

    return policyList;
};

/** ------------------------------------------------------------------------------------------------- */
/** Store */

/**
 * stateName: reducerName
 * state name is customized
 */
const departments = combineReducers({
    totalMoney: accounting,
    claimHistoryList: claimHistory,
    policies: policies,
})

const store = createStore(departments);

const policyAction = createPolicy('Jack', 100);
console.log('policyAction: ', policyAction);
store.dispatch(policyAction);
store.dispatch(createPolicy('Daniel', 80));
store.dispatch(createPolicy('Mike', 120));

store.dispatch(createClaim('Jack', 120));
store.dispatch(createClaim('Mike', 80));

store.dispatch(deletePolicy('Daniel'));

console.log('state: ', store.getState());

/**
 * NOTES:
 * can not modify state directly, such as store.state.totalMoney = store.state.totalMoney - 100
 */