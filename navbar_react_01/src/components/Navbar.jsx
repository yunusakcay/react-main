import { GoHomeFill } from "react-icons/go";
import { IoSettings } from "react-icons/io5";
import { MdLock } from "react-icons/md";
import './Navbar.css'
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition < 600) {
      setActiveButton('home');
    } else if (scrollPosition >= 600 && scrollPosition < 1200) {
      setActiveButton('settings');
    } else {
      setActiveButton('account');
    }
  }, [scrollPosition]);

  return (
    <div className="container">
      <nav className="navbar">
        <GoHomeFill className={activeButton === "home" ? "navbar-link active" : "navbar-link inactive"} onClick={() => { setActiveButton("home") }} />
        <IoSettings className={activeButton === "settings" ? "navbar-link active" : "navbar-link inactive"} onClick={() => { setActiveButton("settings") }} />
        <MdLock className={activeButton === "account" ? "navbar-link active" : "navbar-link inactive"} onClick={() => { setActiveButton("account") }} />
      </nav>
      <main>
        {activeButton === "home" &&
          <section className="main">
            <h1 className='title'>Home</h1>
            <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis vero odio quisquam voluptatum vel fugiat ratione sunt culpa dolorum ex atque ducimus debitis, commodi, magnam repellat facere dolore laudantium maiores corporis architecto obcaecati excepturi dolor. Voluptates adipisci enim sed sint totam harum, hic delectus repellendus quaerat voluptatum perferendis minus itaque.</p>
          </section>}
        {activeButton === "settings" &&
          <section className="main">
            <h1 className='title'>Settings</h1>
            <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis vero odio quisquam voluptatum vel fugiat ratione sunt culpa dolorum ex atque ducimus debitis, commodi, magnam repellat facere dolore laudantium maiores corporis architecto obcaecati excepturi dolor. Voluptates adipisci enim sed sint totam harum, hic delectus repellendus quaerat voluptatum perferendis minus itaque.</p>
          </section>
        }
        {activeButton === "account" &&
          <section className="main">
            <h1 className='title'>Account</h1>
            <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis vero odio quisquam voluptatum vel fugiat ratione sunt culpa dolorum ex atque ducimus debitis, commodi, magnam repellat facere dolore laudantium maiores corporis architecto obcaecati excepturi dolor. Voluptates adipisci enim sed sint totam harum, hic delectus repellendus quaerat voluptatum perferendis minus itaque.</p>
          </section>
        }

      </main>
    </div>
  )
}

export default Navbar