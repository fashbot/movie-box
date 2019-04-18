import { shallow } from 'enzyme';
import React from 'react';
import axios from 'axios';
import Home from '../Home/Home.js';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
});

describe('Home', () => {

  it('renders the home component', () => {
    expect(wrapper.length).toEqual(1)
  });
});
