from http.server import BaseHTTPRequestHandler
import requests
import json
import os

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        TOKEN = os.environ.get("FB_ACCESS_TOKEN", "")
        PAGE_ID = os.environ.get("PAGE_ID", "")
        url = f"https://graph.facebook.com/v18.0/{PAGE_ID}/feed?access_token={TOKEN}&fields=message,created_time,full_picture"
        
        try:
            r = requests.get(url)
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(r.json()).encode("utf-8"))
        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(str(e).encode("utf-8"))
