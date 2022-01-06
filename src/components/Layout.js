import { Drawer, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const drawerWidth=240
const useStyles=makeStyles({
    page:{
        background:'#f9f9f9',
        width:'100%'
    },
    drawer:{
        width:drawerWidth
    },
    drawerPaper:{
        width:drawerWidth
    },
    root:{
        display:'flex'
    },
    active:{
        background:'#fefefe'
    }
})
const Layout = ({children}) => {
    const history=useHistory()
    const location=useLocation()
    const classes=useStyles()
    const menuItems=[
        {
            item:'My Notes',
            path:'/'
        },
        {
            item:'Create Note',
            path:'/create'
        }
    ]
    return (
        <div className={classes.root}>
            <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{paper:classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5'>
                        Ninja Notes
                    </Typography>
                </div>
                <List>
                   {menuItems.map((ele,i)=>{
                       return (
                           <ListItem
                           onClick={()=>{
                               history.push(ele.path)
                           }}
                           button
                           className={location.pathname===ele.path ? classes.active : null}
                           key={i}>
                                <ListItemText primary={ele.item}/>
                           </ListItem>
                       )
                   })}
                </List>
            </Drawer>
           <div className={classes.page}>
           {children}    
           </div> 
        </div>
    )
}

export default Layout
