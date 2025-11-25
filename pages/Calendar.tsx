import React, { useState } from 'react';
import { UPCOMING_EVENTS } from '../constants';

const Calendar: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredEvents = filter === 'all' 
    ? UPCOMING_EVENTS 
    : UPCOMING_EVENTS.filter(e => e.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Academic Calendar</h1>
          <p className="text-slate-500 mt-2">2023/2024 Academic Session • Second Term</p>
        </div>
        
        {/* Filter */}
        <div className="flex space-x-2 mt-4 md:mt-0 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
          {['all', 'academic', 'sport', 'holiday'].map((cat) => (
             <button 
               key={cat}
               onClick={() => setFilter(cat)}
               className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                 filter === cat ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-100'
               }`}
             >
               {cat}
             </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Calendar Grid Visual */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-fit">
           <h3 className="font-bold text-slate-800 mb-4 text-center">January 2024</h3>
           <div className="grid grid-cols-7 gap-1 text-center text-sm">
             {['S','M','T','W','T','F','S'].map((d, i) => (
               <div key={i} className="text-slate-400 font-medium py-1">{d}</div>
             ))}
             {Array.from({length: 31}, (_, i) => i + 1).map((day) => (
               <div 
                 key={day} 
                 className={`py-2 rounded-full cursor-pointer hover:bg-emerald-50 ${
                    day === 8 ? 'bg-emerald-100 text-emerald-700 font-bold' : 'text-slate-700'
                 }`}
               >
                 {day}
               </div>
             ))}
           </div>
        </div>

        {/* Events List */}
        <div className="lg:col-span-3 space-y-4">
          {filteredEvents.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow fade-in">
              <div className="md:w-32 flex-shrink-0 flex flex-row md:flex-col items-center justify-center md:border-r border-slate-100 md:pr-6 mb-4 md:mb-0 gap-2 md:gap-0">
                 <span className="text-3xl font-bold text-slate-800">{new Date(event.date).getDate()}</span>
                 <span className="text-sm font-medium text-emerald-600 uppercase tracking-wider">
                   {new Date(event.date).toLocaleString('default', { month: 'long' })}
                 </span>
              </div>
              <div className="pl-0 md:pl-6 flex-grow">
                 <div className="flex justify-between items-start">
                   <h3 className="text-lg font-bold text-slate-800 mb-2">{event.title}</h3>
                   <span className={`px-2 py-1 rounded text-xs font-semibold uppercase ${
                      event.category === 'holiday' ? 'bg-red-100 text-red-700' :
                      event.category === 'sport' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                   }`}>
                     {event.category}
                   </span>
                 </div>
                 <p className="text-slate-600">{event.description}</p>
                 <div className="mt-4 flex items-center text-sm text-slate-400">
                   <i className="far fa-clock mr-2"></i> 8:00 AM - 2:00 PM
                 </div>
              </div>
            </div>
          ))}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              No events found for this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
