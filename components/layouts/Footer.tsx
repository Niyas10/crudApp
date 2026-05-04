import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="bg-[#647FBC] py-4 mt-10">
          <p className="text-white  text-[12px] text-center">
            &copy; {new Date().getFullYear()} CRUD APP. All rights reserved.
          </p>
        </div>
    </footer>
    </>
  )
}

export default Footer