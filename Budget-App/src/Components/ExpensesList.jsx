import React from 'react'
import Expensis from './Expensis'
import { useBudgetData } from '../Context/ContextApp'

const ExpensesList = () => {
    const { expenses } = useBudgetData()
    return (
        <div className='row'>
            {expenses.length > 0 ? expenses.map((expen) => {
                return <Expensis key={expen.id} id={expen.id}
                    cost={expen.cost} name={expen.name} />
            }) : <h3 className='text-danger'>  "There Is  No Expense Found add one"</h3>}
        </div>
    )
}

export default ExpensesList