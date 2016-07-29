/**
 * @providesModule Start
 * @flow
 */
'use strict';

import React, {Component, PropTypes} from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

class MyComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                                    onPress={this.onPressText.bind(this)}>
                    <Text>hi {this.props.name}</Text>
                </TouchableHighlight>
            </View>
        )
    }
    onPressText() {
        console.log('pressed')
        this.setState( {pressed: true})
    }
}


MyComponent.propTypes = {}

export default MyComponent;