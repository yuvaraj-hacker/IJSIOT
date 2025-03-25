import React from 'react'
import PeerReview from '../../Shared/Components/Peer-Review/PeerReview'
import HelmetComponent from '../Helmet/HelmetProvider'

function PeerPage() {
    return (
        <>
            <HelmetComponent title="Peer Review Process - International Journal of Smart Internet of Things and Applications" />
            <PeerReview />
        </>
    )
}

export default PeerPage
