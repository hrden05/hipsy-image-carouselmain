import React from 'react';
import React from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Adapter from '../setupTests';
import App from './App';

describe('<App />', () => {
  it('should mount div class wrapper in a full DOM', () => {
    expect(mount(<App />).find('.wrapper').length).toBe(1);
  });
});
