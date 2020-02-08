import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { Link } from 'gatsby';
import Img from 'gatsby-image';

import classNames from 'classnames';

import styles from './project-preview.module.css';

class ProjectPreview extends React.Component {
    constructor(props) {
        super(props);
        // this.handleMouseEnter = this.handleMouseEnter.bind(this);
		// this.handleMouseMove = this.handleMouseMove.bind(this);
		// this.handleMouseLeave = this.handleMouseLeave.bind(this);
        // this.tooltip = React.createRef();
    }

	// handleMouseEnter(e) {
	// 	console.log(e.target.tagName)
	// 	if (e.target.tagName !== 'IMG') return;
	// 	this.tooltip.current.style.opacity = 1;
	// }
	//
	// handleMouseMove(e) {
	// 	console.log(e.target.tagName)
	// 	if (e.target.tagName !== 'IMG') return;
	// 	console.log(e.nativeEvent)
	// 	this.tooltip.current.style.left = e.nativeEvent.layerX + 'px';
	// 	this.tooltip.current.style.top = e.nativeEvent.layerY + 'px';
	// }
	//
	// handleMouseLeave(e) {
	// 	console.log(e.target.tagName)
	// 	if (e.target.tagName !== 'IMG') return;
	// 	console.log("leave")
	// 	this.tooltip.current.style.opacity = 0;
	// }

    render() {
        const { filter, node } = this.props;
        return (

					<li className={styles.item}>
	                    <div
	                        style={node.imageMain.childImageSharp && {
	                            width:
	                                node.imageMain.childImageSharp.fluid.aspectRatio >= 1
	                                    ? '80%'
	                                    : `calc(80vh * ${node.imageMain.childImageSharp.fluid.aspectRatio})`,
								paddingTop:
	                                node.imageMain.childImageSharp.fluid.aspectRatio >= 1
	                                    ? 0
	                                    : '10vh',
								//width: '100%',
	                        }}
	                    >
	                        <Link to={`/project/${node.slug}`}
								onMouseEnter={this.handleMouseEnter}
								onMouseMove={this.handleMouseMove}
								onMouseLeave={this.handleMouseLeave}
							>
								{node.imageMain.childImageSharp &&
		                            <Img
										fluid={node.imageMain.childImageSharp.fluid}
										className={styles.thumbnail}
		                            />
								}
	                        </Link>
							{/*
	                        <div className={styles.tooltip} ref={this.tooltip} style={{display: "none"}}>
	                            <h3>{node.title}</h3>
	                            <h4>{node.location}</h4>
	                            <p>{new Date(node.date).getFullYear()}</p>
	                        </div>
							*/}
	                    </div>
					</li>

        );
    }
}

/*
	<CSSTransition
	mountOnEnter
	unmountOnExit
	in={filter === 'all' || filter === node.category}
	timeout={300}
	classNames={{ ...styles }}
>
	{state => (
)}
*/

// </CSSTransition>

//

// transform:
//     props.node.imageMain.childImageSharp.fluid
//         .aspectRatio >= 1
//         ? `translateY(calc(${Math.random() * 50 +
//               20}vh - 50%))`
//         : 'none',

export default ProjectPreview;
