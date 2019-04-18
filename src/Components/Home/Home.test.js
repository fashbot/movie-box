import { shallow } from 'enzyme';
import React from 'react';
import Home from '../Home/Home.js'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
});

describe('Home', () => {

  it('renders the home component', () => {
    expect(wrapper.length).toEqual(1)
  });

});
