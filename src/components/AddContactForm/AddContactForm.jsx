import { Box, TextField, Button } from "@mui/material";
import { isIncludeContact } from "helpers/forContactForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from 'redux/contacts/selectors';
import { toast } from 'react-toastify';
import { addContact } from "redux/contacts/operations";

export default function AddContactForm({onClose}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const {contacts} = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (isIncludeContact(name, contacts)) {
      toast.error(`${name} is already in contacts`, {
        theme: 'colored',
      });
      return
    }

    dispatch(addContact({name, number}));

    setName('');
    setNumber('');
    onClose();
  }
  
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{ p: "15px" }}
    >
      <TextField
        autoFocus
        margin="normal"
        label="Name"
        name="name"
        type="text"
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        }}
        fullWidth
        required
        variant="standard"
        value={name}
        onChange={(e)=> {setName(e.target.value)}}
      />
      <TextField
        margin="normal"
        label="Phone"
        name="phone"
        type="phone"
        inputProps={{
          pattern: "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",
        }}
        fullWidth
        required
        variant="standard"
        value={number}
        onChange={(e)=> {setNumber(e.target.value)}}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
      >Add contact</Button>
    </Box>
  )
}