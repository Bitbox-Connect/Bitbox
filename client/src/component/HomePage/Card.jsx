import PropTypes from "prop-types";

const CardsPage = ({ mode }) => {
  // Array containing card information
  const cardData = [
    {
      title: "Start your journey",
      content:
        "Engaging in GSSoC'23 offers a chance to elevate your GitHub presence. Elevate your knowledge, delve into new horizons, refine, amplify, forge connections, and foster teamwork to cultivate your abilities and character. Seize the opportunity to delve into open-source, mastering fundamental tools like Git and GitHub under the guidance of adept mentors.",
    },
    {
      title: "Inviting Projects & NGOs",
      content:
        "If your organization harbors a vision for a project, whether it’s a website, an app, or any other initiative, seize this golden opportunity to join our vibrant community. Our aspiring developers, mentored by seasoned experts, are eager to collaborate on your projects, aiming for nothing short of excellence. Submit your application now, and let’s join forces because Together Everyone Achieves More.",
    },
    {
      title: "Lead the pack",
      content:
        "In the realm of open-source projects, mentors serve as the vanguards, charting the course for the team's journey. They provide invaluable guidance to fellow participants, navigating them through every stage of the project roadmap. Acting as the cornerstone of the team, mentors remain accessible throughout the summer, reviewing pull requests and offering suggestions for improvement. Seize the opportunity to become a mentor at GirlScript Summer of Code and lay the groundwork for your team's success.",
    },
    {
      title: "Add your shade to GSSoC'23",
      content:
        "Supporters play a crucial role in ensuring the seamless execution of GirlScript events by providing valuable resources. Their contribution enables us to reward our top participants with perks, fostering talent within our community. In appreciation of their support, we offer extensive publicity on our social platforms and media exposure to showcase our sponsors. Join us as a sponsor and illuminate our program with your generosity.",
    },
  ];

  return (
    <div
      className="Community-Blocks flex items-center justify-center"
      style={{
        backgroundColor: mode === "dark" ? "black" : "",
        color: mode === "dark" ? "white" : "black",
      }}
    >
      <section className="max-w-7xl px-5 max-sm:px-2.5 max-xl:px-5">
        <h2
          className="font-bold text-4xl md:text-5xl lg:text-[3.5rem] pt-16 text-blue-main"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Be a part of Bitbox Community
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 pt-12 pb-16">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="py-16 px-5 rounded-2xl border-2 border-blue-main space-y-3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-main hover:shadow-2xl group" // Increased shadow and scale for better emphasis
              >
                <h3 className="font-semibold text-[28px] text-center text-blue-main group-hover:text-white transition-colors duration-300">
                  {/* Smooth transition on text color */}
                  {card.title}
                </h3>
                <p className="font-medium text-blue-main group-hover:text-white transition-colors duration-300">
                  {/* Smooth transition on content color */}
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

CardsPage.propTypes = {
  mode: PropTypes.string,
};

export default CardsPage;
