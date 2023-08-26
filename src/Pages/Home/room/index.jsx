import React from 'react'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'

function RoomPage() {
    const { roomId}=useParams();
    const  myMeeting= async(element)=>{
        const appID = 1208220081;
        const serverSecret = "1518499ffc1db4cd69b481581d079fcd";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(),'Prashant' );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
         zp.joinRoom({
            container:element,
            scenario:{
                mode: ZegoUIKitPrebuilt.VideoConference,
            }
         })  
    }
  return (
    <div className='room-page'><div ref={myMeeting}/></div>

  )
}

export default RoomPage