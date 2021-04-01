import axios from "axios";

export default async (req, res) => {
    const { email, password } = req.body;
    await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            email: email,
            password: password
        })
        .then(response => {
            const { data } = response;
            if (data.session_id) {
                res.json({
                    success: true,
                    email: email,
                    session_id: data.session_id
                });
            } else {
                res.json({
                    success: false,
                    msg: "falseCreds"
                });
            }
        })
        .catch(err => {
            res.json({
                success: false,
                msg: "network",
                details: err
            });
        });
};