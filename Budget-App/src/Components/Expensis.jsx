import React from 'react'
import { MdDelete } from "react-icons/md";
import { useBudgetData } from '../Context/ContextApp';


const Expensis = ({ id, name, cost }) => {
    const { dispatch } = useBudgetData()
    const handleDelete = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: id
        })
    }
    return (
        <div className=' list-unstyled mt-3 col-md-4'>
            <li className='d-flex align-items-center justify-content-between 
            
            alert alert-secondary '>
                <span className='fw-bold'>{name}</span>
                <div className='w-auto fw-bold d-flex justify-content-between align-items-center '>
                    <span className=''>{cost}$</span>
                    <MdDelete onClick={handleDelete} color='crimson' cursor={"pointer"} />
                </div>


            </li>

        </div>
    )
}

export default Expensis