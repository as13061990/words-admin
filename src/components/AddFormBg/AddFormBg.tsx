import { Button, Typography, Box, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { FC } from 'react';
import { addType } from '../../types/enums';
import List from '@mui/material/List';
import DeleteIcon from '@mui/icons-material/Delete';


interface IAddFormProps {
  bgData: any
  postBg: () => Promise<void>
  turnOffEditMode: () => void
  editMode: number
  handleSelectedFile: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AddFormBg: FC<IAddFormProps> = ({ bgData, postBg, turnOffEditMode, editMode, handleSelectedFile }) => {

  const checkEditMode = editMode > -1

  return (
    <Box sx={{ flexBasis: '25%' }}>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="h3"
        textAlign='center'
      >
        {checkEditMode ? 'Редактировать фон' : 'Добавить фон'}
      </Typography>

      <Button
        sx={{ margin: '30px 0', display: 'block', width: '300px', textAlign:'center', fontSize: '22px' }}
        variant="contained"
        component="label"
      >
        Загрузить файл
        <input
          type="file"
          accept='image/png, image/jpeg'
          hidden
          onChange={handleSelectedFile}
        />
      </Button>
      <input
          type="file"
          accept='image/png, image/jpeg'
          onChange={handleSelectedFile}
        />
      <Box sx={{ marginTop: '30px' }}>


        <Button
          variant="contained"
          color="success"
          sx={{ padding: '10px', fontSize: '18px' }}
          disabled={!bgData}
          onClick={postBg}
        >
          {checkEditMode ? 'Редактировать фон' : 'Добавить фон'}
        </Button>
        {checkEditMode ? <Button
          variant="contained"
          color="secondary"
          sx={{ padding: '10px', fontSize: '18px', marginLeft: '20px' }}
          disabled={!bgData}
          onClick={turnOffEditMode}
        >
          Сброс
        </Button> : null}
      </Box>
    </Box>
  );
}

export default AddFormBg