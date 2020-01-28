var ejs = require("ejs");

const templete = (data) => ejs.render(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        img{
            margin: 3%;
            width: 75%;
        }
        h4, h6{
            text-decoration: underline;
        }
        .item{
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top : 15px;
            margin-bottom: 15px;
        }
        hr{
            width: 70%;
        }
        .footer{
            display: flex;
            justify-content: space-between;
            width: 60%;
        }
        .footer div p{
            text-decoration: underline;
        }
        </style>
    </head>
    <body>
                <h4>Majid Al Futaim</h4>
                <div style ="margin-left: 150px;">
                <h3>Digital Duty Report</h3>
                    <br>
                    <div class="">
                        <div class="item">
                            <span >Store Duty Manager: </span>
                            <span  style ="margin-left: 150px;" > </span>
                        </div>
                        <div class="item">
                            <span >Date: </span>
                            <span  style ="margin-left: 150px;" > <%=  data.date %></span>
                        </div>
                        <div class="item">
                            <span >Name of Food Duty Manager Lunch Time: </span>
                            <span  style ="margin-left: 150px;" ><%=  data.user %> </span>
                        </div>
                        <div class="item">
                            <span >Present of Food Duty Manager Lunch Time: </span>
                            <span  style ="margin-left: 150px;" ><%=  data.foodDutyManagerLunch %></span>
                        </div>
                        <div  class="item">
                            <span >Present of Food Duty Manager Evening Time: </span>
                            <span ><%=  data.foodDutyManagerEvening %></span>
                        </div>
                    </div>
                    <hr>
    
                    <div >
                        <div class="item">
                        <span >Name of Non Food Duty Manager: </span>
                        <span style ="margin-left: 150px;" ></span>
                        </div>
                        <div class="item">
                        <span >Present of Food Duty Manager Lunch Time: </span>
                        <span style ="margin-left: 150px;"  ><%=  data.nonFoodDutyLunch %></span>
                        </div>
                        <div class="item">
                        <span >Present of Food Duty Manager Evening Time: </span>
                        <span  style ="margin-left: 150px;" ><%=  data.nonFoodDutyEvening %></span>
                        </div>
                    </div>
                    <hr>
                    <div >
                        <div class="item">
                        <span >Name Of Food Semi Duty Manager: </span>
                        <span style ="margin-left: 150px;"  ><%=  data.nonFoodSemiDutyLunch %></span>
                        </div>
                        <div class="item">
                        <span >Present of Non Food Semi Duty Manager Evening: </span>
                        <span  style ="margin-left: 150px;" ><%=  data.nonFoodSemiDutyEvening %></span>
                        </div>
                    </div>
                    <hr>
                    <div >
                        <div class="item">
                        <span >Cleaning Remarks At Noon </span>
                        <span style ="margin-left: 150px;" ><%=  data.cleaningRemarksAtNoon %></span>
                        </div>
                        <div class="item">
                        <span >CeckOut Area: </span>
                        <span style ="margin-left: 150px;"  ><%=  data.checkoutArea %></span>
                        </div>

                      <div>
                      <% for(var i=0; i < data.listceckOutAreaImagesLink.length; i++) { %>
                        <div>
                          <img src =<%= data.listceckOutAreaImagesLink[i] %> />
                        </div>
                     <% } %>
                      </div>

                        <div class="item">
                        <span >Food Area</span>
                        <span style ="margin-left: 150px;"  ><%=  data.foodArea %></span>
                        </div>

                        <div>
                        <% for(var i=0; i < data.listfoodAreaImagesLink.length; i++) { %>
                          <div>
                            <img src =<%= data.listfoodAreaImagesLink[i] %> />
                          </div>
                       <% } %>
                        </div>


                        <div class="item">
                        <span >Non Food Area </span>
                        <span style ="margin-left: 150px;"  ><%=  data.nonFoodArea %></span>
                        </div>

                        <div class="item">
                        <span >Presence Of Cleaning Supervisor </span>
                        <span style ="margin-left: 150px;"  ><%=  data.presenceOfCleaningSupervisor %></span>
                        </div>

                        <div>
                        <% for(var i=0; i < data.listpresenceOfCleaningSupervisorImagesLink.length; i++) { %>
                          <div>
                            <img src =<%= data.listpresenceOfCleaningSupervisorImagesLink[i] %> />
                          </div>
                       <% } %>
                        </div>


                        <div class="item">
                        <span >Nubmber of Cleaning staff  : </span>
                        <span style ="margin-left: 150px;"  ><%=  data.nubmberOfCleaningStaff %></span>
                        </div>
                        
                        <div>
                        <% for(var i=0; i < data.listpresentOfFoodDutyManagerEveningTime3ImagesLink.length; i++) { %>
                          <div>
                            <img src =<%= data.listpresentOfFoodDutyManagerEveningTime3ImagesLink[i] %> />
                          </div>
                       <% } %>
                        </div>


                    </div>

                    <div >
                        <div class="item">
                        <span >Remarks: </span>
                        <span  style ="margin-left: 150px;" > </span>
                        </div>
                        <div class="item">
                        <span >Customer Problem:</span>
                        <span  style ="margin-left: 150px;" > </span>
                        </div>
                    </div>
                    <div class="footer">
                        <div >
                        <span >Store GM:</span>
                        </div>
                        <div >
                        <span >HC Manager:</span>
                        </div>
                    </div>
                </div>
    </body>
    </html>
    `,
    { data : data}
  );



  module.exports = templete 