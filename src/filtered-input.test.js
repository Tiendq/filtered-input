import React from 'react';
import renderer from 'react-test-renderer';
import FilteredInput from './filtered-input';

describe('FilteredInput', () => {
  test('with only required props', () => {
    const tree = renderer.create(
      <FilteredInput type="text" filterPattern="^[a-z]+$" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('with initial value', () => {
    const tree = renderer.create(
      <FilteredInput type="text" filterPattern="^[a-z]+$" value="Tien" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('with all props', () => {
    const tree = renderer.create(
      <FilteredInput type="text" id="test" name="test" filterPattern="^[a-z]+$" validatePattern="^[a-z]{3}$" onChange={() => true} maxLength="3" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('onChange is always passed if NO validatePattern supplied', () => {
    let onChange = jest.fn();

    const tree = renderer.create(
      <FilteredInput type="text" filterPattern="^[a-z]+$" onChange={onChange} />
    ).toJSON();

    tree.props.onChange({ target: { value: 'tien' }});
    expect(onChange).toHaveBeenCalledWith('tien', true);
  });

  test('onChange called with validatePattern', () => {
    let onChange = jest.fn();

    const tree = renderer.create(
      <FilteredInput type="text" filterPattern="^[a-z]+$" validatePattern="^[a-z]{3}$" onChange={onChange} />
    ).toJSON();

    tree.props.onChange({ target: { value: 'tien' }});
    expect(onChange).toHaveBeenLastCalledWith('tien', false);

    tree.props.onChange({ target: { value: 'hoa' }});
    expect(onChange).toHaveBeenLastCalledWith('hoa', true);
  });
});
