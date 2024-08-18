//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )


//Write your code here
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    var[blog, setBlog] = useState([])
    useEffect (()=>{
      axios.get('http://localhost:3001/get').then((response)=>{
      console.log(response);
      setBlog(response.data);
      }).catch((error)=>{
        console.log(error)
      })
    },[]) 
    var navigate = useNavigate();
    const editBlog = (blog)=>{
        console.log(blog)
        navigate('/add', {state :{val : blog}})
        console.log(blog);
    }
    const deleteBlog= (id)=>{
        console.log(id)
        axios.delete('http://localhost:3001/delete/'+id).then((response)=>{
        console.log(response);
        window.location.reload(true);
        }).catch((error)=>{
          console.log(error);
        })
    }
  return (
    <div style={{marginLeft:'2%' ,marginTop:"2%",marginBottom:'2%',marginRight:'2%'}}>
        <Grid container spacing={2}>
            {blog.map((val,i)=>{
                return (
                    <Grid key={val.id}item xs={12} md={3}>
                        <Card sx={{ maxWidth: 390 }}>
                                <CardMedia
                                    sx={{ height: 240 }}
                                    image={val.img_url}   
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {val.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h4" component="div">
                                    {val.content}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small" onClick={()=>{deleteBlog(val._id)}} variant="contained" id="deleteButton">Delete</Button>
                                <Button id ="editButton" onClick={()=>{editBlog(val)}} variant="contained" size="small">Edit</Button>
                                
                                </CardActions>
                                
                            </Card>
                    </Grid>
                )
            })}

        </Grid>
    </div>
  )
}

export default Home