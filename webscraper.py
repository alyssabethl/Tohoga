from bs4 import BeautifulSoup
import numpy as np 
import pandas as pd
import regex as re
import requests 
import lxml 
from lxml.html.soupparser import fromstring 
import prettify 
import numbers
import htmltext

page = requests.get("https://www.point2homes.com/US/Land-For-Sale/DC.html")
page
#page.status_code
page.content
soup = BeautifulSoup(page.content, 'html.parser')

list(soup.children)

soup = BeautifulSoup(page.content, 'html.parser')
ic_lotsize = soup.find_all(class_='ic-lotsize') # find acre sizes
soup.select("strong")


