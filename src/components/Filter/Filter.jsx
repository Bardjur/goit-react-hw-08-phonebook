import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { selectFilter } from "redux/filter/selectors";
import { useDispatch, useSelector } from "react-redux";
import { filterChange } from "redux/filter/slice";

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterChange(e.target.value));
   }
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mt:'15px'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search name"
        required
        inputProps={{
          'aria-label': 'search name',
          pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        }}
        onChange={handleChange}
        value={filter}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
