export default (req, res) => {
  const checkCookie = req.cookies.session_id;
  if (!checkCookie) {
    res.statusCode = 200;
    res.json({ msg: "Not logged In" });
  } else {
    res.statusCode = 200;
    res.json({ msg: "Logged in" });
  }
};
