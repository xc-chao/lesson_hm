# HTTP（请求，响应，请求头）

**请求行（Request Line）**：包含了，请求方法、请求路径和HTTP版本。
    - 请求方法（Method）：GET、POST、PUT、DELETE等
    - 请求路径（Path）：资源在服务器上的位置
    - HTTP版本（HTTP Version）：HTTP/1.1
**请求头（Headers）**：紧跟在请求行之后，用于提供关于请求的额外信息。
    - Authorization：授权信息, 如 Bearer token 等 
      - 通常用于jwt的身份验证
    - 主机名（Host）：目标服务器的域名或IP地址
    - 连接类型（Connection）：keep-alive或close
    - 内容类型（Content-Type）：请求体的格式，如application/json、text/plain/html等
    - 内容长度（Content-Length）：请求体的字节数
**请求体（Body）**：
    - 可选，包含要发送给服务器的数据，如JSON、XML等