import {Link} from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utility/constants';

const VideoCard = ({video: {id: {videoId}, snippet} }) => {
  return (
    <Card sx={{backgroundColor: 'black', boxShadow:'none', borderRadius:0, width:{xs: '100%',md: '320px' }}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width: '100%', height: '200px', borderRadius: '20px'}}
        />
      </Link>
      <CardContent sx={{backgroundColor: 'black', height: '106px'}} >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='white'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='gray'>
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard