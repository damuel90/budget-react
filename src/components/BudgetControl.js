import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { resBudgetClass } from './helper';

const BudgetControl = ({ budget, restBudget }) => (
    <Fragment>
        <div className="alert alert-primary">
            Presupuesto: $ {budget}
        </div>
        <div className={resBudgetClass(budget, restBudget)}>
            Restante: $ {restBudget}
        </div>
    </Fragment>
);

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    restBudget: PropTypes.number.isRequired,
};

export default BudgetControl;