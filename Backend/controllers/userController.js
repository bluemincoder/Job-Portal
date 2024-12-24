import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/error.js";
import { User } from "../models/userSchema.js";
import { v2 as cloudinary } from "cloudinary";

export const register = catchAsyncErrors(async (req, res, next) => {
    try {
        const {
            name,
            email,
            phone,
            address,
            password,
            role,
            firstNiche,
            secondNiche,
            thirdNiche,
            coverLetter,
        } = req.body;

        if (!name || !email || !phone || !address || !password || !role) {
            return next(new ErrorHandler("All fields are required.", 400));
        }

        if (
            role === "Job Seeker" &&
            (!firstNiche || !secondNiche || !thirdNiche)
        ) {
            return next(
                new ErrorHandler(
                    "Please provide your preferred job niches.",
                    400
                )
            );
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return next(new ErrorHandler("Email is already registered.", 400));
        }

        const userData = {
            name,
            email,
            phone,
            address,
            password,
            role,
            niches: {
                firstNiche,
                secondNiche,
                thirdNiche,
            },
            coverLetter,
        };
        if (req.files && req.files.resume) {
            const { resume } = req.files;
            if (resume) {
                try {
                    const cloudinaryRespone = await cloudinary.uploader.upload(
                        resume.tempFilePath,
                        { folder: "Job_Seeker_Resume" }
                    );
                    if (!cloudinaryRespone || cloudinaryRespone.error) {
                        return next(
                            new ErrorHandler(
                                "Failed to upload resume to cloud.",
                                500
                            )
                        );
                    }
                    userData.resume = {
                        public_id: cloudinaryRespone.public_id,
                        url: cloudinaryRespone.secure_url,
                    };
                } catch (error) {
                    return next(
                        new ErrorHandler("Failed to upload resume", 500)
                    );
                }
            }
        }
        const user = await User.create(userData);
        res.status(201).json({
            success: true,
            message: "User Registered.",
        });
    } catch (error) {
        next(error);
    }
});
