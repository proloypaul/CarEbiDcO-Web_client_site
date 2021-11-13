import React, { useEffect, useState } from 'react';
import useAuth from '../../../Context/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import './MyOrder.css';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const MyOrder = () => {
    const {user} = useAuth()
    const [userOrder, setUserOrder] = useState([])

    useEffect(()=> {
        const url = `https://salty-temple-09318.herokuapp.com/orders/${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setUserOrder(data)
        }) 
    }, [user.email])

    const handleDltBtn = id => {
        // console.log(id)
        const confirmMsg = window.confirm("Would you like to  delete this order?")
        if(confirmMsg){
            const url = `https://salty-temple-09318.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if(data.deletedCount > 0){
                        const withOutDeleteOrder = userOrder.filter(user => user._id !== id)
                        setUserOrder(withOutDeleteOrder)
                        alert("Deleted order successfully!")
                    }
                })
        }else{
            alert("Your Order is Okay")
        }
    }


    return (
        <div> 
            <Container className="myOrder-container">
                <h1>Your Order  <span>{userOrder.length}</span></h1>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Order</StyledTableCell>
                            <StyledTableCell align="right">Phone</StyledTableCell>
                            <StyledTableCell align="right">Date</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {userOrder.map((row) => (
                            <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.email}</StyledTableCell>
                            <StyledTableCell align="right">{row.OrderItem}</StyledTableCell>
                            <StyledTableCell align="right">{row.phone}</StyledTableCell>
                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                            <StyledTableCell align="right"><button onClick={() => handleDltBtn(row._id)} className="dltBtn"><i className="fas fa-trash-alt"></i></button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Container>
            
        </div>
    );
};

export default MyOrder;