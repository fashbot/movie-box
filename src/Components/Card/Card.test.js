import { mount } from 'enzyme';
import React from 'react';
import Card from '../Home/Home.js'

let wrapper;

beforeEach(() => {
  wrapper = mount(<Card />);
});

describe('Card', () => {

  it('renders the home component', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('contains a movie image', () => {
    const count = wrapper.find('[data-ref="movie-image"]').length;
    expect(count).not.toEqual(0)
  });


  it('contains a movie with a movie name', () => {
    const count = wrapper.find('[data-ref="movie-name"]').length;
    expect(count).not.toEqual(0)
  })

});
