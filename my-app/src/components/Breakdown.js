import { useState, useEffect } from 'react';

const Breakdown  = (props) => {
  const [payments, setPayments] = useState({});

  // useEffect(() => {
  //   props.data.forEach((user) => {
  //     if (!payments[user.reporter]) {
  //       setPayments({...payments,
  //         [user.reporter]: user.cost,
  //       })
  //     } else {

  //     }
  //   })
  // },[])

  // sampleData.forEach((user) => {
  //   if (!payments[user.reporter]){
  //     setpayments([...payments, ])
  //   }
  // })
  // console.log('payments',payments)

  return (
    <h1>
      breakdown
    </h1>
  )
};

export default Breakdown;


const sampleData = [
  {
    'reporter': 'tim',
    'expense': 'uber',
    'cost': 15.10,
  },
  {
    'reporter': 'tim',
    'expense': 'edc tickets',
    'cost': 620.60,
  },
  {
    'reporter': 'jack',
    'expense': 'Hotel',
    'cost': 1210.52,
  },
  {
    'reporter': 'peter',
    'expense': 'dinner',
    'cost': 40.25,
  }
]



const result = {
  'tim': {
    'jack': 0,
    'peter': 0,
  },
  'jack': {
    'tim': 0,
    'peter': 0,
  },
  'peter': {
    'tim': 0,
    'jack': 0,
  }
}

