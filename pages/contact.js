import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Label, InputWrapper } from '../styles/styles.js';
import { motion, AnimatePresence } from 'framer-motion';

const contact = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      from_name: '',
      reply_to: '',
      message: '',
    },
    validationSchema: Yup.object({
      from_name: Yup.string()
        .max(20, 'Should not exceed 20 characters')
        .required('*Name field is required'),
      reply_to: Yup.string()
        .email('Invalid email address')
        .required('*Email field is required'),
      message: Yup.string().required('*Message field is required'),
    }),
    onSubmit: (values) => {
      try {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_SERVICE,
            process.env.NEXT_PUBLIC_TEMPLATE,
            values,
            process.env.NEXT_PUBLIC_USER
          )
          .then(() => {
            router.push('/thanks');
          });
      } catch (error) {
        console.log(error);
      }
    },
  });

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
              onSubmit={formik.handleSubmit}>
              <InputWrapper>
                <Label htmlFor='from_name'>Name</Label>
                <input
                  type='text'
                  id='from_name'
                  name='from_name'
                  autoComplete='off'
                  className='rounded'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.from_name}
                />
                {formik.errors.from_name ? (
                  <div className='text-red-500'>{formik.errors.from_name}</div>
                ) : null}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor='reply_to'>Email</Label>
                <input
                  type='email'
                  id='reply_to'
                  name='reply_to'
                  autoComplete='off'
                  className='rounded'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.reply_to}
                />
                {formik.errors.reply_to ? (
                  <div className='text-red-500'>{formik.errors.reply_to}</div>
                ) : null}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor='message'>Message</Label>
                <textarea
                  className='rounded'
                  id='message'
                  name='message'
                  autoComplete='off'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
                {formik.errors.message ? (
                  <div className='text-red-500'>{formik.errors.message}</div>
                ) : null}
              </InputWrapper>

              <input type='hidden' name='contact_number' />

              <button
                className='rounded h-14 bg-gray-50 text-gray-800 mt-12 cursor-pointer font-extrabold text-xl transition ease-in duration-300 hover:text-gray-50 hover:bg-red-600'
                type='submit'
                disabled={formik.isSubmitting}>
                Send
              </button>
            </form>
          </div>
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default contact;
