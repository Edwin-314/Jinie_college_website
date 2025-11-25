import React from 'react';

const Academics: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Academic Curriculum</h1>
      
      <div className="space-y-12">
        {/* Junior School */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-emerald-100 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-emerald-900 mb-2">Junior Secondary</h2>
            <p className="text-emerald-700 font-medium">JSS 1 - JSS 3</p>
            <div className="mt-4 w-12 h-1 bg-emerald-500"></div>
          </div>
          <div className="md:w-2/3 p-8">
            <p className="text-slate-600 mb-4">Our Junior Secondary School curriculum is based on the Nigerian Basic Education curriculum, designed to provide a broad foundation for further studies.</p>
            <h4 className="font-bold text-slate-800 mb-2">Core Subjects:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-slate-600">
              <span className="flex items-center"><i className="fas fa-check text-xs text-emerald-500 mr-2"></i> Mathematics</span>
              <span className="flex items-center"><i className="fas fa-check text-xs text-emerald-500 mr-2"></i> English Language</span>
              <span className="flex items-center"><i className="fas fa-check text-xs text-emerald-500 mr-2"></i> Basic Science</span>
              <span className="flex items-center"><i className="fas fa-check text-xs text-emerald-500 mr-2"></i> Basic Technology</span>
              <span className="flex items-center"><i className="fas fa-check text-xs text-emerald-500 mr-2"></i> Civic Education</span>
              <span className="flex items-center"><i className="fas fa-check text-xs text-emerald-500 mr-2"></i> French</span>
              <span className="flex items-center"><i className="fas fa-check text-xs text-emerald-500 mr-2"></i> Social Studies</span>
              <span className="flex items-center"><i className="fas fa-check text-xs text-emerald-500 mr-2"></i> Business Studies</span>
            </div>
          </div>
        </div>

        {/* Senior School */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-blue-100 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Senior Secondary</h2>
            <p className="text-blue-700 font-medium">SSS 1 - SSS 3</p>
            <div className="mt-4 w-12 h-1 bg-blue-500"></div>
          </div>
          <div className="md:w-2/3 p-8">
            <p className="text-slate-600 mb-4">The Senior School focuses on preparing students for WASSCE, NECO, and JAMB. Students are guided into Science, Art, or Commercial departments based on aptitude.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Science</h4>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>Technical Drawing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Arts</h4>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Literature in English</li>
                  <li>Government</li>
                  <li>CRS/IRS</li>
                  <li>History</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Commercial</h4>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Financial Accounting</li>
                  <li>Commerce</li>
                  <li>Economics</li>
                  <li>Office Practice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
