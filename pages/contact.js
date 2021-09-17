import emailjs from 'emailjs-com';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Label, InputWrapper, Input } from '../styles/styles.js';
import { motion, AnimatePresence } from 'framer-motion';

const contact = () => {
  const router = useRouter();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE,
        process.env.NEXT_PUBLIC_TEMPLATE,
        e.target,
        process.env.NEXT_PUBLIC_USER
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    router.push('/thanks');
  }

  return (
    <>
      <Head>
        <title>Harel Panker | Contact</title>
      </Head>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='h-full flex items-center py-32 max-w-full transition-all duration-500'>
          <div className='container flex flex-col items-center'>
            <h1 className='text-center mb-6 font-black text-6xl sm:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600'>
              Contact Me
            </h1>
            <form
              className='md:max-w-md w-full px-8 py-12 dark:bg-gray-700 bg-gray-600 rounded flex flex-col gap-4 max-w-xs'
              onSubmit={sendEmail}>
              <InputWrapper>
                <Label>Name</Label>
                <Input type='text' name='user_name' autofocus required />
              </InputWrapper>
              <InputWrapper>
                <Label>Email</Label>
                <Input type='email' name='user_email' required />
              </InputWrapper>
              <InputWrapper>
                <Label>Message</Label>
                <textarea className='rounded' name='message' />
              </InputWrapper>

              <input type='hidden' name='contact_number' />

              <input
                className='rounded h-14 bg-gray-50 text-gray-800 mt-12 cursor-pointer font-extrabold text-xl transition ease-in duration-300 hover:text-gray-50 hover:bg-red-600'
                type='submit'
                value='Send'
              />
            </form>
          </div>
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default contact;
