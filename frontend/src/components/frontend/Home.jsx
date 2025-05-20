import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import kid2 from '../../assets/images/kid4.png';
import kid1 from '../../assets/images/kid1.jpg';
import Header from '../common/Header';
import Footer from '../common/footer';

 const Home = () => {
  return (
    <>
    <Header/>
    <main>
  <section
  className='hero'
  style={{
    backgroundImage: `url(${kid2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '600px',
  }}
>
  <div className='container'>
    <div className='hero-content'>
      <h1 className='h1kiddo'>We care  <span> your baby </span></h1>
      <p className='kiddo'>Your child's happiness is our priority. The safest area for your kid!</p>
      <button className='btn btn-primary'>Get Started</button>
      <button className='btn btn-secondary'>Learn More</button>
    </div>
  </div>
</section>

{/* //about section */}
<section className='about'>
 <div class="container-fluid py-5 about bg-light">
  <div class="container py-5">
    <div class="row g-5 align-items-center">
      <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="border rounded overflow-hidden shadow-sm">
<section
  className='about-image'
style={{
    backgroundImage: `url(${kid1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '400px',
    borderTop: '5px solid #f39c12',     // Top border
    borderLeft: '5px solid #f39c12',    // Left border
    borderRight: '0',                   // No right border
    borderBottom: '5px solid transparent', // Needed to offset the bottom-right
    boxShadow: 'inset -5px -5px 0 #f39c12' // Bottom-right simulated border
  }}
>
</section></div>
      </div>

      <div class="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
        <h4 class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 rounded">About Us</h4>
        <h1 class="abt">Nurturing Young Minds With Care, Love & Fun</h1>
        <p class="text-dark mb-4">
          At <strong className='k'>KiddoCARE</strong>, we create a loving and stimulating environment where every child feels at home. From creative play to nutritious meals and trained caregivers, we ensure your child's well-being and growth every day.
        </p>

        <div class="row mb-4">
          <div class="col-lg-6">
            <h6 class="mb-3"><i class="fas fa-check-circle me-2 text-primary"></i>Creative Play Sessions</h6>
            <h6 class="mb-3"><i class="fas fa-check-circle me-2 text-success"></i>Outdoor Activities</h6>
            <h6 class="mb-3"><i class="fas fa-check-circle me-2 text-warning"></i>Healthy Meal Plans</h6>
          </div>
          <div class="col-lg-6">
            <h6 class="mb-3"><i class="fas fa-check-circle me-2 text-danger"></i>Secure Campus</h6>
            <h6 class="mb-3"><i class="fas fa-check-circle me-2 text-info"></i>Qualified Caregivers</h6>
            <h6><i class="fas fa-check-circle me-2 text-secondary"></i>Parent Communication</h6>
          </div>
        </div>

        <a href="#contact" class="btn btn-primary px-5 py-3 rounded-pill">More Details</a>
      </div>
    </div>
  </div>
</div> 
</section>
</main>

<Footer/>

    </>
    

  )
}
export default Home;