
const InputText = ({look}) => {

  return (
    <div className="none" id="input_container">
         <input type="text"  onChange={(e) => look(e.target.value)}/>
    </div>
  )
}

export default InputText