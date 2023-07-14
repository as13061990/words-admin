import { useEffect, useState, FC } from "react";
import { Container } from "@mui/material";
import BgList from "../components/BgList/BgList";
import axiosInstance from "../axiosInstance";
import AddFormBg from "../components/AddFormBg/AddFormBg";

const BgMenu: FC = () => {

  const [bgData, setBgData] = useState<any>(null);
  const [bgs, setBgs] = useState<any[]>([]);
  const [editMode, setEditMode] = useState<number>(-1)

  const fetchBgs = async () => {
    const res = await axiosInstance.get('/bg/list')
    setBgs(res.data.data)
  }

  useEffect(() => {
    fetchBgs()
  }, [])

  const deleteBg = async (id: number): Promise<void> => {
    const data = { id: id }
    await axiosInstance.post('/bg/delete', data)
    fetchBgs()
  }
  const turnOnEditMode = (id: number): void => {
    setEditMode(id)
    const findElement = bgs.find(el => el.id === id)
    setBgData(findElement)
  }

  const postBg = async (): Promise<void> => {
    if (editMode > -1) {
      const file = bgData;
      const data = new FormData();
      data.append('file', file, file.name);
      data.append('id', editMode.toString());
      await axiosInstance.post('/bg/edit', data).then(res => fetchBgs())
      setBgs([])
      setEditMode(-1)
    } else {
      const file = bgData;
      const data = new FormData();
      data.append('file', file, file.name);
      await axiosInstance.post('/bg/add', data)
    }
   
    setBgData(null)
    fetchBgs()
  }

  const turnOffEditMode = (): void => {
    setEditMode(-1)
    setBgData(null)
  }

  const handleSelectedFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.files)
    if (!e.target.files) return;
    const file = e.target.files[0];
    setBgData(file);
    e.target.value = ''
  }

  return (
    <>
      <Container maxWidth={false} sx={{ padding: '0 60px', display: 'flex', gap: '70px' }}>
        <BgList
          deleteBg={deleteBg}
          turnOnEditMode={turnOnEditMode}
          bgs={bgs}
        />
        <AddFormBg
          bgData={bgData}
          postBg={postBg}
          editMode={editMode}
          turnOffEditMode={turnOffEditMode}
          handleSelectedFile={handleSelectedFile}
        />
      </Container>
    </>
  )
};

export default BgMenu
