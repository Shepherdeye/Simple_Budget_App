import React from 'react'
import { useBudgetData } from '../Context/ContextApp';

const RestMoney = () => {
    const { expenses } = useBudgetData();
    const restMoney = expenses.reduce((total, item) => {
        return total = total + item.cost
    }, 0)
    return (
        <div className='bg-warning 
        rounded
        p-3 d-flex align-items-center
          justify-content-between text-white mt-2 fw-bold'>
            <div>Total Order</div>
            {restMoney}$
        </div >
    )
}

export default RestMoney