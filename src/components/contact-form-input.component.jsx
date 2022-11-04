import './contact-form-input.styles.scss';

export default function ContactFormInput({label, placeHolder, textArea}) {

  return(
    <div className='w-full my-2'>
      <label for={label} className='cfi-label'>{label}</label>
      {
        !textArea ? <input className='cfi-input rounded' 
        type='text' placeholder={placeHolder}
        name={label}></input>
        :
        <textArea className='cfi-input rounded' 
        type='text' placeholder={placeHolder}
        name={label}></textArea>
      }
      
    </div>
  )
}