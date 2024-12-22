import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAPi";
import { register } from "./authAPi";

const initialState={

    user: localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')) : null,
    error: null,
    isLoading:   false,
    isLoggedIn: localStorage.getItem('user') ? true : false,

}
if(localStorage.getItem('user'))
{
  sessionStorage.setItem('user',localStorage.getItem('user'));
}
export const authSlice = createSlice({
    name: "auth",
    initialState: initialState
    ,
    reducers: {
    logOut: (state,action) => {
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        state.isLoggedIn=false;
        state.user=null;
    }
    },
    extraReducers: (builder) => {
        builder
          .addCase(login.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            if(action.payload.checked){
                localStorage.setItem('user',JSON.stringify(action.payload.data))
                // sessionStorage.setItem('user',JSON.stringify(action.payload.data));
            }
            else 
            {
              localStorage.setItem('user',JSON.stringify(action.payload.data));
            }
            state.user = action.payload.data.owner;
          })
          .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            // console.log('rer')
         
            state.error = action.payload.message;
          }).addCase(register.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          }).addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            // console.log('rer',action.payload)
            state.error = action.payload;
           
          }).addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            // console.log('rer',action.payload)
            state.error = action.payload;
          })

      }
})
export const {logOut}=authSlice.actions;