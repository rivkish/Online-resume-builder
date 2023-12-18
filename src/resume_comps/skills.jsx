import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addSkill,deleteSkill,changeSkill} from "../features/resumeSlice"
import uuid4 from "uuid4";

const Skills = (props) => {

    const nameRef = useRef()
    const dispatch = useDispatch();
    let item=props.item

    return (
        <div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                            {item.skill||"skill"}
                            <div className='w-100 text-end'> <button className='btn' onClick={()=>{dispatch(deleteSkill({id:item.id}))}}><i class="fa fa-trash-o" aria-hidden="true"></i></button></div>        
                        </button>
                    </h2>
                    <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <form className='col-md-6 p-2'>
                                <label>Skill: </label>
                                <input ref={nameRef}  type="text" className='form-control' onInput={()=>{
                                    dispatch(changeSkill({id:item.id,skill:nameRef.current.value}))
                                    }}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Skills