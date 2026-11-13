import http.server
import socketserver
import os
import sys
import webbrowser

PORT = 5173
DIRECTORY = os.path.join(os.path.dirname(__file__), 'frontend')

class ReportSaathiHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Route default root directly to the interactive preview app
        if self.path == '/' or self.path == '/index.html':
            self.path = '/preview.html'
        return super().do_GET()

def start_server():
    os.chdir(DIRECTORY)
    server_address = ('', PORT)
    
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(server_address, ReportSaathiHandler) as httpd:
            url = f"http://localhost:{PORT}"
            print("=" * 65)
            print(f"  ReportSaathi Frontend is live!")
            print(f"  Local URL: {url}")
            print("=" * 65)
            print(f"Serving files from: {DIRECTORY}")
            print("Press Ctrl+C to stop the server.")
            sys.stdout.flush()
            httpd.serve_forever()
    except OSError as e:
        alt_port = 8080
        with socketserver.TCPServer(('', alt_port), ReportSaathiHandler) as httpd:
            url = f"http://localhost:{alt_port}"
            print(f"Port {PORT} was in use. Started on: {url}")
            sys.stdout.flush()
            httpd.serve_forever()

if __name__ == '__main__':
    start_server()
