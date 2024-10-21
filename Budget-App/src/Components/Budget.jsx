import React, { useState } from 'react'
import { useBudgetData } from '../Context/ContextApp'
import { CiEdit } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";

const Budget = () => {

    const { budget, dispatch } = useBudgetData();
    const [edit, setEdit] = useState(false);
    const [newValue, setNewValue] = useState(0)
    const handleEdit = (e) => {
        if (newValue !== "") {
            dispatch({
                type: 'UPDATE_BUDGET',
                payload: newValue
            })
            setEdit(false)

        } else {
            alert("Enter Any Value !")
        }

    }
    return (
        <div className='bg-success
        rounded 
        p-3 d-flex align-items-center
          justify-content-between text-white mt-2 fw-bold'>
            <div>Budget</div>
            {!edit ? <div className='w-auto d-flex  align-items-center 
             justify-content-between'  >
                <span>
                    <CiEdit size={25} cursor={"pointer"} onClick={() => setEdit(!edit)} />
                </span>
                <span className='ml-2'>
                    {budget} $
                </span>
            </div> :
                <div className='w-auto d-flex  align-items-center 
                 justify-content-between'  >
                    <span>
                        <IoSaveOutline color='orange' size={25} cursor={"pointer"} onClick={handleEdit} />
                    </span>
                    <span>
                        <input value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                            type="number" className='form-control' />
                    </span>
                </div>}

        </div >
    )
}

export default Budget