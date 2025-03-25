import React from 'react'
import Contact from '../../Shared/Components/Contact/Contact'
import HelmetComponent from '../Helmet/HelmetProvider'

function ContactPage() {
    return (
        <>
            <HelmetComponent title="contact - International Journal of Smart Internet of Things and Applications" />
            <Contact />
        </>
    )
}

export default ContactPage
