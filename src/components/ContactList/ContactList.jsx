
import {List, Paper} from '@mui/material/';
import ContactItem from 'components/ContactItem';

export default function ContactList({contacts}) {

  return (
    <Paper sx={{mt:"15px"}} square elevation={3}>
      <List disablePadding>
        {contacts.map((contact, idx) => (
          <ContactItem key={contact.id} contact={contact} divider={idx!==0} />
        ))}
      </List>
    </Paper>
    
  )
}
