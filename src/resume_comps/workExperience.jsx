import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
import { addWork ,changeWork,deleteWork} from "../features/resumeSlice"
import uuid4 from "uuid4";

const WorkExperience = (props) => {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    // const nameRef = register("companyName", { required: true, minLength: 2 })
    const nameRef = useRef()
    const timesRef = useRef()
    const timeeRef = useRef()
    const descRef = useRef()
    const dispatch = useDispatch();
    const {experiance}=useSelector(myStore=>myStore.resumeSlice)
    let item=props.item

    const onSub = (dataBody) => {
        dataBody.id = uuid4()
        dispatch(addWork({ work: dataBody }))
    }
    return (
        <div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                            {item.companyName||"company"}
                            <div className='w-100 text-end'> <button className='btn' onClick={()=>{dispatch(deleteWork({id:item.id}))}}><i class="fa fa-trash-o" aria-hidden="true"></i></button></div>        
                        </button>
                    </h2>
                    <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <form onSubmit={handleSubmit(onSub)} className=' p-2'>
                                <label>Company name: </label>
                                <input ref={nameRef}  type="text" className='form-control' onInput={()=>{
                                    dispatch(changeWork({id:item.id,companyName:nameRef.current.value}))
                                    }}/>
                            

                                <label>Time start: </label>
                                <input ref={timesRef} type="date" className='form-control' onInput={()=>{
                                     dispatch(changeWork({id:item.id,timeStart:timesRef.current.value}))
                                }}/>

                                <label>Time end: </label>
                                <input ref={timeeRef} type="date" className='form-control' onInput={()=>{
                                     dispatch(changeWork({id:item.id,timeEnd:timeeRef.current.value}))
                                }}/>
                                <label>Description: </label>
                                <input ref={descRef}  type="text" className='form-control' onInput={()=>{
                                    dispatch(changeWork({id:item.id,description:descRef.current.value}))
                                    }}/>

                                {/* <button>save</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default WorkExperience