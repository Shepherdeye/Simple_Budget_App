import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import Budget from './Components/Budget'
import Remaining from './Components/Remaining'
import RestMoney from './Components/RestMoney'
import ExpensesList from './Components/ExpensesList'
import AddExpensis from './Components/AddExpensis'
import BudgetContextProvider from './Context/ContextApp.jsx'
const App = () => {
  return (
    <BudgetContextProvider>
      <div className='container mt-1 d-flex flex-column justify-content-around '>
        <div className='text-center'>
          <h1>Simple Budget App</h1>
        </div>
        <div className='row'>

          <div className='col-md-4'>
            <Budget />
          </div>
          <div className='col-md-4'>
            <Remaining />
          </div>

          <div className='col-md-4'>
            <RestMoney />
          </div>


        </div>

        <h3 className='mt-3'>Expensis</h3>
        <div className="row">

          <ExpensesList />

        </div>
        <h3>Add New expense</h3>
        <AddExpensis />

      </div>
    </BudgetContextProvider>
  )
}

export default App