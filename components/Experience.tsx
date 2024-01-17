import React, { useState } from 'react';
import { Data } from '@/data/journey';
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';

export const Experience = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="journey w-[90%] mt-6 lg:h-fit lg:w-3/5 lg:flex lg:flex-wrap ">
      <h1 className="w-full text-2xl lg:flex lg:justify-center lg:mb-8">
        Tracing My Path in Development
      </h1>
      <div className="mt-6 flex flex-col items-center border-slate-500 border-l-[0.5px] lg:flex lg:flex-col lg:justify-center">
        <div className="h-auto lg:w-full lg:flex-col lg:flex lg:flex-wrap">
          {Data.slice(0, 3).map((item, index) => (
            <div
              className="pl-6 relative lg:w-full lg:h-[11rem] lg:flex lg:flex-col lg:justify-center lg:items-start"
              key={index}
            >
              {item.time === 'Present' ? (
                <div className="absolute left-[-0.75rem] top-[5rem] lg:top-[4rem] lg:left-[-0.75rem] flex justify-center items-center w-6 h-6 bg-yellow-400 rounded-full">
                  <div className="absolute w-8 h-8 animate-ping bg-yellow-400  rounded-full"></div>
                </div>
              ) : (
                <div className="absolute left-[-0.75rem] top-[5rem] lg:top-[4rem] lg:left-[-0.75rem] flex justify-center items-center w-6 h-6 bg-yellow-400 rounded-full"></div>
              )}

              <div className="border-2 mb-6 rounded-lg lg:h-[80%] lg:flex lg:flex-col lg:justify-evenly lg:w-full p-4 border-slate-500">
                <h2 className="text-white lg:text-xl">{item.title}</h2>
                <h3 className="text-gray-400 lg:text-base">{item.time}</h3>
                <h3 className="text-slate-300 ">{item.desc}</h3>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`${
            open
              ? 'transition-all ease duration-300 mb-6'
              : 'rotate-180 transition-all ease duration-400'
          }`}
          onClick={handleOpen}
        >
          <ChangeHistoryRoundedIcon />
        </button>
        {open && (
          <div
            className={`h-auto w-full lg:flex lg:flex-col lg:flex-wrap transition-opacity ease-in duration-2000 ${
              open ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {Data.slice(3, 5).map((item, index) => (
              <div
                className="pl-6 relative lg:w-full lg:h-[11rem] lg:flex lg:flex-col lg: justify-center lg:items-start"
                key={index}
              >
                <div className="absolute left-[-0.75rem] top-[3.5rem] lg:top-[4rem] lg:left-[-0.75rem] flex justify-center items-center w-6 h-6 bg-yellow-400 rounded-full"></div>
                <div className="border-2 mb-6 rounded-lg lg:h-[80%] lg:flex lg:flex-col lg:justify-evenly lg:w-full p-4 border-slate-500">
                  <h2 className="text-white lg:text-xl">{item.title}</h2>
                  <h3 className="text-gray-400 lg:text-base">{item.time}</h3>
                  <h3 className="text-slate-300 ">{item.desc}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
