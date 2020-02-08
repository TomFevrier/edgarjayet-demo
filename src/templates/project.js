import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactPlayer from 'react-player';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './project.module.css';

const ProjectTemplate = ({ data }) => (
	<Layout>
        <SEO title={data.strapiProject.title} />
        <article>
            <div className={styles.imageMain}></div>
            <div className={styles.text}>
                <h2>
                    <span className={styles.title}>
                        {data.strapiProject.title}
                    </span>
                    <span className={styles.date}>
                        {new Date(data.strapiProject.date).getFullYear()}
                    </span>
                </h2>
                <p className={styles.content}>{data.strapiProject.content}</p>
            </div>
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
