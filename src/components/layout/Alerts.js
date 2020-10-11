import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

import '../../styles/External.css'

const Alerts = () => {

    const alertContext = useContext(AlertContext)

    return (
        alertContext.alerts.length > 0 && alertContext.alerts.map(alert => {
           return (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle'></i> {alert.message}
            </div>
           )
        })
    )
}

export default Alerts
