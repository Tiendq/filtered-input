import React from 'react';
import ReactDOM from 'react-dom';
import numeral from 'numeral';
import FilteredInput from '../dist/filtered-input';

ReactDOM.render(
  <form action="index.html" method="post" noValidate>
    <div>
      <label htmlFor="fullname">Full name</label>
      <FilteredInput id="fullname" name="fullname" type="text" filterPattern="^[a-z\s]+$" validatePattern="^[a-z\s]{5,20}$" onChange={(value, passed) => onChange('fullname', value, passed)} maxLength="20" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <FilteredInput id="email" name="email" type="text" value="@gmail.com" filterPattern="^[a-z\d\.\-_@]+$" validatePattern="^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$" onChange={(value, passed) => onChange('email', value, passed)} maxLength="100" />
    </div>
    <div>
      <label htmlFor="zipcode">Zipcode</label>
      <FilteredInput id="zipcode" name="zipcode" type="text" filterPattern="^\d{0,5}$" validatePattern="^\d{5}$" onChange={(value, passed) => onChange('zipcode', value, passed)} maxLength="5" />
    </div>
    <div>
      <label htmlFor="salary">Salary</label>
      <FilteredInput type="text" id="salary" name="salary" value='50000' filterPattern="^\d{0,6}$" validatePattern="^\d{1,6}$" onChange={(value, passed) => onChange('salary', value, passed)} formatter={numberFormatter} unformatter={numberUnformatter} maxLength="7" />
    </div>
    <div>
      <label htmlFor="allowances">Allowances</label>
      <FilteredInput type="text" id="allowances" name="allowances" value='1.000' filterPattern="^\d{0,6}$" validatePattern="^\d{1,6}$" onChange={(value, passed) => onChange('allowances', value, passed)} formatter={numberFormatter} unformatter={numberUnformatter} maxLength="7" />
    </div>
  </form>, document.getElementById("root")
);

function onChange(id, value, passed) {
  console.log(value, passed);

  let input = document.getElementById(id);

  if (passed)
    input.classList.remove('error');
  else
    input.classList.add('error');
}

function numberFormatter(value) {
  return value.length > 0 ? numeral(Number.parseInt(value, 10)).format('0,0') : '';
}

function numberUnformatter(value) {
  return value.replace(',', '');
}
