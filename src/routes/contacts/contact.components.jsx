import ContactFormInput from '../../components/contact-form-input.component';
import './contact.styles.scss';

export default function ContactPage() {

  return(
    <div className='contact-page-container py-auto sm:p'>
      <div className='sub-container'>
        <h2> Contact Me</h2>
        <p className='text-[#475467] text-[20px]'>
          Hi there contact me about anything you might have in mind
        </p>
        <form className='form-sec my-5'>
          <div className='flex justify-between max-[650px]:block '>
            <ContactFormInput id='first_name' label={'First name'} placeHolder='Enter your first name' />
            <span className='w-5'></span>
            <ContactFormInput id='last_name' label={'Last name'} placeHolder='Enter your last name' />
          </div>
          <ContactFormInput id='email' label={'Email'} placeHolder='yourname@email.com' />
          <ContactFormInput id='message' label={'Message'} textArea placeHolder="Send me a message and I'll as soon as possible..." />

          <input type='checkbox' name='checkbox' />
          <label className='ml-2 font-normal text-[16px] text-[#475467]' for='checkbox'>
            You agree to providing your data to [name] who may contact you.
          </label>
          <br />
          <br />
          <button id='btn__submit' className='w-full rounded bg-[#1570EF] py-2 text-white'>Send message</button>
        </form>
      </div>
    </div>
    
    );
}
/*  */