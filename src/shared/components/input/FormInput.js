import PropTypes from 'prop-types';

const FormInput = ({name, type, onChange, errorMessage, placeholder, value, required, label}) => {
  return (
    <div className="mb-3">
      {type === "checkbox" ? (
        <>
          <input type="checkbox" id={name} name={name} className={`form-check-input ${errorMessage ? "is-invalid" : ''}`} checked={value} onChange={(e) => onChange(e.currentTarget.checked)} />
          <label htmlFor={name} className="form-check-label d-inline"> {label}</label>
        </>
      ) : (
        <>
          <label htmlFor={name} className="form-label">{label}</label>
          <input type={type} onChange={(e) => onChange(e.currentTarget.value)} id={name} name={name} placeholder={placeholder} className={`form-control ${errorMessage && "is-invalid"}`} required={required} value={value}/>
        </>
      )}
      <div className="invalid-feedback">{errorMessage}</div>
    </div>
  )
}

FormInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  type: PropTypes.oneOf(["submit", "text", "checkbox", "password"]),
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.oneOf([PropTypes.element, PropTypes.string])
}

FormInput.defaultProps = {
  placeholder: "",
  required: false
}

export default FormInput;