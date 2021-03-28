import cookie from "cookie";

export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("session_id", "", {
      httpOnly: true,
      maxAge: new Date(0),
      sameSite: "strict",
      path: "/",
    })
  );
  res.statusCode = 200;
  res.json({ success: "logged Out" });
};
