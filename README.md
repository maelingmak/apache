<h1>Analysis of Apache2 Access Logs from a Small Web Server</h1>
<hr>
<h2>The purpose of this experiment is to identify threats to a small vanity server though incoming URL requests.</h2>
<h3>Background and Relevance:</h3>
<p>"Vanity servers" are a remnant of the 1990s geek culture. These are
regular, home built computers, usually running Linux or BSD as web and
mail servers that were set up to host mail, DNS, and IRC before the advent
of modern social media, free email, texting, chat, and other hosting 
services, such as photo and web hosting.</p>

<p>Though few people still host their own vanity servers, may homes have
NAS servers (Network Access Storage) for photos, videos, music, and other
media. These are purchased pre-packaged, and can have an ftp and web
interface. These can be vunerable to the same kinds of attacks.</p>

<p>Though many people own these types of devices, they do not see them as
being vunerable, as they are pre-loaded with software and are plug and play,
usually never utilizing the web/ftp functionality of the software. Most
often, people who purchase a NAS only use it in the home without recognizing
that they should either turn off or monitor the ftp and web capabilities.<p>

<h3>Scope:</h3>
This domain hosted several different types of blogging software, starting
around 2000. The most recent software was handled through a PHP web
interface with mySQL handling the data on the back end. Through both PHP
and mySQL, there are several different security holes. The most common is
that users do not change the default mySQL password. Second to that is 
SQL injection.
<p>In this project, we will attempt to examine which security flaws people
are trying to exploit by analyzing the requests received through access.log.
To do this, we will attempt to identify bots by the timing of the requests
and the URL requested.</p>

<p>It will also be interesting to identify which countries have the most 
attempted attacks, method of attack, and operating system. While there
is not enough data to identify a bot network, there is a possibility of
a distributed network of compromised end-user machines. There is a slight
chance of identification if we are able to find a large number of the same
URL request from different IPs on machines with the same OS and browser.</p>

<p>Legitimate requests will be identified by URL requested, number of hits,
and referer URL.<p>

<h3>Dashboard and Visualizations:</h3>
<p>In order to present our findings in a meaningful and interactive
illustration, we will create a dashboard consiting of several interactive
visualizations. One will be a dropdown menu consisting of country of origin
and percentage of each type of request with the corresponding host code
returned, URL requested, and if there is a referer URL, along with a
world map.</p>

<p>To visualize the type of attack, we will create a bubble plot for
request methods and the percentage of host codes returned by country. 
Because this server has had the software removed that was vunerable, 
any request for URLs containing "SQL" and/or "PHP" can be considered an 
attempted attack.<p>

<p>Because there are many URL requests for a specific piece of software
that was removed 10 years ago, we are surmising that this server is on a 
list used by various attack bots. This will also be interesting to
illustrate.</p>

<h3>Legitimate Requests</h3>
<p>Legitimate requests are very few in number, as this host is no longer
a hub used for social media (Facebook, Twitter, Instagram, and such were
invented, negating the purpose of this server.), legitimate requests are
very small in number, and can be illustrated in one pie chart by calculating
the number of host response code 200 coupled with the number of requests
from any IP. Legitimate requests will usually be one request from an IP
for a URL that still contains content.</p>

<h3>A Note on Spiders</h3>
<p>While spiders are bots, these requests are legitimate, and can will be
easily analyzed by the request for robot.txt or will identify themselves in
the user agent. As a footnote, these could be included in the same pie
chart as the legitimate requests. We should represent the legitimate 
requests not as the URL requested or the referer URL, but simply count
the number & do a percentage of the whole to illustrate that this server
has the most hits by those attempting to gain entry</p>
