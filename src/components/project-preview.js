import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { Link } from 'gatsby';
import Img from 'gatsby-image';

import classNames from 'classnames';

import styles from './project-preview.module.css';

const ProjectPreview = props => (
    <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.filter === 'all' || props.filter === props.node.category}
        timeout={300}
        classNames={{ ...styles }}
    >
        {state => (
            <li
                className={classNames(
                    props.node.category,
                    styles.item,
                    styles[state]
                )}
            >
                <Link to={`/project/${props.node.slug}`}>
                    {console.log(state)}
                    <p>{props.node.title}</p>
                </Link>
            </li>
        )}
    </CSSTransition>
);

// const ProjectPreview = node => (
// 	<AniLink paintDrip color="rebeccapurple" to={`/projet/${node.slug}`}>
// 		<div className={styles.card}>
// 			{node.featured_image && (
// 				<Img
// 					fluid={node.featured_image.childImageSharp.fluid}
// 					className={styles.thumbnail}
// 				/>
// 			)}
// 			<div className={styles.cache}></div>
// 			<div className={styles.info}>
// 				<h2>
// 					<span>{node.title}</span>
// 				</h2>
// 				<p>
// 					{node.publisher && (
// 						<span>
// 							<b>{node.publisher.name}</b> &mdash;{' '}
// 						</span>
// 					)}
// 					<span>{new Date(node.date).toLocaleDateString('fr-FR')}</span>
// 				</p>
// 			</div>
// 		</div>
// 	</AniLink>
// );

export default ProjectPreview;
