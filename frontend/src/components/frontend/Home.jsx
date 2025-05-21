import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import kid2 from '../../assets/images/kid4.png';
import kid1 from '../../assets/images/kid1.jpg';
import kid3 from '../../assets/images/kid3.jpg';
import kid4 from '../../assets/images/kid2.jpg';
import kid5 from '../../assets/images/kid5.png';
import kid6 from '../../assets/images/post-1.jpg';
import kid7 from '../../assets/images/post-2.jpg';
import Header from '../common/Header';
import Footer from '../common/footer';




 const Home = () => {
  return (
    <>
    <Header/>
    <main className='main'>
{/* //hero section */}
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
<h3
  className="mb-4 border-bottom border-2 d-inline-block p-2 rounded"
  style={{ color: '#FF4880', borderBottomColor: '#FF4880' }}
>
  About Us
</h3>


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

{/* programs section */}
<section
  className="programs-section py-5"
  style={{
    background: 'linear-gradient(135deg, #ffd8b1 0%, #ffe6cc 50%, #ffd1e0 50%, #ffcee4 100%)',
  }}
>  <div className="container">
    <div className="text-center mb-5">
      <h3 className="text-primary mb-3 fw-bold">
        Our Programs
      </h3>
      <h4 className="mb-4" style={{ color: '#FF4880' }}>
        Enriching Experiences for Every Child
      </h4>
      <p className="text-muted fs-5">
        Tailored programs to nurture your child's growth and development
      </p>
    </div>

<div
  className="row g-4"
>      {/* Program 1 */}
      <div className="col-md-6 col-lg-6" style={{ backgroundColor:"#ffe4ec"}} >
        <div className="program-item shadow-sm p-4 rounded">
          <div className="top-bar"></div>
          <div className="program-content-inner text-center">
            <div className="mb-3 img-wrapper">
              <img
                src={kid3}
                alt="Creative Arts & Crafts"
                className="img-fluid rounded"
                style={{ maxHeight: '15em', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <h4 className="fw-semibold mb-2">Creative Arts & Crafts</h4>
            <p className="mb-3 text-secondary">
              Fostering creativity through hands-on activities that inspire imagination and self-expression.
            </p>
            <a href="#" className="btn btn-gradient px-5 py-2 rounded-pill">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Program 2 */}
      <div className="col-md-6 col-lg-6" style={{ backgroundColor:"#ffe4ec" }} >
        <div className="program-item shadow-sm p-4 rounded">
          <div className="top-bar"></div>
          <div className="program-content-inner text-center">
            <div className="mb-3 img-wrapper">
              <img
                src={kid3}
                alt="Outdoor Adventures"
                className="img-fluid rounded"
                style={{ maxHeight: '15em', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <h4 className="fw-semibold mb-2">Outdoor Adventures</h4>
            <p className="mb-3 text-secondary">
              Exploring nature and the outdoors through guided activities that promote physical fitness.
            </p>
            <a href="#" className="btn btn-gradient px-5 py-2 rounded-pill">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Program 3 */}
      <div className="col-md-6 col-lg-6" style={{ backgroundColor:"#ffe4ec" }} >
        <div className="program-item shadow-sm p-4 rounded">
          <div className="top-bar"></div>
          <div className="program-content-inner text-center">
            <div className="mb-3 img-wrapper">
              <img
                src={kid3}
                alt="Language & Literacy"
                className="img-fluid rounded"
                style={{ maxHeight: '15em', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <h4 className="fw-semibold mb-2">Language & Literacy</h4>
            <p className="mb-3 text-secondary">
              Encouraging language development through storytelling, songs, and interactive reading sessions.
            </p>
            <a href="#" className="btn btn-gradient px-5 py-2 rounded-pill">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Program 4 */}
      <div className="col-md-6 col-lg-6" style={{ backgroundColor:"#ffe4ec" }} >
        <div className="program-item shadow-sm p-4 rounded">
          <div className="top-bar"></div>
          <div className="program-content-inner text-center">
            <div className="mb-3 img-wrapper">
              <img
                src={kid3}
                alt="STEM Exploration"
                className="img-fluid rounded"
                style={{ maxHeight: '15em', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <h4 className="fw-semibold mb-2">STEM Exploration</h4>
            <p className="mb-3 text-secondary">
              Hands-on activities that introduce basic concepts of science, technology, engineering, and math.
            </p>
            <a href="#" className="btn btn-gradient px-5 py-2 rounded-pill">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*Testimonial section  */}

<section id="testimonial" className="py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <h3 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 rounded">
        Testimonial
      </h3>
      <h3
        className="mb-4 border-bottom border-2 d-inline-block p-2 rounded"
        style={{ color: '#FF4880', borderBottomColor: '#e81050' }}
      >
        What We Offer
      </h3>
      <p className="text-muted">Parents Say About Us</p>
    </div>

    <div className="row g-4">
      {[1, 2, 3].map((item, idx) => (
        <div key={idx} className="col-lg-4 col-md-6">
          <div
            className="card shadow-sm border-0 rounded h-100"
            style={{ backgroundColor: '#ffe6ec' }}
          >
            <div className="card-body text-center">
              <img
                src="https://themewagon.github.io/BabyCare/img/testimonial-1.jpg"
                alt="Health & Safety"
                className="img-fluid rounded-circle mb-3 border border-white shadow"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <h5 className="fw-bold text-danger">Health & Safety</h5>
              <p className="text-muted">
                We prioritize your child's health and safety with our trained staff and secure environment.
              </p>
              <a
                href="#"
                className="btn btn-outline-danger px-4 py-2 rounded-pill"
                style={{
                  backgroundColor: '#ff7ea5',
                  color: 'white',
                  border: 'none',
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Pagination */}
    <div className="d-flex justify-content-center mt-5">
      <nav aria-label="Testimonial pagination">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</section>


{/* activities */}
<section className="programs-section py-5" style={{ background: 'linear-gradient(to bottom right,#e5ccff, #ffe8e2)' }}>
  <div className="container py-5">
    <div className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
      <h4 className="mb-3 border-bottom border-3 d-inline-block px-3 pb-1 rounded-3"
          style={{ fontWeight: '600', color: '#e9540f', borderColor: '#e9540f' }}>
        Our Programs
      </h4>
      <h1 className="display-4 fw-bold mb-4" style={{ color: '#ff6b6b' }}>
        Exclusive & Engaging Programs for Kids
      </h1>
      <p className="text-secondary fs-5">
        Carefully curated experiences to inspire curiosity and growth in every child.
      </p>
    </div>

    <div className="row g-4 justify-content-center">
      {[1, 2, 3].map((program, idx) => (
        <div
          key={idx}
          className="col-md-6 col-lg-4"
          style={{
            animation: `fadeInUp 0.6s ease forwards`,
            animationDelay: `${0.1 + idx * 0.2}s`,
            opacity: 0
          }}
        >
          <div className="program-card rounded shadow-sm overflow-hidden bg-white h-100 d-flex flex-column">
            <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
              <img
                src={`https://themewagon.github.io/BabyCare/img/program-${program}.jpg`}
                alt={`Program ${program}`}
                className="w-100 h-100 object-fit-cover"
                style={{ transition: 'transform 0.3s ease' }}
              />
              <div
                className="program-price position-absolute px-3 py-1 text-white fw-bold rounded"
                style={{
                  backgroundColor: '#ff8c42',
                  top: '15px',
                  right: '15px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  fontSize: '1.1rem',
                  userSelect: 'none',
                }}
              >
                $60.99
              </div>
            </div>

            <div className="p-4 flex-grow-1 d-flex flex-column justify-content-between">
              <div>
                <a href="#" className="h5 text-decoration-none" style={{ color: '#e9540f' }}>
                  {program === 1 && 'English For Today'}
                  {program === 2 && 'Graphics Arts'}
                  {program === 3 && 'General Science'}
                </a>
                <p className="text-muted mt-3" style={{ minHeight: '65px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur.
                </p>
              </div>

              <div className="d-flex align-items-center border-top pt-3 mt-3">
                <img
                  src="https://themewagon.github.io/BabyCare/img/program-teacher.jpg"
                  alt="Teacher"
                  className="rounded-circle border"
                  style={{ width: '65px', height: '65px', padding: '5px', borderColor: '#ff8c42' }}
                />
                <div className="ms-3">
                  <h6 className="mb-0" style={{ color: '#e9540f', fontWeight: '600' }}>
                    Mary Mordern
                  </h6>
                  <small className="text-muted">Arts Designer</small>
                </div>
              </div>

              <div
                className="d-flex justify-content-between mt-3 pt-3 border-top"
                style={{ fontSize: '0.9rem', color: '#ff8c42' }}
              >
                <small>
                  <i className="fas fa-wheelchair me-1"></i> 30 Seats
                </small>
                <small>
                  <i className="fas fa-book me-1"></i> 11 Lessons
                </small>
                <small>
                  <i className="fas fa-clock me-1"></i> 60 Hours
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-5">
      <a
        href="#"
        className="btn px-5 py-3 fw-semibold text-white rounded-pill"
        style={{
          backgroundColor: '#e9540f',
          letterSpacing: '0.05em',
          boxShadow: '0 4px 12px rgba(233, 84, 15, 0.5)'
        }}
      >
        View All Programs
      </a>
    </div>
  </div>

  <style>{`
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .program-card:hover img {
      transform: scale(1.05);
    }
  `}</style>
</section>

{/*Articles & Blog Post */}
 

<section className="section-7 py-5" style={{ backgroundColor: '#f8f9fa' }}>
  <div className="container-fluid blog py-5">
    <div className="container py-5">
      <div className='text-center section-header'>
      <h3 className='text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 rounded'>
        Articles & Blog Post
      </h3>
      <p className='m-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit libero assumenda officiis repellendus molestias aspernatur quasi minus porro ratione soluta, corporis nemo aperiam, earum consequatur nulla fugiat necessitatibus dolor eum.</p>
      </div>

      <div className="row g-4 justify-content-center">
        {[1, 2, 3, 4].map((item, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div
              className="blog-item blog-hover shadow-sm p-3"
              style={{
                backgroundColor: '#ffd29a', 
                 borderRadius: '16px',
                transition: 'all 0.3s ease',
                height: '100%',
              }}
            >
              <div
                className="rounded-circle mx-auto blog-img-container"
                style={{
                  backgroundImage: `url(${kid2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '180px',
                  width: '180px',
                  borderRadius: '50%',
                  transition: 'transform 0.3s ease',
                }}
              ></div>

              <div className="text-center mt-3">
                <h6 className="text-primary">John Doe</h6>
                <p className="text-muted mb-2">Parenting Tips</p>
              </div>

              <div className="text-center px-3 pb-2">
                <a
                  href="#"
                  className="h6 d-block text-decoration-none blog-title-hover"
                >
                  5 Tips to Boost Your Child's Confidence
                </a>
                <p className="small mt-2 mb-3">
                  Help your child grow confident with simple and effective strategies.
                </p>
                <a href="#" className="btn btn-primary text-white btn-sm px-3 py-1 btn-border-radius">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/* <section className='section-6 bg-light py-5'>
  <div className='container'>
    <div className='text-center section-header'>
      <h3 className='text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 rounded'>
        Articles & Blog Post
      </h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit libero assumenda officiis repellendus molestias aspernatur quasi minus porro ratione soluta, corporis nemo aperiam, earum consequatur nulla fugiat necessitatibus dolor eum.</p>
      </div>
      <div className='row'>
        <div className='col-md-4'>
        <div className='card shadow-sm border-0 rounded'>
          <div className='card-img-top'>
            <img src={kid1} alt='Blog Post 1' className='w-100' />
            </div>
            <div className='card-body p-5'>
              <h5 className='card-title'>The Importance of Play in Early Childhood Development</h5>
              <p className='card-text'>Play is essential for children's cognitive, social, and emotional development. It fosters creativity, problem-solving skills, and social interactions.</p>
              <a href='#' className='btn btn-primary'>Read More</a>

              </div>
          </div>
        </div>
 </div>
 </div>
</section>  */}

{/* image part */}
<section
  className="image-part py-5"
  style={{
    background: 'linear-gradient(35deg, #ff7e5f 0%, #feb47b 50%, #ff6fa1 50%, #ff4e85 100%)',
  }}
>
  <div className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
      <h4
        className="mb-3 border-bottom border-3 d-inline-block px-3 pb-1 rounded-3"
        style={{
          fontWeight: '600',
          color: '#fff',
          borderColor: '#ff4e85',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(5px)',
        }}
      >
        Our Gallery
      </h4>
      <h1 className="display-4 fw-bold mb-4" style={{ color: '#fff', textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}>
        Exclusive & Engaging Programs for Kids
      </h1>
      <p className="fs-5" style={{ color: '#ffe0e9' }}>
        Carefully curated experiences to inspire curiosity and growth in every child.
      </p>
    </div>
  <div className="container">
    <div
      className="d-flex gap-4"
      style={{ overflowX: 'auto', paddingBottom: '10px', scrollbarWidth: 'thin' }}
    >
      {[kid4, kid5,kid3, kid1,kid2 ].map((src, idx) => (
        <div key={idx} className="round-image-wrapper position-relative flex-shrink-0">
          <img
            src={src}
            alt={`Event ${idx + 1}`}
            className="img-fluid rounded-circle"
            style={{ width: '450px', height: '450px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
          />
          <div className="overlay d-flex align-items-center justify-content-center rounded-circle">
            <span className="text-white fw-bold text-center">{`Event ${idx + 1}`}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  <style>{`
    .round-image-wrapper {
      width: 450px;
      height: 450px;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      flex-shrink: 0;
    }
    .round-image-wrapper img:hover {
      transform: scale(1.05);
    }
    .overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      border-radius: 50%;
    }
    .round-image-wrapper:hover .overlay {
      opacity: 1;
      pointer-events: auto;
    }
  `}</style>
</section>


{/* 
<section className="programs-section py-5" style={{ background: 'linear-gradient(35deg, #ff7e5f 0%, #feb47b 50%, #ff6fa1 50%, #ff4e85 100%)' }}>
  <div className="container py-5">
    <div className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
      <h4
        className="mb-3 border-bottom border-3 d-inline-block px-3 pb-1 rounded-3"
        style={{
          fontWeight: '600',
          color: '#fff',
          borderColor: '#ff4e85',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(5px)',
        }}
      >
        Our Programs
      </h4>
      <h1 className="display-4 fw-bold mb-4" style={{ color: '#fff', textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}>
        Exclusive & Engaging Programs for Kids
      </h1>
      <p className="fs-5" style={{ color: '#ffe0e9' }}>
        Carefully curated experiences to inspire curiosity and growth in every child.
      </p>
    </div>

    <div className="row g-4 justify-content-center">
      {[1, 2, 3].map((program, idx) => (
        <div
          key={idx}
          className="col-md-6 col-lg-4"
          style={{ animation: `fadeInUp 0.6s ease forwards`, animationDelay: `${0.1 + idx * 0.2}s`, opacity: 0 }}
        >
          <div
            className="program-card rounded shadow-sm overflow-hidden bg-white h-100 d-flex flex-column"
            style={{ border: '3px solid #ff6fa1', boxShadow: '0 10px 20px rgba(255,111,161,0.3)' }}
          >
            <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
              <img
                src={`https://themewagon.github.io/BabyCare/img/program-${program}.jpg`}
                alt={`Program ${program}`}
                className="w-100 h-100 object-fit-cover"
                style={{ transition: 'transform 0.3s ease' }}
              />
              <div
                className="program-price position-absolute px-3 py-1 text-white fw-bold rounded"
                style={{
                  backgroundColor: '#ff6fa1',
                  top: '15px',
                  right: '15px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  fontSize: '1.1rem',
                  userSelect: 'none',
                }}
              >
                $60.99
              </div>
            </div>

            <div className="p-4 flex-grow-1 d-flex flex-column justify-content-between">
              <div>
                <a href="#" className="h5 text-danger text-decoration-none">
                  {program === 1 && 'English For Today'}
                  {program === 2 && 'Graphics Arts'}
                  {program === 3 && 'General Science'}
                </a>
                <p className="text-muted mt-3" style={{ minHeight: '65px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur.
                </p>
              </div>

              <div className="d-flex align-items-center border-top pt-3 mt-3" style={{ borderColor: '#ff6fa1' }}>
                <img
                  src="https://themewagon.github.io/BabyCare/img/program-teacher.jpg"
                  alt="Teacher"
                  className="rounded-circle border"
                  style={{ width: '65px', height: '65px', padding: '5px', borderColor: '#ff6fa1' }}
                />
                <div className="ms-3">
                  <h6 className="mb-0" style={{ color: '#ff4e85', fontWeight: '600' }}>
                    Mary Mordern
                  </h6>
                  <small className="text-muted">Arts Designer</small>
                </div>
              </div>

              <div
                className="d-flex justify-content-between mt-3 pt-3 border-top"
                style={{ fontSize: '0.9rem', color: '#ff6fa1', borderColor: '#ff6fa1' }}
              >
                <small>
                  <i className="fas fa-wheelchair me-1"></i> 30 Seats
                </small>
                <small>
                  <i className="fas fa-book me-1"></i> 11 Lessons
                </small>
                <small>
                  <i className="fas fa-clock me-1"></i> 60 Hours
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-5">
      <a
        href="#"
        className="btn fw-semibold text-white rounded-pill"
        style={{
          background: 'linear-gradient(90deg, #ff7e5f 0%, #ff4e85 100%)',
          padding: '12px 50px',
          letterSpacing: '0.05em',
          boxShadow: '0 4px 12px rgba(255, 111, 161, 0.6)',
          border: 'none',
        }}
      >
        View All Programs
      </a>
    </div>

  </div>

  <style>{`
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .program-card:hover img {
      transform: scale(1.05);
    }
  `}</style>
</section> */}


</main>









<Footer/>

    </>
    

  )
}
export default Home;