import app from "./app.js";

app.listen(process.env.PORT, () => {
    console.log(`server listening to port ${process.env.PORT}`);
});
