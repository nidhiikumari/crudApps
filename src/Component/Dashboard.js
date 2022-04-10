import React from 'react';
import{   
  Redirect,
  Route,
  Switch  
} from "react-router-dom";

function Dashboard(){
  return(
    <div>
      <Switch>
        <Route exact
                path="/dashboard" >
          Dashboard
        </Route>

      </Switch>
      DASHBOARD
    </div>
  )
}
export default Dashboard