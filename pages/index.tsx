import React from 'react';

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
        <div className="blog-post">
          <a href="./data"> Blogs</a>
          <a className='two' href="./job">
            <h2>Exploring the Beautiful Land of world</h2>
          </a>
          <a className='two' href="./wo">
            <p>Upload form for Blog</p>
          </a>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Wanderlust Travel Blog. All Rights Reserved.</p>
        <p>Images from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a></p>
      </footer>
    </div>
  );
}

export default Index;
