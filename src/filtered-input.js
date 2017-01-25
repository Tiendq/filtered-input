import React from 'react';
import validator from 'validator';

class FilteredInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value ? props.value : ''
    };

    this.textChangeHandler = this.textChangeHandler.bind(this);
  }
  render() {
    let { filterPattern, validatePattern, value, onFilter, onChange, ...attributes } = this.props;
    return <input value={this.state.value} onChange={this.textChangeHandler} {...attributes} />;
  }
  textChangeHandler(event) {
    let { filterPattern, validatePattern, onFilter, onChange } = this.props;
    let newValue = event.target.value;

    if (0 === newValue.length || validator.matches(newValue, filterPattern, 'i')) {
      this.setState({
        value: newValue
      });

      if (onFilter || onChange) {
        let passed = validatePattern ? validator.matches(newValue, validatePattern, 'i') : true;

        if (onChange)
          onChange(newValue, passed);
        else if (onFilter)
          onFilter(newValue, passed);
      }
    }
  }
}

FilteredInput.propTypes = {
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  filterPattern: React.PropTypes.string.isRequired,
  validatePattern: React.PropTypes.string,
  onFilter: React.PropTypes.func,
  onChange: React.PropTypes.func
};

export default FilteredInput;
