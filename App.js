import './App.css';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {collection, getDocs, query, orderBy} from 'firebase/firestore';
import {db} from './Base';
import { storage } from './Base';


const App = () => {
 
  const [lsetf, setLsetf] = useState([]);

  const usersCollectionRef = collection(db, "students");
 
  const que = query(usersCollectionRef, orderBy("name"));

  const getData = async () => {
      const data = await getDocs(que, usersCollectionRef)
      setLsetf(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
  }


  useEffect(() => {
      getData();
  }, []);


  return (
    <Contain>
      <h1>SOFTWARE ENGINEERING TRAINING PARTICIPANTS OF LAGOS STATE EMPLOYMENT TRUST FUND (LSETF)</h1>
      <br/>
      <br/>
      {lsetf.map(({id, git, linked, fb, whatsapp, name, imgurl, description}) => (
          <Div key={id}>
            <Img src={imgurl} alt="image"/>
            <h2>NAME: {name}</h2>
            <Div2>{description}</Div2>
            <div>
            <div><a href={fb}>Facebook</a></div>
            <div><a href={git}>GitHub</a></div>
            <div><a href={linked}>LinkedIn</a></div>
            <div><a href={whatsapp}>Whatsapp</a></div>
            </div>
          </Div>
              ))}
    </Contain>
  )
}

export default App


const Contain = styled.div`
    width: 100%;
    color: whitesmoke;
    font-size: medium;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
   
    h1{
      text-align: center;
    }
    a{
      color: blue;     
    }
    h2{
      width: 40%;
      color: whitesmoke;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @media screen and (max-width: 850px) {
        font-size: 15px;
      }
    }
    h1{
      color: #497799;
    }
`

const Up = styled.div`
height: 110px;
width: 100%;
`

const Div = styled.div`
        display: flex;
        flex-direction: column;
        width: 98%;
        background-color: #497799;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        border-width: -3px;
        border-style: groove;
        border-color: grey;
        padding-top: 7px;
        padding-bottom:7px;
`

const Div2 = styled.div`
width: 50%;
display: flex;
flex-wrap: wrap;
background-color: whitesmoke;
border-radius: 5px;
color: #497799;
font-weight: bold;
`

const Img = styled.img`
height:120px;
width: 120px;
border-radius: 50%;

@media screen and (max-width: 850px){
  height: 40px;
  width: 40px;
}
`