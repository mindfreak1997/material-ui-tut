import React,{useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import TextFeild from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'

const useStyles=makeStyles({
  feild:{
    marginTop:'20px',
    marginBottom:'20px'
  }
  
})

export default function Create() {
  const classes=useStyles()
  const [title,setTitle]=useState('')
  const [details,setDetails]=useState('')
  const[formErrors,setErrors]=useState({})
  
  const error={}
  const runValidation=()=>{
if(!title){
error.title=false
}
if(!details){
  error.details=false
}
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setErrors({})
    runValidation()
    if(Object.keys(error).length==0){
      console.log(title,details)
    }else{
      setErrors(error)
    }
    
  }
  return (
    <Container>
      <Typography
      variant='h2'
      component='h6'
      color='textSecondary'
      gutterBottom
      >
         Create a new notes
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
         <TextFeild
         onChange={(e)=>{
           setTitle(e.target.value)
         }}
         className={classes.feild}
         label='Note Title'
         variant='outlined'
         color='secondary'
         fullWidth
         required
         error={formErrors.title}
         />
          <TextFeild
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          className={classes.feild}
         label='Details'
         variant='outlined'
         color='secondary'
         fullWidth
         required
         multiline
         rows={4}
         error={formErrors.details}
         />
         <Button
         type='submit'
      variant='contained'
      align='centre'
      color='secondary'
      >
         SUBMIT
      </Button>
      </form>
      
    </Container>
  )
}
