import React from 'react'
import { useBudgetData } from '../Context/ContextApp'
const Remaining = () => {
    const { budget, expenses } = useBudgetData();
    const remaininTotal = expenses.reduce((total, item) => {
        return total = total + item.cost
    }, 0)
    return (
        <div className={`${budget - remaininTotal < 1 ? "bg-danger" : "bg-primary"} 
        rounded
        p-3 d-flex align-items-center
          justify-content-between text-white mt-2 fw-bold`}>
            <div>Remaining</div>

            {budget - remaininTotal} $
        </div >
    )
}

export default Remaining