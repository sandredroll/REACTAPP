import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import axios from 'axios'
const Home = () => {
    const[users, setUsers]=useState([]);
    console.log(users)
    useEffect(()=>{
        axios.get("http://localhost:8000/users")
        .then(res=>{
            // console.log(res.data);
            setUsers(res.data);
        })
        .catch(err=>console.log(err))
    },[])


  return (
    <section id='homeBlock' >
         <article>
            <h1>List of users</h1>

            <div className='createBtn'>
                <Link to='/create'>Add User (+)</Link>
            </div>
            {
                users && users.length > 0 ?(<table>
                    <thead>
                        <tr>
                            <td>SI.No</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i)=>{
                                return(
                                   <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                   </tr> 
                                )
                            })
                        }
                    </tbody>
                </table>) : <h1>No Data Available</h1>
            }
         </article>
    </section>
  )
}

export default Home