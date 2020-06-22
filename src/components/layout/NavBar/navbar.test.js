import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import {render} from '@testing-library/react';
import ReactTestRenderer from 'react-test-renderer';

it('should render without exploding', () => {
    const div = document.createElement("div");
    ReactDOM.render(<NavBar></NavBar>, div)
})

it('matches snapshot', () => {
    const tree1 = ReactTestRenderer.create(<NavBar label="Academy"></NavBar>).toJSON();
    expect(tree1).toMatchSnapshot();
})