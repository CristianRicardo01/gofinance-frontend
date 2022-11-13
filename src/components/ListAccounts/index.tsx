import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import * as S from './styles'
import Button from '@/components/Button'
import Input from '@/components/input'


function createData(
  title: string,
  description: number,
  category: number,
  value: number,
  data: number,
) {
  return { title, description, category, value, data }
}
const titles = [ 'Title', 'Description', 'Category', 'Value', 'Data', 'Delete']

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, ),
]

export default function ListAccounts() {
  return (
    <S.Wrapper>

      <S.Button>
        <Button>
          Adicionar
        </Button>
      </S.Button>
      <S.FiltersAndDataTabel>
        <S.Filters>
          <Input label="Data Inicial" type="date" name="initialDate" isFilter={true} />
          <S.Filters>
            <Input label="Data Final" type="date" name="finalDate" isFilter />
          </S.Filters>
          <S.Filters>
            <Input label="Title" type="text" placeholder="Title" name="title" isFilter />
          </S.Filters>
          <S.Filters>
            <Input label="Description" type="text" placeholder="Description" name="description" isFilter />
          </S.Filters>
          <S.Filters>
            <Input label="Category" type="text" placeholder="Category" name="category" isFilter />
          </S.Filters>
        </S.Filters>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="List Accounts">
            <TableHead>
              <TableRow>
                {titles.map((title) => (
                  <TableCell  sx={{ fontSize: 17, fontWeight: 'bold' }} >{title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ fontSize: 15 }} >
                    {row.title}
                  </TableCell>
                    <TableCell align="right" sx={{ fontSize: 15 }} >{row.description}</TableCell>
                    <TableCell align="right" sx={{ fontSize: 15 }} >{row.category}</TableCell>
                    <TableCell align="right" sx={{ fontSize: 15 }} >{row.value}</TableCell>
                    <TableCell align="right" sx={{ fontSize: 15 }} >{row.data}</TableCell>
                    <TableCell align="left">
                    <S.IconDelete size={20} onClick={()=> console.log('delete')}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </S.FiltersAndDataTabel>
    </S.Wrapper>
  )
}