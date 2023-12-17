import {createSlice} from "@reduxjs/toolkit"

const initValue={
todos_ar:[
    {name:"go",time:"",id:1},
    {name:"go2",time:"",id:2},
    {name:"go3",time:"",id:3}
]
}

const todoSlice=createSlice({
    name:"todos",
    initialState:initValue,

    reducers:{
        addTodo:(state,actions)=>{
            state.todos_ar.push(actions.payload.todo)
        },
        resetTodo:(state,actions)=>{
            state.todos_ar=[]
        }
        
    }
})

export const {addTodo,resetTodo} =todoSlice.actions
export default todoSlice.reducer