
import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../services/user'
import { AuthContext } from '../App'

function Login() {
 const { setUser } = useContext(AuthContext)

 const [info, setInfo] = useState({
    email :'',
    password:'',
 })
  
  const navigate = useNavigate()
  
 const onLogin = async () => {
    if (info.email.length ==0) {
        toast.warn('Please enter email')
    } else if (info.password.length ==0) {
        toast.warn('Please enter password')
    } else {
        const { email, password } = info
        const result = await loginUser(email, password)
        if (result['status'] == 'success') {
            toast.success('Welcome to Blogs World')

            //cache the token
            const {token, fullName } = result['data']
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('fullName', fullName)

            //set the context
            setUser({fullName, email})
            //redirect to AllBlogs
            navigate('/container/AllBlogs')

        }
    }
 }


 return (
    <div>
      <h1 className='page-header'>Login</h1>
      <div className='container'>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
            type='password'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <div className='mb-3'>
            Don't have an account yet? Register <Link to='/registration'>here</Link>
          </div>
          <button
            onClick={onLogin}
            className='btn btn-success'
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login

