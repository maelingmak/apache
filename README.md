# apache
Analysis of Apache Access Logs, April 2018

TODO (05/31/2018):

1. Concat csvs into one csv
2. Get JSON file back out of list
3. Convert csv to DF
4. Convert JSON file to DF and drop useless columns
5. Create sqlite DB of access log csvs and JSON API calls
6. Do calculations
	a. How many hits?
`	b. How many unique IPs
	c. How many 404, 405, 200?
	d. Most requested URL & corresponding response code
		i. Is there any country coorelation to this
	e. Most common browser/OS
		i. Does the OS have anything to do with if it is a
		   legitimate request or a bot looking for security holes?
	f. How many spiders?
		i. Same country demographics as above for spiders
	g. Which referral URLS most common?
		i. Google search?
		ii. Blind hit (likely bot)
		iii.People I know?
	h. There's a security hole list somewhere that bots request a 
	   page that hasn't been there for 10 years
		i. Is there a country/OS/browser correlation to this?
	i How many bots try to push info & how many try to get info?
		i This tells us which kid of bot it is
7. Visualizations
	a. Donut chart of most common URL requests
	b. Pie chart of host response codes
	c. Map of origin IPs

Sound reasonable?
