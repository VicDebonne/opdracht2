// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {

    // console.log(req.body);

    if(req.method==="POST"){
        try {
            const response = await fetch(
                `https://api.buttondown.email/v1/emails`,
                {
                    methos:"POST",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
                    },
                    body: JSON.stringify(req.body.email),
                });
                if (response.status === 201) {
                    res.status(200).json({ succeeded: true });
                } else {
                    const result = await response.json();
                    res.status(200).json({succeeded: false, reason: result.json() });
                }
        } catch (e) {
                res.status(500).end(`Something went wrong: ${e}`);
            }
        }else{
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
        }
  }