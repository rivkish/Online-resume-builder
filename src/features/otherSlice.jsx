import {createSlice} from "@reduxjs/toolkit"

const initValue={
    design1:'',
    design2:'',
    design3:''
// class2:'',
}

const otherSlice=createSlice({
    name:"design",
    initialState:initValue,

    reducers:{
        changeClass1:(state,actions)=>{
            state.design1=actions.payload.design1
        },
        changeClass2:(state,actions)=>{
            state.design2=actions.payload.design2
        },
        changeClass3:(state,actions)=>{
            state.design3=actions.payload.design3
        }
        
    }
})

export const {changeClass1,changeClass2,changeClass3} =otherSlice.actions
export default otherSlice.reducer