/**
 * Created by ranjit on 7/27/16.
 */
import 'react-native';
import React from 'react';
import ShowList from '../ShowList';

// Note: test renderer must be required after react-native.
import renderer from 'react/lib/ReactTestRenderer';

jest.mock('ListView', () => 'ListView');

describe('ShowList', () => {

    it('renders correctly', () => {
        const output = renderer.create(
            <ShowList />
        )
        const tree = output.toJSON();
        expect(tree).toMatchSnapshot();
    });

});