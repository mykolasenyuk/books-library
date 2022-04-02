import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import image from './pexels-photo-1290141.jpeg'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card >
        <CardMedia
        component="img"
      
        image={image}
        alt="Library"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Welcome to the Burns Park Elementary Library!
        </Typography>
        <Typography variant="body2" color="text.secondary">
        About the Library:

Burns Park students attend Library class once or twice a week to learn media skills and choose resources for checkout. Students learn how to find, organize, and present information through traditional and technology-related resources. They read quality literature as well as discuss and write about it. Students also work on class assignments that involve research and reading. 

Kindergarten and first grade students may check out 1 item and older students may check out 2 items at a time for leisure reading. There is unlimited checkout for resources needed to complete class assignments. Students may return their checked-out items at any time. 
        </Typography>
      </CardContent>
      
    </Card>
  );
}