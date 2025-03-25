import React from 'react'
import ArticleProcess from '../../Shared/Components/ArticleProcessing/ArticleProcess'
import HelmetComponent from '../Helmet/HelmetProvider'

function ArticlePage() {
    return (
        <>
            <HelmetComponent title="Article Processing - International Journal of Smart Internet of Things and Applications" />
            <ArticleProcess />
        </>

    )
}

export default ArticlePage
