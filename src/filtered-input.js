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
    let { filterPattern, validatePattern, value, onChange, formatter, unformatter, ...rest } = this.props;
    return <input value={formatter ? formatter(this.state.value) : this.state.value} onChange={this.textChangeHandler} {...rest} />;
  }
  textChangeHandler(event) {
    let { filterPattern, validatePattern, onChange, unformatter } = this.props;
    let newValue = unformatter ? unformatter(event.target.value) : event.target.value;

    if (0 === newValue.length || validator.matches(newValue, filterPattern, 'i')) {
      this.setState({
        value: newValue
      });

      if (onChange) {
        let passed = validatePattern ? validator.matches(newValue, validatePattern, 'i') : true;

        if (onChange)
          onChange(newValue, passed);
      }
    }
  }
}

FilteredInput.propTypes = {
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  filterPattern: React.PropTypes.string.isRequired,
  validatePattern: React.PropTypes.string,
  formatter: React.PropTypes.func,
  unformatter: React.PropTypes.func,
  onChange: React.PropTypes.func
};

export default FilteredInput;
