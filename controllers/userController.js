import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Auth user and get token
// @route post/api/users/login
// @access  public

const authUser = asyncHandler(async (req, res) => {
  const{ email, password} = req.body

  const user = await User.findOne({email})

  if (user && (await user.matchPassword(password)) ){
      res.send ( {
          name: user.name,
          email: user.email,
          id : user._id,
          isAdmin: user.isAdmin,
          token: null

      })
  } else {
      res.statusCode(401)
      throw new Error('invalid email or password')

  }

})

export {authUser}
