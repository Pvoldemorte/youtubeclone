import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import {IoIosNotificationsOutline} from "react-icons/io"
import {BiVideoPlus} from "react-icons/bi"
import { IoLogoYoutube } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { GrSearch } from "react-icons/gr";
import "./Navbar.css"

const Navbar = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  useEffect(() => {
    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscription(transcript);
    };
  }, []);

  const handleToggleRecording = () => {
    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const handleInputData = (e) => {
    setTranscription(e.target.value)
  }

  return (
    <div>
      <nav className="navbar">
        <div className="logoName"><IoLogoYoutube className='youtubeLogo' /><span>Youtube</span></div>
        <div className='navSearchbarwithicon'>
        <input type='search' className='navSearchbar' placeholder='search' value={transcription} onChange={handleInputData}/>
        <GrSearch className='searchLogo' />
        <MdKeyboardVoice className='voiceLogo' onClick={handleToggleRecording}/>
        </div>
        <div>
          <BiVideoPlus className='videoLogo'/>
          <IoIosNotificationsOutline className='notificationLogo'/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar