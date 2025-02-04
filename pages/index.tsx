








import React from 'react'
import Image from 'next/image'; // Import the Image component from next/image

const Index = () => {
  return (
    <div>
      <header>
        <h1>SanTech Travel Blog</h1>
        <nav>
          <a className='one' href="./earn">Earning</a>
          <a className='one' href="./about">About</a>
          <a className='one' href="./privact">Company</a>
        </nav>
      </header>

      <section className="blog-posts">
        {/* <div className="blog-post">
          <a className='two' href="./items">
            <Image 
              src="https://image.freepik.com/free-photo/mosque-with-domes-and-tower_1150-13066.jpg" // Freepik Image URL
              alt="Travel 1" 
              width={612} // Define the width of the image
              height={612} // Define the height of the image
              className="blog-image"
            />
          </a>
          <a className='two' href="./punf">
            <h2>Exploring the Beautiful Land of Punjab</h2>
          </a>
          <a className='two' href="./form">
            <p>Visit the Beautiful cities of Punjab</p>
          </a>
        </div> */}

        <div className="blog-post">
          {/* <a className='two' href="./data">
            <Image 
              src="https://image.freepik.com/free-photo/beautiful-view-famous-tomb-architectural-landmarks_1150-16125.jpg" // Freepik Image URL
              alt="Travel 2" 
              width={612} 
              height={612} 
              className="blog-image"
            />
          </a> */}
          <a href="./data"> Blogs</a>
          <a className='two' href="./job">
            <h2>Exploring the Beautiful Land of world</h2>
          </a>
          <a className='two' href="./wo">
            <p>Upload form for Blog</p>
          </a>
        </div>

        {/* <div className="blog-post">
          <a className='two' href="./red">
            <Image 
              src="https://image.freepik.com/free-photo/stunning-view-public-college-university_1150-17953.jpg" // Freepik Image URL
              alt="Travel 3" 
              width={612} 
              height={612} 
              className="blog-image"
            />
          </a>
          <h2>Exploring the Beautiful Land of KPK</h2>
          <a className='two' href="./low">
            <p>Visit the Beautiful cities of KPK</p>
          </a>
        </div> */}

        {/* <div className="blog-post">
          <a className='two' href="./bk">
            <Image 
              src="https://image.freepik.com/free-photo/historical-tomb-beautiful-old-building_1150-15058.jpg" // Freepik Image URL
              alt="Travel 4" 
              width={612} 
              height={612} 
              className="blog-image"
            />
          </a>
          <a className='two' href="./pf4">
            <h2>Discover the Culture of Balochistan</h2>
          </a>
          <a className='two' href="./book">
            <p>Visit the Beautiful cities of Balochistan</p>
          </a>
        </div> */}
      </section>

      <footer>
        <p>&copy; 2025 Wanderlust Travel Blog. All Rights Reserved.</p>
        <p>Images from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a></p>
      </footer>
    </div>
  );
}

export default Index;
