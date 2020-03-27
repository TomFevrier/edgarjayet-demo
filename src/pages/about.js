import React from 'react';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';

import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';

import styles from './about.module.css';

class About extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			backgroundColor: 'black',
			asideVisible: true
		}
		this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
		this.revertBackgroundColor = this.revertBackgroundColor.bind(this);
		this.showImage = this.showImage.bind(this);
		this.hideImage = this.hideImage.bind(this);
	}

	changeBackgroundColor(e) {
		const parent = e.target.closest('div');
		console.log(parent)
		if (parent.className.includes('info'))
			this.setState({ backgroundColor: '#DD2C00' });
		else if (parent.className.includes('articles'))
			this.setState({
				backgroundColor: '#1B5E20',
				asideVisible: window.matchMedia('(max-width: 1200px)').matches
			});
		else if (parent.className.includes('about'))
			this.setState({ backgroundColor: '#0D47A1' });
	}

	revertBackgroundColor(e) {
		this.setState({ backgroundColor: 'black', asideVisible: true });
	}

	showImage(e) {
		const image = e.target.closest('li').querySelector('div');
		if (image && window.matchMedia('(min-width: 1200px)').matches)
			image.style.display = 'block';
	}

	hideImage(e) {
		const image = e.target.closest('li').querySelector('div');
		if (image && window.matchMedia('(min-width: 1200px)').matches)
			image.style.display = 'none';
	}

	render() {
		const about = this.props.data.allStrapiAbout.edges[0].node.about;
		const cv = this.props.data.allStrapiAbout.edges[0].node.cv.internal.description
						.replace("File \"", "").replace("\"", "");
		const articles = this.props.data.allStrapiArticle.edges;
	    return (
	        <Layout backgroundColor={this.state.backgroundColor}>
	            <SEO title="About" />
				<Header onMouseEnter={null} color='white' />
				<div
					className={styles.info}
					onMouseEnter={this.changeBackgroundColor}
					onMouseLeave={this.revertBackgroundColor}
					style={{ opacity: this.state.asideVisible ? 1 : 0 }}
				>
					<p>+33 6 15 86 56 79</p>
					<p>edgarjayet@gmail.com</p>
					<br />
					<p>40 rue des Poissonniers</p>
					<p>92200 Neuilly-sur-Seine</p>
					<p>France</p>
				</div>
	            <div
					className={styles.about}
					onMouseEnter={this.changeBackgroundColor}
					onMouseLeave={this.revertBackgroundColor}
					style={{ opacity: this.state.asideVisible ? 1 : 0 }}
				>
					<p><a href={cv} target="_blank" rel="noopener noreferrer" download>Download CV</a></p>
	                {about}
	            </div>
				<div
					className = {styles.articles}
					onMouseEnter={this.changeBackgroundColor}
					onMouseLeave={this.revertBackgroundColor}
				>
					<ul>
						{articles.map(({ node }) => (
							<li
								key={node.title}
								onMouseEnter={this.showImage}
								onMouseLeave={this.hideImage}
							>
								<a href={node.Link} target='_blank' rel='noopener noreferrer'>
									<p className={styles.publisher}>{node.publisher}</p>
									<p>
										<span className={styles.title}>{node.title} - </span>
										<span>{new Date(node.date).toLocaleString('en-GB', { month: 'long', year: 'numeric' }).toLowerCase()}</span>
									</p>
								</a>
								{node.image &&
									<Img
										fluid={node.image.childImageSharp.fluid}
										className={styles.articlePreview}
									/>
								}
							</li>
						))}
					</ul>
				</div>
	        </Layout>
	    );
	}
};

export default About;

export const pageQuery = graphql`
    query AboutQuery {
        allStrapiAbout {
            edges {
                node {
                    about
					cv {
						internal {
							description
						}
					}
                }
            }
        }
		allStrapiArticle(sort: { fields: date, order: DESC }, limit: 10) {
			edges {
				node {
					title
					date
					publisher
					Link
					image {
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
