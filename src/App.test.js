import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders withouth crashing', () => {
  shallow(<App />);
});
