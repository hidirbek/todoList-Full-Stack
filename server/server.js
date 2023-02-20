const http = require("http");
const { v4 } = require("uuid");
const url = require("url");
const { read_file, write_file } = require("./fs/fs_api");

const options = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

let app = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      let courses = read_file("todos.json");
      res.writeHead(200, options);
      res.end(JSON.stringify(courses));
    }
  }

  if (req.method === "POST") {
    if (req.url === "/") {
      req.on("data", (chunk) => {
        console.log(req.url);
        let data = JSON.parse(chunk);

        let courses = read_file("todos.json");

        courses.push();

        courses = [
          ...courses,
          {
            id: v4(),
            ...data,
          },
        ];
        write_file("todos.json", courses);
        res.writeHead(201, options);
        res.end(
          JSON.stringify({
            msg: "todo created!",
          })
        );
      });
    }
  }
});

app.listen(3000, () => {
  console.log("Server is running on the 3000");
});
