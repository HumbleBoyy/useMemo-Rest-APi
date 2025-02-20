import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ProdcutCard({item}) {
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={item.images[0]}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='line-clamp-1'>
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" className='!font-bold text-green-500'>
          <span className='text-black font-semibold'>Price:</span>
          {item.price}$
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="meduim" variant="contained">Saved</Button>
        <Button size="meduim" onClick={()=> navigate(`${item.id}`)} variant="outlined">Learn More</Button>
      </CardActions>
    </Card>
  );
}
