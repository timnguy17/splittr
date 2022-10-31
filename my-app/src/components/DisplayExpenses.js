const DisplayExpenses = (props) => {
  if(!props.data){
    return null;
  }

  return (
    props.data.map((item) => {
      return (
        <div key={item.expense + item.reporter}>
           <span> {item.reporter} </span> <span> {item.expense} </span> <span> {item.cost}</span>
        </div>
      )
    })
  )
}

export default DisplayExpenses;