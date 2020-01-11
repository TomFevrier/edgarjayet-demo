import React from 'react';
import PropTypes from 'prop-types';

import styles from './scrollable.module.css';

class Scrollable extends React.Component {
    constructor(props) {
        super(props);
        this.scrollable = React.createRef();
        this.content = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(e) {
        e.preventDefault();
        e.stopPropagation();
        if (
            -parseInt(this.scrollable.current.style.left) >=
                this.content.current.offsetWidth &&
            e.deltaY > 0
        )
            return;
        const scrollAmount = e.deltaY > 0 ? -100 : 100;

        this.scrollable.current.style.left = `${Math.min(
            0,
            parseInt(this.scrollable.current.style.left) + scrollAmount
        )}px`;
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    render() {
        return (
            <div
                className={styles.scrollable}
                ref={this.scrollable}
                style={{ left: 0 }}
            >
                {React.cloneElement(this.props.children, { ref: this.content })}
            </div>
        );
    }
}

Scrollable.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Scrollable;
