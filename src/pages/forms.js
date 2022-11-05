import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { Form } from '../components/forms/forms-list-result';
import { FormsListToolbar } from '../components/forms/forms-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';


const Page = () => (
  <>
    <Head>
      <title>
        Formularios | Material Kit
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
        <FormsListToolbar />
        <Box sx={{ mt: 3 }}>
          <Form />
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
