import React from 'react';
import {ArrowLeft} from 'lucide-react'
import { useNavigate } from 'react-router-dom';


const LanguageSwitch = () => {
    const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This goes back one page in history
  };
    const languages= [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'ms', name: 'Malay', nativeName: 'Melayu' },
    { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' },
    { code: 'zh-TW', name: 'Traditional Chinese', nativeName: '繁體中文' },
    { code: 'zh-CN', name: 'Simplified Chinese', nativeName: '中文' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
];
  return (
    <div>



      <div className="w-1/1 flex  flex-column justify-center bg-gray-900 text-white  py-3  rounded-lg ">
      <ArrowLeft onClick={goBack} className='absolute top-3 left-3'/>Center
      
      </div>
      {languages.map((lang)=><div className="w-1/1 flex  border border-gray-300 flex-column justify-center  py-3 mx-4 rounded-lg mt-2">
      {lang.nativeName}
      
      </div>)}
      
    </div>
  );
}

export default LanguageSwitch;
