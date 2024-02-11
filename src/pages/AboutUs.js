import React from "react";
import "../style/aboutus.css";
import FirstImg from "../img/1.jpg";
import FirstCardImg from "../img/1 (1).jpg";
import SecondImg from "../img/2.jpg";
import { FaFacebook, FaStar } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import BrandImg from "../img/1.png";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";


const AboutUs = () => {
  const cards = [
    {
      img: FirstCardImg,
      name: "Annette Black",
      desc: "CEO Fouder",
    },
    {
      img: FirstCardImg,
      name: "Annette Black2",
      desc: "CEO Fouder",
    },
    {
      img: FirstCardImg,
      name: "Annette Black3",
      desc: "CEO Fouder",
    },
    {
      img: FirstCardImg,
      name: "Annette Blac4k",
      desc: "CEO Fouder",
    },
  ];
  return (
    <div className="aboutus">
      <header></header>
      <main></main>
      <section className="aboutus_img">
        <div className="aboutus_left">
          <div className="aboutus_left_img_first">
            <img src={FirstImg} alt="" />
          </div>
          <div className="aboutus_left_img_first">
            <img src={SecondImg} alt="" />
            <img src={SecondImg} alt="" />
          </div>
        </div>
        <div className="aboutus_left">
          <div className="aboutus_left_img_first">
            <img src={FirstImg} alt="" />
          </div>
          <div className="aboutus_left_img_first">
            <img src={SecondImg} alt="" />
            <img src={SecondImg} alt="" />
          </div>
        </div>
      </section>
      <section className="aboutus_description container">
        <div className="aboutus_description_top">
          <h1>About Our Store</h1>
          <h2>
            Since 1985, we’re creating the awesome products & promise to give
            high quality in the eCommerce market for all our customers residing
            any part of the world.
          </h2>
          <p>
            Ut enim nunc, luctus vel nulla id, lacinia ultrices libero. Maecenas
            quis interdum nibh. Suspendisse purus nibh, vestibulum porttitor
            orci et, egestas maximus ligula. Proin pharetra convallis est, ut
            aliquam nisl consequat cursus. Donec ut finibus dui. felis urna,
            feugiat ac auctor in, euismod ut sapien. Cras nulla felis, faucibus
            sit amet aliquet a, vestibulum vitae turpis. Sed a interdum lectus,
            in varius purus. Cras maximus nulla in felis semper hendrerit. Sed
            ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.Quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="aboutus_description_bottom">
          <div className="aboutus_description_bottom_card">
            <h1>Our Mission</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="aboutus_description_bottom_card">
            <h1>Our Mission</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </section>
      <hr className="hr" />
      <section className="colobrate container">
        <div className="colobrate_title">
          <h1>We Reached So Far</h1>
        </div>
        <div className="colobrate_cards">
          <div className="colobrate_card">
            <h2>120 +</h2>
            <p>Stores around the world</p>
          </div>
          <div className="colobrate_card">
            <h2>120 +</h2>
            <p>Stores around the world</p>
          </div>
          <div className="colobrate_card">
            <h2>120 +</h2>
            <p>Stores around the world</p>
          </div>
          <div className="colobrate_card">
            <h2>120 +</h2>
            <p>Stores around the world</p>
          </div>
        </div>
      </section>
      <hr className="hr" />
      <section className="ourteams container">
        <div className="ourteams_title">
          <h1>Meet Our Leaders</h1>
        </div>
        <div className="ourteams_cards">
          {cards.map((item, key) => (
            <div key={key} className="ourteams_card">
              <div className="ourteams_card_img">
                <img src={item.img} alt="" />
                <div className="ourteams_card_hover">
                  <a href="">
                    <FaFacebook />
                  </a>
                  <a href="">
                    <FaFacebook />
                  </a>
                  <a href="">
                    <FaFacebook />
                  </a>
                  <a href="">
                    <FaFacebook />
                  </a>
                </div>
              </div>
              <h2>{item.name}</h2>
              <h3>{item.desc}</h3>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr" />
      <section className="other_desc container">
        <div className="other_desc_left">
          <h1>
            In in mattis erat, eu mattis libero. Donec volutpat faucibus elit
            cursus interdum
          </h1>
        </div>
        <div className="other_desc_right">
          <p>
            Nullam accumsan nulla in arcu condimentum imperdiet. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Curabitur lacinia purus vitae lorem porttitor fermentum.
            In in mattis erat, eu mattis libero.
          </p>
          <p>
            ociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Curabitur lacinia purus vitae lorem porttitor fermentum.
            In in mattis erat, eu mattis libero. Donec volutpat faucibus elit
            cursus interdum.
          </p>
          <button style={{}}>Shop now</button>
        </div>
      </section>
      <hr className="hr" />
      <section className="should container">
        <div className="should_title">
          <h1>Why Should You Choose Us</h1>
        </div>
        <div className="should_cards">
          <div className="should_card">
            <h2>
              <IoShieldCheckmarkOutline />
            </h2>
            <h3>Stores around the world</h3>
            <p>Within 30 days for an exchange.</p>
          </div>
          <div className="should_card">
            <h2>
              <IoShieldCheckmarkOutline />
            </h2>
            <h3>Stores around the world</h3>
            <p>Within 30 days for an exchange.</p>
          </div>
          <div className="should_card">
            <h2>
              <IoShieldCheckmarkOutline />
            </h2>
            <h3>Stores around the world</h3>
            <p>Within 30 days for an exchange.</p>
          </div>
        </div>
      </section>
      <section className="swiper">
        <h1>The review are in</h1>
        <div className="swiper_star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h2>
          Sallum dictum felis eu pede mollis pretium. Integer tincidunt. Cras
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu lorem dolor ipsum.
        </h2>
        <h3>Ali Tufan</h3>
        <h4>Fashion Designer</h4>
        <div className="swiper_num">
          <p>1/6</p>
        </div>
      </section>
      <section className="brands">
        <div className="brands_title">
          <h5>Trusted by the world’s best</h5>
        </div>
        <div className="brands_cards">
          <div className="brands_card">
            <img src={BrandImg} alt="" />
          </div>
          <div className="brands_card">
            <img src={BrandImg} alt="" />
          </div>
          <div className="brands_card">
            <img src={BrandImg} alt="" />
          </div>
          <div className="brands_card">
            <img src={BrandImg} alt="" />
          </div>
          <div className="brands_card">
            <img src={BrandImg} alt="" />
          </div>
          <div className="brands_card">
            <img src={BrandImg} alt="" />
          </div>
        </div>
      </section>

      <hr className="hr" />
      <section className="inpform">
        <h1>Subscribe and get 20% discount.</h1>
        <div className="inpform_inp">
          <input placeholder="Your email address" type="text" />
          <button>Subscribe</button>
        </div>
      </section>

      <section className="infous">
            <div className="contactus">
                <h4>Contact Us</h4>

                <div className="contactus_first">
                  <i><IoCallOutline/></i>
                  <h5> Monday-Friday: 08am-9pm </h5>
                  <a href="#" >+(1) 234 567 890</a>
                </div>
            </div>
      </section>
    </div>
  );
};

export default AboutUs;