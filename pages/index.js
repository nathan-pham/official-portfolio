import Root from "../assets/components/root"
import Section from "../assets/components/section"
import Social from "../assets/components/home/social"

const Home = () => {
  return (
    <Root title="Home">
      <Section>
        <img className="design-logo" src="/images/design.png" alt="Design Logo" />
        <div className="biography">
          <h1 className="big title-font">Nathan Pham</h1>
          <p className="big subtitle">Mathematician, designer, farmer, student. Engineer would be stretching the titles a bit.</p>
        </div>
      </Section>
      <Section>
        <div className="flex socials">
          <Social href="mailto:nathanpham.me@gmail.com" icon="fas fa-envelope" />
          <Social href="https://github.com/nathan-pham" icon="fab fa-github" />
          <Social href="https://twitter.com/npham23" icon="fab fa-twitter" />
          <Social href="https://medium.com/@nathanpham.me" icon="fab fa-medium-m" />
          <Social href="https://youtube.com" icon="fab fa-youtube" />
        </div>
      </Section>
      <Section>
        <h2 className="title-font big subtitle work">Selected Work</h2>
        <article className="card flex align-stretch">
          <div className="card-left">
            <img src="/images/logos/archway.png" alt="Archway Logo"/>
            <p>2020 · Archway · Personal Project</p>
            <h1 className="title-font">Pure JS toy web framework like React</h1>
            <div className="flex">
              <a href="#">Website</a>
              <a href="#">Github</a>
            </div>  
          </div>
          <div className="card-right flex align-center justify-center">
            <img className="iphone" src="/images/mockups/archway.png" />
          </div>
        </article>
        <article className="card flex align-stretch light">
          <div className="card-left">
            <img src="/images/logos/doodle.png" alt="Doodle Logo"/>
            <p>2020 · Doodle · Personal Project</p>
            <h1 className="title-font">A search engine that looks like Google</h1>
            <div className="flex">
              <a href="#">Website</a>
              <a href="#">Github</a>
            </div>  
          </div>
          <div className="card-right flex align-center justify-center">
            <img className="mac" src="/images/mockups/doodle.png" />
          </div>
        </article>
      </Section>
      <Section>
        <footer className="flex justify-between align-center">
          <span>© 2020 Nathan Pham</span>
          <span>
            <a href="mailto:nathanpham.me@gmail.com">
              <i className="fas fa-paper-plane"></i>
              nathanpham.me@gmail.com
            </a>
          </span>
        </footer>
      </Section>
    </Root>
  )
}

export default Home