
import React from 'react';

interface NavigationProps {
  activeTab: 'dashboard' | 'schedule' | 'pharmacy' | 'history';
  setActiveTab: (tab: 'dashboard' | 'schedule' | 'pharmacy' | 'history') => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Home', icon: '🏠' },
    { id: 'schedule', label: 'Schedule', icon: '🕒' },
    { id: 'pharmacy', label: 'Pharmacy', icon: '📍' },
    { id: 'history', label: 'History', icon: '📝' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 flex justify-around items-center z-50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id as any)}
          className={`flex flex-col items-center p-2 rounded-xl transition-all ${
            activeTab === tab.id ? 'text-blue-600 scale-110' : 'text-slate-400'
          }`}
        >
          <span className="text-xl mb-1">{tab.icon}</span>
          <span className="text-xs font-medium">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
