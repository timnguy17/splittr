import './App.css';
import { useState } from 'react';
import AddReporter from './components/AddReporter.js';
import Inputs from './components/Inputs.js';
import DisplayExpenses from './components/DisplayExpenses.js';
import Breakdown from './components/Breakdown.js';


const App = () => {
  const [reporters, setReporters] = useState(['tim', 'jack', 'harry']);
  const [payments, setPayments] = useState({});
  const [data, setData] = useState([]);



  const addUser = (user) => {
    //no empty inputs
    if(user.length === 0){
      return;
    }
    //no duplicate users
    if (reporters.indexOf(user) === -1){
      setReporters([...reporters, user])
    }
  };

  const updateData = (reporter, expense, cost) => {
    setData([...data,{
      reporter: reporter,
      expense: expense,
      cost: cost,
    }])
  };

  const updatePayments = (reporter, cost) => {
    if(payments[reporter]) {
      setPayments({
        ...payments,
        [reporter]: payments[reporter] += parseFloat(cost),
      })
    } else {
      setPayments({
        ...payments,
        [reporter]: +parseFloat(cost),
      })
    }
  }

  console.log(reporters);
  console.log(data);
  console.log('payments',payments)
  // console.log({
  //   John: 400,
  //   Jane: 1000,
  //   Bob: 100,
  //   Dave: 900,
  // })

  return (
    <>
      <AddReporter addUser={addUser}/>
      <Inputs reporters={reporters} updateData={updateData} updatePayments={updatePayments}/>
      <DisplayExpenses data={data}/>
      <Breakdown reporters={reporters} data={data}/>
    </>
  );
}

export default App;
