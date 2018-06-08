# apache
Analysis of Apache Access Logs, April 2018

TODO (05/31/2018):

1. Concat csvs into one csv - Done 06/02/2018<br>
	a. Need to drop all 127.0.0.1 dummy connections<br>
		REDONE 06/05/2018
2. Get JSON file back out of list
3. Convert csv to DF<br>
	DONE 06/05/2018
4. Convert JSON file to DF and drop useless columns
5. Create sqlite DB of access log csvs and JSON API calls
6. Do calculations - This can be done in Jupyter for exploratory reasons, but should also be added as app routes for visualizations later if they are interesting.
	a. How many hits?<br>
	b. How many unique IPs<br>
	c. How many 404, 403, 200?<br>
	d. Most requested URL & corresponding response code<br>
		i. Is there any country coorelation to this<br>
	e. Most common browser/OS<br>
		i. Does the OS have anything to do with if it is a
		   legitimate request or a bot looking for security holes?<br>
	f. How many spiders?<br>
		i. Same country demographics as above for spiders<br>
	g. Which referral URLS most common?<br>
		i. Google search?<br>
		ii. Blind hit (likely bot)<br>
		iii.Referred from link on other website<br>
	h. There's a security hole list somewhere that bots request a 
	   page that hasn't been there for 10 years<br>
		i. Is there a country/OS/browser correlation to this?<br>
	i How many bots try to push info & how many try to get info?<br>
		i This tells us which kid of bot it is<br>
We have to do the above from a database so that we can combine the searches (URL + Response code + country), since they will be in 2 different tables.<br>

7. Visualizations
	a. Donut chart of most common URL requests<br>
	b. Pie chart of host response codes<br>
	c. Map of origin IPs<br>

Sound reasonable?
