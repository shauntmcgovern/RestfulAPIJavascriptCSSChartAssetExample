import "./styles.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; //I do see this library installed in my project
//import { Doughnut } from "react-chartjs-2";//I do not see this library installed in my project--
//so I did this now it is there and avail'npm i react-chartjs-2 chart.js)):/')):-;
import React, { useState, useEffect, Fragment, useMemo } from "react";
//import React, { Fragment } from 'react';

import Text from "react-text";
import { DictionaryProvider as BaseProvider } from "@codedazur/react-dictionary";

ChartJS.register(ArcElement, Tooltip, Legend);
//what this does is run the ChartJS-'method' the register method that requires the ArcElement and Tooltip and
//Legend to pass on through this Javascript'React'Method
//https://www.chartjs.org/docs/latest/getting-started/usage.html

//<Doughnut data={...} />this isn't ready yet I am assuming here, you enter the 'information' with the '...' to complete this
// 1. Define your API Endpoint (Replace with your actual API URL)
/*const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

// 2. Fetch data from API and render chart
async function renderDynamicChart() {
  try {
    // Fetch the data from the server
    const response = await fetch(API_URL);
    const rawData = await response.json();

    // 3. Map your API data to arrays Chart.js can read
    // Assumes your API returns an array of objects like: [{ month: 'Jan', total: 100 }, ...]
    const apiLabels = rawData.map((item) => item.systolic); // X-Axis values
    const apiValues = rawData.map((item) => item.value); // Y-Axis values

    // 4. Target the canvas element
    const ctx = document.getElementById("myLineChart");

    // 5. Initialize the Line Chart
    new Chart(ctx, {
      type: "line",
      data: {
        labels: apiLabels, // Dynamic dynamic labels from API
        datasets: [
          {
            label: "Blood Pressure",
            data: apiValues, // Dynamic values from API
            fill: true, // Shodes the area underneath the line
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Under-line fill color
            borderColor: "rgba(75, 192, 192, 1)", // Line color
            borderWidth: 2,
            tension: 0.3, // Adds a smooth curve to the line (0 is completely straight lines)
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
  const lineCtx = document.getElementById("lineChart");
  new Chart(lineCtx, {
    type: "line",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
      datasets: [
        {
          label: "Active Users",
          data: [65, 59, 80, 81, 56],
          borderColor: "#36a2eb",
          backgroundColor: "rgba(54, 162, 235, 0.1)",
          fill: true,
          tension: 0.4, // Creates smooth, curved lines instead of sharp angles
          borderWidth: 3,
          pointRadius: 5, // Size of data point dots
          pointHoverRadius: 7,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: "top" },
      },
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}
// 6. Execute the function when the script loads
renderDynamicChart();
*/
function App() {
  // React state to store JSON data
  const [data, setData] = useState([]);

  const [patient, setPatient] = useState(null);

  let username = "coalition";
  let password = "skills-test";
  //set variable for both strings and now this btoa 'method'
  //--The btoa() method encodes a string in base-64.(w3)'what this does is make it essentially identifiable for header
  //->Authorization which is a Basic definition:09')<s,.>:-0')
  let auth = btoa(`${username}:${password}`);

  /* // Create the image element
  const newImg = document.createElement("img");
  newImg.src = "https://example.com";
  // Add it to a specific part of the page (e.g., the body)
  document.body.appendChild(newImg); */

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      // Replace with API URL if fetching from a server
      //const response = await fetch("/data.json");
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        }
      );
      /*.then((patientInformation) => {
        // Use JavaScript destructuring to pull ONLY specific nested items
        const { id, name, date_of_birth } = patientInformation;
      });
      jsonObject = JSON.parse();
      var DiagnosticList = response.diagnostic_list[0].description;*/
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  const [user, setUser] = useState(null);

  /*useEffect(() => {
    fetch("https://example.com")
      .then((res) => res.json())
      .then((payload) => {
        // Use JavaScript destructuring to pull ONLY specific nested items
        const {
          id,
          personalInfo: { firstName },
          roles,
        } = payload;

        // Save a hand-picked, clean object to your state
        setUser({
          id: id,
          name: firstName,
          primaryRole: roles[0], // Grabbing a specific array index
        });
      });
  }, []);

  .then((res) => res.json())
      .then((payload) => {
        // Use JavaScript destructuring to pull ONLY specific nested items
        const {
          id,
          name,
          date_of_birth,
        } = payload
  */

  //Here is what I want to do, I was suggested to use useMemo() of the React library
  //This incoporates all of Programming 1-3 from school
  //Shaun has to organize the jsonData setData into either a dictionary or object
  //The command a 'Jessica Taylor' to a function Dictionary() and then parse each individual piece of information Jessica Taylor has
  //So it should be as easy as JessicaTaylor which is const JT = item.id[3] then JT.insurance_type should only display her type of insurance
  //and also JT.phone_number should display her phone number so this step is very difficult.

  const JessicaTaylorObject = data.find((item) => item.name === "Jessica Taylor");
  
  // Move chart rendering into useEffect so it runs after data is loaded
  useEffect(() => {
    if (data.length === 0 || !JessicaTaylorObject) return;
    
    async function renderDynamicChart() {
      // Extract Jessica Taylor's systolic and diastolic blood pressure values for last 6 months (Oct 2023 - Mar 2024)
      let JessicaTaylorOctober2023Systolic = "";
      let JessicaTaylorNovember2023Systolic = "";
      let JessicaTaylorDecember2023Systolic = "";
      let JessicaTaylorJanuary2024Systolic = "";
      let JessicaTaylorFebruary2024Systolic = "";
      let JessicaTaylorMarch2024Systolic = "";
      
      let JessicaTaylorOctober2023Diastolic = "";
      let JessicaTaylorNovember2023Diastolic = "";
      let JessicaTaylorDecember2023Diastolic = "";
      let JessicaTaylorJanuary2024Diastolic = "";
      let JessicaTaylorFebruary2024Diastolic = "";
      let JessicaTaylorMarch2024Diastolic = "";
      
      if (JessicaTaylorObject && JessicaTaylorObject.diagnosis_history) {
        JessicaTaylorObject.diagnosis_history.forEach((entry) => {
          if (entry.blood_pressure && entry.blood_pressure.systolic && entry.blood_pressure.diastolic) {
            const systolicValue = entry.blood_pressure.systolic.value;
            const diastolicValue = entry.blood_pressure.diastolic.value;
            
            if ((entry.month === "October" || entry.month === 10) && entry.year === 2023) {
              JessicaTaylorOctober2023Systolic = systolicValue;
              JessicaTaylorOctober2023Diastolic = diastolicValue;
            }
            if ((entry.month === "November" || entry.month === 11) && entry.year === 2023) {
              JessicaTaylorNovember2023Systolic = systolicValue;
              JessicaTaylorNovember2023Diastolic = diastolicValue;
            }
            if ((entry.month === "December" || entry.month === 12) && entry.year === 2023) {
              JessicaTaylorDecember2023Systolic = systolicValue;
              JessicaTaylorDecember2023Diastolic = diastolicValue;
            }
            if ((entry.month === "January" || entry.month === 1) && entry.year === 2024) {
              JessicaTaylorJanuary2024Systolic = systolicValue;
              JessicaTaylorJanuary2024Diastolic = diastolicValue;
            }
            if ((entry.month === "February" || entry.month === 2) && entry.year === 2024) {
              JessicaTaylorFebruary2024Systolic = systolicValue;
              JessicaTaylorFebruary2024Diastolic = diastolicValue;
            }
            if ((entry.month === "March" || entry.month === 3) && entry.year === 2024) {
              JessicaTaylorMarch2024Systolic = systolicValue;
              JessicaTaylorMarch2024Diastolic = diastolicValue;
            }
          }
        });
      }
      
      const lineCtx = document.getElementById("lineChart");
      if (lineCtx) {
        new Chart(lineCtx, {
          type: "line",
          data: {
            labels: [
              "Oct. 2023",
              "Nov. 2023",
              "Dec. 2023",
              "Jan. 2024",
              "Feb. 2024",
              "Mar. 2024",
            ],
            datasets: [
              {
                label: "Systolic",
                data: [JessicaTaylorOctober2023Systolic, JessicaTaylorNovember2023Systolic, JessicaTaylorDecember2023Systolic, JessicaTaylorJanuary2024Systolic, JessicaTaylorFebruary2024Systolic, JessicaTaylorMarch2024Systolic],
                borderColor: "#C26EB4",
                fill: false,
                borderWidth: 3,
                pointRadius: 5,
                pointHoverRadius: 7,
              },
              {
                label: "Diastolic",
                data: [JessicaTaylorOctober2023Diastolic, JessicaTaylorNovember2023Diastolic, JessicaTaylorDecember2023Diastolic, JessicaTaylorJanuary2024Diastolic, JessicaTaylorFebruary2024Diastolic, JessicaTaylorMarch2024Diastolic],
                borderColor: "#7E6CAB",
                fill: false,
                borderWidth: 3,
                pointRadius: 5,
                pointHoverRadius: 7,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: { display: true },
              filler: {
                propagate: true
              }
            },
            scales: {
              y: {
                min: 60,
                max: 180,
                ticks: {
                  stepSize: 20,
                },
                grid: {
                  color: "#cccccc",
                  lineWidth: 1,
                  display: true,
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        });
        
        // Set canvas background color
        lineCtx.style.backgroundColor = "#F4F0FE";
      }
    }
    
    renderDynamicChart();
  }, [data, JessicaTaylorObject]);

  return (
    <Fragment>
      <div class="row">
        <div class="column">
          <div class="rectangle-containerPatients">
            <h2 className="h2">
              &ensp;&ensp; Patients
              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              &ensp;&ensp;&ensp;&ensp;
              <img src="SearchQueryButtonMagnifier.png" alt="SearchButton" />
            </h2>
            <div className="no-arrows-scroll">
              {data.map((item) => (
                <span key={item.id} className="circle-item">
                  <img
                    src={`${item.profile_picture}?u=${item.username}`}
                    alt={item.name}
                    className="circle-image"
                  />
                  &nbsp;&nbsp;&nbsp;
                  <span className="name-text">
                    {item.name}
                    <p className="gender-text">
                      {item.gender}, {item.age}
                    </p>
                    &ensp;&ensp;&ensp;
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div class="column">
          <div class="rectangled-containerDiagnosisHistory">
            <h2 className="h2">Diagnosis History.::/'d</h2>
            <div>
              <canvas id="lineChart"></canvas>
            </div>
          </div>
          <div class="rectangle-containerDiagnosticList">
            <h2 className="h2">Diagnostic List</h2>
          </div>
        </div>

        <div class="column">
          <div class="rectangle-containerPatientInformation">
            &nbsp;
            <img
              src="JessTaylor.png"
              alt="PatientPicture"
              className="circle-imagePatientInformation"
            />
          <p className="name-text">Jessica Taylor</p>
          <span>
          <img src="./BirthIcon.jpg" alt="DateOfBirthIcon" />
          Date of Birth
          </span>&nbsp;&nbsp;
          {JessicaTaylorObject && (
            <p className="name-text">
              {new Date(JessicaTaylorObject.date_of_birth).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          )}
          <span>
          <img src="./FemaleIcon.jpg" alt="GenderIcon" />
          Gender
          </span>&nbsp;&nbsp;
          {JessicaTaylorObject && (
            <p className="name-text">
              {JessicaTaylorObject.gender}
            </p>
          )}
          <span>
          <img src="./PhoneIcon.jpg" alt="PhoneIcon" />
          Contact Info.
          </span>&nbsp;&nbsp;
          {JessicaTaylorObject && (
            <p className="name-text">
              {JessicaTaylorObject.phone_number}
            </p>
          )}
          <span>
          <img src="./PhoneIcon.jpg" alt="EmergencyPhoneIcon" />
          Emergency Contacts
          </span>&nbsp;&nbsp;
          {JessicaTaylorObject && (
            <p className="name-text">
              {JessicaTaylorObject.emergency_contact}
            </p>
          )}
          <span>
          <img src="./InsuranceIcon.jpg" alt="InsuranceIcon" />
          Insurance Provider
          </span>&nbsp;&nbsp;
          {JessicaTaylorObject && (
            <p className="name-text">
              {JessicaTaylorObject.insurance_type}
            </p>
          )}
          <p>Show All Information</p>
          </div>
          <div class="rectangle-containerLabResults">
            <h2 className="h2">Lab Results'A::A::'A::A::</h2>
          </div>
        </div>
      </div>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <h1>Shauns Table of Patients</h1>
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Profile Picture</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
export default App;

/*
{data.map((item) => (
              <span key={item.id} className="name-text">
                {item.diagnostic_list.description}
              </span>
            ))}

<p>ID: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Date of Birth: {user.DateOfBirth}</p>
              
/*{data.map((item) => item.name)}
              <p className="gender-text">
                {data.map((item) => item.insurance_type)}
                {data.map((item) => (
                  <span key={item.id}>{data.map((item) => item.id)}</span>
                ))}
              </p>

const fs = require("fs");
  const userObject = { name: "Jessica Taylor" };
  const jsonString = JSON.stringify(userObject, null, 2);

       {fs.writeFileSync("user.json", jsonString)}

Document getBody APICall()
"heart_rate":{"value":78,"levels":"Lower than Average"},"respiratory_rate":{"value":20,"levels":"Normal"},"temperature":{"value":98.6,"levels":"Normal"}},
{"month":"February","year":2024,"blood_pressure":{"systolic":{"value":119,"levels":"Normal"},"diastolic":{"value":73,"levels":"Lower than Average"}},
"heart_rate":{"value":99,"levels":"Normal"},"respiratory_rate":{"value":25,"levels":"Normal"},"temperature":{"value":98,"levels":"Normal"}},
{"month":"January","year":2024,"blood_pressure":{"systolic":{"value":128,"levels":"Higher than Average"},"diastolic":{"value":86,"levels":"Lower than Average"}},
"heart_rate":{"value":82,"levels":"Normal"},"respiratory_rate":{"value":22,"levels":"Normal"},"temperature":{"value":103,"levels":"Higher than Average"}},
{"month":"December","year":2023,"blood_pressure":{"systolic":{"value":91,"levels":"Normal"},"diastolic":{"value":111,"levels":"Normal"}},"heart_rate":{"value":83,"levels":"Normal"},
"respiratory_rate":{"value":14,"levels":"Normal"},"temperature":{"value":101,"levels":"Higher than Average"}},{"month":"November","year":2023,
"blood_pressure":{"systolic":{"value":173,"levels":"Higher than Average"},"diastolic":{"value":103,"levels":"Normal"}},"heart_rate":{"value":83,"levels":"Normal"},
"respiratory_rate":{"value":16,"levels":"Normal"},"temperature":{"value":103,"levels":"Higher than Average"}},{"month":"October","year":2023,
"blood_pressure":{"systolic":{"value":125,"levels":"Higher than Average"},"diastolic":{"value":103,"levels":"Normal"}},"heart_rate":{"value":93,"levels":"Normal"},
"respiratory_rate":{"value":19,"levels":"Normal"},"temperature":{"value":97,"levels":"Normal"}}
/*<div class="mostly-customized-scrollbar">
        <h3>Custom scrollbar</h3>
        <p>
          Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword
          <br />
          And pretty tall
          <br />
          thing with weird scrollbars.
          <br />
          Who thought scrollbars could be made weird?
        </p>
      </div>
className="circle-imagePatientInformation"
// columns.js
// Placeholder image
  Programmatically generates a multi-column layout row
  @param {string} targetSelector - The CSS selector of the destination element
  @param {number} totalColumns - Total number of columns to generate
  
function createGridColumns(targetSelector, totalColumns) {
  const destination = document.querySelector(targetSelector);

  // Safety check: Exit if target node is missing from DOM
  if (!destination) {
    console.error(`Target selector "${targetSelector}" not found in DOM.`);
    return;
  }

  // 1. Wipe old layout instances to maintain clean data refreshes
  destination.innerHTML = "";

  // 2. Create the layout orchestrator row element
  const rowWrapper = document.createElement("div");
  rowWrapper.className = "grid-row-container";

  // 3. Construct child layout units sequentially
  for (let i = 1; i <= totalColumns; i++) {
    const columnCell = document.createElement("div");
    columnCell.className = "grid-column-item";

    // Add text context and internal element structure
    columnCell.innerHTML = `
          <div class="column-card">
              <h4>Column Block ${i}</h4>
              <p>Dynamic structural cell runtime injection tracking.</p>
          </div>
      `;

    // Nest layout cell inside row wrapper node
    rowWrapper.appendChild(columnCell);
  }

  // 4. Mount the finished DOM structure
  destination.appendChild(rowWrapper);
}

.row {
        display: flex;
        flex-wrap: wrap;
		margin-left: auto;
        margin-right: auto;
}
    /* Create four equal columns that sit next to each other 
    .column {
      flex: 50%;
      max-width: 25%;
      margin-left: auto;
      margin-right: auto;
}
.column img {
        margin-top: 2px;
        vertical-align: middle;
        width: 100%;
        border: 6px solid #98FB98;
}
@media screen and (max-width: 800px) {
    .column {
        flex: 50%;
        max-width: 50%;
        }
}
Responsive layout - web designs the two columns to stack on top of each other instead of right next to eachother
@media screen and (max-width: 600px) {
      .column {
         flex: 100%;
         max-width: 100%;
         }
}


<div classname="rectangle-container">
        TechCare Overview Patients Schedule Message Transactions
</div>
<img src="./TechCareTitleCard.png">


<div key={item.id} className="circle-item">
          <img
            src={`${item.profile_picture}?u=${item.username}`} // Placeholder image
            alt={item.name}
            className="circle-image"
          />
        </div>


<button
          class="icon-button"
          onclick="alert('Settings clicked!')"
          aria-label="Overview"
        ></button>


 <button
          class="icon-PatientsButton"
          onclick="alert('Settings clicked!')"
          aria-label="Patients"
        ></button>



https://fedskillstest.ct.digital/4.png
<img src="TechCareTitleCard.jpg">
<button type="button" onclick="alert('Button clicked!')">
<img src="Assets/Overview.png" alt="Overview" style="width:50px;height:50px;">
Click Me</button>
//<img src="../Overview.png" alt="Overview">
<img src={logo} className="App-logo" alt="logo" />
<p className="name-text">Patients</p> 
const divOne = document.getElementById('divOne');
const divTwo = document.getElementById('divTwo');
	
const App = () => {
    // React state to store JSON data
    const [data, setData] = useState([]);
	let username = 'coalition';
	let password = 'skills-test';
	//set variable for both strings and now this btoa 'method'--The btoa() method encodes a string in base-64.(w3)'what this does is make it essentially identifiable for header->Authorization which is a Basic definition:09')<s,.>:-0')
	let auth = btoa(`${username}:${password}`);
    // Fetch JSON data
    useEffect(() => {
      const fetchData = async () => {
        // Replace with API URL if fetching from a server
		//const response = await fetch("/data.json");
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
			headers: {
				'Authorization': `Basic ${auth}`
			}}); 
        const jsonData = await response.json();
        setData(jsonData);
      };
  
      fetchData();
    }, []);

    return(
        <div>
        <h1>React Table Example</h1>
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

const App = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <span>{post.id}</span> {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

/*
async function fetchAndDisplayData() {
    // Replace with your API endpoint URL
	let username = 'coalition';
	let password = 'skills-test';
	//set variable for both strings and now this btoa 'method'--The btoa() method encodes a string in base-64.(w3)'what this
	//does is make it essentially identifiable for header->Authorization which is a Basic definition:09')<s,.>:-0')
	let auth = btoa(`${username}:${password}`);
    const apiURL = 'https://fedskillstest.coalitiontechnologies.workers.dev';

    try {
        // Fetch the data from the API
        //const response = await fetch(apiURL);
		const response = await fetch(apiURL, {
					headers: {
						'Authorization': `Basic ${auth}`
		}});
        // Parse the response as JSON
        const data = await response.json();

        // Get the HTML element where you want to display the data
        const patientList = document.getElementById('name');

        // Iterate through the data (assuming it's an array of objects)
        data.forEach(patient => {
            // Create HTML elements dynamically
            const listItem = document.createElement('li');
            // Use template literals to insert data properties
            listItem.innerHTML = `
                <strong>Title:</strong> ${patient.title}
                <p><strong>Body:</strong> ${patient.body}</p>
            `;
            // Append the new element to the list
            patientList.appendChild(listItem);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('name').innerHTML = '<li>Failed to load data.</li>';
    }
}
// Call the function when the page loads
fetchAndDisplayData();


async function fetchDataAndDisplay()
{
    const url = 'https://jsonplaceholder.typicode.com'; // Example API endpoint
	    const container = document.getElementById('data-container');

	    try {
	        const response = await fetch(url);
	        if (!response.ok) {
	            throw new Error(`Response status: ${response.status}`);
	        }
	        const data = await response.json(); // Parse the response body as JSON

	        // Loop through the data and create HTML elements
	        data.forEach(post => {
	            const card = document.createElement('div');
	            card.classList.add('card');
	            card.innerHTML = `
	                <h2>${post.title}</h2>
	                <p>${post.body}</p>
	            `;
	            container.appendChild(card);
	        });
	    } catch (error) {
	        console.error('Error fetching data:', error);
	        container.innerHTML = '<p>Failed to load data.</p>';
	    }
}
fetchDataAndDisplay();
*/

/*
const newImage = document.createElement('img')
						newImage.src = 'item.profile_picture';
<img id="newImage" src="" alt="Dynamically loaded image" width="200" height="200"></img>

//
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//example state and effect react style with api to javascript finally html file displayed commands//script*i::-*'
import React, { useState, useEffect } from 'react';

export default function ApiDataConsumer() {
  **const [post, setPost] = useState(null);**
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Asynchronous API call
    async function fetchData() {
      try {
        const response = await fetch('https://typicode.com');
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const data = await response.json();
        setPost(data); // Step 1: Save data to state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Empty array ensures this runs exactly once on mount

  // Step 2: Conditional rendering based on API state
  if (loading) return <div>Loading content...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    **<div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>**--{-}
    </div>
  );
}


useEffect(() => {
    const fetchData = async () => {
      // Replace with API URL if fetching from a server
      //const response = await fetch("/data.json");
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        { headers: { Authorization: `Basic ${auth}` } }
      );
      const jsonData = await response.json();
      setData(jsonData);
    };
*/
