// http://localhost:3000/api/post/xxxx
export default (req, res) => {
  const {
    query: { pid },
  } = req;

  res.end(`Post(pid): ${pid}`);
};
