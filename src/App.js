import './App.css';
import ProfileSection from './sections/profile.component';
import LinksSection from './sections/links.component';
import BottomSection from './sections/footer.component';
import IconsSection from './sections/icons.component';
import irightarrow from './assets/right-curve-arrow.svg';
import ithreedot from './assets/three-dot-icon.svg';

export default function App() {
  return (
    <>
      <img className='right-arrow-icon' src={irightarrow} alt='icon' />
      <img className='three-dot-icon' src={ithreedot} alt='iicon' />
      <div className="app">
        <ProfileSection />
        <LinksSection />
        <BottomSection />
        <IconsSection />
      </div>
    </>
    
  );
}

