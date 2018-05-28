import React from 'react';
import { shallow, configure } from 'enzyme';
import Button from './Button';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Button', () => {
  test('calls click handler function on click', () => {
    const handleClickMock = jest.fn();
    
    const wrapper = shallow(
      <Button handleClick={handleClickMock} />
    );

    wrapper.find('button').simulate('click');

    expect(handleClickMock.mock.calls.length).toBe(1);
  });
});
