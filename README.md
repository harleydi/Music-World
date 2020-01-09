# Project Overview

## Project Name

Music Connect

## Project Description

Allows you to find your favorite artist social media page and a few random songs.

## Wireframes

![image](https://media.git.generalassemb.ly/user/25135/files/6d092a80-2db1-11ea-9f05-1c7dc7193efb)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use external api 
- Render data on page {name,song/albumn info: release Date, } 
	* PERSONAL 
    		* name
    		* alternate names
    		* social media
	* ALBUMN/SONGS
	* EXTRA
    		* save any id’s for faster navigation
   		 * content
 

#### PostMVP 

* Allow user to choose favorites using local storage
* Media Queries
* Button for user to see additional artist information
    
## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 2rd| Project Prompt | Apporved By Steve
|Jan 3rd| Wireframes / Priority Matrix / Functional Components (HTML, CSS) | Complete
|Jan 4rd| Render API data | Complete
|Jan 6th| Initial Clickable Model  | Complete
|Jan 7th| MVP/Post MVP | Complete
|Jan 8th| Style Day/Responsive Design | Complete
|Jan 9th| Present | Incomplete

## Priority Matrix

![image](https://media.git.generalassemb.ly/user/25135/files/14687a80-2e0f-11ea-9836-f622fd729baf)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML/CSS | M | 8hrs | 12hrs | 12hrs |
| JAVASCRIPT | H | 5hrs | 16hrs | 16hrs |
| Working with API | H | 6hrs| 12hrs | 12hrs |
| RESPONSIVE DESIGN | M | 6hrs | 2hrs | 2hrs|
| Form Data | H | 3hrs | 0hrs | 0hrs|
| Total | H | 28hrs| 42hrs | 42hrs |

## API and Data Sample

![image](https://media.git.generalassemb.ly/user/25135/files/09b2d480-2d80-11ea-9022-396ee7afcab5)


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function handleClick(e) {
    getData(e);
    changeClass();
}

function changeClass() {
    coverText.className = '';
    console.log(coverText);
}

.turnMe {
    letter-spacing: 15px;
    padding: 0;
    width: 0;
    height: -1;
    color: black;
    font-weight: bolder;
    text-align: center;
    font-size: larger;
    writing-mode: vertical-rl;
}

// Erinn Helped Me Out.
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
* Changed search by tracks to searching by artist track and social media.
* Added mobility
