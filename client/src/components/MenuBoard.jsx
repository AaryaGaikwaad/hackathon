import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'

function Navbar() {
  // get the logged in user info
  const { user, setUser } = useContext(AuthContext)

  // get the navigate function reference
  const navigate = useNavigate()

  // logout user
  const onLogout = () => {
    // clear the cache
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('fullName')
   

    // reset the context
    setUser(null)

    // redirect to login
    navigate('/')
  }

  return (
    <nav
      className='navbar navbar-expand-lg bg-primary'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <Link
          className='navbar-brand'
          to='/container/MyBlogs'
        >
          My Blogs
        </Link>

        <div
          className='collapse navbar-collapse'
          id='navbarText'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/container/AddBlog'
              >
              Add Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/container/UpdateBlog'
              >
              Update Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/container/SearchBlog'
              >
                Search Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/container/AddCategory'
              >
                Add Category
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/container/BlogDetails'
              >
                Blog Details
              </Link>
            </li>
            <li className='nav-item'>
              <button
                onClick={onLogout}
                className='btn'
              >
                Logout
              </button>
            </li>
          </ul>
          {/*<span className='navbar-text'>Welcome {user.fullName}</span>*/}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
