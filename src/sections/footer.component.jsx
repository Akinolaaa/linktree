import './footer.styles.css';
import ii4glogo from '../assets/i4g-logo.svg'

export default function BottomSection() {

  return (
    <div className='bottom-section'>
      <p className='bs zuri-text'>Zuri<span className='red-dot'></span>Internship</p>
      <p className='bs hng-text'>HNG Internship 9 Frontend Task</p>
      <img className='bs' src={ii4glogo} alt='i4g-logo' />
    </div>
  )
}