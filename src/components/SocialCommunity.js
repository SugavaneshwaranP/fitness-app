import React, { useState } from "react";

const SocialCommunity = () => {
  const challenges = [
    { name: "30-day Squat Challenge", details: "Complete squats every day for 30 days." },
    { name: "Weekly Step Challenge", details: "Aim for 10,000 steps every day." },
  ];

  const [joinedChallenges, setJoinedChallenges] = useState([]);

  const joinChallenge = (challenge) => {
    setJoinedChallenges([...joinedChallenges, challenge]);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Social Community</h2>
      <h3>Join a Challenge</h3>
      <ul>
        {challenges.map((challenge, index) => (
          <li key={index}>
            <div>{challenge.name}</div>
            <p>{challenge.details}</p>
            <button onClick={() => joinChallenge(challenge.name)}>Join</button>
          </li>
        ))}
      </ul>
      {joinedChallenges.length > 0 && (
        <div>
          <h3>Joined Challenges:</h3>
          <ul>
            {joinedChallenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SocialCommunity;