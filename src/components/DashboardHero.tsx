const DashboardHero = () => {
  return (
    <section className="dashboard-hero">
      <div className="dashboard-hero-img">
        {/* Replace with a real SVG or image if you have one */}
        <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/heart-2026616_1280.png" alt="Heart" />
      </div>
      <div className="dashboard-hero-text">
        <h1>Overview<br />Conditions</h1>
        <p className="dashboard-hero-sub">Monitor your heart and health stats in real time.</p>
      </div>
    </section>
  );
};

export default DashboardHero; 