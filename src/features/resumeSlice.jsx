import {createSlice} from "@reduxjs/toolkit"

const initValue={
    userName:"Full name",
    phone:"",
    email:"",
    profile:"",
    title:"",
experiance:[],
educations:[],
image:"",
skills:[]

}

const resumeSlice=createSlice({
    name:"resume",
    initialState:initValue,

    reducers:{
        allResume1:(state,actions)=>{
            state.userName=actions.payload.resume.userName
            state.phone=actions.payload.resume.phone
            state.email=actions.payload.resume.email
            state.profile=actions.payload.resume.profile
            state.title=actions.payload.resume.title
            state.experiance=actions.payload.resume.experiance
            state.educations=actions.payload.resume.educations
            state.image=actions.payload.resume.image
            state.skills=actions.payload.resume.skills
        },
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
                    item.description=actions.payload.description || item.description

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
        },
        changeProfile:(state,actions)=>{
            state.profile=actions.payload.profile
        },
        changeImage:(state,actions)=>{
            state.image=actions.payload.image
        },
        addSkill:(state,actions)=>{
            state.skills.push(actions.payload.skill)
        },
        deleteSkill:(state,actions)=>{
            let id=actions.payload.id;
            let temp=state.skills.filter(item=>item.id!=id)
            state.skills=temp
        },
        changeSkill:(state,actions)=>{
            let id=actions.payload.id;
            state.skills.map(item=>{
                if (item.id==id){
                    item.skill=actions.payload.skill || item.skill
                }
            })
        },
        changePhone:(state,actions)=>{
            state.phone=actions.payload.phone
        },
        changeEmail:(state,actions)=>{
            state.email=actions.payload.email
        }
        
    }
})

export const {
    addSkill,
    changePhone,
    changeEmail,
    deleteSkill,
    changeSkill,
    addWork,
    addEducation,
    changeName,
    changeTitle,
    changeWork,
    deleteWork,
    deleteEducation,
    changeEducation,
    changeImage,
    allResume1,
    changeProfile} =resumeSlice.actions
export default resumeSlice.reducer