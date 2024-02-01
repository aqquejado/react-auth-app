import PropTypes from 'prop-types';

const Alert = ({closable, type, content, onClick}) => {
  let className = `alert alert-${type}`;
  if (closable) className += " alert-dismissible fade show";

  return (
    <div className={className} role="alert">
      {content}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClick}></button>
    </div>
  )
}

Alert.propTypes = {
  closable: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func
}

Alert.defaultProps = {
  closable: false,
  type: "primary",
  content: "Success",
  onClick: () => {}
}

export default Alert;