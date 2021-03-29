import cookie from "cookie";
import axios from "axios";

export default async (req, res) => {
  const cookieExists = req.cookies.session_id;
  let axiosMsg;
  if (!cookieExists) {
    res.statusCode = 200;
    res.json({ msg: "already Logged Out" });
  } else {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("session_id", "", {
        httpOnly: true,
        sameSite: "strict",
        maxAge: -1,
        path: '/'
      })
    );
    if (cookieExists) {
      res.json({ msg: "failed" });
    } else {
      res.json({ msg: "logout successful" })
    }
  }
};
