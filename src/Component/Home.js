import React, { Component } from 'react'
import  {Button,Table,Image, Navbar, Nav, NavDropdown, Container, Col, Row, InputGroup, FormControl} from 'react-bootstrap'
import { Cart, Truck, Percent, ArrowRepeat, Bookmark } from 'react-bootstrap-icons';
import Images1 from '../Asset/Images/force-majeure-SmIlY2uAHo8-unsplash.png'
import Images2 from '../Asset/Images/force-majeure-00tlC0Clfrs-unsplash.png'
import Images3 from '../Asset/Images/judeus-samson-0UECcInuCR4-unsplash.png'


import Thumbnail1 from '../Asset/Images/774db5aaead641df9c989f78fbb35a11.png'
import Thumbnail2 from '../Asset/Images/ZI1210004-Q11@14.png'
import Banner from '../Asset/Images/force-majeure-a08wHxn7p7A-unsplash.png'
import Banner2 from '../Asset/Images/Group 61.png'

import Instagram from '../Asset/Images/1200px-Instagram_logo.svg.png'
import InstagramContent from '../Asset/Images/clem-onojeghuo-GwcXIzetYqM-unsplash.png'

import Instagram1 from '../Asset/Images/instagram.png'
import Facebook from '../Asset/Images/facebook.png'
import Snapchat from '../Asset/Images/snapchat.png'
import Youtube from '../Asset/Images/youtube.png'
import LogoBank from '../Asset/Images/Group 54.png'

import './app.css'


