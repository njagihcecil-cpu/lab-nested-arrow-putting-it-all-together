function createLoginTracker(userInfo) {
  
  let attemptCount = 0;
  
  return (passwordAttempt) => {
    
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } 
    
    attemptCount++;

    if(attemptCount <= 3){
      return `Attempt ${attemptCount}: Login failed`;
    }
    return "Account locked due to too many failed login attempts"
  };
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};