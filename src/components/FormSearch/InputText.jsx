
const InputText = ({input, setInput}) => {

  return (
    <div className="none" id="input_container">
         <input className="input_text" type="text" placeholder="Enter a word that is three letters long ..." value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}

export default InputText