import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useBudgetData } from '../Context/ContextApp';

const AddExpensis = () => {
    const { dispatch } = useBudgetData();
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const handleSubmit = (e) => {
        if (name == "" || amount < 1) {
            alert("check inputs value ")
        } else {
            e.preventDefault()
            const newExpenses = {
                id: uuidv4(),
                name: name,
                cost: parseInt(amount)

            }
            dispatch({
                type: "ADD_EXPENSES",
                payload: newExpenses
            })
            setAmount(0)
            setName("")
        }
    }
    return (
        <div className='border '>
            <form action="" onSubmit={handleSubmit} className='d-flex flex-column  p-3'>
                <div className='container'>
                    <label htmlFor="exName"> Name: </label>
                    <input
                        type="text" id="exName"
                        className='form-control'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='container'>
                    <label htmlFor="exCost"> Cost:</label>
                    <input type="number" id="exCost"
                        className='form-control'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit" className='btn btn-primary mt-2'> Add</button>
            </form>
        </div>
    )
}

export default AddExpensis