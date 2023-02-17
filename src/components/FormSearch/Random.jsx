const Random = ({check}) => {
  return (
    <div className="border_radio">
        <label htmlFor="random" className="border_search">
        <label className="radio_buttons">
          <input className="radio" type="radio" id="random" name="random" onClick={() => check("random")}/>
          <span className="on_radio"></span>
        </label>
          Random
        </label>
    </div>
  )
}

export default Random