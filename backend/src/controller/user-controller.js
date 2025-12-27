import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { User } from "../models/user-model.js";
import { Fund } from "../models/funds-model.js";

const generateTokenOfUser = async (userId) => {
  try {
    const user = await User.findById(userId);
    const token = user.generateToken();
    user.token = token;

    await user.save({ validateBeforeSave: false });
    return token;
  } catch (error) {
    throw new ApiError(500, "Internal server error while creating token");
  }
};
const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if ([name, email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required!");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "User already exist, try login!");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  const signupUser = await User.findById(user._id).select("-password");

  await Fund.create({
    userId: signupUser._id,
    availableBal: 0,
    usedMargin: 0,
    openingBal: 0
  });

  return res
    .status(201)
    .json(new ApiResponse(201, signupUser, "User created successfully!!"));
});
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if ([email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required!");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(400, "User does not exit, please signup");
  }

  const isPassword = await user.isPasswordCorrect(password);
  if (!isPassword) {
    throw new ApiError(401, "Wrong password or email!");
  }

  const token = await generateTokenOfUser(user._id);

  const loggedInUser = await User.findById(user._id).select("-password");

  const options = {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };

  return res
    .status(200)
    .cookie("token", token, options)
    .json(
      new ApiResponse(
        200,
        { loggedInUser, token },
        "User loggedIn successfully!!"
      )
    );
});

const logout = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        token: undefined,
      },
    },
    { new: true }
  );

  const options = {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("token", options)
    .json(new ApiResponse(200, [], "User logged Out successfully!!"));
});

const loggedInUser = asyncHandler(async(req, res)=>{
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user:req.user },
        "Logged In user fetched!!"
      )
    )
})

export { signup, login, logout, loggedInUser };
