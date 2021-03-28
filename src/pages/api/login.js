import cookie from "cookie";
import axios from "axios";

const sendCredentials = async (API_URL, email, password) => {
  let session_id;
  await axios
    .post(API_URL, {
      email: email,
      password: password,
    })
    .then((res) => (session_id = res.data.session_id))
    .catch((err) => console.log(err));
  return session_id;
};

export default async (req, res) => {
  const cookieExists = req.cookies.session_id;
  if (!cookieExists) {
    const session_id = await sendCredentials(
      `${process.env.NEXT_PUBLIC_API_URL}/login`,
      req.body.email,
      req.body.password
    );

    if (session_id) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("session_id", session_id, {
          httpOnly: true,
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.statusCode = 200;
      res.json({ res: "success" });
    } else {
      res.statusCode = 200;
      res.json({ res: "error" });
    }
  } else {
    res.statusCode = 200;
    res.json({ msg: "Already logged in" });
  }
};
