import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Form = () => {

    const { experiance, userName, educations, image, title, profile, skills,phone,email } = useSelector(myStore => myStore.resumeSlice)


    const downloadPDF = () => {
        const capture = document.querySelector('.topdf')
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth()
            const componentHeight = doc.internal.pageSize.getHeight()
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save('resume.pdf')
        })
    }

    let class1 = 'text-center bg-danger text-white p-5'
    let class2 = 'p-5 row'

    return (
        <div className='border rounded'>
            <div className=' topdf'>
                <div className={class1}>
                    <h1 >{userName}</h1>
                    <p>{title}</p></div>
                <div className={class2}>
                    <div className='col-9 border-end'>
                        {profile && <h4 className='mt-3'><strong>Profile</strong></h4>}
                        <p className='mb-5'>{profile}</p>

                        {experiance.length > 0 && <h4 className='mt-3'><strong>Work experience</strong></h4>}

                        {experiance.map(item => {
                            return <div key={item.id} className='mt-3'>
                                <h5><u> {item.companyName}</u></h5>
                                <p className='p-0 m-0'>  {new Date(item.timeStart).getFullYear() || ""} - {new Date(item.timeEnd).getFullYear() || ""}</p>
                                <p className='p-0 m-0'>{item.description}</p>
                            </div>
                        })}

                        {educations.length > 0 && <h4 className='mt-5'><strong>Education</strong></h4>}

                        {educations.map(item => {
                            return <div key={item.id} className=''>
                                <h5><u> {item.school}</u></h5>
                                <p>  {new Date(item.timeStart).getFullYear() || ""} - {new Date(item.timeEnd).getFullYear() || ""}</p>
                            </div>
                        })}
                    </div>
                    <div className='col-3 text-center'>
                        <p className='mt-4'>{phone}</p>
                        <p>{email}</p>
                        {skills.length > 0 && <h4 className='mt-5'><strong>Skills</strong></h4>}
                        {skills.map(item => {
                            return <div key={item.id} className=''>
                                <h6> {item.skill}</h6>
                            </div>
                        })}
                    </div>


                </div>
            </div>


            <div className='text-center'><button className='btn btn-outline-info rounded' onClick={downloadPDF}>download</button></div>


        </div>
    )
}

export default Form