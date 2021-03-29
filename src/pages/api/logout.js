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
        maxAge: 0,
        sameSite: "strict",
        path: "/",
      })
    );
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
        session_id: cookieExists,
      })
      .then((res) => axiosMsg = res.data)
      .catch((err) => alert(`axios error:\n ${err}`));

    res.statusCode = 200;
    res.json({ success: true, axiosMsg: axiosMsg });
  }
};
