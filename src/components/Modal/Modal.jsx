import { Dialog, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function Modal({ title='', children, onClose, open, ...prop}) {
  return (
    <Dialog open={ open } /*onClose={ onClose }*/ {...prop}>
      <DialogTitle>{title}</DialogTitle>
      
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      {children}
    </Dialog>
  )
}