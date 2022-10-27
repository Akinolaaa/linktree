import './icons.styles.css';
import igithub from '../assets/github-icon.svg';
import islack from '../assets/slack-icon.svg';

export default function IconsSection() {


  return(
    <div className='icons-section'>
      <div className='icons-sub-section'>
        <img src={islack} alt='slack-icon' />
        <img src={igithub} alt='github-icon' />
      </div>
    </div>
  )
}