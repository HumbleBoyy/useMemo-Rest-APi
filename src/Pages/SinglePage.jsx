import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import getRequest from '../service/getRequest'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

export default function SinglePage() {
  const {id} = useParams()
  const singleProduct = getRequest(`/products/${id}`)
  const navigate = useNavigate()
  return (
     <>
     <div className='flex items-center justify-between p-5'>
       <Button onClick={()=> navigate(-1)} variant="outlined" startIcon={<ArrowBack/>}></Button>
     </div>
      <div className='flex justify-center py-5'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={singleProduct.images}
            alt={singleProduct.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {singleProduct.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {singleProduct.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
     </div>
     </>
  );
}
