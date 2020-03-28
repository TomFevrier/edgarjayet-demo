import React from 'react';

import { Link } from 'gatsby';
import Img from 'gatsby-image';

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
		const aleaSize = Math.random();
		const alea = Math.random();
        return (

					<li className={styles.item}
						style={node.imageMain.childImageSharp && {
							width:
								node.imageMain.childImageSharp.fluid.aspectRatio >= 1
									? `${Math.floor(40 + aleaSize * 20) * node.imageMain.childImageSharp.fluid.aspectRatio}vh`
									: `${Math.floor(70 + aleaSize * 10) * node.imageMain.childImageSharp.fluid.aspectRatio}vh`
						}}
					>
	                    <div className={styles.container}
							onMouseEnter={this.handleMouseEnter}
							// onMouseMove={this.handleMouseMove}
							onMouseLeave={this.handleMouseLeave}
							style={node.imageMain.childImageSharp && {
								top: node.imageMain.childImageSharp.fluid.aspectRatio >= 1
									? `${Math.floor(10 + (1 - aleaSize) * 30)}vh`
									: `${alea < 0.5 ? '10vh' : 'auto'}`,
								bottom: node.imageMain.childImageSharp.fluid.aspectRatio >= 1 || alea < 0.5
									? 'auto'
									: '10vh'
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
