import './links.styles.css';
import LinkButton from '../components/link-button.component';
import {Link} from 'react-router-dom'

export default function LinksSection() {

  return(
    <section className='links-section'>
      <LinkButton id='twitterr' btnTxt={'Twitter Link'} redirectLink=''  />
      <LinkButton id='btn__zuri' btnTxt={'Zuri Team'} redirectLink='https://training.zuri.team/'  />
      <LinkButton id='books' btnTxt={'Zuri Books'} redirectLink='http://books.zuri.team/'  />
      <LinkButton id='book__python' btnTxt={'Python Books'} redirectLink='https://books.zuri.team/python-for-beginners?ref_id=Ak__'  />
      <LinkButton id='pitch' btnTxt={'Background Check for Coders'} redirectLink='https://background.zuri.team/'  />
      <LinkButton id='book__design' btnTxt={'Design Books'} redirectLink='https://books.zuri.team/design-rules'  />
      <Link className='link-btn' to='/contact'>
        Contact me
      </Link>
    </section>
  )
}