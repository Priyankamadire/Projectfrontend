import React from 'react'

const Faq = () => {
  return (

    <div>
      <>
      <center><h1>MORE FREQUENTLY ASKED QUESTIONS</h1></center>
      <div className="box" style={{ backgroundColor: "rgb(222, 255, 196)" }}>
  <strong>
   <div >
   <h3><em className='bi bi-pen-fill'>What is main aim of creating web sites?</em></h3>
   </div>
  </strong>
  <p className='bi bi-arrow-right'>The main is to find the faculty jobs and for admin to view faculty detail easily</p>
 
</div>

<div className="box" style={{ backgroundColor: "rgb(252, 255, 196)" }}>
  <strong>
   <div >
   <h3><em className='bi bi-pen-fill'>Will every one have access to login?</em></h3>
   </div>
  </strong>
  <p className='bi bi-arrow-right'>Yaa every one who are finding jobs can login easily but poting job can be only done by superadmin of the institute</p>
 
</div>
<div className="box" style={{ backgroundColor: "rgb(422, 155, 156)" }}>
  <strong>
   <div >
   <h3><em className='bi bi-pen-fill'>In what way website is useful for superadmin </em></h3>
   </div>
  </strong>
  <p className='bi bi-arrow-right'>Superadmin can easily post and view details of faculty who are a part of their institute</p>
 
</div>
      
      </>
    </div>
  )
}

export default Faq
