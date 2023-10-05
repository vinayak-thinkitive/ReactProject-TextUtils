import React from 'react'

function Alert(props) {

    const capitalize = (word) => {   //function to make the first letter of the alert type to be capital.
        const lowerCase = word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }

  return (
    <>
      {props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alertMessage.type)}</strong>:{props.alertMessage.msg}
      </div>}
    </>
  )
}

export default Alert