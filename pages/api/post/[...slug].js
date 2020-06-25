// http://localhost:3000/api/post/xxx/yyy/zzz
export default (req, res) => {
  const {
    query: { slug },
  } = req;

  res.end(`Post(slug): ${slug.join(", ")}`);
};
