import React, { useState } from 'react';
import { SCHOOL_NAME } from '../constants';

const Admissions: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16 fade-in">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Join Our Community</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We are delighted that you are considering {SCHOOL_NAME} for your child's education.
          Please fill out the form below to begin the application process.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Sidebar Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-900 mb-4">Admissions Process</h3>
            <ol className="relative border-l border-emerald-200 ml-3 space-y-6">
              {[
                { title: 'Submit Application', desc: 'Complete online form and upload documents.' },
                { title: 'Entrance Examination', desc: 'Students sit for Math, English & General Paper.' },
                { title: 'Interview', desc: 'Successful candidates invited for oral interview.' },
                { title: 'Admission Offer', desc: 'Letter of admission issued to qualified students.' }
              ].map((step, idx) => (
                <li key={idx} className="mb-2 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-200 rounded-full -left-3 ring-4 ring-emerald-50">
                   <span className="text-xs font-bold text-emerald-800">{idx + 1}</span>
                  </span>
                  <h4 className="font-semibold text-slate-800 text-sm">{step.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-3">Required Documents</h3>
             <ul className="text-sm text-slate-600 space-y-2">
               <li className="flex items-center"><i className="fas fa-check text-emerald-500 mr-2"></i> Birth Certificate</li>
               <li className="flex items-center"><i className="fas fa-check text-emerald-500 mr-2"></i> Last School Report Card</li>
               <li className="flex items-center"><i className="fas fa-check text-emerald-500 mr-2"></i> Passport Photograph</li>
               <li className="flex items-center"><i className="fas fa-check text-emerald-500 mr-2"></i> Parent's ID Card</li>
             </ul>
          </div>
        </div>

        {/* Application Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <div className="flex mb-8 border-b border-slate-100 pb-4">
              <button onClick={() => setActiveStep(1)} className={`mr-6 pb-2 text-sm font-medium transition-colors ${activeStep === 1 ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-slate-400'}`}>1. Student Info</button>
              <button onClick={() => setActiveStep(2)} className={`mr-6 pb-2 text-sm font-medium transition-colors ${activeStep === 2 ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-slate-400'}`}>2. Guardian Info</button>
              <button onClick={() => setActiveStep(3)} className={`pb-2 text-sm font-medium transition-colors ${activeStep === 3 ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-slate-400'}`}>3. Documents</button>
            </div>

            <form className="space-y-6">
              {activeStep === 1 && (
                <div className="space-y-4 fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
                      <input type="date" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
                      <select className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none">
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Class Applying For</label>
                    <select className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none">
                      <option>Select Class</option>
                      <option>JSS 1</option>
                      <option>JSS 2 (Transfer)</option>
                      <option>SSS 1</option>
                    </select>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4 fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Guardian Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Relationship</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-6 fade-in">
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors">
                    <i className="fas fa-cloud-upload-alt text-4xl text-slate-400 mb-4"></i>
                    <p className="text-sm text-slate-600 font-medium">Upload Birth Certificate</p>
                    <input type="file" className="hidden" id="file1" />
                    <label htmlFor="file1" className="mt-2 inline-block px-4 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-600 cursor-pointer hover:bg-slate-100">Browse Files</label>
                  </div>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors">
                    <i className="fas fa-cloud-upload-alt text-4xl text-slate-400 mb-4"></i>
                    <p className="text-sm text-slate-600 font-medium">Upload Passport Photo</p>
                    <input type="file" className="hidden" id="file2" />
                    <label htmlFor="file2" className="mt-2 inline-block px-4 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-600 cursor-pointer hover:bg-slate-100">Browse Files</label>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6">
                {activeStep > 1 ? (
                  <button type="button" onClick={() => setActiveStep(activeStep - 1)} className="px-6 py-2 border border-slate-300 rounded-lg text-slate-600 font-medium hover:bg-slate-50">Back</button>
                ) : (<div></div>)}
                
                {activeStep < 3 ? (
                  <button type="button" onClick={() => setActiveStep(activeStep + 1)} className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 shadow-md">Next Step</button>
                ) : (
                  <button type="submit" className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 shadow-md">Submit Application</button>
                )}
              </div>
            </form>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4"><i className="fas fa-lock mr-1"></i> All data is secured with SSL encryption.</p>
        </div>
      </div>
    </div>
  );
};

export default Admissions;