import { Button, Typography, Box } from '@mui/material';
import { FC } from 'react';


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
    <Box sx={{ flexBasis: '50%' }}>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="h3"
        textAlign='center'
      >
        {checkEditMode ? 'Редактировать фон' : 'Добавить фон'}
      </Typography>
      <Box sx={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Button
          sx={{ margin: '30px 0', display: 'block', width: '350px', textAlign: 'center', fontSize: '18px' }}
          variant="contained"
          component="label"
        >
          {bgData ? 'Загрузить другой файл' : 'Загрузить файл'}
          <input
            type="file"
            accept='image/png, image/jpeg'
            hidden
            onChange={(e)=>{handleSelectedFile(e)}}
          />
        </Button>
        {bgData ? bgData?.name : null}
      </Box>

      {bgData ?
        <Box>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h3"
            textAlign='center'
          >
            Предпросмотр
          </Typography>
          <br />
          <img style={{ width: '300px', height: '300px' }} src={checkEditMode ? bgData.id ? bgData.url : URL.createObjectURL(bgData) : URL.createObjectURL(bgData)} />
        </Box>
        : null
      }
      <Box sx={{ marginTop: '30px' }}>


        <Button
          variant="contained"
          color="success"
          sx={{ padding: '10px', fontSize: '18px' }}
          disabled={!bgData || !!bgData.id}
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