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
  console.log(singleProduct)
  const navigate = useNavigate()
  return (
     <div className='h-[100vh] flex items-center mx-auto'>
      <div className='flex justify-center'>
      <Card sx={{ maxWidth: 1045 }} className='flex items-center'>
        <CardActionArea>
          <CardMedia
            className='h-[500px]'
            component="img"
            height="3000"
            image={singleProduct.images}
            alt={singleProduct.title}
          />
        </CardActionArea>
        <CardActionArea>
          <CardContent className='h-[500px] p-2'>
            <Typography gutterBottom variant="h5" component="div" className=''>
              {singleProduct.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {singleProduct.description}
            </Typography>
            <div className='flex justify-self-auto'>
              <Button onClick={()=> navigate(-1)} size='large' variant="outlined" className='w-full' startIcon={<ArrowBack/>}>Back</Button>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
     </div>
     </div>
  );
}
