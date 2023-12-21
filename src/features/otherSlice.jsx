import {createSlice} from "@reduxjs/toolkit"

const initValue={
    design1:'',
    design2:'',
    design3:'',
    img:null
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
        },
        changeImageFile:(state,actions)=>{
            state.img=actions.payload.image
        },
        
    }
})

export const {changeClass1,changeClass2,changeClass3,changeImageFile} =otherSlice.actions
export default otherSlice.reducer