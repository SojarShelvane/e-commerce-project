import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialStates = {
    users: [],
    userDtl:null
  }
  
  export const UserSlice = createSlice({
    name: 'user',
    initialState :initialStates,
    reducers: {
        getUsers: (state,action) => {
          state.users = action.payload
          return state;
        },
        storeUserDtl: (state,action) => {
          state.userDtl = action.payload
          return state;
        },
        getUsersById: (state, action) => {
          let userId = action.payload.userId;
          //fetch user details based on userid
          return state;
        }
    }

    })

    export const { getUsers, getUsersById,storeUserDtl } = UserSlice.actions;

    export default UserSlice.reducer