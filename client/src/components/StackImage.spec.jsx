import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from '../setupTests';
import StackImage from './StackImage';

describe('<StackImage />', () => {
  it('should render correctly in "debug" mode', () => {
    const wrapper = shallow(<StackImage debug />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should mount in a full DOM', () => {
    const wrapper = mount(<StackImage />);
    expect(wrapper.find('.StackImage').length).toBe(1);
    wrapper.unmount();
  });
});
