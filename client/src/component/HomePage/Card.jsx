 import PropTypes from "prop-types"; // Import PropTypes
import "../css/Card.css";

const CardsPage = (props) => {
  const { mode } = props;

  // Array card information
  const cardData = [
    {
      title: "Start your journey",
      content: "Engaging in GSSoC'23 offers a chance to elevate your GitHub presence. Elevate your knowledge, delve into new horizons, refine, amplify, forge connections, and foster teamwork to cultivate your abilities and character. Seize the opportunity to delve into open-source, mastering fundamental tools like Git and GitHub under the guidance of adept mentors.",
    },
    {
      title: "Inviting Projects & NGOs",
      content: "If your organization harbors a vision for a project, whether it’s a website, an app, or any other initiative, seize this golden opportunity to join our vibrant community. Our aspiring developers, mentored by seasoned experts, are eager to collaborate on your projects, aiming for nothing short of excellence. Submit your application now, and let’s join forces because Together Everyone Achieves More.",
    },
    {
      title: "Lead the pack",
      content: "In the realm of open-source projects, mentors serve as the vanguards, charting the course for the team's journey. They provide invaluable guidance to fellow participants, navigating them through every stage of the project roadmap. Acting as the cornerstone of the team, mentors remain accessible throughout the summer, reviewing pull requests and offering suggestions for improvement. Seize the opportunity to become a mentor at GirlScript Summer of Code and lay the groundwork for your team's success.",
    },
    {
      title: "Add your shade to GSSoC'23",
      content: "Supporters play a crucial role in ensuring the seamless execution of GirlScript events by providing valuable resources. Their contribution enables us to reward our top participants with perks, fostering talent within our community. In appreciation of their support, we offer extensive publicity on our social platforms and media exposure to showcase our sponsors. Join us as a sponsor and illuminate our program with your generosity.",
    },
  ];

  return (
    <div className="flex items-center justify-center" style={{ background: mode === 'dark' ? 'black' : '', color: mode === 'dark' ? 'white' : 'black' }}>
      <section className="max-sm:px-2.5 max-xl:px-5 max-w-7xl">
        <h2
          className="font-bold text-blue-main text-4xl md:text-5xl lg:text-[3.5rem] pt-16"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Be a part of Bitbox Community
        </h2>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12 pb-16">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="py-16 px-5 rounded-2xl border-2 space-y-3 comm-card"
                style={{
                  outline: mode === 'dark' ? '2px solid white' : '',
                }}
              >
                <h3 className="font-semibold text-[28px] text-center" style={{ color: mode === 'dark' ? 'white' : '' }}>{card.title}</h3>
                <p className="font-medium text-blue-main" style={{ color: mode === 'dark' ? 'white' : '' }}>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Add PropTypes for props validation
CardsPage.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
};

export default CardsPage;
