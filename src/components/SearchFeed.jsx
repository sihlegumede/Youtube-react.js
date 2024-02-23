import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utility/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
    <Box p={2} borderTop='1px solid gray' sx={{ overflowY: "auto", height: "90vh", flex: 2, paddingTop: '2rem' }}>
      <Typography variant="h4" fontWeight="bold" mb={2}  sx={{ color: "white" }}>
        Results For: <span style={{color: '#F31503'}}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;