import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// import Expenses from './Expenses.js';

const Inputs = (props) => {
  const [reporter, setReporter] = useState('');
  const [expense, setExpense] = useState('');
  const [cost, setCost] = useState(0);

  const handleReporterChange = (e) => {
    setReporter(e.target.value)
  }

  const handleExpenseChange = (e) => {
    setExpense(e.target.value)
  }

  const handleCostChange = (e) => {
    setCost(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updatePayments(reporter, cost);
    props.updateData(reporter, expense, cost);
    setExpense('');
    setCost(0);

  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Reporter:
      <Select onChange={handleReporterChange} value={reporter}>
        {/* <MenuItem value={'Default'}>Choose Reporter</MenuItem> */}
        {props.reporters.map(reporter => <MenuItem key={reporter} value={reporter}>{reporter}</MenuItem>)}
      </Select>
      </label>
      <label>
        Expense(Name):
        <input type="text" value={expense} onChange={handleExpenseChange}></input>
      </label>
      <label>
        Cost:
        <input type="number" value={cost} onChange={handleCostChange} step="0.01"></input>
      </label>
      <input type='submit' value='Submit'></input>
    </form>
    </>
  )
}

export default Inputs;