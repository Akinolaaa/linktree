import './link-button.styles.css';

export default function LinkButton({id, redirectLink, btnTxt}) {

  return(
    <a className='link-btn' href={redirectLink} id={id}>
      {btnTxt}
    </a>
  )
}