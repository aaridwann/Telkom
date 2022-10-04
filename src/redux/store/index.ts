import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserSlice from '../Slice/User'
import { createWrapper } from "next-redux-wrapper";
import {HYDRATE} from 'next-redux-wrapper';

const combinedReducer = combineReducers({
  UserSlice
})

const reducer = (state:any, action:any) => {
  if(action.type == HYDRATE){
    return {...state, ...action.payload}
  } 
};


export const makeStore =  () => configureStore({
  reducer: {
    user: reducer
  },
})

export const wrapper = createWrapper<any>(makeStore, { debug: true });