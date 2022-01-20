function getPostData(req) {
  console.log("get post data");
  return new Promise((resolve, reject) => {
    try {
      var body = "";
      req.on("data", (chunk) => {
        console.log("chunk", chunk.toString());
        body += chunk.toString();
      });
      req.on("end", () => {
        console.log("body", body);
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = { getPostData };
