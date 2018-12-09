# Restaurant Reviews App - Stage 1 Updates
---
# Overview:
At this stage of the project aim was to make the website responsive, comparatively more accessible, clean code & cached (offline first).
To do that, following techniques & technologies helped:
- Responsiveness: Media Queries.
- Accessibility: ARIA compliance.
- Cached: Service Workers for near seamless offline experience.

# Instructions:
Clone OR download the project. Open / Traverse into the folder. Start up a simpleHTTPserver (Python tech.) to serve up the files on your locally. Familiarity with Python isn't required. Just follow the following steps to set up the simple lightweight server.

In a terminal (try Git Bash in Windows), check the version of Python you have: python -V.
If Python 2.x is already installed, spin up the server with **python -m SimpleHTTPServer 8000** (or some other port, if port 8000 is already in use.)
For Python 3.x, you can command **python3 -m http.server 8000** or **py -m http.server**.
// If you don't have Python installed, navigate to Python's website to [download](https://www.python.org/downloads/) and install.

Personally, I entered the following command `python -m SimpleHTTPServer 2626` after checking all the open ports in my PC. I used 2626 so that it doesn't intervene with any other web services that usually use 80 / 8000 / 8080 ports and because I also have a WAMPServer installed.
NOTE: The Python server that you created above gets created on the active directory in the command prompt / Bash / shell / Terminal

With your server running, visit the site: http://localhost:8000 (http://localhost:2626/), and it will take you to the Restaurant Reviews App Home Page (if you created the server in this directory / folder).

# Note - 
This project makes use of leafletjs:fallen_leaf: with Mapbox:globe_with_meridians:.