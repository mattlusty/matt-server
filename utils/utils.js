function getPostData(req) {
  console.log("get post data");
  return new Promise((resolve, reject) => {
    try {
      var body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = { getPostData };
