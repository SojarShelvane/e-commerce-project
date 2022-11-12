import { createSlice } from '@reduxjs/toolkit'

const initialStates = {
    items: [],
    isActive:false,
    msg:'Welcome'
  }
  
  export const homeSlice = createSlice({
    name: 'counter',
    initialState :initialStates,
    reducers: {
        updateActiveValue: (state) => {
          state.isActive = true;
          return state;
        },
        updateMsg: (state, action) => {
          console.log('my action', action)
          console.log('my action paylod', action.payload)
          state.msg = `Welcome, ${action.payload.fname} ${action.payload.lname} `;
          return state;
        }
    }

    })

    export const { updateActiveValue, updateMsg } = homeSlice.actions;

    export default homeSlice.reducer