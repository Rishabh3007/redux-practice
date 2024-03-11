const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

initialState = {
    numOfIcecreams: 10
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIcecreams -= action.payload
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state, action) => {
            state.numOfIcecreams -= action.payload
        })
    }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;