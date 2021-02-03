import React from "react"

const InputField = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          className="input-field"
          //key={props.id}
          type={props.text}
          value={props.value}
          onChange={props.handleChange}>
        </input>
        <input
          type="submit"
          value="Voeg toe"
        >
        </input >
      </form>
    </div >
  )
}

export default InputField