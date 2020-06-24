import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from '../setupTests';
import Image from './Image';

describe('<Image />', () => {
  it('Should render correctly in "debug" mode', () => {
    const wrapper = shallow(<Image debug />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should mount in a full DOM', () => {
    const wrapper = mount(<Image />);
    expect(wrapper.find('.Image').length).toBe(2);
    wrapper.unmount();
  });
});
