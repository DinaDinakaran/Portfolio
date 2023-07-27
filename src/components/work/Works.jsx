import React from 'react'
import {projectData} from "./ProjectData"
import WorkItem from './WorkItem'

function Works() {
  return (
    <div >
      <div className="work__container container grid">
        {
            projectData.map((item)=>{
                return <WorkItem item={item} key={item.id} />
            })
        }
      </div>
    </div>
  )
}

export default Works
