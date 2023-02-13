const Random = ({check}) => {
  return (
    <div>
        <label >
          <input type="radio" id="random" name="random" onClick={() => check("random")}/>
        Random</label>
    </div>
  )
}

export default Random