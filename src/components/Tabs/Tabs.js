import React, { useState } from 'react'
import { data } from './data'
import Typography from '@mui/material/Typography'
import './Tabs.css'
import { Box,Button} from '@mui/material'

export const Tabs = () => {
    const jobs=data
    const [value,setValue]=useState(0)
    const {dates,duties,title}=jobs[value]

  return (
    <div className='tabs'>
        <div className='bParent'>

        {
            jobs.map((item,index)=>{
                
                return     <Button onClick={()=>{setValue(index)}} key={item.id} className={`tabButton ${index===value && 'activeButton'}`} >
                    {item.company}
                </Button>
               
                
            })
        }
        </div>
      
      

        {/* jobs info */}
        <Box padding={2}>
            <Typography variant="h5" color="initial">
                {title}
            </Typography>
            <Typography variant="body2" color="initial">
                {dates}
            </Typography>
            {
                duties.map((duty,index)=>{
                    return <div key={index}>
                            <Typography variant="body2" color="initial">
                                {duty}
                            </Typography>
                    </div>
                })
            }
        </Box>

    </div>
  )
}
