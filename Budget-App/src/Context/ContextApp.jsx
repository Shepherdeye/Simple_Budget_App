import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";

const initialState = {
    budget: localStorage.getItem("budgetupdate") ? JSON.parse(localStorage.getItem("budgetupdate")) : 6000,
    expenses: localStorage.getItem("budget") ? JSON.parse(localStorage.getItem("budget")) : []
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSES":
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }


        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload),
            }
        case "UPDATE_BUDGET":
            return {
                ...state,
                budget: action.payload
            }
        default:
            return state; // Corrected this line
    }
};

const BudgetContext = createContext(); // Renamed for clarity

const BudgetContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // local Storage
    useEffect(() => {
        localStorage.setItem("budget", JSON.stringify(state.expenses))
    }, [state.expenses])
    useEffect(() => {
        localStorage.setItem("budgetupdate", JSON.stringify(state.budget))
    }, [state.budget])
    return (
        <BudgetContext.Provider value={{
            budget: state.budget,
            dispatch,
            expenses: state.expenses
        }}>
            {children}
        </BudgetContext.Provider>
    );
};

export default BudgetContextProvider;

export const useBudgetData = () => {
    return useContext(BudgetContext); // Updated with the renamed context
};
