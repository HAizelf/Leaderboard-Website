
import React from 'react';
import LeaderboardTable from './LeaderBoardTable';

const WeeklyLeaderboard = () => {
  const apiEndpoint = 'current_week_leaderboard';

  return (
    <div>
      <LeaderboardTable apiEndpoint={apiEndpoint} />
      Weekly Leaderboard
    </div>
  );
}

export default WeeklyLeaderboard;
