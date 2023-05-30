import logo from "../../assets/images/profile2.jpg";
function About() {
  return (
    <div className="container flex flex-row">
      <div className="basis-1/3">
        <div className="container">
          <div className=" flex justify-center text-white">
            <div className=" py-5">
              <img
                src={logo}
                alt=""
                className="rounded-full h-[200px] w-[200px] object-cover"
              />
            </div>
          </div>
          <h1 className="text-center text-4xl text-white">
            Rahmad Juanda Patra
          </h1>
          <h3 className="text-center text-lg text-white mt-3">
            Web Programmer at
            <span>
              <a href="owlfoxes.id" className="text-white"></a> Owl&Foxes
            </span>
          </h3>
          <p className="text-center text-white mt-3">
            I build robust, accesible products and digital Experiences for the
            Web
          </p>
        </div>
      </div>
      <div className=" basis-2/3">
        <div className="container text-white w-[85%] mt-10 ml-4 text-justify">
          <p className="text-lg mb-4">
            I'm Rahmad Juanda Patra, a developer from Jakarta, Indonesia. My
            expertise on Laravel, react , and Nodejs. I also writes technical
            articles in medium.I'm currently working as web programmer at advertising agency in South Jakarta Owl&Foxes where i help
            develop and create many websites for our clients using Laravel
            Framework.
          </p>
          <p className="text-lg mb-4">
            My degree's Bachelor in Mechanical Engineering at Universitas
            Muhammadiyah Malang. after finished my study i'm interested in
            digital product like website, app, and social media, so I take Web
            Development Bootcamp class in Purwadhika Digital School and now work
            as Fullstack Programmer.
          </p>
          <p className="text-lg mb-4">
            When i'm not at the computer, I'm usually playing football, Enjoying
            Japan Pop culture(Anime, Dorama, Manga, Tokusatsu) and hanging out or just enjoy my
            small rented apartement life.
          </p>
        </div>
        <div className="mt-24">
        {/* <h1 className=" text-white text-center">Owl and Foxes</h1> */}

        </div>
      </div>
    </div>
  );
}

export default About;
