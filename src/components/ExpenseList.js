import React from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpenseList = ({expenseArray, deleteExpense}) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {expenseArray.map(expense => <Expense expense={expense} deleteExpense={deleteExpense} key={expense.id} />)}
        </div>
    );
};

ExpenseList.propTypes = {
    expenseArray: PropTypes.array.isRequired,
    deleteExpense: PropTypes.func.isRequired,
};

export default ExpenseList;