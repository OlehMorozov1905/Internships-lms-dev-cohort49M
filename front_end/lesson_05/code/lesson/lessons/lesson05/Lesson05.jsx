import { heroes } from "./data";
import "./lesson05.css";

function Lesson05() {
  console.log(heroes);
  return (
    <div className="lesson-container">
      <h2>Lesson 05</h2>
      <p>React map() components</p>

      <section className="grid-container">
        {heroes.map((hero) => (
          <article key={hero.id} className={hero.isDark ? 'hero-dark' : 'hero-light'}>
            <h3>{hero.name}</h3>
            <p>
              {hero.name} is {hero.age} years old
            </p>
            <img src={hero.image} alt="" />
            <p>
              Hero weapons{hero.weapons.map((weapon, index) => (
                <span className="weapon" key={index}> | {weapon}</span>
              ))}
            </p>
          </article>
        ))}
      </section>

    </div>
  );
}

export default Lesson05;
