import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-slate-600 mb-8">Have questions about admissions, academics, or general inquiries? We're here to help.</p>
          
          <div className="space-y-6">
             <div className="flex items-start">
               <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 text-emerald-600 text-xl mr-4">
                 <i className="fas fa-map-marker-alt"></i>
               </div>
               <div>
                 <h4 className="font-bold text-slate-800">Visit Us</h4>
                 <p className="text-slate-600 text-sm">1-10 Mozambique road,<br/>Barnawa, Kaduna</p>
               </div>
             </div>
             
             <div className="flex items-center">
               <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 text-emerald-600 text-xl mr-4">
                 <i className="fas fa-phone"></i>
               </div>
               <div>
                 <h4 className="font-bold text-slate-800">Call Us</h4>
                 <p className="text-slate-600 text-sm">+234 800 123 4567</p>
               </div>
             </div>

             <div className="flex items-center">
               <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 text-emerald-600 text-xl mr-4">
                 <i className="fas fa-envelope"></i>
               </div>
               <div>
                 <h4 className="font-bold text-slate-800">Email Us</h4>
                 <p className="text-slate-600 text-sm">info@jiniecollege.edu.ng</p>
               </div>
             </div>
          </div>
          
          <div className="mt-12 h-64 bg-slate-200 rounded-xl overflow-hidden relative">
            {/* Interactive Map pointing to Kaduna */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.6!2d7.43!3d10.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI5JzI0LjAiTiA3wrAyNSc0OC4wIkU!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy"
              className="opacity-70"
            ></iframe>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
              <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-colors">
                <option>General Inquiry</option>
                <option>Admissions</option>
                <option>Fees & Accounts</option>
                <option>Report an Issue</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea rows={5} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-transform active:scale-95 shadow-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;