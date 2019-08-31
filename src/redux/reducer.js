const initialState = {
        name: '', 
        address: '', 
        city: '',
        state: '',
        zipcode: 0,
        img: '', 
        mortgage: 0, 
        rent: 0
}

export default function reducer(state = initialState, action) {
    const { type } = action;
    switch(type) {
        case 'ADD_STEP1':
            // const setOneUpdate = {...state, };
            return Object.assign({}, state, action.payload.componentState); 
        case 'ADD_STEP2': 
            // const setTwoUpdate = {...state, componentState};
            return Object.assign({}, state, action.payload.componentState); 
        case 'ADD_STEP3': 
            // const setThreeUpdate = {...state, payload};
            return Object.assign({}, state, action.payload.componentState); 
        case 'CANCEL': 
            return Object.assign({}, state, initialState)
        default:
            return state; 
    }
};