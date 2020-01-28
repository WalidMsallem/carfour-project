import React , {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody,MDBIcon  } from 'mdbreact';
import { connect } from "react-redux";
import {sendRapport} from '../actions/rapportAction'
import {logoutUser} from '../actions/authActions'



const MainScreen = ({logoutUser ,sendRapport}) => {
    const [foodDutyManagerLunch  , setFoodDutyManagerLunch] = useState(null)
    const [foodDutyManagerEvening  , setFoodDutyManagerEvening] = useState(null)
    const [nonFoodDutyLunch  , setNonFoodDutyLunch] = useState(null)
    const [nonFoodDutyEvening  , setNonFoodDutyEvening] = useState(null)

    const [nonFoodSemiDutyLunch  , setNonFoodSemiDutyLunch] = useState(null)
    const [nonFoodSemiDutyEvening  , setNonFoodSemiDutyEvening] = useState(null)
    const [checkoutArea  , setCheckoutArea] = useState(null)
    const [foodArea  , setFoodArea] = useState(null)
    const [nonFoodArea  , setNonFoodArea] = useState(null)
    const [presenceOfCleaningSupervisor  , setPresenceOfCleaningSupervisor] = useState(null)
    const [nubmberOfCleaningStaff  , setNubmberOfCleaningStaff] = useState(null)


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo","hhhhhhh");
        formData.set("foodDutyManagerLunch",foodDutyManagerLunch );
        formData.set("foodDutyManagerEvening",foodDutyManagerEvening );
        formData.set("nonFoodDutyLunch",nonFoodDutyLunch );
        formData.set("nonFoodDutyEvening",nonFoodDutyEvening );
        formData.set("nonFoodSemiDutyLunch",nonFoodSemiDutyLunch );
        formData.set("nonFoodSemiDutyEvening",nonFoodSemiDutyEvening );
        formData.set("checkoutArea",checkoutArea );
        formData.set("foodArea",foodArea );
        formData.set("nonFoodArea",nonFoodArea );
        formData.set("presenceOfCleaningSupervisor",presenceOfCleaningSupervisor );
        formData.set("nubmberOfCleaningStaff",nubmberOfCleaningStaff );

        sendRapport(formData)

    }
    return  (

        <MDBContainer>
          <MDBRow>
            <MDBCol ms="12" className="mt-3 mt-b mb-3">
              <MDBCard>
                <MDBCardBody>
                  <p className="h4 text-center py-4">Duty Manager Check list</p>
                  <MDBBtn onClick = {logoutUser} >logout</MDBBtn>
                  
                    <section>
                    <div>
                    
                    <h5 className="grey-text">Food Duty Manager</h5>

                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"solid lightgray 1px"}}>
                    <p className="h6 text-center ">Present Lunch Time</p>
                        <div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline1" name="foodDutyManagerLunch" value="true" onClick = {()=> setFoodDutyManagerLunch(true)} />
                            <label class="custom-control-label" for="defaultInline1">Yes</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline2" name="foodDutyManagerLunch" value="true" onClick = {()=> setFoodDutyManagerLunch(false)} />
                            <label class="custom-control-label" for="defaultInline2">No</label>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"solid lightgray 1px"}}>
                    <p className="h6 text-center ">Present Evening</p>
                        <div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline3" name="foodDutyManagerEvening" value="true" onClick= {()=> setFoodDutyManagerEvening(true)} />
                            <label class="custom-control-label" for="defaultInline3">Yes</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline4" name="foodDutyManagerEvening" value="false" onClick= {()=> setFoodDutyManagerEvening(false)} />
                            <label class="custom-control-label" for="defaultInline4">No</label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr style={{width:"80%", backgroundColor:"lightblue"}} />
                    <br />
                    </section>
                       
                    <section>
                    <div>
                    
                    <h5 className="grey-text">Non Food Duty Manager</h5>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"solid lightgray 1px"}}>
                    <p className="h6 text-center ">Present Lunch Time</p>
                        <div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline5" name="nonFoodDutyLunch" value="true" onClick= {() =>setNonFoodDutyLunch(true)} />
                            <label class="custom-control-label" for="defaultInline5">Yes</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline6" name="nonFoodDutyLunch" value="false" onClick= {() =>setNonFoodDutyLunch(false)}/>
                            <label class="custom-control-label" for="defaultInline6">No</label>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"solid lightgray 1px"}}>
                    <p className="h6 text-center ">Present Evening</p>
                        <div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline7" name="nonFoodDutyEveningnonFoodDutyLunch" value="true"  onClick= {() =>setNonFoodDutyEvening(true)} />
                            <label class="custom-control-label" for="defaultInline7">Yes</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline8" name="nonFoodDutyEveningnonFoodDutyLunch" value="false"  onClick= {() =>setNonFoodDutyEvening(false)}/>
                            <label class="custom-control-label" for="defaultInline8">No</label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr style={{width:"80%", backgroundColor:"lightblue"}} />
                    <br />
                    </section>
                    <section>
                    <div>
                    
                    <h5 className="grey-text">Non Food Semi Duty Manager</h5>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"solid lightgray 1px"}}>
                    <p className="h6 text-center ">Present Lunch Time</p>
                        <div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline9"  name="nonFoodSemiDutyLunch" value="true"  onClick= {() =>setNonFoodSemiDutyLunch(true)} />
                            <label class="custom-control-label" for="defaultInline9">Yes</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline10" name="nonFoodSemiDutyLunch" value="false"  onClick= {() =>setNonFoodSemiDutyLunch(false)} />
                            <label class="custom-control-label" for="defaultInline10">No</label>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"solid lightgray 1px"}}>
                    <p className="h6 text-center ">Present Evening</p>
                        <div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline21"  name="nonFoodSemiDutyEvening" value="true" onClick= {() =>setNonFoodSemiDutyEvening(true)} />
                            <label class="custom-control-label" for="defaultInline21">Yes</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline22" name="nonFoodSemiDutyEvening" value="false" onClick= {() =>setNonFoodSemiDutyEvening(false)} />
                            <label class="custom-control-label" for="defaultInline22">No</label>
                        </div>
                        </div>
                    </div>

                    </div>
                    <hr style={{width:"80%", backgroundColor:"lightblue"}} />
                    
                    </section>
                    <section>
                    <div>
                    
   
                    <hr />
                    
                    </div>
                    <hr style={{ backgroundColor:"red"}} />
                    </section>
                    <p className="h4 text-center red-text py-4">Cleaning Remarks Noon</p>
    
                    <section>
                    <div>
                    
                
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"solid lightgray 1px"}}>
                    <p className="h6 text-center ">Checkout Area</p>
                        <div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline13" name="checkoutAreanonFoodSemiDutyEvening" value="ture" onClick= {() =>setCheckoutArea(true)}/>
                            <label class="custom-control-label" for="defaultInline13">Yes</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline14" name="checkoutAreanonFoodSemiDutyEvening" value="no" onClick= {() =>setCheckoutArea(false)} />
                            <label class="custom-control-label" for="defaultInline14">No</label>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <p className="h6 text-center ">Food Area</p>
                        <div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline16" name="foodAreacheckoutAreanonFoodSemiDutyEvening" value="true"onClick= {() =>setFoodArea(true)} />
                            <label class="custom-control-label" for="defaultInline16">Yes</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline17" name="foodAreacheckoutAreanonFoodSemiDutyEvening" value="false" onClick= {() =>setFoodArea(false)}/>
                            <label class="custom-control-label" for="defaultInline17">No</label>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <p className="h6 text-center ">Non Food Area</p>
                        <div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline18" name="nonFoodAreafoodAreacheckoutAreanonFoodSemiDutyEvening" value="true" onClick= {() =>setNonFoodArea(true)}/>
                            <label class="custom-control-label" for="defaultInline18">Yes</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline19" name="nonFoodAreafoodAreacheckoutAreanonFoodSemiDutyEvening" value="false" onClick= {() =>setNonFoodArea(false)} />
                            <label class="custom-control-label" for="defaultInline19">No</label>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <p className="h6 text-center ">Presence of Cleaning Supervisor</p>
                        <div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline20" name="presenceOfCleaningSupervisornonFoodAreafoodAreacheckoutAreanonFoodSemiDutyEvening" value="true" onClick= {() =>setPresenceOfCleaningSupervisor(true)} />
                            <label class="custom-control-label" for="defaultInline20">Yes</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline25" name="presenceOfCleaningSupervisornonFoodAreafoodAreacheckoutAreanonFoodSemiDutyEvening" value="false" onClick= {() =>setPresenceOfCleaningSupervisor(false)}  />
                            <label class="custom-control-label" for="defaultInline25">No</label>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <p className="h6 text-center ">Nubmber of Cleaning staff</p>
                        
                        <input type="number" name="nubmberOfCleaningStaff" style={{width:"20%",border:"none",borderBottom:"solid blue", background:"none"}} onChange={(e) =>setNubmberOfCleaningStaff(e.target.value) }/>
                        
                    </div>
                    </div>
                    </section>
                    
                    
                    <div className="text-center py-4 mt-3">
                      <MDBBtn className="btn btn-outline-blue" type="submit">
                        Save Data
                        <MDBIcon far icon="save" className="ml-2"/>
                      </MDBBtn>
                      <MDBBtn className="btn btn-outline-blue" onClick={onSubmit}>
                        Send Mail
                        <MDBIcon far icon="paper-plane" className="ml-2"/>
                      </MDBBtn>
                    </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
      );
}

export default connect(null ,{sendRapport, logoutUser})(MainScreen);
 