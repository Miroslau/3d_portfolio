import InfoBox from '../components/popup-info/info-box.jsx';

export const renderContent = {
  1: (
    <h1
      className="sm:text-xl
                 sm:leading-snug
                 text-center
                 neo-brutalism-blue
                 py-4
                 px-8
                 text-white
                 mx-5"
    >
      Hello!, My name is <span className="font-semibold">Miraslau</span>👋
      <br />A Software Engineer from Belarus
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked for many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Are you looking for a dev? I'm just a few keystrokes away 😉"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};
