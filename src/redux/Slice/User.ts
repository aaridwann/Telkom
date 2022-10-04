import { createSlice } from "@reduxjs/toolkit";

const init = {
    name:'ridwan'
}

export const UserSlice = createSlice({
    name: 'user',
    initialState: init,
    reducers: {
        addUser: (state,actions) => {
            const nama = actions.payload
            console.log('===>',actions);
            return {...state, name:actions.payload}
        },
        changeUser: (state) => {
            state
        }
    }
})

export const { addUser, changeUser } = UserSlice.actions
export default UserSlice.reducer