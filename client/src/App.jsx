import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { ToastContainer } from 'react-toastify'
import AddBlog from './pages/AddBlog'
import AddCategory from './pages/AddCategory'
import BlogDetails from './pages/BlogDetails'
import MyBlogs from './pages/MyBlogs'
import SearchBlog from './pages/SearchBlog'
import UpdateBlog from './pages/UpdateBlog'
import Container from './pages/Container'
import MenuBoard from './components/MenuBoard'



// create a context for auth info
export const AuthContext = createContext()

function App() {
  // maintain the user for context
  const [user, setUser] = useState(null)

  return (
    <div>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='registration'
            element={<Registration />}
          />
           <Route
            path='navbar'
            element={<MenuBoard />}
          />
          
        <Route
            path='/container'
            element={user ? <Container /> : <Login />}
          >
            <Route
              path='MyBlogs'
              element={<MyBlogs />}
            />

            <Route
              path='AddBlog'
              element={<AddBlog />}
            />

            <Route
              path='UpdateBlog'
              element={<UpdateBlog />}
            />
            <Route
              path='SearchBlog'
              element={<SearchBlog />}
            />
            <Route
              path='AddCategory'
              element={<AddCategory />}
            />
            <Route
              path='BlogDetails'
              element={<BlogDetails />}
            />
          </Route>
        </Routes>
      </AuthContext.Provider>

      <ToastContainer />
    </div>
  )
}

export default App

