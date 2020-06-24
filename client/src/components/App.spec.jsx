import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Adapter from '../setupTests';
import App from './App';
import tempData from '../../dist/tempData';

describe('<App />', () => {
  it('should render correctly in "debug" mode', () => {
    const wrapper = shallow(<App debug />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should mount div class wrapper in a full DOM', () => {
    const wrapper = mount(<App debug />);
    expect(wrapper.find('.wrapper').length).toBe(1);
    wrapper.unmount();
  });
});
