function FormDate({form, field, label, type}) {
  const {errors, touched} = form;

  return (
    <div>
      <label>{label}</label>
      <input type= {type} {...field} />

      {errors[field.name] && touched[field.name] ? <p>{errors[field.name]}</p> : null}
    </div>
  )
}

export default FormDate;