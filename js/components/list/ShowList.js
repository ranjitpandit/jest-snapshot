'use strict';

import React, {Component, PropTypes} from 'react'
import {StyleSheet, View, ListView, Text} from 'react-native'

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
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2'])
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        );
    }
}


MyComponent.propTypes = {}

export default MyComponent;