import './contact-form-input.styles.scss';

export default function ContactFormInput({id, label, placeHolder, textArea}) {

  return(
    <div className='w-full my-2'>
      <label for={id} className='cfi-label'>{label}</label>
      {
        !textArea ? <input className='cfi-input rounded' 
        type='text' id={id} placeholder={placeHolder}
        name={label}></input>
        :
        <textArea className='cfi-input rounded' 
        type='text' id={id} placeholder={placeHolder}
        name={label} rows="5"></textArea>
      }
    </div>
  )
}