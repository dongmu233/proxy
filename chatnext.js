// api/proxy.js
export default async (req, res) => {
  const target = 'http://fn.dongmu001.top:3005'; // 替换为你的域名+端口
  const response = await fetch(target + req.url, {
    headers: { 'X-Forwarded-For': req.headers['x-forwarded-for'] }
  });
  const data = await response.text();
  res.status(response.status).send(data);
};
