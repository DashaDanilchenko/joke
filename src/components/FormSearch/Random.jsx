const Random = ({check}) => {
  return (
    <div>
        <input type="radio" id="random" name="random" onClick={() => check("random")}/>
        <label for="random">Random</label>
    </div>
  )
}

export default Random