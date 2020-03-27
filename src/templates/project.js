import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './project.module.css';

const ProjectTemplate = ({ data }) => (
	<Layout>
	{console.log(data.strapiProject)}
        <SEO title={data.strapiProject.title} />
        <article>
			<ul className={styles.container}>
	            <li>
				</li>
	            <li className={styles.text}>
	                <h2>
	                    <span className={styles.title}>
	                        {data.strapiProject.title}
	                    </span>
	                    <span className={styles.date}>
	                        {new Date(data.strapiProject.date).getFullYear()}
	                    </span>
	                </h2>
	                <p className={styles.content}>{data.strapiProject.content}</p>
	            </li>
			</ul>
        </article>
	</Layout>
);

export default ProjectTemplate;

export const query = graphql`
    query ProjectTemplate($id: String!) {
        strapiProject(id: { eq: $id }) {
            title
            subtitle
            category
            date
            location
            highlight
            content
			imageMain {
				childImageSharp {
					fluid(maxWidth: 1000) {
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

// imageMain {
// 	childImageSharp {
// 		fluid(maxWidth: 1000) {
// 			...GatsbyImageSharpFluid
// 		}
// 	}
// }
// imageSecondary {
// 	childImageSharp {
// 		fluid(maxWidth: 1000) {
// 			...GatsbyImageSharpFluid
// 		}
// 	}
// }
// images {
// 	childImageSharp {
// 		fluid(maxWidth: 1000) {
// 			...GatsbyImageSharpFluid
// 		}
// 	}
// }
