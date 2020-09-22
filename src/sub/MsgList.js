import React, { Component } from 'react';

class MsgList extends Component {
    render() {
        return (
            <ul>
                {this.props.list}
            </ul>
        );
    }
}

export default MsgList;