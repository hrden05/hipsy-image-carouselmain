import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from '../setupTests';
import Arrow from './Arrow';

describe('<Arrow />', () => {
  it('should render correctly in "debug" mode', () => {
    const wrapper = shallow(<Arrow debug />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render left arrow', () => {
    const wrapper = shallow(<Arrow direction="left" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render right arrow', () => {
    const wrapper = shallow(<Arrow direction="right" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should mount in a full DOM', () => {
    const wrapper = mount(<Arrow />);
    expect(wrapper.find('.Arrow').length).toBe(1);
    wrapper.unmount();
  });
});
