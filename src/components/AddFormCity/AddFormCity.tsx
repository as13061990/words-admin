import { Button, Typography, Box, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { FC, useState } from 'react';
import { addType } from '../../types/enums';
import List from '@mui/material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type IlevelsDataSelect = string[] 

interface IAddFormCityProps {
  editMode: number
  bgs: any[]
  levels: IlevelResponse[]
  levelsData: string[]
  handleChangeLevelsData: (event: SelectChangeEvent) => void
  bgData: string
  handleChangeBgData: (event: SelectChangeEvent) => void
}

const AddFormCity: FC<IAddFormCityProps> = ({ editMode, bgs, levelsData, handleChangeLevelsData, levels, bgData, handleChangeBgData }) => {

  const checkEditMode = editMode > -1

  return (
    <Box sx={{ flexBasis: '25%' }}>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="h3"
        textAlign='center'
      >
        {checkEditMode ? 'Редактировать город' : 'Добавить город'}
      </Typography>
      <Box sx={{ marginTop: '30px' }}>

        <Box sx={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
          <FormControl>
            <InputLabel id="levels">Уровни</InputLabel>
            <Select
              labelId="levels"
              id="levels"
              multiple
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              value={levelsData}
              onChange={handleChangeLevelsData}
              label={'Уровни'}
              input={<OutlinedInput label="Уровни" />}
              sx={{ minWidth: '200px' }}
            >
              {levels.map((level) => (
                <MenuItem
                  key={level.id}
                  value={level.id}
                >
                  {level.id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>


        <Box sx={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Фон</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bgData}
              sx={{minWidth: '200px'}}
              label="Фон"
              onChange={handleChangeBgData}
            >
              {bgs.map((bg) => (
                <MenuItem
                  key={bg.id}
                  value={bg.id}
                >
                  {bg.id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>


        <Button
          variant="contained"
          color="success"
          sx={{ padding: '10px', fontSize: '18px' }}
          disabled={bgData.length === 0 || levelsData.length === 0}
        >
          {checkEditMode ? 'Редактировать город' : 'Добавить город'}
        </Button>
      </Box>
    </Box>
  );
}

export default AddFormCity