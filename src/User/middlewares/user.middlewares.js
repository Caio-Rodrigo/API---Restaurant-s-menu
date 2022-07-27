require('dotenv').config();


function Check(req, res, next) {
    const { user, userName, email, password } = req.body;
  
    if (!user && !userName && email && !password) {
      return res.status(400).send({ message: 'Fill in all fields' });
    }
  
    if (!user) {
      return res.status(400).send({ message: 'Please fill the field : User!' });
    }
    if (!userName) {
      return res
        .status(400)
        .send({ message: 'Please fill the field : UserName!' });
    }
    if (!email) {
      return res.status(400).send({ message: 'Please fill the field : Email!' });
    }
    if (!password) {
      return res
        .status(400)
        .send({ message: 'Please fill the field : Password!' });
    }
  
    next();
  }
  
  module.exports = Check;
