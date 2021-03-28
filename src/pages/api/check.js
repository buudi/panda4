import axios from "axios";

export default async (req, res) => {
  const checkCookie = req.cookies.session_id;
  if (!checkCookie) {
    res.statusCode = 200;
    res.json({ isLogged: false });
  } else {
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/check`, {
        session_id: checkCookie,
      })
      .then((res) => console.log(`axios check res: ${res.data}`))
      .catch((err) => console.log(`axios check error: ${err}`));
    res.statusCode = 200;
    res.json({ isLogged: true });
  }
};
