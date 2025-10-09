import React, { useRef } from 'react';

function Scroll() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
        <nav style={{ position: 'fixed', top: 5, background: 'red', width: '100%' }}>
      <button onClick={scrollToContact}>Contact</button>
    </nav>
      {/* <Navbar onContactClick={scrollToContact} /> */}

      <div style={{ height: '100vh', background: '#eee' }}>
        <h1>Home Section</h1>
      </div>

      <div ref={contactRef} style={{ height: '100vh', background: '#ccc' }}>
        <h1>Contact Section</h1>
      </div>
    </div>
  );
}

export default Scroll;