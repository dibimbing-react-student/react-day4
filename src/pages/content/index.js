import React, { Component } from "react";
import Contact from './contact'

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    // componentWillMount() {
    //     console.log("component will mount");
    // }

    // componentDidMount() {
    //     console.log("component did mount");
    // }

    // componentDidUpdate() {
    //     console.log("component did update");
    // }

    // componentWillUnmount() {
    //     console.log("component Will Unmount");
    // }

    addCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                FE Mini Project
                <button
                    onClick={this.addCount}
                >
                    Tambah count
                </button>
                <Contact />
            </div>
        );
    }
}
