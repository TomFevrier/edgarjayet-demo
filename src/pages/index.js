import React from 'react';
import { Link, graphql } from 'gatsby';

import Header from '../components/header';
import Scrollable from '../components/scrollable';
import ProjectPreview from '../components/project-preview';
import SEO from '../components/seo';

import styles from './index.module.css';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    showMenu() {
        if (this.showMenuTimeout) clearTimeout(this.showMenuTimeout);
        this.setState({ showMenu: true });
        this.showMenuTimeout = setTimeout(() => {
            this.setState({ showMenu: false });
        }, 3000);
    }

    handleClick(e) {
        this.showMenu();
        if (this.state.filter === e.target.id) {
            this.setState({ filter: 'all' });
        } else {
            this.setState({ filter: e.target.id });
        }
    }

    render() {
        const state = this.state;
        return (
            <>
                <Header
                    onMouseEnter={this.showMenu}
                    style={{ position: 'absolute', zIndex: 42 }}
                />
                <SEO title="Portfolio" />
                <aside style={{ opacity: state.showMenu ? 1 : 0 }}>
                    <ul className={styles.menu}>
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
                            id="Publications"
                            className={
                                state.filter === 'Publications'
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
                        <li id="press">
                            <Link to={'/press'}>Press</Link>
                        </li>
                        <li id="Instagram">
                            <a
                                href="https://www.instagram.com/edgarjayet"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </aside>
                <Scrollable>
                    <article>
                        <ul className={styles.grid}>
                            {this.props.data.allStrapiProject.edges.map(
                                ({ node }) => (
                                    <ProjectPreview
                                        key={node.id}
                                        node={node}
                                        filter={state.filter}
                                    />
                                )
                            )}
                            {this.props.data.allStrapiProject.edges.map(
                                ({ node }) => (
                                    <ProjectPreview
                                        key={node.id}
                                        node={node}
                                        filter={state.filter}
                                    />
                                )
                            )}
                            {this.props.data.allStrapiProject.edges.map(
                                ({ node }) => (
                                    <ProjectPreview
                                        key={node.id}
                                        node={node}
                                        filter={state.filter}
                                    />
                                )
                            )}
                            {this.props.data.allStrapiProject.edges.map(
                                ({ node }) => (
                                    <ProjectPreview
                                        key={node.id}
                                        node={node}
                                        filter={state.filter}
                                    />
                                )
                            )}
                            {this.props.data.allStrapiProject.edges.map(
                                ({ node }) => (
                                    <ProjectPreview
                                        key={node.id}
                                        node={node}
                                        filter={state.filter}
                                    />
                                )
                            )}
                            {this.props.data.allStrapiProject.edges.map(
                                ({ node }) => (
                                    <ProjectPreview
                                        key={node.id}
                                        node={node}
                                        filter={state.filter}
                                    />
                                )
                            )}
                            {this.props.data.allStrapiProject.edges.map(
                                ({ node }) => (
                                    <ProjectPreview
                                        key={node.id}
                                        node={node}
                                        filter={state.filter}
                                    />
                                )
                            )}
                        </ul>
                    </article>
                </Scrollable>
            </>
        );
    }
}

export default IndexPage;

export const pageQuery = graphql`
    query IndexQuery {
        allStrapiProject {
            edges {
                node {
                    id
                    slug
                    title
                    date
                    location
                    category
                }
            }
        }
    }
`;
