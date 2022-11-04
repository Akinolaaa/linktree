import ContactFormInput from '../../components/contact-form-input.component';
import './contacts.styles.scss';

export default function ContactsPage() {

  return(
    <div className='contact-page-container py-auto'>
      <div className='sub-container'>
        <h2> Contact Me</h2>
        <p className='text-[#475467]'>
          Hi there contact me about anything you might have in mind
        </p>
        <div className='form-sec my-5'>
          <div className='flex justify-between'>
            <ContactFormInput label={'First name'} placeHolder='Enter your first name' />
            <span className='w-5'></span>
            <ContactFormInput label={'Last name'} placeHolder='Enter your last name' />
          </div>
          <ContactFormInput label={'First name'} placeHolder='Enter your first name' />
          <ContactFormInput label={'Message'} textArea placeHolder="Send me a message and I'll as soon as possible..." />

          <input type='checkbox' />
          <label className='ml-2 font-normal text-[16px] text-[#475467]'>
            You agree to providing your data to [name] who may contact you.
          </label>
          <br />
          <br />
          <button className='w-full rounded bg-[#1570EF] py-2 text-white '>Send message</button>
        </div>
      </div>
    </div>
    
    );
}
/*  */