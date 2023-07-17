import {
  IconButton,
  ListItem,
  ListItemText,
  Link,
  Divider
} from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export default function ContactItem({ contact: { id, number, name }, divider }) {
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(deleteContact(id))
  }
  return(
    <>
    {divider&&<Divider/>}
    <ListItem
          secondaryAction={
            <IconButton aria-label="delete" onClick={handlerClick}>
              <DeleteIcon/>
            </IconButton>
          }
        >
        <ListItemText>
          {name}: <Link href={`tel:${number}`} underline="hover">{number}</Link>
        </ListItemText>
      </ListItem>
  </>
  )
}