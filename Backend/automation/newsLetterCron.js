import cron from "node-cron";
import { Job } from "../models/jobSchema.js";
import { User } from "../models/userSchema.js";
import { sendEmail } from "../utils/sendEmail.js";

export const newsLetterCron = () => {
    cron.schedule("*/1 * * * *", async () => {
        // console.log("Running Cron Automation");
        const jobs = await Job.find({ newsLettersSent: false });
        for (const job of jobs) {
            try {
                const filteredUsers = await User.find({
                    $or: [
                        { "niches.firstNiche": job.jobNiche },
                        { "niches.secondNiche": job.jobNiche },
                        { "niches.thirdNiche": job.jobNiche },
                    ],
                });
                for (const user of filteredUsers) {
                    const subject = `Exciting Opportunity: ${job.title} at ${job.companyName}`;
                    const message = `Hi ${user.name},\n\nWe're excited to share a new job opportunity that matches your skills and career goals.\n\nHere are the details:\n- Position: ${job.title}\n- Company: ${job.companyName}\n- Location: ${job.location}\n- Salary: ${job.salary}\n\n${job.companyName} is hiring immediately, so don't wait too long to apply. If you need assistance with your application or have any questions, we're here to help.\n\nTake the next step in your career today!\n\nBest regards,\nNicheNest Team\n`;
                    sendEmail({
                        email: user.email,
                        subject,
                        message,
                    });
                }
                job.newsLettersSent = true;
                await job.save();
            } catch (error) {
                console.log("ERROR IN NODE CRON CATCH BLOCK");
                return next(console.error(error || "Some error in Cron."));
            }
        }
    });
};
