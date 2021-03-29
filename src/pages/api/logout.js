import cookie from "cookie";
import axios from "axios";

export default async (req, res) => {
  const cookieExists = req.cookies.session_id;
  if (!cookieExists) {
    res.statusCode = 200;
    res.json({ msg: "already Logged Out" });
  } else {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("session_id", "", {
        httpOnly: true,
        maxAge: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
        session_id: cookieExists,
      })
      .then((res) => console.log("axios succeeded"))
      .catch((err) => alert(`axios error:\n ${err}`));

    res.statusCode = 200;
    res.json({ success: true });
  }
};
