export const change = (event) => {
  console.log('inside change');
const name = event.target.name;
const value =  event.target.value;
return {
  type:'change',
  payload:{[name] : value}

}
};
