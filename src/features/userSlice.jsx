import {createSlice} from "@reduxjs/toolkit"

const initValue={
name:"",
phone:"",
email:"",
resumes:[]
}

const userSlice=createSlice({
    name:"user",
    initialState:initValue,

    reducers:{
        changeName:(state,actions)=>{
            state.name=actions.payload.name
        },
        changePhone:(state,actions)=>{
            state.phone=actions.payload.phone
        },
        changeEmail:(state,actions)=>{
            state.email=actions.payload.email
        },
        addResume:(state,actions)=>{
            state.resumes.push(actions.payload.resume)
        }
        
    }
})

export const {changeName,changePhone,changeEmail,addResume} =userSlice.actions
export default userSlice.reducer