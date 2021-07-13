import React, {useState, useEffect} from 'react';
import './index.css';
import {Navbar} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getImages, logout, uploadImage ,deleteImage} from '../../Redux/actions/userAction';
import { API_ENDPPINT } from '../../Constant/apiConfig'
function Home({getImages, user, images, uploadImage}) {
    let history = useHistory();
    const [newImages, setImages] = useState(images ? images.data : [])
    const [userData, setUser] = useState(user ? user.data : null)

    useEffect(() => {
        getImages()
        if (!user) {
            history.push('/login')
        }
    }, [])

  
    
    const dispatch = useDispatch()
    const onChangeImage = async (file) => {
        console.log('file', file.target.files)
        var fd = new FormData()
        fd.append('file',file.target.files[0],file.target.files[0].name)
        let {status} = await uploadImage(fd)
        getImages();
    }
    const logoutt = ()=>{
        history.push('/login')
        logout();
    }

    const deletee = (e)=>{
        console.log(e._id)
       dispatch(deleteImage(e._id))
       getImages()
    }
    const header = () => {
        return(
            <>
            <Navbar bg="dark">
                {!user ? <Navbar.Brand style={{color: '#fff'}} onClick={() => {
                    history.push('/login')
                }}>Login</Navbar.Brand> : 
                <>
                    <div style={{display:'flex',justifyContent:'space-between',width:'100%',padding:7}}>
                       {userData.role == '1' && <input type="file" id="imgupload" onChange={onChangeImage}/> }
                        <h3 style={{color: '#fff'}} onClick={()=>logoutt()}>logout</h3>
                    </div>
                </>
                }
            </Navbar>
            </>
        )
    }
    return(
        <div>
            {header()}
            <div className='gallery-container'>
                {images && images.data.length > 0 ?
                <>
                    {images.data.map((value, index) => {
                    return(
                        <div>
                            <img src={`${API_ENDPPINT}/images/${value.fileName}`} style={{height: 200, width: 300, margin: 10}} />
                           {userData.role == '1' && <button onClick={()=>deletee(value)} >Del</button>}
                        </div>
                        )
                    })}
                </> : 
                <p>Images not found</p>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    images: state.userReducer.images,
})

const mapDispatchToProps = {
    getImages, uploadImage,logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);