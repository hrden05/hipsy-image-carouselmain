import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from '../setupTests';
import StackImage from './StackImage';

describe('<StackImage />', () => {
  it('should mount in a full DOM', () => {
    expect(mount(<StackImage />).find('.StackImage').length).toBe(1);
  });
});
