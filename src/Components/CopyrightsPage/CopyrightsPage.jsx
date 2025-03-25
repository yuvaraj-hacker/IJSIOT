import React from 'react'
import Copyrights from '../../Shared/Components/Copyrights/Copyrights'
import HelmetComponent from '../Helmet/HelmetProvider'

function CopyrightsPage() {
    return (
        <>
            <HelmetComponent title="Copyrights - International Journal of Smart Internet of Things and Applications" />
            <Copyrights />
        </>
    )
}

export default CopyrightsPage
