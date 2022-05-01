import express from "express";

const app = express();
app.use(express.static("public"));

//a SSE route
app.get("/sse", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive"
    });
    res.write("data: The Server is working\n\n");
    setInterval(() => {
        res.write("data: The Server is working\n\n");
    }, 1000);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
