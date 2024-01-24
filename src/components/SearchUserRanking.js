import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import api from '../api';
import MoodIcon from '@mui/icons-material/Mood';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const theme = createTheme();

const SearchUserRanking = () => {
  const [userId, setUserId] = useState('');
  const [userRank, setUserRank] = useState(null);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSearchRank = () => {
    console.log('handleSearchRank called with userId:', userId);

    // You can perform additional logic here, like making an API call to get the user's rank
    // For now, let's assume you have the user's rank available and set it in the state
    const apiCall = `/api/user_rank/${userId}`;
    console.log("The endpoint is: ", apiCall);
  
    api.get(apiCall)
      .then((response) => {
        console.log("Response from the API:", response);
  
        if (!response || !response.data) {
          console.error('Invalid response format:', response);
          return;
        }
  
        const jsonData = JSON.parse(JSON.stringify(response.data));
  
        setUserRank(jsonData);

        console.log("Current userRank state:", userRank);

      })
      .catch((error) => {
        console.error('Error fetching leaderboard data:', error);
      });
  };
  


  const getRankEmoji = () => {
    if (userRank <= 100) {
      return <MoodIcon fontSize="large" style={{ color: 'gold' }} />;
    } else if (userRank <= 1000) {
      return <SentimentSatisfiedIcon fontSize="large" style={{ color: 'silver' }} />;
    } else if (userRank <= 10000) {
      return <SentimentDissatisfiedIcon fontSize="large" style={{ color: 'peru' }} />;
    } else {
      return null; // Handle other cases if needed
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h2>Search User Ranking</h2>

        <TextField
          label="User ID"
          variant="outlined"
          value={userId}
          onChange={handleUserIdChange}
          fullWidth
          margin="normal"
          color="warning"
          focused
          InputProps={{
            style: {
              color: 'white', 
              '&.Muifocused': {
                borderColor: 'rgba(255, 255, 255, 0.7)', 
              },
            },
          }}
        />

        {/* Button to trigger the search */}
        <Button variant="contained" onClick={handleSearchRank}>
          Search Rank
        </Button>

        {/* Display the user's rank with emoji representation */}
        {userRank !== null && (
          <div>
            <p>User ID: {userId}</p>
            <p>Rank: {[getRankEmoji() ,userRank]}</p>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default SearchUserRanking;
