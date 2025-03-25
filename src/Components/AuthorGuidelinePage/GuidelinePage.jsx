import React from 'react'
import Guideline from '../../Shared/Components/AuthorGuideline/Guideline'
import HelmetComponent from '../Helmet/HelmetProvider'

function GuidelinePage() {
    return (
        <>
            <HelmetComponent title="Author Guidelines - International Journal of Smart Internet of Things and Applications" />
            <Guideline />
        </>
    )
}

export default GuidelinePage
