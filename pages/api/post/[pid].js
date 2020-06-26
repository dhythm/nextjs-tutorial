import Cors from "cors";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

// http://localhost:3000/api/post/xxxx
export default async (req, res) => {
  await runMiddleware(req, res, cors);

  const {
    query: { pid },
  } = req;

  res.end(`Post(pid): ${pid}`);
};
