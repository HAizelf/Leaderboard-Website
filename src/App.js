import React, { useState } from 'react';
import WeeklyLeaderboard from './components/WeeklyLeaderboard';
import PreviousWeekLeaderboard from './components/PreviousWeekLeaderboard';
import SearchUserRanking from './components/SearchUserRanking';
import ResponsiveAppBar from './components/appbar';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const renderSelectedTable = () => {
    console.log('Selected Option:', selectedOption);
  
    switch (selectedOption) {
      case 'weeklyleaderboard':
        console.log('Rendering WeeklyLeaderboard');
        return <WeeklyLeaderboard />;
      case 'previousweekleaderboard':
        console.log('Rendering PreviousWeekLeaderboard');
        return <PreviousWeekLeaderboard />;
      case 'searchuserranking':
        console.log('Rendering SearchUserRanking');
        return <SearchUserRanking />;
      default:
        console.log('Rendering Default (null)');
        return null;
    }
  };

  return (
    <div className="App">
      <ResponsiveAppBar
        onSelectOption={(option) =>{
          renderSelectedTable(option);

          setSelectedOption(option)
          }
        }
      />
      <ThemeProvider theme={theme}>
        <Box
           sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://media.wired.com/photos/627da1085d49787abdf713b4/master/w_1920,c_limit/Pakistani-Gamers-Want-a-Seat-at-the-Table-Culture-shutterstock_1949862841.jpg')`,
            height: "820px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "4rem",
            [theme.breakpoints.down("sm")]: {
              height:  320,
              fontSize: "3em",
            },
          }}
        >
          <Box><h2>Gaming Center</h2>
          Hitesh Bhandari, IIIT Delhi
          </Box>
          
          {renderSelectedTable()}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;


