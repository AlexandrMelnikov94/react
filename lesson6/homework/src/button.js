import React, {Component} from 'react';

class Button extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.style.backgroundColor === 'yellow') {
      alert('YELLOW')
      return false
    }
    return true
  }

  render() {
    const {style} = this.props
    return (
     <button style={style}>Color</button>
    );
  }
}

export default Button;