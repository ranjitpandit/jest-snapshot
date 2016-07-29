/**
 * Created by ranjit on 7/27/16.
 */
import 'react-native';
import React from 'react';
import Start from '../Start';

// Note: test renderer must be required after react-native.
import renderer from 'react/lib/ReactTestRenderer';

describe('Start', () => {

    it('renders correctly', () => {
        const output = renderer.create(
            <Start />
        )
        const tree = output.toJSON();
        expect(tree).toMatchSnapshot();

        // console.log(output)
        // console.dir(JSON.stringify(output))
        let instance = output.getInstance()
        output.getInstance().onPressText()
        // console.log('after onPress')
        // console.log(instance)

        expect(instance.state.pressed).toBe(true)
    });

});