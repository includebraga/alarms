import React from "react";
import PropTypes from "prop-types";
import readMessage from "../../lib/readMessage";
import "./index.css";

class Button extends React.Component {
  handleClick = () => readMessage(this.props.message);

  render() {
    const { message } = this.props;

    return (
      <button key={message} styleName="root" onClick={this.handleClick}>
        {message}
      </button>
    );
  }
}

Button.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Button;
