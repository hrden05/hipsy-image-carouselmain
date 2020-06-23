import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from '../setupTests';
import Arrow from './Arrow';

describe('<Arrow />', () => {
  it('should mount in a full DOM', () => {
    expect(mount(<Arrow />).find('.Arrow').length).toBe(1);
  });
});
