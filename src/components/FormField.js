const FormField = props => {
  return (
    <div className='field'>
      <label>{props.label}</label>
      <input value={props.value} />
    </div>
  );
};

export default FormField;
