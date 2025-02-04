import React from 'react'

const index = () => {
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
           <a className='two' href="./items"><img src="https://media.istockphoto.com/id/611622224/photo/domes-of-the-the-badshahi-mosque.jpg?b=1&s=612x612&w=0&k=20&c=BSA3DIUSLxY6hxacL5vIiHZ2eltiRcdFUCpb_9Gys3w=" alt="Travel 1"/></a>
           <a  className='two' href="./punf">  <h2>Exploring the Beautiful Land of Punjab</h2></a>
           <a  className='two' href="./form">    <p>Visit a Beautiful cities of Punjab</p></a>
        </div>

        <div className="blog-post">
        <a  className='two' href="./data">  <img src="https://media.istockphoto.com/id/146889224/photo/tomb-of-quaid-e-azam-mohammed-ali-jinnah.jpg?b=1&s=612x612&w=0&k=20&c=OxKcGCN9Ys9OFN3ymL9Q94UJQijEpv7EMZ62WYsQKSQ=" alt="Travel 2"/></a>
        <a  className='two' href="./job">    <h2>Exploring the Beautiful Land of Sindh</h2></a>
        <a  className='two' href="./wo">   <p>Visit a Beautiful cities Sindh</p></a>
        </div>

        <div className="blog-post">
        <a  className='two' href="./red">  <img src="https://media.istockphoto.com/id/801776956/photo/islamia-college-university-peshawar-is-a-public-research-university-located-in-midst-of.jpg?b=1&s=612x612&w=0&k=20&c=V6Rc3LSDn5GmMdhSAdQW-alY-onzckypbk_sLoPA2uA=" alt="Travel 3"/> </a>
                <h2>Exploring the Beautiful Land of KPK</h2>
        <a  className='two' href="./low">  <p>Visit a Beautiful cities KPK</p></a>
        </div>

        <div className="blog-post">
        <a className='two' href="./bk">  <img src="https://media.istockphoto.com/id/1413798885/photo/hazrat-shah-rukn-e-alam-tomb.jpg?b=1&s=612x612&w=0&k=20&c=cJG_FNz4xkylB2PNcx13PoqpcLc0m4ee6C3tQmF10Xs=" alt="Travel 4"/></a>
        <a  className='two' href="./pf4">   <h2>Discover the Culture of Balochistan</h2></a>
        <a  className='two' href="./book">  <p>Visit a Beautiful cities Balocistan</p></a>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Wanderlust Travel Blog. All Rights Reserved.</p>
    </footer>
    </div>
  )
}

export default index
