export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { task } = req.body;
    
    const apiKey = process.env.DEEPSEEK_API_KEY; 

    const url = "https://api.deepseek.com/chat/completions";
    const systemPrompt = `You are a compassionate assistant helping people with anxiety break down tasks. 
    Break the user's task into exactly 5 micro-steps. 
    The steps must be extremely small, physical, and actionable (e.g., 'Stand up', 'Open laptop', 'Take a deep breath'). 
    You MUST output ONLY valid JSON in this exact format: {"tasks": ["step1", "step2", "step3", "step4", "step5"]}.`;

    try {
        const deepseekRes = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` 
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: task }
                ],
                response_format: { type: "json_object" },
                temperature: 0.5
            })
        });

        const data = await deepseekRes.json();
        const aiText = data.choices[0].message.content;
        
        
        res.status(200).json(JSON.parse(aiText));

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: "Failed to fetch from DeepSeek" });
    }
}