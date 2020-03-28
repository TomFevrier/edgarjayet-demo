import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Header from '../components/header';
import ProjectPreview from '../components/project-preview';
import SEO from '../components/seo';

import classnames from 'classnames';

import styles from './index.module.css';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
        };
        this.showMenu = this.showMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
		this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
		this.menu = React.createRef();
		this.burger = React.createRef();
    }

	componentWillUnmount() {
		if (this.showMenuTimeout) clearTimeout(this.showMenuTimeout);
	}

    showMenu() {
		if (window.matchMedia('(min-width: 600px)').matches) {
			if (this.showMenuTimeout) clearTimeout(this.showMenuTimeout);
	        this.menu.current.style.opacity = 1;
			this.menu.current.style.pointerEvents = 'auto';
	        this.showMenuTimeout = setTimeout(() => {
	            this.menu.current.style.opacity = 0;
				this.menu.current.style.pointerEvents = 'none';
	        }, 4000);
		}
    }

    handleClick(e) {
        if (this.state.filter === e.target.id || e.target.id === 'all') {
            this.setState({ filter: 'all' });
        } else {
            this.setState({ filter: e.target.id });
        }
		if (window.matchMedia('(max-width: 600px)').matches)
			this.toggleMobileMenu();
    }

	toggleMobileMenu(e) {
		this.menu.current.style.opacity = (this.menu.current.style.opacity == 0) ? 1 : 0;
		this.menu.current.style.pointerEvents = (this.menu.current.style.opacity == 0) ? 'none' : 'auto';
		this.burger.current.classList.toggle(styles.close);
    };


    render() {
        const state = this.state;
        return (
            <Layout>
				<SEO title="Portfolio" />
				<aside>
	                <Header onMouseEnter={this.showMenu} onClick={() => this.setState({ filter: 'all' })} />
					<div
						className={styles.menuWrapper}
						ref={this.menu}
					>
	                    <ul className={styles.menu}>
							<li
							   id="all"
							   className={classnames(styles.all,
								   state.filter === 'all'
									   ? styles.highlighted
									   : ''
							   )}
							   onClick={this.handleClick}
						   >
							   All
						   </li>
	                        <li
	                            id="architecture"
	                            className={
	                                state.filter === 'architecture'
	                                    ? styles.highlighted
	                                    : ''
	                            }
	                            onClick={this.handleClick}
	                        >
	                            Architecture
	                        </li>
	                        <li
	                            id="design"
	                            className={
	                                state.filter === 'design'
	                                    ? styles.highlighted
	                                    : ''
	                            }
	                            onClick={this.handleClick}
	                        >
	                            Design
	                        </li>
	                        <li
	                            id="publications"
	                            className={
	                                state.filter === 'publications'
	                                    ? styles.highlighted
	                                    : ''
	                            }
	                            onClick={this.handleClick}
	                        >
	                            Publications
	                        </li>
	                        <li
	                            id="art"
	                            className={
	                                state.filter === 'art' ? styles.highlighted : ''
	                            }
	                            onClick={this.handleClick}
	                        >
	                            Art
	                        </li>
	                    </ul>
	                    <ul className={styles.menuBottom}>
	                        <li id="about">
	                            <Link to={'/about'}>About</Link>
	                        </li>
	                        <li id="instagram">
	                            <a
	                                href="https://www.instagram.com/edgarjayet"
	                                target="_blank"
	                                rel="noopener noreferrer"
	                            >
	                                Instagram
	                            </a>
	                        </li>
							<li className={styles.credit}>
								{`© ${new Date().getFullYear()} - `}
								<a
								   href="https:/tomfevrier.io"
								   target="_blank"
								   rel="noopener noreferrer"
								>
									Tom Février
							   </a>

						   </li>
	                    </ul>
	                </div>
					<div
						className={styles.burger}
						onClick={this.toggleMobileMenu}
						ref={this.burger}
					>
	                    <div className={styles.line}></div>
	                </div>
				</aside>
                <article className={styles.article}>
                    <ul className={styles.container}>
                        {this.props.data.allStrapiProject.edges
							.filter(({ node }) => state.filter === 'all' || state.filter === node.category)
							.map(({ node }) => (
                                <ProjectPreview
                                    key={node.id}
                                    node={node}
                                />
                            ))
						}
                    </ul>
                </article>

            </Layout>
        );
    }
}

export default IndexPage;

export const pageQuery = graphql`
    query IndexQuery {
        allStrapiProject(sort: { fields: date, order: DESC }) {
            edges {
                node {
                    id
                    slug
                    title
                    date
                    location
                    category
                    imageMain {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
