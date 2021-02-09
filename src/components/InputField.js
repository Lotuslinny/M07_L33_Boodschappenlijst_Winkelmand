import React from "react"

const InputField = (props) => {
  return (
    <div className="input-field">
      <form onSubmit={props.handleSubmit}>
        <input
          className="input-field__input"
          type={props.text}
          value={props.value}
          onChange={props.handleChange}>
        </input>
        <input
          className="input-field__submit"
          type="submit"
          value="Voeg toe"
        >
        </input >
      </form>
    </div >
  )
}

export default InputField