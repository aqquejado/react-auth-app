import PropTypes from 'prop-types';

const LoadingButton = ({loading, disabled, text, id, type, onClick}) => {
  return (
    <button className="btn btn-primary mb-3 mt-5" type={type} disabled={disabled || loading} id={id} onClick={onClick}>
      {loading && <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>}
      {text}
    </button>
  )
}

LoadingButton.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func
}

LoadingButton.defaultProps = {
  loading: false,
  text: "Submit",
  disabled: false,
  id: "button",
  type: "button",
  onClick: () => {}
}

export default LoadingButton;