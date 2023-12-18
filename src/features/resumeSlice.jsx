import {createSlice} from "@reduxjs/toolkit"

const initValue={
    userName:"Full name",
    title:"",
experiance:[],
educations:[],
image:""
}

const resumeSlice=createSlice({
    name:"resume",
    initialState:initValue,

    reducers:{
        addWork:(state,actions)=>{
            state.experiance.push(actions.payload.work)
        },
        deleteWork:(state,actions)=>{
            let id=actions.payload.id;
            let temp=state.experiance.filter(item=>item.id!=id)
            state.experiance=temp
        },
        changeWork:(state,actions)=>{
            let id=actions.payload.id;
            state.experiance.map(item=>{
                if (item.id==id){
                    item.companyName=actions.payload.companyName || item.companyName
                    item.timeStart=actions.payload.timeStart || item.timeStart
                    item.timeEnd=actions.payload.timeEnd || item.timeEnd
                }
            })
        },
        addEducation:(state,actions)=>{
            state.educations.push(actions.payload.education)
        },
        deleteEducation:(state,actions)=>{
            let id=actions.payload.id;
            let temp=state.educations.filter(item=>item.id!=id)
            state.educations=temp
        },
        changeEducation:(state,actions)=>{
            let id=actions.payload.id;
            state.educations.map(item=>{
                if (item.id==id){
                    item.school=actions.payload.school || item.school
                    item.timeStart=actions.payload.timeStart || item.timeStart
                    item.timeEnd=actions.payload.timeEnd || item.timeEnd
                }
            })
        },
        changeName:(state,actions)=>{
            state.userName=actions.payload.userName
        },
        changeTitle:(state,actions)=>{
            state.title=actions.payload.title
        }
        
    }
})

export const {addWork,addEducation,changeName,changeTitle,changeWork,deleteWork,deleteEducation,changeEducation} =resumeSlice.actions
export default resumeSlice.reducer