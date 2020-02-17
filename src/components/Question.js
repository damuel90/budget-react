import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({ setBudget, setRestBudget, setQuestionInitial }) => {
    const [ amount, setAmount ] = useState(0);
    const [ error, setError ] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        // validar
        if(amount < 1 || isNaN(amount)) {
            setError(true);
            return;
        }
        // paso la validacion
        setError(false);
        setBudget(amount);
        setRestBudget(amount);
        setQuestionInitial(false);
    }
    return (
        <Fragment>
            <h2>Defina su presupuesto</h2>
            {error && <Error message='El presupuesto es Incorrecto' />}
            <form
                onSubmit={handleSubmit}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    name="budget" 
                    placeholder="Agrega tu presupuesto"
                    onChange={event => setAmount(parseInt(event.target.value, 10))}
                />
                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    value="Agregar presupuesto"
                />
            </form>
        </Fragment>
    );
};

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setQuestionInitial: PropTypes.func.isRequired,
};

export default Question;