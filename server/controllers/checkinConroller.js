const CheckInOut = require("../modal/attendance")
const addCheckIn = async (req, res) => {
    console.log("url hit")
    const { id } = req.params;
    const checkin = new CheckInOut({
        userId: id,
        type: "checkin",
        timestamp: new Date(),
    });

    try {
        await checkin.save();
        res.status(201).json({ message: "Check-in successful" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
}
module.exports = addCheckIn
