const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();



app.get("/test", function(req, res) {
	res.send("all good!");
})

if(process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
})


app.listen(PORT, function() {
	console.log(`Serving on port ${PORT}`);
})