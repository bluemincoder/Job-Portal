import mongoose from "mongoose";
import validator from "validator";


const applicationSchema = new mongoose.Schema({
    jobSeekerInfo: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            validate: [validator.isEmail, "Please provide a valid email."],
        },
        phone: {
            type: Number,
            required: true,
            minLength: [10, "Please provide a valid phone number."],
            maxLength: [10, "Please provide a valid phone number."],
        },
        address: {
            type: String,
            required: true,
        },
        resume: {
            public_id: String,
            url: String,
        },
        coverLetter: {
            type: String,
        },
        role: {
            type: String,
            enum: ["Job Seeker"],
            required: true,
        },
    },
    employerInfo: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        role: {
            type: String,
            enum: ["Employer"],
            required: true,
        },
    },
    jobInfo: {
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        jobTitle: {
            type: String,
            required: true,
        },
        companyName: {
            type: String,
            required: true,
        },
    },
    deletedBy: {
        jobSeeker: {
            type: Boolean,
            default: false,
        },
        employer: {
            type: Boolean,
            default: false,
        },
    },
});

export const Application = mongoose.model("Application", applicationSchema);
