import { v4 as uuid } from 'uuid';
import { Box, IconButton, Tooltip } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
const rows = [
  { id: uuid().substring(0, 4).toUpperCase(), createdAt: new Date().toLocaleDateString(), name: 'Carson Darrin', email: 'elvissoares1999@gmail.com', event: 'abc' },
  { id: uuid().substring(0, 4).toUpperCase(), createdAt: new Date().toLocaleDateString(), name: 'Carson Darrin', email: 'elvissoares1999@gmail.com', event: 'Lançamento UP e Celebração de 50 anos Pioneer Brasil' },
  { id: uuid().substring(0, 4).toUpperCase(), createdAt: new Date().toLocaleDateString(), name: 'Carson Darrin', email: 'elvissoares1999@gmail.com', event: 'Lançamento UP e Celebração de 50 anos Pioneer Brasil' },
  { id: uuid().substring(0, 4).toUpperCase(), createdAt: new Date().toLocaleDateString(), name: 'Carson Darrin', email: 'elvissoares1999@gmail.com', event: 'Lançamento UP e Celebração de 50 anos Pioneer Brasil' },
  { id: uuid().substring(0, 4).toUpperCase(), createdAt: new Date().toLocaleDateString(), name: 'Carson Darrin', email: 'elvissoares1999@gmail.com', event: 'Lançamento UP e Celebração de 50 anos Pioneer Brasil' },
  { id: uuid().substring(0, 4).toUpperCase(), createdAt: new Date().toLocaleDateString(), name: 'Carson Darrin', email: "elvissoares1999@gmail.com", event: 'Lançamento UP e Celebração de 50 anos Pioneer Brasil' },
  { id: uuid().substring(0, 4).toUpperCase(), createdAt: new Date().toLocaleDateString(), name: 'Carson Darrin', email: 'elvissoares1999@gmail.com', event: 'Lançamento UP e Celebração de 50 anos Pioneer Brasil' },
  { id: uuid().substring(0, 4).toUpperCase(), createdAt: new Date().toLocaleDateString(), name: 'Carson Darrin', email: 'elvissoares1999@gmail.com', event: 'Lançamento UP e Celebração de 50 anos Pioneer Brasil' },
  { id: uuid().substring(0, 4).toUpperCase(), createdAt: new Date().toLocaleDateString(), name: 'Carson Darrin', email: 'elvissoares1999@gmail.com', event: 'Lançamento UP e Celebração de 50 anos Pioneer Brasil' },
];

const columns = [
  { field: 'id', headerClassName: 'super-app-theme--header', headerName: 'ID', width: 80 },
  { field: 'createdAt', headerClassName: 'super-app-theme--header', headerName: 'DATA DE INSCRIÇÃO', width: 150 },
  { field: 'name', headerClassName: 'super-app-theme--header', headerName: 'NOME', width: 150 },
  { field: 'email', headerClassName: 'super-app-theme--header', headerName: 'EMAIL', width: 200 },
  {
    field: 'event',
    headerName: 'EVENTO',
    headerClassName: 'super-app-theme--header',
    width: 150,
  },
  {
    field: 'actions',
    headerClassName: 'super-app-theme--header',
    headerName: 'AÇÕES',
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Tooltip title="Editar">
            <IconButton onClick={(e) => console.log(e, params.row)}>
              <CreateIcon fontSize='medium' />
            </IconButton>
          </Tooltip>
          <Tooltip title="Visualizar">
            <IconButton onClick={(e) => console.log(e, params.row)}>
              <ArrowRightAltIcon fontSize='inherit' />
            </IconButton>
          </Tooltip>
          <Tooltip title="Deletar">
            <IconButton onClick={(e) => console.log(e, params.row)}>
              <DeleteIcon fontSize='inherit' />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  },
];

export { columns, rows };
