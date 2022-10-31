import {useState} from 'react';

const AddReporter = (props) => {
  const [user, setUser] = useState('')

  const handleClick = () => {
    props.addUser(user);
    setUser('');
  }

  const handleUser = (e) => {
    setUser(e.target.value);
  }

  return(
    <div>
      <label>
        Reporter Name:
        <input type="text" value={user} onChange={handleUser}></input>
        <button onClick={handleClick}>Add</button>
      </label>
    </div>
  )
}


export default AddReporter;