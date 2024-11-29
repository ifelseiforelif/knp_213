1. rename .env.example => .env Заповнити свої значення
2. створити папку cert та виконати openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout key.pem -out cert.pem
