# Solaris

[![Cover.png](https://i.postimg.cc/j2CPY2Sh/Cover.png)](https://postimg.cc/QKGHpX5B)

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


### Desktop and mobile UI

#### Home Page

[![1.png](https://i.postimg.cc/d1hY3JC4/1.png)](https://postimg.cc/34Q6b5nv)

#### Services Page

[![3.png](https://i.postimg.cc/mgLKhbfC/3.png)](https://postimg.cc/ppSs6MdL)

#### Solar Panel Data Page
Select Location
[![4.png](https://i.postimg.cc/65YYjng4/4.png)](https://postimg.cc/pp5fyh2P)

Yearly Data
[![5.png](https://i.postimg.cc/g0vh5Pjt/5.png)](https://postimg.cc/XZYXGmw9)

[![6.png](https://i.postimg.cc/zGYXQHh5/6.png)](https://postimg.cc/SJVh2sVt)

Monthly Data

[![7.png](https://i.postimg.cc/7L66187T/7.png)](https://postimg.cc/NK3BYndg)

[![8.png](https://i.postimg.cc/x1dYhGdw/8.png)](https://postimg.cc/nCN6QDB2)

#### Optimal Tilt Angle Page
Choose Location
[![9.png](https://i.postimg.cc/655DpWNR/9.png)](https://postimg.cc/DmHCCK0y)

Optimal Tilt Angle
[![10.png](https://i.postimg.cc/bJm9CjFc/10.png)](https://postimg.cc/k6tSGLmf)

[![11.png](https://i.postimg.cc/c6ygT9ZG/11.png)](https://postimg.cc/hQstt0f2)

#### Farming Data Page
Choose Location
[![12.png](https://i.postimg.cc/PrY2H0CZ/12.png)](https://postimg.cc/GH3kJ7Jh)

Yearly Farming Data
[![13.png](https://i.postimg.cc/Ls6TzXNB/13.png)](https://postimg.cc/PC9YHtGP)

Monthly Farming Data
[![16.png](https://i.postimg.cc/J0mtkyQR/16.png)](https://postimg.cc/CBPFyxt2)

Basic View
[![14.png](https://i.postimg.cc/FzsNv0Zk/14.png)](https://postimg.cc/nj56YjNn)

Detailed View
[![15.png](https://i.postimg.cc/ZnggQNDS/15.png)](https://postimg.cc/q6sjhNTb)

#### Historical Rainfall Data Page
[![17.png](https://i.postimg.cc/CKPW89H5/17.png)](https://postimg.cc/06SWRW41)

#### About Page
[![2.png](https://i.postimg.cc/YqQ0xzPM/2.png)](https://postimg.cc/QHxj81sy)



### Resources
---
Solaris web app : [Solaris web homepage](https://solaris-bd.web.app/)
Solaris web app repo : [Github repo for Solaris web app](https://github.com/SalmanSayeed79/Solaris-BD)
Solaris Mobile app : [Apk drive link](https://drive.google.com/file/d/170HMrigXFpZwzHW3F4FIAJt-gC9HfU5Z/view?usp=sharing)
Solaris Mobile app repo: [Github repo for solaris mobile app](https://github.com/zarifikram/SOLARIS)
Solaris IOT module : [Github repo for Solaris IOT code](https://github.com/pptx704/solaris-servo-control)

### Reference
---
NASA POWER API Homepage : [NASA POWER API](https://power.larc.nasa.gov/)
Google Maps API : [Google Maps homepage](https://developers.google.com/maps)
Flutter : [Flutter homepage](https://developers.google.com/maps)
Firebase : [Firebase homepage](https://firebase.google.com/)
Chart JS : [Chart JS homepage](https://www.chartjs.org/)
