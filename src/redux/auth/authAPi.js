import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue, }) => {
    let reqData={
        email:data.email,
        password:data.password
    }
    try {
        const response = await axios.post('https://sayedeladawy.com/accounting/public/owner/login', reqData, {
            headers: {
                'Apipassword': 'accounting2023@#$fosh$',
                'Access-Control-Allow-Origin': '*',
                'Accept': '/',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Credentials': 'true',
                'access-control-allow-headers': 'Origin,Accept, Content-Type, Authorization',
                'content-type': 'application/json'
            }
        });
        console.log(response.data.status)
        if( !response.data.status)
        {
           throw response
        
        }
        else   return {data:response.data,checked:data.checked};
      
    }
    catch (error) {
        console.log(error)
       return rejectWithValue(error.data);
    }
    // rning: Invalid DOM property `xmlns:xlink`. Did you mean `xmlnsXlink`?
  
})
export const register = createAsyncThunk('auth/signup', async (data, { rejectWithValue }) => {

    try {
        const response = await axios.post('https://sayedeladawy.com/accounting/public/owner/register', data, {
            headers: {
                'Apipassword': 'accounting2023@#$fosh$',
                'Access-Control-Allow-Origin': '*',
                'Accept': '/',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Credentials': 'true',
                'access-control-allow-headers': 'Origin,Accept, Content-Type, Authorization',
                'content-type': 'application/json'
            }});
      
        if(!response.data.status)
        {
           throw response
        
        }
        return response.data;
    }
    catch (error) {
        // console.log("error regester", error) 
        return error.data.message
        // return rejectWithValue(error.data);
    }

});