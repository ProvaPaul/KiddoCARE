import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
  <div className='container-fluid bg-light-pink text-dark py-4'>
    <div className='container d-flex flex-wrap justify-content-between text-center text-md-left'>
      <div className='mb-3 mb-md-0'>
        <p><strong>Contact Us</strong></p>
        <p>Email: info@kiddocare.com</p>
        <p>Phone: +123456789</p>
        <p>Address: 123 Pink Street, Wonderland</p>
      </div>
      <div className='mb-3 mb-md-0'>
        <p><strong>Quick Links</strong></p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div>
        <p><strong>Design</strong></p>
        <p>Designed by Your Name</p>
      </div>
    </div>
  </div>

</footer>

    </>
  )
}

export default Footer