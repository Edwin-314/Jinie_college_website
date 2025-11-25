import React from 'react';
import { FACILITIES_LIST, SCHOOL_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl font-bold text-slate-900 mb-4">About {SCHOOL_NAME}</h1>
           <p className="text-lg text-slate-600 max-w-2xl mx-auto">Founded in 1998, we have consistently delivered top-tier education, blending traditional Nigerian values with modern pedagogical methods.</p>
        </div>
      </div>

      {/* Mission Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-emerald-50 p-8 rounded-2xl">
             <div className="w-12 h-12 bg-emerald-200 text-emerald-800 rounded-full flex items-center justify-center mb-4 text-xl"><i className="fas fa-eye"></i></div>
             <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
             <p className="text-slate-700 leading-relaxed">To be the premier institution for secondary education in Nigeria, recognized globally for producing well-rounded, innovative, and ethical leaders.</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl">
             <div className="w-12 h-12 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center mb-4 text-xl"><i className="fas fa-bullseye"></i></div>
             <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
             <p className="text-slate-700 leading-relaxed">To provide a supportive and challenging learning environment that empowers students to achieve academic excellence and develop strong moral character.</p>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {FACILITIES_LIST.map((facility, idx) => (
             <div key={idx} className="group relative overflow-hidden rounded-xl h-48 shadow-lg cursor-pointer">
                <img src={`https://picsum.photos/400/300?random=${idx + 30}`} alt="Facility" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <p className="text-white font-medium text-sm">{facility}</p>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">School Leadership</h2>
           <div className="flex flex-wrap justify-center gap-8">
             {[1, 2, 3].map((i) => (
               <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center w-64">
                 <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-emerald-100">
                   <img src={`https://picsum.photos/200/200?random=${i + 50}`} alt="Staff" className="w-full h-full object-cover" />
                 </div>
                 <h4 className="font-bold text-slate-800">Mr. Tunde Johnson</h4>
                 <p className="text-xs text-emerald-600 font-semibold uppercase mt-1">Vice Principal (Academics)</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
