import { useState, useEffect } from 'react';

const Breakdown = ({reporters, data, payments}) => {
  const [split, setSplit] = useState([]);

  useEffect(() => {
    if(Object.keys(payments).length > 1) {
      setSplit([]);
      const people = Object.keys(payments);
      const valuesPaid = Object.values(payments);

      const sum = valuesPaid.reduce((acc, curr) => curr + acc);
      const mean = sum / people.length;

      const sortedPeople = people.sort((personA, personB) => payments[personA] - payments[personB]);
      const sortedValuesPaid = sortedPeople.map((person) => payments[person] - mean);

      let i = 0;
      let j = sortedPeople.length - 1;
      let debt;


      while (i < j) {
        debt = Math.min(-(sortedValuesPaid[i]), sortedValuesPaid[j]);
        sortedValuesPaid[i] += debt;
        sortedValuesPaid[j] -= debt;

        console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${debt}`);
        setSplit([...split, `${sortedPeople[i]} owes ${sortedPeople[j]} $${debt}`])

        if (sortedValuesPaid[i] === 0) {
          i++;
        }

        if (sortedValuesPaid[j] === 0) {
          j--;
        }
      }
    }
  }, [payments])
  console.log(split)

  return (
    <>
      <h1>
        breakdown
      </h1>
      <div>
        {split.map(s => <div>{s}</div>)}
      </div>
    </>

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

