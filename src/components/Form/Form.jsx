import {Button,Input,Box,} from '@material-ui/core'
// import {makeStyles} from "@material-ui/core/styles"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { booksOperations } from '../../redux/books'
import { booksSelectors } from '../../redux/books/booksSlice'


export default function Form() {
    const [title,setTitle] = useState('')
    const [date,setDate] = useState('')
    const [pages,setPages] = useState('')
    const [image,setImage] = useState('')
    const [shortDescr,setShortDescr] = useState('')
    const [description,setDescription] = useState('')
    const [status,setStatus] = useState('')
    const [authors,setAuthors] = useState('')
  
    

  const books = useSelector(booksSelectors.selectAll)
 const dispatch = useDispatch()


 const handleChange=e=>{
     const {name,value}= e.currentTarget
     switch (name) {
         case 'title':
             setTitle(value)
        break;
         case 'date':
            setDate(value)
        break;
         case 'pageCount':
          setPages(value)
         break;
         case 'imageUrl':
            setImage(value)
         break;
        case 'ShortDescr':
               setShortDescr(value)
         break;
        case 'description':
         setDescription(value)
        break;
        case 'status':
            setStatus(value)
         break;
        case 'authors':
          setAuthors(value)
        break;        
         default:
         break;
     }
 }

 const handleSubmit = e=>{
     e.preventDefault()
     const bookInList = books.find(
         book=>book.title.toLowerCase()===title.toLowerCase()
     )
     if(bookInList){
         console.log("Alredy in list");
         return
     }
     dispatch(booksOperations.addBook({
         title: title,
         publishedDate:{date:date},
         pageCount:pages,
         thumbnailUrl: image,
         shortDescription: shortDescr,
         longDescription: description,
         status: status,
         authors: [authors]


     }))
     reset()
 }
 const reset = ()=>{
     setTitle('')
     setDate('')
     setAuthors('')
     setDescription('')
     setImage('')
     setShortDescr('')
     setStatus('')
     setPages('')
 }

    return(
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}>
          
        
        <Input placeholder="Title" name="title" onChange={handleChange} value={title} />
        <Input placeholder="Publish date" name="date" onChange={handleChange} value={date} />
        <Input placeholder="Page count" name="pageCount" onChange={handleChange} value={pages}/>
        <Input placeholder="Image url" name="imageUrl" onChange={handleChange} value={image} />
        <Input placeholder="Short description" name="ShortDescr" onChange={handleChange} value={shortDescr}/>
        <Input placeholder="Description" name="description" onChange={handleChange}  value={description}/>
        <Input placeholder="Status" name="status" onChange={handleChange}  value={status}/>
        <Input placeholder="Authors" name="authors" onChange={handleChange} value={authors} />
       
       
      <Button  variant='contained' type='submit'  >add book</Button>
    
      </Box>
    )
    
}