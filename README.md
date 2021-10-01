# Solaris

[![244326655-332221555363473-4636031536199997176-n.jpg](https://i.postimg.cc/pLmcczpd/244326655-332221555363473-4636031536199997176-n.jpg)](https://postimg.cc/Mn8Yvc0k)

## Project Overview
----
Solaris an all round solution for people looking for solar data. We provide 4 diffferent services for all categories of people.
The services are : 
- #### Solar Data
    This services gives our users how much solar energy they can expect at a particular time by using NASA's POWER API and shows the users a monthly or yearly average sunlight value. Users can also get how much energy they can potentially save by placing a solar panel in their location
- #### Optimal tilt angle
    This is the second service that "Solaris" provides to its users. Through this service a user can get the particular angle for setting up their solar panel. We take in consider all sorts of variables including cloud data, diffusion and other variants in our back-end and send that to our custom made REST API. Link to the backend can be found here [Backend Github](https://github.com/pptx704/solaris-backend)
    We have also created a mobile app so that a user can place their phone on top of their solar panel and accurately tilt their solar panel with an intuitive UI. You can find the description of the app here [Solaris Mobile App]() and the github repo here [Solaris Mobile App Github](https://github.com/zarifikram/SOLARIS)

- #### Farming Service
    Farmers are not that much knowledgeable when it comes to working with data. So solaris provides them with the simplest form of data that they need. Instead of giving our users a bunch of unnecessary jibberish data, we just give them a basic verdict based on the range of the data. We provide a variety of data for farmers. These include :
    - Temperature
    - Rainfall
    - Humidity
    - Wind-speed
    We also have the option for getting detailed data for each category so that researchers and students can also use our service
- #### Historical Rainfall Data
    Since rainfall data is something that is used in many research and study purpose, solaris also provides this service for its users. Users can get the rainfall data of any location around the world in the tip of their fingers.


You can visit the site here :  [Solaris:Changing the world ](https://solaris-bd.web.app/)

## Challenges
---
Around the globe energy deficiency is one of the most severe problems. Since because of globalization, it is impossible to prosper without the usage data. However, data is not accessible nor understandable to all of the population. Inaccessibility to solar data gives birth to a lot of challenges.
#### Improper positioning of solar panels 
Since not all places are good for planting solar panels, it is important to know before planting a solar panel in a particular location if that location is suitable for solar panels or not. But there exists no such system or software which can properly manage to do that
#### Improper solar panel tilt
Due to lack of knowledge and most of the data being either vauge or inaccessible, most users can't get much out of their expensive solar panels which drives a lot of people away from this sustainable source of energy
#### Inaccessibility of farming data
Farmers are one of the most powerful driving forces of the world. But due to lack of knowledge, agriculture in most of the world is still underdeveloped. It takes a lot of wisdom to properly use the data provided in a fruitful way which most farmers are unable of doing. And adding to that, even agricultural researchers have hard time finding proper data for their research work as all the data are scattered everywhere
   
## Solution
---
This is exactly where "Solaris" comes in. With its four types of services, it provides a solution for all people that need solar data and also provides them with useful data that helps making decisions easier
## Architecture 
---

The web-app version of "Solaris" has two parts

- Python Flask Server [Details](https://github.com/pptx704/solaris-backend)
  - Monthly Data Endpoint
  - Yearly Data Endpoint
  - Optimal Tilt Angle Endpoint
- React JS Frontend
  - Home Page 
  - Solar Data Page
    - Monthly Data Page
    - Yearly Data Page 
    - Custom Data Page
  - Optimal Tilt Angle Page
  - Farming Data Page
    - Monthly Farming Data
    - Yearly Farming Data
  - Historical Rainfall Data Page
    - Monthly Rainfall Data
    - Yearly Rainfall Data

## Features

Some of the note-worthy features of "Solaris" are :

- Functionallity to use any location of the world
- Ability to attain solar data from NASA's POWER API
- Showing average sunlight on a monthly and yearly basis
- Calculating optimal tilt angle for a particular location 
- Showing verdicts for farmers based on the value range 
- Showing rainfall data 


### Desktop UI

#### Home Page

[![1Home.png](https://i.postimg.cc/d1V5dCPv/1Home.png)](https://postimg.cc/d7gRcLVS)

#### Services Page

[![3-Services.png](https://i.postimg.cc/4yrPrFKN/3-Services.png)](https://postimg.cc/D4P1G6dt)

#### Solar Panel Data Page
Select Location
[![4-Solar-Location.png](https://i.postimg.cc/w385WyP1/4-Solar-Location.png)](https://postimg.cc/H8z7nxTm)

Yearly Data
[![Desktop-Screenshot-2021-10-02-03-54-50-55.png](https://i.postimg.cc/MGPF95YX/Desktop-Screenshot-2021-10-02-03-54-50-55.png)](https://postimg.cc/xkm5CKhS)

[![Desktop-Screenshot-2021-10-02-03-54-59-71.png](https://i.postimg.cc/xCBF2dh2/Desktop-Screenshot-2021-10-02-03-54-59-71.png)](https://postimg.cc/sQ9JP336)

Monthly Data

[![Desktop-Screenshot-2021-10-02-03-55-12-79.png](https://i.postimg.cc/yxqnGb36/Desktop-Screenshot-2021-10-02-03-55-12-79.png)](https://postimg.cc/G8Qk8zj6)

[![Desktop-Screenshot-2021-10-02-03-55-21-90.png](https://i.postimg.cc/MHytJm17/Desktop-Screenshot-2021-10-02-03-55-21-90.png)](https://postimg.cc/BPn2xDYb)

#### Optimal Tilt Angle Page
Choose Location
[![Desktop-Screenshot-2021-10-02-03-55-41-60.png](https://i.postimg.cc/pdpZLHDX/Desktop-Screenshot-2021-10-02-03-55-41-60.png)](https://postimg.cc/SXb8gHTw)

Optimal Tilt Angle
[![Desktop-Screenshot-2021-10-02-03-55-53-96.png](https://i.postimg.cc/V6tWXWGx/Desktop-Screenshot-2021-10-02-03-55-53-96.png)](https://postimg.cc/ZBTNSphH)

[![Desktop-Screenshot-2021-10-02-03-56-21-28.png](https://i.postimg.cc/MH8b5fgv/Desktop-Screenshot-2021-10-02-03-56-21-28.png)](https://postimg.cc/S2DMNRSh)

#### Farming Data Page
Choose Location
[![Desktop-Screenshot-2021-10-02-03-56-29-43.png](https://i.postimg.cc/rFfx0Hyd/Desktop-Screenshot-2021-10-02-03-56-29-43.png)](https://postimg.cc/GHsH6qyr)

Monthly Farming Data
[![Desktop-Screenshot-2021-10-02-03-56-36-86.png](https://i.postimg.cc/L8hfzVhx/Desktop-Screenshot-2021-10-02-03-56-36-86.png)](https://postimg.cc/4YkmGV6c)

Yearly Farming Data
[![Desktop-Screenshot-2021-10-02-04-05-39-65.png](https://i.postimg.cc/rs3T7cC0/Desktop-Screenshot-2021-10-02-04-05-39-65.png)](https://postimg.cc/D4rRb9Nn)

Basic View
[![Desktop-Screenshot-2021-10-02-03-56-45-07.png](https://i.postimg.cc/q733FMsn/Desktop-Screenshot-2021-10-02-03-56-45-07.png)](https://postimg.cc/2qCybYX8)

Detailed View
[![Desktop-Screenshot-2021-10-02-03-56-53-46.png](https://i.postimg.cc/8PXfPrwM/Desktop-Screenshot-2021-10-02-03-56-53-46.png)](https://postimg.cc/1f63vXk3)

#### Historical Rainfall Data Page
[![Desktop-Screenshot-2021-10-02-03-57-04-77.png](https://i.postimg.cc/K8nbp6Kj/Desktop-Screenshot-2021-10-02-03-57-04-77.png)](https://postimg.cc/YvqThyzB)

#### About Page
[![2About.png](https://i.postimg.cc/5tbVhsv3/2About.png)](https://postimg.cc/YvnZgfdG)


### Mobile UI

#### Home Page

[![IMG-1600.png](https://i.postimg.cc/QdB2vRH1/IMG-1600.png)](https://postimg.cc/Bj07K75n)

#### Services Page

[![IMG-1602.png](https://i.postimg.cc/HsnR7f0R/IMG-1602.png)](https://postimg.cc/D8VB9pMP)

#### Solar Panel Data Page
Select Location
[![IMG-1603.png](https://i.postimg.cc/Bv9VktWf/IMG-1603.png)](https://postimg.cc/CR77fhLc)

Yearly Data
[![IMG-1604.png](https://i.postimg.cc/vmrNsMMg/IMG-1604.png)](https://postimg.cc/f3bKcGVD)

[![IMG-1605.png](https://i.postimg.cc/1tyYRT5W/IMG-1605.png)](https://postimg.cc/cK5cXF3Y)

Monthly Data

[![IMG-1606.png](https://i.postimg.cc/zBp2yjyq/IMG-1606.png)](https://postimg.cc/BLLBy25z)

[![IMG-1607.png](https://i.postimg.cc/pXmcdKRt/IMG-1607.png)](https://postimg.cc/56MS7YXP)

[![IMG-1608.png](https://i.postimg.cc/3wTt96pK/IMG-1608.png)](https://postimg.cc/4YWvxWBM)

#### Optimal Tilt Angle Page
Choose Location
[![IMG-1609.png](https://i.postimg.cc/zfF0QjST/IMG-1609.png)](https://postimg.cc/5HjBY8rt)

Optimal Tilt Angle
[![IMG-1610.png](https://i.postimg.cc/Tw2CvDCF/IMG-1610.png)](https://postimg.cc/Y4V11hcz)

[![IMG-1611.png](https://i.postimg.cc/GtHKH10j/IMG-1611.png)](https://postimg.cc/4HRVSqxK)

#### Farming Data Page
Choose Location
[![IMG-1612.png](https://i.postimg.cc/7YJX4DnH/IMG-1612.png)](https://postimg.cc/fJZY7GPp)

Yearly Farming Data
[![IMG-1613.png](https://i.postimg.cc/K8nNKNWC/IMG-1613.png)](https://postimg.cc/Snx83WkG)

Basic View
[![IMG-1614.png](https://i.postimg.cc/9XrpFjHn/IMG-1614.png)](https://postimg.cc/yWC9vtdm)

Detailed View
[![IMG-1615.png](https://i.postimg.cc/VspFJHYL/IMG-1615.png)](https://postimg.cc/nMKm52j6)

Monthly Farming Data
[![IMG-1616.png](https://i.postimg.cc/sgR9cQQk/IMG-1616.png)](https://postimg.cc/56nC9tmg)

Basic View
[![IMG-1617.png](https://i.postimg.cc/Zqb8GGLj/IMG-1617.png)](https://postimg.cc/xXZNHFhb)

Detailed View
[![IMG-1618.png](https://i.postimg.cc/fRwSyx0R/IMG-1618.png)](https://postimg.cc/56R2kQ3h)

#### Historical Rainfall Data Page
Choose Location
[![IMG-1619.png](https://i.postimg.cc/DZb8H6RB/IMG-1619.png)](https://postimg.cc/r0MVt1Vr)

Yearly Data
[![IMG-1620.png](https://i.postimg.cc/hvBPwBLt/IMG-1620.png)](https://postimg.cc/sQTrQbHk)

Monthly Data
[![IMG-1621.png](https://i.postimg.cc/8kRCv7GJ/IMG-1621.png)](https://postimg.cc/G9prwhHd)

#### About Page
[![IMG-1601.png](https://i.postimg.cc/MHK45LCc/IMG-1601.png)](https://postimg.cc/ftpBT8TZ)