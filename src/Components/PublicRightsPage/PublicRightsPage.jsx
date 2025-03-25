import React from 'react'
import PublicRights from '../../Shared/Components/PublicationRights/PublicRights'
import HelmetComponent from '../Helmet/HelmetProvider'

function PublicRightsPage() {
    return (
        <>
            <HelmetComponent title="Publication Rights - International Journal of Smart Internet of Things and Applications" />
            <PublicRights />
        </>
    )
}

export default PublicRightsPage
