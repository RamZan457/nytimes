const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;

const apiKey = "fTRBc8XuBGzZKvxLndUEFgAuYp6eztMV";
const apiUrl = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${apiKey}`;

app.use(express.json());

app.get("/api/top-stories", async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching stories:", error);
    res.status(500).json({ error: "Failed to fetch stories" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
