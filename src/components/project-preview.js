import React from 'react';

import { Link } from 'gatsby';
import Img from 'gatsby-image';

import classNames from 'classnames';

import styles from './project-preview.module.css';

class ProjectPreview extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.tooltip = React.createRef();
    }

	handleMouseEnter(e) {
		this.tooltip.current.style.opacity = 1;
	}

	handleMouseMove(e) {
		console.log(e.pageX, e.pageY)
		this.tooltip.current.style.left = e.pageX + 'px';
		this.tooltip.current.style.top = e.pageY + 'px';
	}

	handleMouseLeave(e) {
		this.tooltip.current.style.opacity = 0;
	}

    render() {
        const { node } = this.props;
        return (

					<li className={styles.item}
						style={node.imageMain.childImageSharp && {
							width:
								node.imageMain.childImageSharp.fluid.aspectRatio >= 1
									? '40rem'
									: `${80 * node.imageMain.childImageSharp.fluid.aspectRatio}vh`
						}}
					>
						{console.log(`${Math.floor(40 + Math.random() * 20)}%`)}
	                    <div className={styles.container}
							onMouseEnter={this.handleMouseEnter}
							// onMouseMove={this.handleMouseMove}
							onMouseLeave={this.handleMouseLeave}
							style={node.imageMain.childImageSharp && {
								top: node.imageMain.childImageSharp.fluid.aspectRatio >= 1 ?
									`${Math.floor(35 + Math.random() * 30)}%` : '50%'
							}}
	                    >
	                        <Link to={`/project/${node.slug}`}>
								{node.imageMain.childImageSharp &&
		                            <Img
										fluid={node.imageMain.childImageSharp.fluid}
										className={styles.thumbnail}
									/>
								}
	                        </Link>
							<div className={styles.tooltip} ref={this.tooltip}>
								<h3>{node.title}<span className={styles.year}>{new Date(node.date).getFullYear()}</span></h3>
								<p>{node.location}</p>
							</div>
	                    </div>
					</li>

        );
    }
}

export default ProjectPreview;
