// functional component
function FunctionalComponent(props) {

  const buttonClick = () => {
    alert('i am working')
  }

  return (
    // the below tag is not added to dom
    <>
      <div>{props.name}</div>
      <button onClick={() => buttonClick()}>Click me</button>
    </>
  )
}

export default FunctionalComponent