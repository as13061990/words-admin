import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Box, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { FC } from 'react'


interface IMetaList {
  chapters: Ichapter[]
  deleteChapter: (id: number) => Promise<void>
  setChapterData: React.Dispatch<React.SetStateAction<Ichapter>>
  upChapter: (i: number) => void
  downChapter: (i: number) => void
}

const MetaList: FC<IMetaList> = ({ chapters, deleteChapter, setChapterData, upChapter, downChapter }) => {

  return (
    <Box sx={{ flexBasis: '40%' }}>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="h3"
        textAlign='center'
      >
        Главы
        <Button sx={{ marginLeft: '30px' }}>
          Сохранить
        </Button>
      </Typography>
      <List sx={{ width: '100%', overflowY: 'scroll', height: '80vh', border: '3px solid black', borderRadius: '5px', padding: '15px' }}>
        {chapters.map((chapter, i) => {
          return (
            <React.Fragment key={chapter.id}>
              <ListItem alignItems="flex-start" sx={{ border: '1px solid black', borderRadius: '15px' }}>
                <ListItemText
                  primary={`Айди меты: ${chapter.id}`}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline', fontSize: '20px' }}
                        component="span"
                        variant="subtitle1"
                        color="text.primary"
                      >
                        Города: {chapter.data.map((city, i: number) => i + 1 === city.levels.length ? `${city.name}` : `${city.name}, `)}
                      </Typography>
                      <br />
                      <Button sx={{ fontSize: '14px', marginRight: '10px', padding: 0 }} onClick={() => upChapter(i)}>
                        Верх
                      </Button>
                      <Button sx={{ fontSize: '14px', marginRight: '10px', padding: 0, color: 'red' }} onClick={() => downChapter(i)}>
                        Вниз
                      </Button>
                    </>
                  }
                />
                <IconButton aria-label="edit" onClick={() => { setChapterData(chapter) }}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => { deleteChapter(chapter.id) }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Box sx={{ m: 2 }} />
            </React.Fragment>)
        })}

      </List>
    </Box>);
}

export default MetaList