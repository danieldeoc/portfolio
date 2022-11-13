import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
 
import ReactGA from 'react-ga';
 
 
const RoutingComponent = () => {
 
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
 
  return <div>
    ...
    ...
  </div>
}
 
export default withRouter(RoutingComponent);