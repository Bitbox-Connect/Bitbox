const VisitorCount = require("../Models/Visitor.js");

// Increment visitor count
exports.incrementVisitorCount = async (req, res) => {
    try {
        let visitorCount = await VisitorCount.findOne({});
        if (!visitorCount) {
            visitorCount = new VisitorCount({ count: 1 });
        } else {
            visitorCount.count += 1;
        }
        await visitorCount.save();
        res.json({ count: visitorCount.count });
    } catch (error) {
        console.error("Error incrementing visitor count:", error);
        res.status(500).json({ error: "Error incrementing visitor count" });
    }
};

// Get current visitor count
exports.getVisitorCount = async (req, res) => {
    try {
        const visitorCount = await VisitorCount.findOne({});
        res.json({ count: visitorCount ? visitorCount.count : 0 });
    } catch (error) {
        console.error("Error retrieving visitor count:", error);
        res.status(500).json({ error: "Error retrieving visitor count" });
    }
};
