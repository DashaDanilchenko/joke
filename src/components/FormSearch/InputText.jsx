
const InputText = ({input, setInput}) => {

  return (
    <div className="none" id="input_container">
         <input className="input_text" type="text" placeholder="Enter word ..." value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}

export default InputText