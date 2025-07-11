// ABOUT -> a simple express mw to log info on request (time, http method, route)
// TODO: what is the difference btw middleware, util, helper


// ##  EXPORTED METHODS --- --- ---
const requestLog = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`)
  next()
} // logs the type, route and time


// EXPORTS --- --- ---
module.exports = requestLog 
