# filtered-input
A simple input that only accepts characters based on a Regex pattern. My intention is just limiting characters could be entered into an input field, no masking capability, no formatting etc.

## Usage
Simply install and import component like below code:

`yarn add filtered-input`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import FilteredInput from 'filtered-input';

ReactDOM.render(
  <form action="index.html" method="post" noValidate>
    <FilteredInput id="fullname" name="fullname" type="text" filterPattern="^[a-z\s]+$" validatePattern="^[a-z\s]{5,20}$" onChange={onChange} />
  </form>, document.getElementById("root")
);
```

### Properties
Besides below properties, you could add any HTML input attributes as usual except `value`.

#### `type`
Input type e.g. text, email. `Required`

#### `filterPattern`
A RegEx pattern to filter which characters are allowed to enter in the input. `Required`

#### `validatePattern`
A RegEx pattern to validate current input value, relied on [validator.matches](https://github.com/chriso/validator.js). `Required`

#### `onChange`
Called on change event with current `value` and validation result `passed` if `validatePattern` is supplied. You could use it to get input value or change input control appearance based its validation state.

#### `customFormatter`
Called with current `value` to provide formatting capability e.g. 5000 becomes 5,000

## Examples
1. Run `yarn start` from `examples` folder
2. Visit `http://localhost:8080`


Copyright (c) 2016 Tien Do

MIT License
