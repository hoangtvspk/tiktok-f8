
import {useEffect, useState} from "react"

function Content() {
  const [avatar, setAvatar] = useState()
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]

    file.preview = URL.createObjectURL(file)
    
    setAvatar(file)

    console.log(URL.createObjectURL(file))
  }
  useEffect(()=> {
    return () => {avatar && URL.revokeObjectURL(avatar.preview)}
  },[avatar])
  return (
    <div>
      <input 
            onChange={handlePreviewAvatar} 
            type="file">
      </input>
        {avatar && (
        <img src={avatar.preview} alt = "" width="80%"></img>
      )}
    </div>
  );
}

export default Content;
