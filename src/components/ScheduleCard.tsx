const appointments = [
  {
    name: 'Dr. Samantha Martin',
    type: 'Cardiogram',
    date: '02 Aug',
    color: '#ff6b6b',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michel Corrins',
    type: 'Blood Pressure',
    date: '27 July',
    color: '#6c63ff',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Dr. Angela Mathews',
    type: 'Blood Monitor',
    date: '27 July',
    color: '#2ec4b6',
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
];

const ScheduleCard = () => (
  <div className="schedule-card">
    <div className="schedule-card-title">My Appointments</div>
    <ul className="schedule-list">
      {appointments.map((item, idx) => (
        <li className="schedule-item" key={idx}>
          <span className="schedule-avatar" style={{ background: item.color }}>
            <img src={item.avatar} alt={item.name} />
          </span>
          <div className="schedule-info">
            <div className="schedule-type">{item.type}</div>
            <div className="schedule-name">{item.name}</div>
          </div>
          <div className="schedule-date">{item.date}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default ScheduleCard; 