// functional component
function FunctionalComponent({name}) {

  const buttonClick = () => {
    alert('i am working')
  }

  return (
    // the below tag is not added to dom
    <>
      <div>{name}</div>
      <button onClick={() => buttonClick()}>Click me</button>
    </>
  )
}

export default FunctionalComponent