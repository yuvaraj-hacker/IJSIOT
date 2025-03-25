import React from 'react'
import Issues from '../../Shared/Components/Issues/Issues'
import HelmetComponent from '../Helmet/HelmetProvider'

function IssuePage() {
    return (
        <>
            <HelmetComponent title="Issues - International Journal of Smart Internet of Things and Applications" />
            <Issues />
        </>
    )
}

export default IssuePage
