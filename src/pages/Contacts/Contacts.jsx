import { Container, Fab, Typography } from "@mui/material";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import AddIcon from '@mui/icons-material/Add';
import Modal from "components/Modal";
import AddContactForm from "components/AddContactForm";
import { useState } from "react";
import { selectFilter } from "redux/filter/selectors";
import { selectContacts } from "redux/contacts/selectors";

export default function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClose = (e) => { setIsModalOpen(false) }
  const dispatch = useDispatch();
  const {contacts} = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));

  useEffect(() => {
    dispatch(fetchContacts())
    
  }, [dispatch])
  return (
    <Container maxWidth="sm" sx={{ mt: "15px" }}>
      <Typography textAlign="center" variant="h4">Contacts</Typography>

      <Fab
        color="primary"
        aria-label="add contact"
        sx={{ d: 'flex', ml: 'auto' }}
        onClick={() => {setIsModalOpen(true)}}
      >
        <AddIcon />
      </Fab>

      <Filter/>

      <ContactList contacts={filteredContacts}/>
      
      <Modal
        title="Add contact"
        open={isModalOpen}
        onClose={handleClose}
        fullWidth={true}
      >
        <AddContactForm onClose={handleClose} />
      </Modal>
    </Container>
  )

}