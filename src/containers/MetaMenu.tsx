import { FC, useEffect, useState } from "react";
import { Container } from "@mui/material";
import CityList from "../components/CityList/CityList";
import MetaList from "../components/MetaList/MetaList";
import { Button } from '@mui/material';
import AddFormCity from "../components/AddFormCity/AddFormCity";
import axiosInstance from "../axiosInstance";
import { SelectChangeEvent } from '@mui/material/Select';

const config = [{
  id: 1,
  data: [{
    name: 'Москва',
    bg: { id: 1 },
    levels: [{ id: 1, }, { id: 2, }]
  }, {
    name: 'Казань',
    bg: { id: 2 },
    levels: [{ id: 3, }, { id: 4, }]
  }],
}, {
  id: 2,
  data: [{
    name: 'Нью-йорк',
    bg: { id: 1 },
    levels: [{ id: 1, }, { id: 2, }]
  }, {
    name: 'Вашингтон',
    bg: { id: 2 },
    levels: [{ id: 3, }, { id: 4, }]
  }],
}, {
  id: 3,
  data: [{
    name: 'Прага',
    bg: { id: 1 },
    levels: [{ id: 1, }, { id: 2, }]
  }, {
    name: 'Брно',
    bg: { id: 2 },
    levels: [{ id: 3, }, { id: 4, }]
  }],
}]
const MetaMenu: FC = () => {
  const [chapters, setChapters] = useState<Ichapter[]>(config)
  const [chapterData, setChapterData] = useState<Ichapter>({ id: -1, data: [] })
  const [editMode, setEditMode] = useState<number>(-1)
  const [bgs, setBgs] = useState<any[]>([]);
  const [bgData, setBgData] = useState<string>([]);
  const [levels, setLevels] = useState<IlevelResponse[]>([]);
  const [levelsData, setLevelsData] = useState<string[]>([]);

  const fetchBgs = async () => {
    const res = await axiosInstance.get('/bg/list')
    setBgs(res.data.data)
  }

  const fetchLevels = async () => {
    const res = await axiosInstance.get('/levels/list')
    setLevels(res.data.data)
  }

  useEffect(() => {
    fetchLevels()
    fetchBgs()
  }, [])


  const deleteCity = async (id: number): Promise<void> => {
    console.log('')
  }

  const turnOnEditMode = (id: number): void => {
    console.log('')
  }

  const deleteChapter = async (id: number): Promise<void> => {
    console.log('')
  }

  const addChapter = async (): Promise<void> => {
    console.log('add')
  }

  const handleChangeLevelsData = (event: SelectChangeEvent): void => {
    const {
      target: { value },
    } = event;
    setLevelsData(typeof value === 'string' ? value.split(',') : value,);
  };

  const handleChangeBgData = (event: SelectChangeEvent) => {
    setBgData(event.target.value as string);
  };

  const upChapter = (i: number) => {
    if (i === 0) return
    const prev = chapters[i - 1]
    const current = chapters[i]
    const copyArr = [...chapters]
    copyArr[i] = prev
    copyArr[i - 1] = current
    setChapters(copyArr)
  };

  const downChapter = (i: number) => {
    if (i + 1 === chapters.length) return
    const next = chapters[i + 1]
    const current = chapters[i]
    const copyArr = [...chapters]
    copyArr[i] = next
    copyArr[i + 1] = current
    setChapters(copyArr)
  };

  const upCity = (i: number) => {
    if (i === 0) return
    const prev = chapterData.data[i - 1]
    const current = chapterData.data[i]
    const copyArr = [...chapterData.data]
    copyArr[i] = prev
    copyArr[i - 1] = current
    setChapterData(prev => { return { id: prev.id, data: copyArr } })
  };

  const downCity = (i: number) => {
    if (i + 1 === chapterData.data.length) return
    const next = chapterData.data[i + 1]
    const current = chapterData.data[i]
    const copyArr = [...chapterData.data]
    copyArr[i] = next
    copyArr[i + 1] = current
    setChapterData(prev => { return { id: prev.id, data: copyArr } })
  };

  const editChapters = () => {
    console.log('')
  }

  const editCities = () => {
    console.log('')
  }

  return (
    <>
      <Container maxWidth={false} sx={{ padding: '0 60px', display: 'flex', gap: '70px' }}>
        {chapterData.id > 0 ?
          <>
            <CityList
              chapter={chapterData.data}
              deleteCity={deleteCity}
              turnOnEditMode={turnOnEditMode}
              setChapterData={setChapterData}
              bgs={bgs}
              levels={levels}
              upCity={upCity}
              downCity={downCity}
            />
            <AddFormCity
              handleChangeLevelsData={handleChangeLevelsData}
              levelsData={levelsData}
              levels={levels}
              bgs={bgs}
              bgData={bgData}
              handleChangeBgData={handleChangeBgData}
              editMode={editMode}
            />
          </>
          :
          <>
            <MetaList
              chapters={chapters}
              deleteChapter={deleteChapter}
              setChapterData={setChapterData}
              upChapter={upChapter}
              downChapter={downChapter}
            />
            <Button variant="contained" sx={{ height: '70px', fontSize: '23px', marginTop: '10px' }} onClick={addChapter}>
              Добавить главу
            </Button>
          </>
        }

      </Container>
    </>
  )
};

export default MetaMenu
