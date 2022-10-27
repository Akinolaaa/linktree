import './profile.styles.css';
import iprofileImg from '../assets/image.svg';

export default function ProfileSection() {

  return(
    <div className='profile-section'>
      <img src={iprofileImg} id='profile_img' alt='profile_img' />
      <h2 id='twitter'> akinolaa_ </h2>
      <h2 id='slack'> akinolaaa </h2>
    </div>
  )
}