import { shallow } from 'enzyme';
import React from 'react';
import SearchResults from '../SearchResults/SearchResults.js'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SearchResults />);
});

describe('SearchResults', () => {

  it('renders the home component', () => {
    expect(wrapper.length).toEqual(1)
  });

});
