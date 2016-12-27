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

  test('with all props', () => {
    const tree = renderer.create(
      <FilteredInput type="text" id="test" name="test" filterPattern="^[a-z]+$" validatePattern="^[a-z]{3}$" onFilter={() => true} maxLength="3" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('onFilter is always passed if NO validatePattern supplied', () => {
    let onFilter = jest.fn();

    const tree = renderer.create(
      <FilteredInput type="text" filterPattern="^[a-z]+$" onFilter={onFilter} />
    ).toJSON();

    tree.props.onChange({ target: { value: 'tien' }});
    expect(onFilter).toHaveBeenCalledWith('tien', true);
  });

  test('onFilter called with validatePattern', () => {
    let onFilter = jest.fn();

    const tree = renderer.create(
      <FilteredInput type="text" filterPattern="^[a-z]+$" validatePattern="^[a-z]{3}$" onFilter={onFilter} />
    ).toJSON();

    tree.props.onChange({ target: { value: 'tien' }});
    expect(onFilter).toHaveBeenLastCalledWith('tien', false);

    tree.props.onChange({ target: { value: 'hoa' }});
    expect(onFilter).toHaveBeenLastCalledWith('hoa', true);
  });
});
