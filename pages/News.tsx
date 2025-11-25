import React from 'react';
import { LATEST_NEWS, SCHOOL_NAME } from '../constants';

const News: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900">News & Updates</h1>
        <p className="text-slate-500 mt-2">Stay connected with the latest happenings at {SCHOOL_NAME}.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LATEST_NEWS.map((news) => (
          <div key={news.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-56 overflow-hidden relative">
              <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">{news.category}</span>
            </div>
            <div className="p-6 flex-grow flex flex-col">
               <div className="text-xs text-slate-400 mb-2"><i className="far fa-clock"></i> {news.date}</div>
               <h3 className="text-xl font-bold text-slate-800 mb-3">{news.title}</h3>
               <p className="text-slate-600 text-sm mb-4 flex-grow">{news.excerpt}</p>
               <button className="text-emerald-600 font-semibold text-sm hover:underline self-start">Read More &rarr;</button>
            </div>
          </div>
        ))}
        {/* Placeholder for more news */}
        {[1, 2, 3].map((i) => (
           <div key={`p-${i}`} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col opacity-75 hover:opacity-100 transition-opacity">
            <div className="h-56 bg-slate-100 flex items-center justify-center">
              <i className="fas fa-image text-4xl text-slate-300"></i>
            </div>
            <div className="p-6">
               <div className="h-4 bg-slate-100 w-1/3 mb-4 rounded"></div>
               <div className="h-6 bg-slate-100 w-3/4 mb-3 rounded"></div>
               <div className="h-4 bg-slate-100 w-full mb-2 rounded"></div>
               <div className="h-4 bg-slate-100 w-2/3 rounded"></div>
            </div>
           </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
         <button className="px-8 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors">Load More News</button>
      </div>
    </div>
  );
};

export default News;