import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';

import styles from './404.module.css';

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="404" />
			<Header />
			<div className={styles.container}>
				<h1>keep posted.</h1>
				<h3>for the restless, have a look{" "}
					<a
						href="https://www.instagram.com/edgarjayet/"
						target="_blank"
						rel="noopener noreferrer"
					>
						on instagram, @edgarjayet
					</a>
				</h3>
			</div>
        </Layout>
    );
};

export default NotFoundPage;
