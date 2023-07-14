import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Box, IconButton, Button, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { FC } from 'react'

interface ICityList {
  chapter: Icity[]
  deleteCity: (id: number) => Promise<void>
  turnOnEditMode: (id: number) => void
  setChapterData: React.Dispatch<React.SetStateAction<Ichapter>>
  bgs: any[]
  levels: IlevelResponse[]
  upCity: (i: number) => void
  downCity: (i: number) => void
}


const CityList: FC<ICityList> = ({ chapter, deleteCity, turnOnEditMode, setChapterData, upCity, downCity }) => {
  return (
    <Box sx={{ flexBasis: '40%' }}>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="h3"
        textAlign='center'
      >
        <Button sx={{ marginRight: '30px' }} onClick={() => { setChapterData({ id: -1, data: [] }) }}>
          {`< Назад`}
        </Button>
        Города
        <Button sx={{ marginLeft: '30px' }}>
          Сохранить
        </Button>
      </Typography>

      <List sx={{ width: '100%', overflowY: 'scroll', height: '80vh', border: '3px solid black', borderRadius: '5px', padding: '15px' }}>
        {chapter.map((city, i) => {
          return (
            <React.Fragment key={city.name}>
              <ListItem alignItems="flex-start" sx={{ border: '1px solid black', borderRadius: '15px' }}>
                <ListItemText
                  primary={city.name}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline', fontSize: '20px' }}
                        component="span"
                        variant="subtitle1"
                        color="text.primary"
                      >
                        Айди фон: {city.bg.id}
                      </Typography>
                      <br />
                      <Typography
                        sx={{ display: 'inline', fontSize: '20px' }}
                        component="span"
                        variant="subtitle1"
                        color="text.primary"
                      >
                        Айди уровней: {city.levels.map((level: { id: number }, i: number) => i + 1 === city.levels.length ? `${level.id}` : `${level.id}, `)}
                      </Typography>
                      <br />
                      <Button sx={{ fontSize: '14px', marginRight: '10px', padding: 0 }} onClick={() => upCity(i)}>
                        Верх
                      </Button>
                      <Button sx={{ fontSize: '14px', marginRight: '10px', padding: 0, color: 'red' }} onClick={() => downCity(i)}>
                        Вниз
                      </Button>
                    </>
                  }
                />
                <IconButton aria-label="edit" onClick={() => { turnOnEditMode(1) }}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => { deleteCity(2) }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Box sx={{ m: 2 }} />
            </React.Fragment>)
        })}

      </List>
    </Box>);
}

export default CityList