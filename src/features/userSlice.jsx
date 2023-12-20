import {createSlice} from "@reduxjs/toolkit"

const initValue={
    id:"",
name:"",
phone:"",
email:"",
password:"",
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
        changeId:(state,actions)=>{
            state.id=actions.payload.id
        },
        changePass:(state,actions)=>{
            state.password=actions.payload.pass
        },
        addResume:(state,actions)=>{
            state.resumes.push(actions.payload.resume)
        },
        allResume:(state,actions)=>{
            state.resumes=actions.payload.resume
        }
        
    }
})

export const {changeName,changePass,changeId,changePhone,changeEmail,addResume,allResume} =userSlice.actions
export default userSlice.reducer