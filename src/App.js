import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import ExpenseList from './components/ExpenseList';
import BudgetControl from './components/BudgetControl';

function App() {
  // para el Question
  const [ budget, setBudget ] = useState(0);
  const [ restBudget, setRestBudget ] = useState(0);
  const [ questionInitial, setQuestionInitial ] = useState(true);
  // para el Form
  const [ createExpense, setCreateExpense ] = useState(false)
  const [ expense, setExpense ] = useState({});
  const [ expenseArray, setExpenseArrray ] = useState([]);

  useEffect(() => {
    if(createExpense) {    
      const expenseList = [...expenseArray, expense];
      setExpenseArrray(expenseList);
      
      const rest = restBudget - expense.amount;
      setRestBudget(rest);

      setCreateExpense(false);
    }
  }, [createExpense])

  const deleteExpense = id => {
    let amount = 0;
    const newExpenseArray = expenseArray.filter(expense => {
      if(expense.id !== id) {
        return true;
      } else {
        amount = restBudget + expense.amount;
        return false;
      }
    });
    setExpenseArrray(newExpenseArray);
    setRestBudget(amount)
  }

  return (
   <div className="App container">
      
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
         {
           questionInitial ?
            <Question 
              setBudget={setBudget} 
              setRestBudget={setRestBudget}
              setQuestionInitial={setQuestionInitial}
            />
            :
            <div className="row">
              <div className="one-half column">
                <Form 
                  setExpense={setExpense} 
                  setCreateExpense={setCreateExpense}  
                />
              </div>
              <div className="one-half column">
                <ExpenseList 
                  expenseArray={expenseArray}
                  deleteExpense={deleteExpense}
                />
                <BudgetControl
                  budget={budget}
                  restBudget={restBudget}
                />
              </div>
            </div>
         }
        </div>
      
   </div>
  );
}

export default App;
