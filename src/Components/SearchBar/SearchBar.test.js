import { shallow } from 'enzyme';
import React from 'react';
import SearchBar from '../Home/Home.js'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SearchBar />);
});

describe('SearchBar', () => {

  it('renders the home component', () => {
    expect(wrapper.length).toEqual(1)
  });

});
