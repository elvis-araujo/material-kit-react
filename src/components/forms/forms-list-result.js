import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CardHeader from '@mui/material/CardHeader';
import Drawer from '@mui/material/Drawer';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Box, Container, Grid, CardActionArea } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { faker } from '@faker-js/faker';

export const Form = () => {
  return (
    <>

      <Box
        component="main"
        sx={{
          flexGrow: 1
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={1}
          >
            {[1, 2, 3, 4, 5].map((item, key) => (
              <Grid
                key={key}
                item
                lg={4}
                sm={6}
                xl={4}
                xs={12}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => { }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Shrimp and Chorizo Paella"
                      subheader={'Criado em: ' + new Date().toLocaleDateString()}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={faker.image.abstract()}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
