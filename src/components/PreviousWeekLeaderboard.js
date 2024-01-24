import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import LeaderBoardTable from './LeaderBoardTable'; // Corrected component name
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';

const countriesArray = ['AL', 'SM', 'SL', 'HU', 'EE', 'GW', 'UA', 'KI', 'BD', 'PE', 'MG', 'VC', 'MX', 'DE', 'KG', 'AU', 'JP', 'ID', 'FI', 'BY', 'FM', 'LY', 'RU', 'IE', 'AD', 'MW', 'LV', 'PW', 'KN', 'TD', 'TV', 'ZM', 'LC', 'CG', 'GR', 'SV', 'LR', 'MY', 'DM', 'TL', 'PS', 'JO', 'SR', 'CR', 'BF', 'SN', 'SK', 'NE', 'GE', 'BR', 'CL', 'CU', 'HT', 'LB', 'CN', 'CY', 'VN', 'MD', 'MN', 'GH', 'VE', 'SO', 'CA', 'KE', 'ME', 'PH', 'IT', 'BT', 'CH', 'LS', 'UG', 'RW', 'RO', 'YE', 'SY', 'KW', 'DZ', 'KR', 'TO', 'NZ', 'FR', 'PT', 'RS', 'GN', 'ZW', 'GD', 'DJ', 'ET', 'KH', 'JM', 'NI', 'BW', 'GQ', 'MV', 'BJ', 'SE', 'PA', 'AT', 'UY', 'ES', 'SG', 'KM', 'UZ', 'NR', 'EC', 'DK', 'BI', 'SA', 'TJ', 'AR', 'CD', 'SC', 'BH', 'ML', 'NG', 'MK', 'GT', 'IS', 'LK', 'MH', 'LU', 'BS', 'HN', 'NP', 'MA', 'AE', 'QA', 'VA', 'PY', 'AF', 'BZ', 'FJ', 'TN', 'GB', 'BN', 'BG', 'DO', 'TG', 'GM', 'BE', 'SB', 'TM', 'ZA', 'SZ', 'NO', 'MM', 'PK', 'PL', 'AM', 'AZ', 'CZ', 'IQ', 'BA', 'TZ', 'NA', 'CF', 'BB', 'WS', 'EG', 'CO', 'IR', 'TR', 'ER', 'MU', 'CI', 'LT', 'NL', 'AO', 'TH', 'TT', 'TW', 'PG', 'VU', 'HR', 'CM', 'LI', 'AG', 'CV', 'IN', 'ST', 'KZ', 'GY', 'BO', 'LA', 'OM', 'MR', 'MZ', 'GA', 'MC', 'US', 'KP', 'SI', 'SD', 'MT', 'IL'];
const theme = createTheme();

const PreviousWeekLeaderboard = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelect = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
  };

  useEffect(() => {
    // Fetch data based on the selected country when it changes
    if (selectedCountry) {
      // Assuming LeaderBoardTable accepts a 'country' prop
      // Modify this logic based on your actual implementation
      // Here, we're just logging to the console for demonstration purposes
      console.log(`Fetching data for ${selectedCountry}`);
      // Call your API or data-fetching function here
    }
  }, [selectedCountry]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* Select dropdown */}
        <FormControl fullWidth sx={{ backgroundColor: alpha(theme.palette.common.white, 0.5) }}>
          <Select
            value={selectedCountry}
            onChange={handleCountrySelect}
            displayEmpty
            inputProps={{ 'aria-label': 'Select Country' }}
          >
            <MenuItem disabled value="" key="placeholder">
              Which Country's Previous Week Leaderboard
            </MenuItem>
            {countriesArray.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* LeaderBoardTable component */}
        <LeaderBoardTable apiEndpoint={selectedCountry} /> {/* Corrected component name */}
        Previous Week Leaderboard

      </div>
    </ThemeProvider>
  );
};

export default PreviousWeekLeaderboard;
