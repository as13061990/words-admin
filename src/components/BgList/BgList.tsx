import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { FC } from 'react'


interface IBgList {
  bgs: any[]
  deleteBg: (id: number) => Promise<void>
  turnOnEditMode: (id: number) => void
}


const BgList: FC<IBgList> = ({ bgs, deleteBg, turnOnEditMode }) => {
  return (
    <Box sx={{ flexBasis: '50%' }}>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="h3"
        textAlign='center'
      >
        Фоны
      </Typography>
      <List sx={{ width: '100%', overflowY: 'scroll', height: '80vh', border: '3px solid black', borderRadius: '5px', padding: '15px' }}>
        {bgs.map((bg, i) => {
          return (
            <React.Fragment key={bg.id}>
              <ListItem alignItems="flex-start" sx={{ border: '1px solid black', borderRadius: '15px' }}>
                <ListItemText
                  primary={`Фон ${i}`}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline', fontSize: '20px' }}
                        component="span"
                        variant="subtitle1"
                        color="text.primary"
                      >
                       Предосмотр: <br/>
                       <img style={{width: '100px', height: '100px'}} src={bg.url}/>
                      </Typography>
                    </>
                  }
                />
                <IconButton aria-label="edit" onClick={() => { turnOnEditMode(bg.id) }}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => { deleteBg(bg.id) }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Box sx={{ m: 2 }} />
            </React.Fragment>)
        })}

      </List>
    </Box>);
}

export default BgList