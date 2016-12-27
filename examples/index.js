import React from 'react';
import ReactDOM from 'react-dom';
import FilteredInput from 'filtered-input';

ReactDOM.render(
  <form action="index.html" method="post" noValidate>
    <div>
      <label htmlFor="fullname">Full name</label>
      <FilteredInput type="text" id="fullname" name="fullname" filterPattern="^[a-z\s]+$" validatePattern="^[a-z\s]{5,20}$" onFilter={(value, passed) => console.log(value, passed)} maxLength="20" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <FilteredInput type="text" id="email" name="email" filterPattern="^[a-z\d\.\-_@]+$" validatePattern="^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$" onFilter={(value, passed) => console.log(value, passed)} maxLength="100" />
    </div>
    <div>
      <label htmlFor="zipcode">Zipcode</label>
      <FilteredInput type="text" id="zipcode" name="zipcode" filterPattern="^\d+$" validatePattern="^\d{5}$" onFilter={(value, passed) => console.log(value, passed)} maxLength="5" />
    </div>
  </form>, document.getElementById("root")
);
