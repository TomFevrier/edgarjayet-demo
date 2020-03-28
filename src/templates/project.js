import React from 'react';
import { Link, graphql } from 'gatsby';

import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';

import styles from './project.module.css';

const ProjectTemplate = ({ data }) => {
	const { title, subtitle, location, date, content, content_eng, highlight, highlight_eng, imageMain, imageSecondary } = data.strapiProject;
	const pictures = Object.entries(data.strapiProject).filter(([key, value]) => key.includes('picture') && value);
	const portraits = pictures.filter(([key, value]) => value.childImageSharp.fluid.aspectRatio < 1);
	const landscapes = pictures.filter(([key, value]) => value.childImageSharp.fluid.aspectRatio >= 1)
	let portraitIndex = 0;
	let landscapeIndex = 0;
	return (
		<Layout>
	        <SEO title={title} />
			<Header />
	        <article className={styles.article}>
				<ul className={styles.container}>
					{imageMain &&
			            <li style={{ width: `${80 * imageMain.childImageSharp.fluid.aspectRatio}vh` }}>
							<Img
								fluid={imageMain.childImageSharp.fluid}
								className={styles.imageMain}
							/>
						</li>
					}
		            <li>
						<div className={styles.text}>
							<div className={styles.title}>
								<h3>{title}
									<span className={styles.year}>{new Date(date).getFullYear()}</span>
								</h3>
								<h4>{subtitle}</h4>
							</div>
			                <div className={styles.content}>
								<div>{content}</div>
								<div className={styles.english}>{content_eng}</div>
							</div>
						</div>
		            </li>
					{imageSecondary &&
			            <li style={{ width: `${60 * imageSecondary.childImageSharp.fluid.aspectRatio}vh` }}>
							<Img
								fluid={imageSecondary.childImageSharp.fluid}
								className={styles.imageSecondary}
							/>
						</li>
					}
					{highlight &&
						<li style={landscapeIndex < landscapes.length ? {
							width: `${40 * landscapes[landscapeIndex][1].childImageSharp.fluid.aspectRatio}vh`
						} : {}}>
							{landscapeIndex < landscapes.length &&
								<div className={styles.imageTop}>
									<Img fluid={landscapes[landscapeIndex++][1].childImageSharp.fluid} />
								</div>
							}
							<div className={styles.highlight}>
								<div>{highlight}</div>
								<div className={styles.english}>{highlight_eng}</div>
							</div>
			            </li>
					}
					{landscapeIndex < landscapes.length && portraitIndex < portraits.length &&
						<li style={{ width: `${32.5 * landscapes[landscapeIndex][1].childImageSharp.fluid.aspectRatio}vh` }}>
							<div
								className={styles.imageTop}
								style={{ width: `${42.5 * portraits[portraitIndex][1].childImageSharp.fluid.aspectRatio}vh` }}
							>
								<Img fluid={portraits[portraitIndex++][1].childImageSharp.fluid} />
							</div>
							<div className={styles.imageBottom}>
								<Img fluid={landscapes[landscapeIndex++][1].childImageSharp.fluid} />
							</div>
						</li>
					}
					{landscapeIndex < landscapes.length && portraitIndex < portraits.length &&
						<li style={{ width: `${32.5 * landscapes[landscapeIndex][1].childImageSharp.fluid.aspectRatio}vh` }}>
							<div className={styles.imageTop}>
								<Img fluid={landscapes[landscapeIndex++][1].childImageSharp.fluid} />
							</div>
							<div
								className={styles.imageBottom}
								style={{ width: `${42.5 * portraits[portraitIndex][1].childImageSharp.fluid.aspectRatio}vh` }}
							>
								<Img fluid={portraits[portraitIndex++][1].childImageSharp.fluid} />
							</div>
						</li>
					}
					{landscapeIndex < landscapes.length && portraitIndex < portraits.length &&
						<li style={{ width: `${32.5 * landscapes[landscapeIndex][1].childImageSharp.fluid.aspectRatio}vh` }}>
							<div
								className={styles.imageTop}
								style={{ width: `${42.5 * portraits[portraitIndex][1].childImageSharp.fluid.aspectRatio}vh` }}
							>
								<Img fluid={portraits[portraitIndex++][1].childImageSharp.fluid} />
							</div>
							<div className={styles.imageBottom}>
								<Img fluid={landscapes[landscapeIndex++][1].childImageSharp.fluid} />
							</div>
						</li>
					}
					{landscapeIndex + 1 < landscapes.length &&
						<li style={{
							width: `${37.5 * Math.max(
								landscapes[landscapeIndex][1].childImageSharp.fluid.aspectRatio,
								landscapes[landscapeIndex + 1][1].childImageSharp.fluid.aspectRatio,
							)}vh`
						}}>
							<div
								className={styles.imageTop}
								style={{ width: `${37.5 * landscapes[landscapeIndex][1].childImageSharp.fluid.aspectRatio}vh` }}
							>
								<Img fluid={landscapes[landscapeIndex++][1].childImageSharp.fluid} />
							</div>
							<div
								className={styles.imageBottom}
								style={{ width: `${37.5 * landscapes[landscapeIndex][1].childImageSharp.fluid.aspectRatio}vh` }}
							>
								<Img fluid={landscapes[landscapeIndex++][1].childImageSharp.fluid} />
							</div>
						</li>
					}
					{landscapeIndex + 1 < landscapes.length &&
						<li style={{
							width: `${37.5 * Math.max(
								landscapes[landscapeIndex][1].childImageSharp.fluid.aspectRatio,
								landscapes[landscapeIndex + 1][1].childImageSharp.fluid.aspectRatio,
							)}vh`
						}}>
							<div
								className={styles.imageTop}
								style={{ width: `${37.5 * landscapes[landscapeIndex][1].childImageSharp.fluid.aspectRatio}vh` }}
							>
								<Img fluid={landscapes[landscapeIndex++][1].childImageSharp.fluid} />
							</div>
							<div
								className={styles.imageBottom}
								style={{ width: `${37.5 * landscapes[landscapeIndex][1].childImageSharp.fluid.aspectRatio}vh` }}
							>
								<Img fluid={landscapes[landscapeIndex++][1].childImageSharp.fluid} />
							</div>
						</li>
					}
					{portraits.slice(portraitIndex).map((portrait) => (
						<li style={{ width: `${80 * portrait[1].childImageSharp.fluid.aspectRatio}vh` }} key={portrait}>
							<div className={styles.imageTop}>
								<Img frelativeluid={portrait[1].childImageSharp.fluid} />
							</div>
						</li>
					))}
				</ul>
	        </article>
		</Layout>
	);
};

export default ProjectTemplate;

export const query = graphql`
    query ProjectTemplate($id: String!) {
        strapiProject(id: { eq: $id }) {
            title
            subtitle
            date
            location
			content
			content_eng
            highlight
			highlight_eng
			imageMain {
				childImageSharp {
					fluid(maxWidth: 2500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			imageSecondary {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			picture1 {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			picture2 {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			picture3 {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			picture4 {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			picture5 {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			picture6 {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			picture7 {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
        }
    }
`;
