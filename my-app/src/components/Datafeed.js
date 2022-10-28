

const Datafeed = (props) => {


  return (
    props.feed.map((person) => {
      return (
        <div key={person.name + person.cost}>
          {person.name[0]}
          {person.name[1]}
          {person.name[2]}
        </div>
      )
    })
  );
};

export default Datafeed;