import React, { useState } from 'react'
import { Steps, Divider, Modal } from 'antd';
import {useForm} from 'react-hook-form';

export default function App() {
  const [steps, setSteps] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [data,setData]=useState({});
  const [status, setStatus]=useState("");
  const {register, handleSubmit}=useForm();
  const onSubmit=(data)=>setData(data);
  if(steps<0){setSteps(0)};
  console.log(data);
  return (
    <div className='container w-screen h-screen flex justify-center items-center px-2 py-4'>
      <div className='form-outer w-full lg:w-2/4 h-full lg:h-3/4 rounded-lg shadow-lg bg-white p-3 lg:p-8'>
        <div className='flex items-center'>
          <img onClick={() => setSteps(steps - 1)} className={steps>0?'w-6 h-5 mx-5':'hidden'} src="https://img.icons8.com/ios-glyphs/90/null/chevron-left.png" alt="chevron" />
          <Steps
            size="small"
            current={steps}
            items={[
              {
                title: 'Account Type',
              },
              {
                title: 'Login Setup',
              },
              {
                title: 'Start Learning',
              },
            ]}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='form_body w-full overflow-hidden flex py-10'>
          {/* step 1 */}
          <div className={steps == 0 ? "account_type min-w-full px-10 text-center" : "hidden"}>
            <h1 className='text-xl lg:text-2xl mb-20 font-semibold'>Who will be learning English on edu-platform?</h1>
            <div className='grid grid-cols-2 gap-5'>
              <button onClick={() => { setSteps(steps + 1), setStatus('me')}} className='border-2 h-20  rounded-2xl text-start ps-7 text-xl font-semibold'>Me</button>
              <button onClick={() => { setSteps(steps + 1), setStatus('my child')}} className='border-2 h-20 rounded-2xl text-start ps-7 text-xl font-semibold'>My child</button>
            </div>
          </div>
          {/* step 2 */}
          <div className={steps == 1 ? "sign_up min-w-full px-0 lg:px-40 text-center" : "hidden"}>
            <h1 className='text-2xl mb-5 font-semibold'>How would you like to sign up?</h1>
            <div className='flex justify-evenly'>
              <img className='w-10 h-10' src="https://img.icons8.com/color/48/null/google-logo.png" alt="brand" />
              <img className='w-10 h-10' src="https://img.icons8.com/color/600/null/facebook-new.png" alt="brand" />
              <img className='w-10 h-10' src="https://img.icons8.com/sf-black/600/null/mac-os.png" alt="brand" />
            </div>
            <Divider plain style={{ color: "gray", fontSize: "14px" }}>OR</Divider>
            <div className='flex flex-col text-start mb-2'>
              <label>Email Address</label>
              <input className='border-2 my-1 rounded-lg py-2 px-4 outline-none focus:border-green-300' type="text" placeholder='Enter your email address' {...register("Email")}/>
            </div>
            <div className='flex flex-col text-start mb-2'>
              <label>Password</label>
              <input className='border-2 my-1 rounded-lg py-2 px-4 outline-none focus:border-green-300' type="text" placeholder='Enter a password' {...register("Password")}/>
            </div>
          <button className='btn' onClick={() => { setSteps(steps + 1) }}>Create Account</button>
            <li className='list-none text-end font-normal'>Already have an account? <a href="#" className='underline'>Log in</a></li>
          </div>
          {/* step 3 */}
          <div className='name min-w-full text-center'>
            <h1 className='text-2xl mb-5 font-semibold'>Almost there! What’s your name?</h1>
            <div className='px-5 lg:px-40'>
              <div className='flex flex-col text-start mb-2'>
                <label>Your name</label>
                <input className='border-2 my-1 rounded-lg py-2 px-4 outline-none focus:border-green-300' type="text" placeholder='Type your first name' {...register("Name")}/>
              </div>
              <p className='text-start text-gray-500 my-2'>Type your name in English characters will help tutors pronounce your name correctly</p>
              <button className='btn' onClick={()=>{setModalOpen(true)}}>Next</button>
            </div>
            <Modal
            title="Posted Data"
            centered
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
          >
            <p>Username: {data.Name}</p>
            <p>Email: {data.Email}</p>
            <p>Password: {data.Password}</p>
            <p>Status: {status}</p>
          </Modal>
          </div>
        </form>
      </div>
    </div>
  )
}
