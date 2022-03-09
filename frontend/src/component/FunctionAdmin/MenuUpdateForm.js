import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useEffect , useState} from 'react';


 function MenuUpdateForm({element}) {
  const [form, setForm] = useState(element);
  useEffect(() => {
    setForm(element);
  },[element]);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            variant="standard"
            value={form ? form.title : ""}
            onChange={e => setForm({...form  , title: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            required
            id="_id"
            name="_id"
            label="_id"
            fullWidth
            variant="standard"
            value={form ? form._id : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="category"
            name="category"
            label="Category"
            fullWidth
            variant="standard"
            value={form ? form.category : ""}
            onChange={e => setForm({...form  , category: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            fullWidth
            variant="standard"
            value={form ? form.price : ""}
            onChange={e => setForm({...form  , price: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="image"
            name="image"
            label="Image"
            fullWidth
            variant="standard"
            value={form ? form.image : ""}
            onChange={e => setForm({...form  , image: e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label="Description"
            fullWidth
            variant="standard"
            value={form ? form.description : ""}
            onChange={e => setForm({...form  , description: e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MenuUpdateForm;