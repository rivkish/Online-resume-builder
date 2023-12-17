import {createSlice} from "@reduxjs/toolkit"

const initValue={
counter:10,
user:"riv"
}

const counterSlice=createSlice({
    name:"counter",
    initialState:initValue,

    reducers:{
        add1:(state,actions)=>{
            state.counter++;
        },
        resetCounter:(state,actions)=>{
            state.counter=0;
        },
        addCustom:(state,actions)=>{
            state.counter+=actions.payload.val;
        },
        changeName:(state,actions)=>{
            state.user=actions.payload.val;
        }
    }
})

export const {add1,addCustom,resetCounter,changeName} =counterSlice.actions
export default counterSlice.reducer