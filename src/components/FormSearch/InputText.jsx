
const InputText = ({input, setInput}) => {

  return (
    <div className="none" id="input_container">
         <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}

export default InputText