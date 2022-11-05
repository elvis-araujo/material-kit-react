import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { DashboardLayout } from '../components/dashboard-layout';

import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { columns, rows } from '../__mocks__/customers';
const Page = () => (
  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Budget name={'Total de convidados'} />
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            sm={6}
            xs={12}
          >
            <Budget name={'Total de Fomularios'} />
          </Grid>

        </Grid>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          <Container maxWidth={false}>
            <CustomerListToolbar />
            <Box sx={{ mt: 3 }}>
              <CustomerListResults rows={rows}columns={columns}/>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
