import { Container, Grid } from '@material-ui/core'
import React from 'react'
import data from '../mock.json'
import NoteCard from '../components/NoteCard'

export default function Notes() {
  return (
    <Container>
      <Grid container spacing={3}>
      {data.map(ele=>{
       return (<Grid key={ele.id}  item xs={12} md={6} lg={4}>
       <NoteCard note={ele}/>
      </Grid >) 
     })} 
     </Grid >
    </Container>
  )
}
