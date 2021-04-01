import axios from "axios";

export default async (req, res) => {
    const { data } = req.body;
    if (data) {
        const parsedData = JSON.parse(data);
        await axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/check`, {
                session_id: parsedData.session_id
            })
            .then(response => {
                if (response.data.email) {
                    if (response.data.email === parsedData.email)
                        res.json({ success: true });
                } else {
                    res.json({ msg: "not authenticated" });
                }
            })
            .catch(err => {
                res.json({ msg: "network error" });
            });
    } else {
        res.json({ msg: "not logged in" });
    }
};