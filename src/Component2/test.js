import React, { Component } from 'react'
import {Table, Container, Col , Row, Button} from 'react-bootstrap'

import Add from './testadd'


import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


export default class test extends Component {
  constructor(props){
    super (props)
    this.state = {
      data: [],
      nama : "",
      email : "",
      perguruan : "",
      prodi : "",
      tamat : "",
      tgllahir : "",
      umur : "",
      telp : "",
      alamat : "",
      id:""
    }
  }

  getData(){
    fetch('http://localhost:8000/data')
    .then(response => response.json())
    .then(res => {
      this.setState({data : res})
    })
  }

  addData(){
    fetch('http://localhost:8000/add',{
      method : 'POST',
      headers : {
          Accept : 'application/json',
          'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        nama : this.state.nama, 
        email : this.state.email, 
          waktu : this.state.perguruan, 
          prodi: this.state.prodi,
          tamat: this.state.tamat,
          tgllahir: this.state.tgllahir,
          umur: this.state.umur,
          telp: this.state.telp,
          alamat: this.state.alamat,
      })
  })
  .then((response => response.json()))
  .then(res => {
    alert('Berhasil Ditambah')
      this.getData()
  }).catch((error) => {
      console.error(error);
  })
  }

  deleteData(){
    fetch('http://localhost:8000/delete' ,{
      method : 'DELETE',
      headers : {
          Accept : 'application/json',
          'Content-Type' : 'application/json'
      }
  })
  .then((response => response.json()))
  .then(res => {
    alert('Berhasil dihapus')
      this.getData()
  }).catch((error) => {
      console.error(error);
  })
  }

setValue(ev) {
  this.setState({
    [ev.target.name] : ev.target.value
  })
}

  componentDidMount() {
    this.getData()
  }


  render() {
  
    return (
     <div style={{margin:'auto', paddingTop:50, paddingLeft:40, paddingBottom:50,}}>
       <Container style={{paddingBottom:50}}>
          <div>
            <Row style={{paddingBottom:50}}>
              <Col md={6}>
              <input placeholder ="masukkan nama" name="nama" style={{ width:'90%', }} onChange={this.setValue.bind(this)} value={this.state.nama} />

              
              </Col>
              <Col md={6} style={{marginLeft:-50}}>
              <input placeholder ="Email" name="email" style={{ width:'90%', }} onChange={this.setValue.bind(this)} value={this.state.email} />

              
              </Col>
              
            </Row>

            <Row style={{paddingBottom:50}}>
              <Col md={6}>
              <input placeholder ="=Perguruan Tinggi" name="perguruan" style={{ width:'90%', }} onChange={this.setValue.bind(this)} value={this.state.perguruan} />

              
              </Col>
              <Col md={6} style={{marginLeft:-50}}>
              <input placeholder ="Prodi" name="prodi" style={{ width:'90%', }} onChange={this.setValue.bind(this)} value={this.state.prodi} />

              
              </Col>
              
            </Row>

            <Row style={{paddingBottom:50}}>
              <Col md={6}>
              <input placeholder ="Tamat" name="tamat" style={{ width:'90%', }} onChange={this.setValue.bind(this)} value={this.state.tamat} />

              
              </Col>
              <Col md={6} style={{marginLeft:-50}}>
              <input placeholder ="Tgl Lahir" name="tgllahir" style={{ width:'90%', }} onChange={this.setValue.bind(this)} value={this.state.tgllahir}/>

              
              </Col>
              
            </Row>

            <Row style={{paddingBottom:50}}>
              <Col md={6}>
              <input placeholder ="Umur" name="umur" style={{ width:'90%', }} onChange={this.setValue.bind(this)} value={this.state.umur} />

              
              </Col>
              <Col md={6} style={{marginLeft:-50}}>
              <input placeholder ="Telp" name="telp" style={{ width:'90%', }} onChange={this.setValue.bind(this)} value={this.state.telp} />

              
              </Col>
              
            </Row>
            <Row style={{paddingBottom:50}}>
              <Col md={6}>
              <input placeholder ="Alamat" name="alamat" style={{ width:'90%', }}  onChange={this.setValue.bind(this)} value={this.state.alamat}/>

              
              </Col>
              
            </Row>
          </div>
          <div>
            <Row>
              <Col md={12}>
                <Button variant="dark" style={{fontWeight:'bold', marginLeft:'40%'}} onClick={this.addData.bind(this)}>
                  Tambahkan
                </Button>
              </Col>
            </Row>
          </div>

       </Container>
    
    


       <Container style={{margin:'auto', paddingBottom:20}}>
         <Row lg={12} style={{marginLeft:'40%'}}>
           <Col>
           
                 
           </Col>
         </Row>
       </Container>
      
        <Row>
          <Col>NO</Col>
          <Col style={{marginLeft:-50}}>NAMA MUHARIS</Col>
          <Col style={{marginLeft:-50}}>EMAIL</Col>
          <Col style={{marginLeft:10}}>PERGURUAN TINGGI</Col>
          <Col>PRODI</Col>
          <Col style={{marginLeft:-100}}>TAMAT</Col>
          <Col style={{marginLeft:-110}}>TGL LAHIR</Col>
          <Col style={{marginLeft:-100}}>UMUR</Col>
          <Col style={{marginLeft:-100}}>TELP</Col>
          <Col style={{marginLeft:-100}}>ALAMAT</Col>

        </Row>
          {
            this.state.data.map((item, index) => (
              <Row cellPadding="0" key={index} style={{width:'100%', fontSize:11, backgroundColor:'grey', padding:20, color:'white'}}>
                <Col style={{marginLeft:-20}}> {index+1} </Col>
                <Col> {item.Nama} </Col>
                <Col style={{marginRight:100}}> {item.Email} </Col>
                <Col> {item.Perguruan} </Col>
                <Col> {item.Prodi} </Col>
                <Col> {item.Tamat} </Col>
                <Col> {item.Tgllahir} </Col>
                <Col> {item.Umur} </Col>
                <Col> {item.Telp} </Col>
                <Col> {item.Alamat} </Col>
                <Col> 
                <Button variant="dark" style={{fontWeight:'bold', marginLeft:'40%'}}>
                  Edit
                </Button> 
                </Col>
                <Col>
                <Button variant="dark" style={{fontWeight:'bold', marginLeft:'40%'}} onClick={this.deleteData.bind(this)} >
                  Hapus
                </Button>

                  </Col>
              </Row>
            ))
          }

          
        
     
     </div>
    )
  }
}

