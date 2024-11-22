import React from 'react';

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
 
   props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
        <h4 class="alert-heading">{capitalize(props.alert.type)}</h4>
        <p>{props.alert.msg}</p>
    </div>
  
  )
}
