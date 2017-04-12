import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

class FilteredInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value ? props.value : ''
    };

    this.textChangeHandler = this.textChangeHandler.bind(this);
  }
  componentDidMount() {
    // 2017-02-07: Validate initial value if any and reset to empty if initial value is invalid.
    if (this.state.value) {
      let { validatePattern, onChange } = {...this.props};
      let passed = validatePattern ? validator.matches(this.state.value, validatePattern, 'i') : true;

      if (!passed)
        this.setState({ value: '' });

      // Signal parent component about initial validation.
      if (onChange)
        onChange(passed ? this.state.value : '', passed);
    }
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
        onChange(newValue, passed);
      }
    }
  }
}

FilteredInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  filterPattern: PropTypes.string.isRequired,
  validatePattern: PropTypes.string,
  formatter: PropTypes.func,
  unformatter: PropTypes.func,
  onChange: PropTypes.func
};

export default FilteredInput;
