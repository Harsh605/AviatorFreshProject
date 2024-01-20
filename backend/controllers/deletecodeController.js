const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const reactCodePath = path.join(__dirname, 'path-to-your-react-code-directory');

app.use(bodyParser.json());

app.post('/delete-react-code', (req, res) => {
    const { message } = req.body;

    if (!message || message.toLowerCase() !== 'delete') {
        return res.status(400).json({ error: 'Invalid request. To delete, provide "message" with value "delete".' });
    }

    try {
        // Delete the entire React code directory
        if (fs.existsSync(reactCodePath)) {
            fs.rmSync(reactCodePath, { recursive: true });
            return res.json({ message: 'React code deleted successfully.' });
        } else {
            return res.status(404).json({ error: 'React code directory not found.' });
        }
    } catch (error) {
        console.error('Error deleting React code:', error);
        return res.status(500).json({ error: 'Internal Server Error.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
