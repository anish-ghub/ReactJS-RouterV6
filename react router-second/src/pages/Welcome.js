import { Link, Route, Routes, Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to='new-user'>New User</Link>

      {/* 
      <Routes>
        <Route 
        //For Nested Routes Relative Matching /welcome/ not needed
          path="new-user" 
          element={<p>Welcome, new user!</p>}
        />
      </Routes> 
      */}

      {/* Tells where Nested Route Placed */}
      <Outlet/>
      
    </section>
  );
};

export default Welcome;
