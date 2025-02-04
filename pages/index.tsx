






















// import React from 'react'
// import Image from 'next/image'; // Import the Image component from next/image

// const Index = () => {
//   return (
//     <div>
//       <header>
//         <h1>SanTech Travel Blog</h1>
//         <nav>
//           <a className='one' href="./earn">Earning</a>
//           <a className='one' href="./about">About</a>
//           <a className='one' href="./privact">Company</a>
//         </nav>
//       </header>

//       <section className="blog-posts">
//         <div className="blog-post">
//           <a className='two' href="./items">
//             <Image 
//               src="https://media.istockphoto.com/id/611622224/photo/domes-of-the-the-badshahi-mosque.jpg?b=1&s=612x612&w=0&k=20&c=BSA3DIUSLxY6hxacL5vIiHZ2eltiRcdFUCpb_9Gys3w=" 
//               alt="Travel 1" 
//               width={612} // Define the width of the image
//               height={612} // Define the height of the image
//               className="blog-image"
//             />
//           </a>
//           <a className='two' href="./punf">
//             <h2>Exploring the Beautiful Land of Punjab</h2>
//           </a>
//           <a className='two' href="./form">
//             <p>Visit a Beautiful cities of Punjab</p>
//           </a>
//         </div>

//         <div className="blog-post">
//           <a className='two' href="./data">
//             <Image 
//               src="https://media.istockphoto.com/id/146889224/photo/tomb-of-quaid-e-azam-mohammed-ali-jinnah.jpg?b=1&s=612x612&w=0&k=20&c=OxKcGCN9Ys9OFN3ymL9Q94UJQijEpv7EMZ62WYsQKSQ=" 
//               alt="Travel 2" 
//               width={612} 
//               height={612} 
//               className="blog-image"
//             />
//           </a>
//           <a className='two' href="./job">
//             <h2>Exploring the Beautiful Land of Sindh</h2>
//           </a>
//           <a className='two' href="./wo">
//             <p>Visit a Beautiful cities Sindh</p>
//           </a>
//         </div>

//         <div className="blog-post">
//           <a className='two' href="./red">
//             <Image 
//               src="https://media.istockphoto.com/id/801776956/photo/islamia-college-university-peshawar-is-a-public-research-university-located-in-midst-of.jpg?b=1&s=612x612&w=0&k=20&c=V6Rc3LSDn5GmMdhSAdQW-alY-onzckypbk_sLoPA2uA=" 
//               alt="Travel 3" 
//               width={612} 
//               height={612} 
//               className="blog-image"
//             />
//           </a>
//           <h2>Exploring the Beautiful Land of KPK</h2>
//           <a className='two' href="./low">
//             <p>Visit a Beautiful cities KPK</p>
//           </a>
//         </div>

//         {/* <div className="blog-post">
//           <a className='two' href="./bk">
//             <Image 
//               src="https://media.istockphoto.com/id/1413798885/photo/hazrat-shah-rukn-e-alam-tomb.jpg?b=1&s=612x612&w=0&k=20&c=cJG_FNz4xkylB2PNcx13PoqpcLc0m4ee6C3tQmF10Xs=" 
//               alt="Travel 4" 
//               width={612} 
//               height={612} 
//               className="blog-image"
//             />
//           </a>
//           <a className='two' href="./pf4">
//             <h2>Discover the Culture of Balochistan</h2>
//           </a>
//           <a className='two' href="./book">
//             <p>Visit a Beautiful cities Balocistan</p>
//           </a>
//         </div> */}
//       </section>

//       <footer>
//         <p>&copy; 2025 Wanderlust Travel Blog. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Index;









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
        <div className="blog-post">
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
        </div>

        <div className="blog-post">
          <a className='two' href="./data">
            <Image 
              src="https://image.freepik.com/free-photo/beautiful-view-famous-tomb-architectural-landmarks_1150-16125.jpg" // Freepik Image URL
              alt="Travel 2" 
              width={612} 
              height={612} 
              className="blog-image"
            />
          </a>
          <a className='two' href="./job">
            <h2>Exploring the Beautiful Land of Sindh</h2>
          </a>
          <a className='two' href="./wo">
            <p>Visit the Beautiful cities of Sindh</p>
          </a>
        </div>

        <div className="blog-post">
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
        </div>

        <div className="blog-post">
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
