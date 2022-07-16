import { useState } from 'react'
import './add-device-modal.css'
import axios from "axios";
import qs from 'qs';

export function AddDeviceModal(props) {

    const [name, setName]= useState()
    const [id, setId] = useState()

    const onHandleAddDevice = async () => {
        var data = qs.stringify({
            name: name,
            Id: id,
          });
          var config = {
            method: "post",
            url: "https://iot-health.onrender.com/heartSensor",
            headers: {
                token: localStorage.getItem("token"),
            },
            data: data,
          };
      
          await axios(config)
            .then(function (response) {
              alert('success')
              props.closeAddDeviceModal()
            })
            .catch(function (error) {
              alert(error);
            });
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeId = (event) => {
        setId(event.target.value)
    }

    return (
        <>
            <div className='de-add-device-modal'>
                <div className='de-pop-up' onClick={props.closeAddDeviceModal} />
                <div className='de-main-content'>
                    <h1>Device Infomation</h1>
                    <div className='de-wrap-input'>
                        <label>Device Name</label>
                        <input value={name} onChange={onChangeName}></input>
                    </div>
                    <div className='de-wrap-input'>
                        <label>Device Id</label>
                        <input value={id} onChange={onChangeId}></input>
                    </div>
                    <div className='de-wrap-button'>
                        <div className='ds-button-add' onClick={onHandleAddDevice}>Add device</div>
                    </div>
                </div>
            </div>
        </>
    )
}