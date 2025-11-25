import React from 'react';
import { Page } from '../types';
import { LATEST_NEWS, PRINCIPAL_NAME, SCHOOL_NAME, UPCOMING_EVENTS } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=10" 
            alt="Students learning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-slate-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6 fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-100 text-sm font-medium backdrop-blur-sm">
              Admissions Open for 2024/2025
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Empowering Minds, <br/>
              <span className="text-emerald-400">Shaping the Future</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              Welcome to {SCHOOL_NAME}, where academic excellence meets moral integrity. We nurture the next generation of Nigerian leaders in a world-class environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => onNavigate('admissions')}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-emerald-900/20 transition-all transform hover:-translate-y-1"
              >
                Apply for Admission
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold rounded-lg transition-all"
              >
                Take a Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Academic Excellence', icon: 'fa-book-open', desc: 'Outstanding WAEC & NECO results with a blend of Nigerian and British curricula.', color: 'bg-white' },
            { title: 'Holistic Development', icon: 'fa-users', desc: 'Focus on sports, leadership, arts, and character building.', color: 'bg-emerald-50' },
            { title: 'Modern Facilities', icon: 'fa-laptop-code', desc: 'State-of-the-art labs, ICT centers, and boarding facilities.', color: 'bg-white' },
          ].map((card, idx) => (
            <div key={idx} className={`${card.color} p-8 rounded-xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow`}>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <i className={`fas ${card.icon} text-emerald-700 text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principal's Welcome */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full z-0"></div>
            <img 
              src="https://picsum.photos/600/800?random=20" 
              alt="Principal" 
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto md:mx-0 object-cover"
            />
            <div className="absolute bottom-8 -right-4 bg-white p-4 rounded-lg shadow-lg z-20 max-w-xs hidden md:block border-l-4 border-emerald-500">
              <p className="text-sm font-bold text-slate-800">{PRINCIPAL_NAME}</p>
              <p className="text-xs text-slate-500">Principal</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Welcome from the Principal</h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full"></div>
            <p className="text-lg text-slate-600 italic">
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            </p>
            <p className="text-slate-600 leading-relaxed">
              At {SCHOOL_NAME}, we believe in nurturing the whole child. Our commitment goes beyond academic rigor; we strive to instill values of integrity, discipline, and empathy. We are proud of our heritage and our contribution to the Nigerian educational landscape.
            </p>
            <button 
              onClick={() => onNavigate('about')}
              className="text-emerald-700 font-semibold hover:text-emerald-800 flex items-center group"
            >
              Read full message <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Parallax */}
      <section className="bg-emerald-900 py-16 text-white bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Students', val: '1,200+' },
              { label: 'Qualified Teachers', val: '85+' },
              { label: 'Years of Excellence', val: '25' },
              { label: 'University Placement', val: '100%' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-emerald-400">{stat.val}</div>
                <div className="text-emerald-100 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Happening at {SCHOOL_NAME}</h2>
            <p className="text-slate-500">Latest news, updates and upcoming events.</p>
          </div>
          <button onClick={() => onNavigate('news')} className="text-sm font-medium text-emerald-600 hover:underline">View All News</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Column (Span 2) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {LATEST_NEWS.slice(0, 2).map((news) => (
              <div key={news.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
                <div className="h-48 overflow-hidden">
                  <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">{news.category}</span>
                    <span className="text-xs text-slate-400"><i className="far fa-calendar mr-1"></i> {news.date}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">{news.title}</h3>
                  <p className="text-sm text-slate-600 line-clamp-3">{news.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Events Column (Span 1) */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center">
              <i className="far fa-calendar-alt text-emerald-600 mr-2"></i> Upcoming Events
            </h3>
            <div className="space-y-4">
              {UPCOMING_EVENTS.slice(0, 4).map((event) => (
                <div key={event.id} className="flex gap-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex-shrink-0 w-12 text-center pt-1">
                    <div className="text-xs font-bold text-emerald-600 uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                    <div className="text-xl font-bold text-slate-800">{new Date(event.date).getDate()}</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 line-clamp-1">{event.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => onNavigate('calendar')}
              className="w-full mt-6 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-600 hover:bg-white hover:text-emerald-600 transition-colors"
            >
              View Full Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;