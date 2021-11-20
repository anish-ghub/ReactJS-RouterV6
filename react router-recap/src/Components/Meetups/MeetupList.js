import React from 'react'
import MeetupItem from './MeetupItem'
import styles from './MeetupList.module.css'

const MeetupList = (props) => {
    return (
        <ul className={styles.list}>
            {
                props.dataArray.map( (para) => 
                    <MeetupItem  
                        key={para.id}
                        id={para.id}
                        image={para.image}
                        title={para.title}
                        address={para.address}
                        description={para.description}
                    />
                )
            }
        </ul>
    )
}

export default MeetupList