export default class Home extends Component {
  render() {

    return (
     <div className="container1">
       

        {/* navbar */}


            <Navbar expand="md" className="navbar2" style={{height:40, textAlign:'center', backgroundColor:'#EAEAEA', paddingBottom:20}} fixed="top" >
                <Container>
                    
                    <Row style={{textAlign:'center', width:'100%'}}>
                      <Col>
                    
                          <Truck color="black" size={25} style={{paddingRight:10}} /> Kostenloser Versand ab 50€
                      
                      </Col>
                      <Col>
                      <Percent color="black" size={25} style={{paddingRight:10}} /> Täglich neue Angebote
                      </Col>
                      <Col>
                      <ArrowRepeat color="black" size={25} style={{paddingRight:10}} /> Kostenlose Retoure
                      </Col>

                    </Row>
                </Container>
            </Navbar>
            <Navbar expand="md" className="navbar1" fixed="top"  >
                <Container>
                    <Navbar.Brand href="#" style={{fontWeight :'bold'}}>FASHION IST</Navbar.Brand>
                    <Nav className="mr-auto" style={{fontWeight :'650'}} >
                      <Nav.Link href="#" style={{marginLeft:30}}>Home</Nav.Link>
                      <Nav.Link href="#" style={{marginLeft:30}}>Collection</Nav.Link>
                      <Nav.Link href="#" style={{marginLeft:30}}>ForHim</Nav.Link>
                      <Nav.Link href="#" style={{marginLeft:30}}>ForHer</Nav.Link>
                      <Nav.Link href="#" style={{color:'red', marginLeft:30}}>%Sale</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto"  style={{fontWeight :'650', marginTop:10}}>
                      <Nav.Link href="#home">
                        <Cart color="black" size={25} style={{position:'absolute', marginLeft:-30}} />  <p>99,99 EUR</p>
                      </Nav.Link>

                      <NavDropdown title="Hello, Muharis" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#/3.3">Something</NavDropdown.Item>
                      
                      </NavDropdown>
                      
                    </Nav>
                </Container>
            </Navbar>


      
       {/* end */}

       {/* Conten */}
       
          <Container style={{backgroundColor:'white', width : '100%', padding:30 }}>
            <Row>
              <Col md={8}>
                <div style={{position:'relative'}}>
                  <div className="layer1"></div>
                  <Image src={Images1} style={{width:650}}  />

                  <div style={{position:'absolute', marginTop:-70, color:'white', marginLeft: 50, zIndex:2}}>
                    <p style={{fontSize:15, marginBottom:-10}}>Jetzt neu zum Sommer:</p>  
                    <p style={{fontSize:20}}>Ferah Collection by Borderline</p>  
                  </div>    
                </div>
              </Col>
              <Col md={4} style={{marginLeft:-80}}>
                <Row>
                  <Col>
                  <div style={{position:'relative'}}>
                    <div className="layer4"></div>
                    <Image src={Images2} style={{width :415, height:230}}  />

                    <div style={{position:'absolute', marginTop:-50, color:'white', marginLeft: 50,zIndex:2}}>
                      <p style={{fontSize:10, marginBottom:-10}}>Im Spotlight:</p>  
                      <p style={{fontSize:20}}>Summer Collection</p>  
                    </div>
                  </div>   
                  </Col>
                </Row>
                <Row style={{marginTop:7}}>
                  <Col>
                  <div style={{position:'relative'}}>
                    <div className="layer3"></div>
                    <Image src={Images3} style={{width :415, height:230}}  />

                    <div style={{position:'absolute', marginTop:-50, color:'white', marginLeft: 50,zIndex:2}}>
                      <p style={{fontSize:10, marginBottom:-10}}>Wieder verfügbar:</p>  
                      <p style={{fontSize:20}}>Urban Streets</p>  
                    </div>
                  </div>   
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          {/* styles de Tages */}
          
          <Container style={{marginTop:35 , backgroundColor:'white', width : '100%', padding:50}}>
            <Row>
              <Col md={12} style={{textAlign:'center'}}>
                <h2>Style des Tages</h2>
                <p style={{marginTop:-10, fontSize:12}}>Inspirationen für dein Outfit</p>
              </Col>
            </Row>
            {/* Row1 */}
            <Container >
              <Row style={{textAlign:'center'}}>
                <Col sm={3}>
                    <div>
                      <div style={{position:'relative'}}>
                        <Image src={Thumbnail1} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
                <Col sm={3}>
                 <div>
                         <div style={{position:'relative'}}>
                        <Image src={Thumbnail1} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
                <Col sm={3}>
                 <div>
                        <div style={{position:'relative'}}>
                        <Image src={Thumbnail1} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
                <Col sm={3}>
                 <div>
                         <div style={{position:'relative'}}>
                        <Image src={Thumbnail1} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
              </Row>
            </Container>

              {/* Row2 */}

              <Container style={{marginTop:10}}>
              <Row style={{textAlign:'center'}}>
                <Col>
                    <div>
                      <div style={{position:'relative'}}>
                        <Image src={Thumbnail1} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
                <Col>
                 <div>
                         <div style={{position:'relative'}}>
                        <Image src={Thumbnail1} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
                <Col>
                 <div>
                        <div style={{position:'relative'}}>
                        <Image src={Thumbnail1} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
                <Col>
                 <div>
                         <div style={{position:'relative'}}>
                        <Image src={Thumbnail1} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
              </Row>
            </Container>

            <Container style={{margin:'auto'}}>
              <Row style={{textAlign:'center'}}>
                <Col md={12}>
                  <Button style={{backgroundColor: 'black', color:'white', width:247, height:58, fontWeight:'bold'}} >
                    M O R E
                  </Button>

                </Col>
              </Row>
            </Container>

          </Container>

          {/* end */}



        {/* end */}

        {/* Beliebe Outfits */}

        <Container style={{marginTop:35 , backgroundColor:'white', width : '100%', padding:50}}>
            <Row>
              <Col md={12} style={{textAlign:'center'}}>
                <h2>Beliebte Outfits</h2>
                <p style={{marginTop:-10, fontSize:12}}>Inspirationen für dein Outfit</p>
              </Col>
            </Row>
            {/* Row1 */}
            <Container >
              <Row style={{textAlign:'center'}}>
                <Col sm={3}>
                    <div>
                      <div style={{position:'relative'}}>
                        <Image src={Thumbnail2} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
                <Col sm={3}>
                 <div>
                         <div style={{position:'relative'}}>
                        <Image src={Thumbnail2} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
                <Col sm={3}>
                 <div>
                        <div style={{position:'relative'}}>
                        <Image src={Thumbnail2} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
                <Col sm={3}>
                 <div>
                         <div style={{position:'relative'}}>
                        <Image src={Thumbnail2} style={{width:'99%'}} />
                        <Bookmark size={30} style={{position:'absolute', marginLeft:-40, marginTop:5,backgroundColor:'white', paddingTop:5,paddingBottom:5}} />
                      </div>
                        <div style={{marginTop:5, textAlign:'left'}}>
                          <p style={{fontSize:12, fontStyle:'italic', color:'#A2A2A2'}}>Urban Classic Collection</p>
                          <p style={{fontSize:14, marginTop:-20 }}>Urban Classic Collection</p>
                          <p style={{fontSize:14, fontWeight:'bold', marginTop:-20 }}>39,99€</p>
                        </div>
                      
                    </div>
                </Col>
              </Row>
            </Container>
          </Container>

        {/* End */}

        {/* banner */}

        <Container style={{marginTop:35}}>
           <Row style={{zIndex:1}}>
             <Col md={12}>
               <div style={{position:'relative'}}>
                 <div className="layerbaner"></div>
                <Image src={Banner} fluid />

               </div>
             </Col>
           </Row>
           <Row >
             <Col style={{backgroundColor:'white', width:1000, height:350, position:'absolute', zIndex:2, marginTop:-400, marginLeft:70, textAlign:'center', justifyContent:'center'}}>

                <Row style={{padding:40}}>
                  <Col md={7} style={{ textAlign:'left'}}>
                    <div>
                     <p style={{fontSize:23}}> FASHION IT </p>
                    </div>
                    <div>
                      <p style={{fontSize:30, fontWeight:'bold'}}>
                        Jetzt Newsletter anfordern
                        und 5€ auf Ihre nächste
                        Bestellung sichern!
                      </p>
                    </div>

                    <div>
                    <InputGroup className="mb-2">
                      <FormControl
                        placeholder="Email Address"

                        style={{height:58}}
                        
                      />
                      <InputGroup.Append>
                        <Button variant="dark" style={{width:247, height:58}}>Abonnieren</Button>
                      </InputGroup.Append>
                    </InputGroup>
                    </div>

                    <div>
                      <p style={{fontSize:10}}>
                        Mit dem Klicken auf "Abonnieren" Stimmen Sie den Datenschutzvereinbarungen zu.
                      </p>
                    </div>


                  </Col>
                  <Col md={5} >
                   <div style={{textAlign:'right'}}>
                     <Image src={Banner2} style={{width:271}} />
                   </div>
                  </Col>
                </Row>


             </Col>
           </Row>
           
        
        </Container>

        {/* end */}

        {/* instagram */}
        <Container style={{marginTop:35 , backgroundColor:'white', width : '100%'}}>
            <Row>
              <Col md={12} style={{textAlign:'center', paddingBottom:20}}>
                <Image src={Instagram} />
              </Col>
            </Row>
            {/* Row1 */}
            <Container >
              <Row>
                <Col>
                  <Image src={InstagramContent} style={{width:250}} />
                </Col>
                <Col>
                  <Image src={InstagramContent} style={{width:250}} />
                </Col>
                <Col>
                  <Image src={InstagramContent} style={{width:250}} />
                </Col>
                <Col>
                  <Image src={InstagramContent} style={{width:250}} />
                </Col>
              </Row>

              <Row style={{marginTop:30}}>
                <Col>
                  <p style={{fontSize:10}}>
                     Folge uns auf Social Media:
                  </p>
                </Col>
              </Row>
              <Row style={{marginTop:-20,paddingBottom:20}}>
                <Col sm={1}>
                  <Image src={Facebook} style={{width:20}} />
                </Col>
                <Col sm={1} style={{marginLeft:-70}}>
                  <Image src={Instagram1} style={{width:20}} />
                </Col>
                <Col sm={1} style={{marginLeft:-70}}>
                  <Image src={Snapchat} style={{width:20}} />
                </Col>
                <Col sm={1} style={{marginLeft:-70}}>
                  <Image src={Youtube} style={{width:20}} />
                </Col>
                <Col  style={{marginLeft:-50}}>
                  <p style={{fontSize:16}}>
                    fashionSt
                  </p>
                </Col>
              </Row>
            </Container>
          </Container>


        {/* end */}

        {/* text panjang */}
        <Container style={{marginTop:35 , width : '100%'}}>
            <Row>
              <Col md={12} style={{textAlign:'center', paddingBottom:20}}>
                <h3>
                  Mode 100% Made in Germany
                </h3>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                  <p style={{textAlign:'justify'}}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                  </p>
              </Col>
              <Col md={6}>
                  <p style={{textAlign:'justify'}}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
                  </p>
              </Col>
            </Row>
           
            
          </Container>

        {/* end */}

        {/* footer */}
          <div style={{backgroundColor:'white', width:'100%'}}>
            <Container>
              {/* row1 */}
              <Row style={{ width:'100%', padding:30}}>
                <Col>
                  <p>
                    FASHION IST
                  </p>
                </Col>
                <Col>
                  <p style={{fontSize:12}}>
                    Navigation
                  </p>
                </Col>
                <Col style={{fontSize:12}}>
                  <p>
                    Service
                  </p>
                </Col>
                <Col style={{fontSize:12}}>
                  <p>
                     Rechtliches
                  </p>
                </Col>
                <Col style={{fontSize:12}}>
                  <p>
                      Kundenservice
                  </p>
                </Col>
              </Row>
              {/* row2 */}
              <Row style={{ width:'100%', padding:30, marginTop:-70}}>
                <Col>
                  <p style={{fontSize:12}}>
                  Fashionist Springer GmbH

                  </p>
                </Col>
                <Col>
                  <p style={{fontSize:12}}>
                  Home
                  </p>
                </Col>
                <Col style={{fontSize:12}}>
                  <p>
                  Widerruf
                  </p>
                </Col>
                <Col style={{fontSize:12}}>
                  <p>
                  AGB
                  </p>
                </Col>
                <Col >
                  <p style={{fontSize:16, fontWeight:'bold'}}>
                    02515 / 2789 - 3258
                  </p>
                </Col>
              </Row>
              {/* row3 */}

              <Row style={{ width:'100%', padding:30, marginTop:-80}}>
                <Col>
                  <p style={{fontSize:12}}>
                  Saarbrückenerstr. 61a


                  </p>
                </Col>
                <Col>
                  <p style={{fontSize:12}}>
                  Collection

                  </p>
                </Col>
                <Col style={{fontSize:12}}>
                  <p>
                  Versand

                  </p>
                </Col>
                <Col style={{fontSize:12}}>
                  <p>
                  Datenschutz
                  </p>
                </Col>
                <Col >
                  <p style={{fontSize:12}}>
                  Mo-Fr: 10:30 - 18:00 Uhr
                  </p>
                </Col>
              </Row>
              {/* row4 */}

              <Row style={{ width:'100%', padding:30, marginTop:-80}}>
                <Col>
                  <p style={{fontSize:12}}>
                  59423 Unnstadt


                  </p>
                </Col>
                <Col>
                  <p style={{fontSize:12, marginLeft:-105}}>
                  For Man
                  </p>
                </Col>
                <Col style={{fontSize:12, marginLeft:-210}}>
                  <p>
                  Zahlungsarten
                  </p>
                </Col>
               
                <Col >
                  <p style={{fontSize:12, marginLeft:105}}>
                  Sa & Son: 12:30 - 15:00 Uhr

                  </p>
                </Col>
              </Row>
              {/* row5 */}

              <Row style={{ width:'100%', padding:30, marginTop:-75}}>
                <Col sm={2}>
                    <Image src={LogoBank} style={{width:85}} />
                </Col>
                <Col sm={2} style={{marginLeft:35}}>
                  <p style={{fontSize:12}}>
                  For Women
                  </p>
                </Col>
                
              </Row>
              {/* row6 */}

              <Row style={{ width:'100%', padding:30, marginTop:-75}}>
               
                <Col sm={2} style={{marginLeft:210}}>
                  <p style={{fontSize:12}}>
                    Sale
                  </p>
                </Col>
                
              </Row>

              {/* copyRight */}
                <Row>
                  <Col md={12}>
                    <p style={{fontSize:10, textAlign:'center'}}>
                      ©2020 Fashionist Springer GmbH - eCommerce Systems
                    </p>
                  </Col>
                </Row>

              {/* end */}


            </Container>
          </div>


        {/* end */}
        
      

     </div>
    )
  }

}

