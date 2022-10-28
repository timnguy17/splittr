import { useState } from 'react';

const Inputs = (props) => {
  const [data, setData] = useState({
    name: '',
    activity: '',
    cost: null
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('added/updated')
    props.updateFeed(data.name, data.activity, data.cost)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              name='name'
              onChange={handleChange}>

            </input>
          </label>
          <label>
            Activity:
            <input
              name='activity'
              onChange={handleChange}>

            </input>
          </label>
          <label>
            Cost:
            <input
              name='cost'
              onChange={handleChange}>

            </input>
          </label>
        </div>
        <button type='submit'> Add</button>
      </form>
    </>
  );
}

export default Inputs;