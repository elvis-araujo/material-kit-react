import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box
} from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export const CustomerListResults = ({ columns, rows, ...rest }) => {

  const translate = {
    // Root
    noRowsLabel: 'Nenhuma linha',
    noResultsOverlayLabel: 'Nenhum resultado encontrado.',
    errorOverlayDefaultLabel: 'Ocorreu um erro.',

    // Density selector toolbar button text
    toolbarDensity: 'Densidade',
    toolbarDensityLabel: 'Densidade',
    toolbarDensityCompact: 'Compacto',
    toolbarDensityStandard: 'Padrão',
    toolbarDensityComfortable: 'Confortável',

    // Columns selector toolbar button text
    toolbarColumns: 'Colunas',
    toolbarColumnsLabel: 'Exibir seletor de colunas',

    // Filters toolbar button text
    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Exibir filtros',
    toolbarFiltersTooltipHide: 'Ocultar filtros',
    toolbarFiltersTooltipShow: 'Exibir filtros',
    toolbarFiltersTooltipActive: (count) =>
      `${count} ${count !== 1 ? 'filtros' : 'filtro'} ${count !== 1 ? 'ativos' : 'ativo'}`,

    // Export selector toolbar button text
    toolbarExport: 'Exportar',
    toolbarExportLabel: 'Exportar',
    toolbarExportCSV: 'Baixar como CSV',

    // Columns panel text
    columnsPanelTextFieldLabel: 'Localizar coluna',
    columnsPanelTextFieldPlaceholder: 'Título da coluna',
    columnsPanelDragIconLabel: 'Reordenar Coluna',
    columnsPanelShowAllButton: 'Mostrar todas',
    columnsPanelHideAllButton: 'Ocultar todas',

    // Filter panel text
    filterPanelAddFilter: 'Adicionar filtro',
    filterPanelDeleteIconLabel: 'Excluir',
    filterPanelOperators: 'Operadores',
    filterPanelOperatorAnd: 'E',
    filterPanelOperatorOr: 'Ou',
    filterPanelColumns: 'Colunas',
    filterPanelInputLabel: 'Valor',
    filterPanelInputPlaceholder: 'Filtrar valor',

    // Filter operators text
    filterOperatorContains: 'contém',
    filterOperatorEquals: 'é igual a',
    filterOperatorStartsWith: 'começa com',
    filterOperatorEndsWith: 'termina com',
    filterOperatorIs: 'é',
    filterOperatorNot: 'não é',
    filterOperatorOnOrAfter: 'em ou após',
    filterOperatorBefore: 'antes de',
    filterOperatorOnOrBefore: 'em ou antes de',
    filterOperatorAfter: 'após',
    filterOperatorIsEmpty: 'está vazio',
    filterOperatorIsNotEmpty: 'não está vazio',

    // Column menu text
    columnMenuLabel: 'Menu',
    columnMenuShowColumns: 'Exibir colunas',
    columnMenuFilter: 'Filtrar',
    columnMenuHideColumn: 'Ocultar',
    columnMenuUnsort: 'Desfazer ordenação',
    columnMenuSortAsc: 'Ordenar do menor para o maior',
    columnMenuSortDesc: 'Ordenar do maior para o menor',

    // Column header text
    columnHeaderFiltersTooltipActive: (count) =>
      `${count} ${count !== 1 ? 'filtros' : 'filtro'} ${count !== 1 ? 'ativos' : 'ativo'}`,
    columnHeaderFiltersLabel: 'Exibir Filtros',
    columnHeaderSortIconLabel: 'Ordenar',

    // Rows selected footer text
    footerRowSelected: (count) =>
      count !== 1
        ? `${count.toLocaleString()} linhas selecionadas`
        : `${count.toLocaleString()} linha selecionada`,

    // Total rows footer text
    footerTotalRows: 'Total de linhas:',

    // Total visible rows footer text
    footerTotalVisibleRows: (visibleCount, totalCount) =>
      `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

    // Checkbox selection text
    checkboxSelectionHeaderName: 'Seleção',

    // Boolean cell text
    booleanCellTrueLabel: 'sim',
    booleanCellFalseLabel: 'não',

    // Actions cell more text
    actionsCellMore: 'mais',
  }
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const { data } = useDemoData({
    dataSet: 'Comfortable',
    rowLength: 20,
    maxColumns: 6,
  });

  return (
    <TableContainer component={Paper}>
      <Box style={{ height: 500, width: '100%' }}
        sx={{

          '& .super-app-theme--header': {
            backgroundColor: '#f3f4f6',
          },
        }}
      >
        <DataGrid
          {...data}
          rows={rows}
          columns={columns}
          pageSize={10}
          density="comfortable"
          localeText={translate}
          autoHeight={true}
          components={{ Toolbar: GridToolbar }}
          rowsPerPageOptions={[5]}
          showCellRightBorder
          showColumnRightBorder
          getRowId={(row) => row.id}
          checkboxSelection
          sx={{
            "& .MuiDataGrid-row": {
              borderBottom: "solid #e6e8f0 2px"
            }
          }}
        />
      </Box>
    </TableContainer>
  );
};

CustomerListResults.propTypes = {

};
