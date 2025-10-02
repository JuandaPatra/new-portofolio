export function ValidationEmail(parameter){
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
  return pattern.test(parameter);
}


export function validationName(parameter){
  console.log('apa isinya ',parameter.length >= 1)
  return  parameter.trim().length >=1
}


export function validationComment(parameter){
  return  parameter.length >=1
}

