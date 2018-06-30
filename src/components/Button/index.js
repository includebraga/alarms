import React from "react";
import PropTypes from "prop-types";
import readMessage from "../../lib/readMessage";
import "./index.css";
import sirenSound from "../../assets/siren.mp3";

class Button extends React.Component {
  handleClick = () => {
    /* eslint-disable */
    const siren = new Audio(sirenSound);
    /* eslint-enable */

    siren.play();

    return setTimeout(() => {
      readMessage(this.props.message);
    }, 7000);
  };

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
