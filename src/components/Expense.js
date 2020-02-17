import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expense, deleteExpense }) => (
    <li className="gastos">
       
        <p>
            <div className="gasto">$ {expense.amount}</div>
            <span>{expense.name}</span>
            <span className="boton" onClick={() => deleteExpense(expense.id)}>x</span>
        </p>
       
    </li>
);

Expense.propTypes = {
    expense: PropTypes.object.isRequired,
    deleteExpense: PropTypes.func.isRequired,
};

export default Expense;