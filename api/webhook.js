export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log('Received webhook:', req.body);
        // Xử lý dữ liệu webhook ở đây
        return res.status(200).json({ message: 'Webhook received' });
    } else {
        // Phản hồi cho các phương thức khác
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
