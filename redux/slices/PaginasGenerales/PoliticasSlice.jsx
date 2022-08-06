import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

/* const initialState = {
    paginasGenerales: []
}

export const PoliticasSlice = createSlice({
    name: "politicas",
    initialState,

    reducers: {
        addUser: (state, action) => {

            state.paginasGenerales = action.payload;

        }


    }

});
 */
const initialState = {
    users: [null]
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
            console.log(action.payload)
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', action.payload);
            return {
                ...state,
                ...action.payload.subject,
            };
        },
    },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
