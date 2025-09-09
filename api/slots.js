// api/slots.js
let slotsData = {
  slots: {},
  lastUsedSlots: {} // 存裝置辨識 -> slot
};

// GET /api/slots => 回傳設定格 + 裝置最後使用 slot
// POST /api/slots => 更新 slot 或最後使用 slot
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(slotsData);
  } else if (req.method === 'POST') {
    const { deviceKey, slotNum, slotData } = req.body;
    if (slotData) slotsData.slots[slotNum] = slotData;
    if (deviceKey && slotNum) slotsData.lastUsedSlots[deviceKey] = slotNum;
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
