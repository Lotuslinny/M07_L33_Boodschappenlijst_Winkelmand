import React from "react"

const InputField = (props) => {
  return (
    <div>
      <input
        className="input-field"
        //key={props.id}
        type={props.text}
        value={props.title}
        onChange={props.handleChange}>
      </input>
    </div >
  )
}

export default InputField