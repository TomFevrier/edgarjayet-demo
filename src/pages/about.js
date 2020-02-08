import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';

// import styles from './index.module.css';

const About = (props) => {
    return (
        <Layout>
            <SEO title="About" />
			<Header onMouseEnter={null} />
            <div>
                {props.data.allStrapiAbout.edges[0].node.about}
            </div>
        </Layout>
    );
};

export default About;

export const pageQuery = graphql`
    query AboutQuery {
        allStrapiAbout {
            edges {
                node {
                    about
                }
            }
        }
    }
`;
