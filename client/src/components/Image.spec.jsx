import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from '../setupTests';
import Image from './Image';

describe('<Image />', () => {
  it('should mount in a full DOM', () => {
    expect(mount(<Image />).find('.Image').length).toBe(1);
  });
});
