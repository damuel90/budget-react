import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ setExpense, setCreateExpense }) => {
   
    const [ nameExpense, setNameExpense ] = useState('');
    const [ amountExpense, setAmountExpense ] = useState(0);
    const [ error, setError ] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
         // validar
         if(nameExpense === '' || amountExpense < 1 || isNaN(amountExpense)) {
            setError(true);
            return;
        }
        
        const newExpense = {
            name: nameExpense,
            amount: amountExpense,
            id: shortid.generate()
        }

        setExpense(newExpense);
        setCreateExpense(true)
        setError(false);
        setNameExpense('');
        setAmountExpense('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agrega tus gastos aqui</h2>
            {error && <Error message='Ambos campos son obligatorios o datos incorrectos' />}
            <div className="campo">
                <label>Nombre del Gasto</label>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Ej. Transporte" 
                    className="u-full-width"
                    onChange={event => setNameExpense(event.target.value)}
                    value={nameExpense}
                />
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input 
                    type="number"
                    name="amount"
                    placeholder="Ej. 300" 
                    className="u-full-width"
                    onChange={event => setAmountExpense(parseInt(event.target.value, 10))}
                    value={amountExpense}
                />
            </div>
            <input 
                type="submit" 
                value="Agregar Gasto" 
                className="button-primary u-full-width"
            />
        </form>
    );
};

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired,
};

export default Form;