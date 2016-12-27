import React from 'react';
import validator from 'validator';

class FilteredInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.textChangeHandler = this.textChangeHandler.bind(this);
  }
  textChangeHandler(event) {
    let {filterPattern, validatePattern, onFilter} = this.props;
    let newValue = event.target.value;

    if (0 === newValue.length || validator.matches(newValue, filterPattern, 'i')) {
      this.setState({
        value: newValue
      });

      if (onFilter) {
        let passed = validatePattern ? validator.matches(newValue, validatePattern, 'i') : true;
        onFilter(newValue, passed);
      }
    }
  }
  render() {
    let {filterPattern, validatePattern, onFilter, ...attributes} = this.props;
    return <input value={this.state.value} onChange={this.textChangeHandler} {...attributes} />;
  }
}

FilteredInput.propTypes = {
  type: React.PropTypes.string.isRequired,
  filterPattern: React.PropTypes.string.isRequired,
  validatePattern: React.PropTypes.string,
  onFilter: React.PropTypes.func
};

export default FilteredInput;
