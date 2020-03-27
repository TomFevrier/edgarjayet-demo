import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './404.module.css';

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="404" />
            <div className={styles.container}>
                <h2>Erreur 404</h2>
                <p>Snif snif... Cette page n'existe pas.</p>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
