import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
 ]
  },
  {
    "name": "Jessica Taylor",
    "gender": "Female",
    "age": 28,
    "profile_picture": "https://fedskillstest.ct.digital/4.png",
    "date_of_birth": "08/23/1996",
    "phone_number": "(415) 555-1234",
    "emergency_contact": "(415) 555-5678",
    "insurance_type": "Sunrise Health Assurance",
    "diagnosis_history": [
      {
        "month": "March",
        "year": 2024,
        "blood_pressure": {
          "systolic": {
            "value": 160,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 78,
            "levels": "Lower than Average"
          }
        },
        "heart_rate": {
          "value": 78,
          "levels": "Lower than Average"
        },
        "respiratory_rate": {
          "value": 20,
          "levels": "Normal"
        },
        "temperature": {
          "value": 98.6,
          "levels": "Normal"
        }
      },
      {
        "month": "February",
        "year": 2024,
        "blood_pressure": {
          "systolic": {
            "value": 119,
            "levels": "Normal"
          },
          "diastolic": {
            "value": 73,
            "levels": "Lower than Average"
          }
        },
        "heart_rate": {
          "value": 99,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 25,
          "levels": "Normal"
        },
        "temperature": {
          "value": 98,
          "levels": "Normal"
        }
      },
      {
        "month": "January",
        "year": 2024,
        "blood_pressure": {
          "systolic": {
            "value": 128,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 86,
            "levels": "Lower than Average"
          }
        },
        "heart_rate": {
          "value": 82,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 22,
          "levels": "Normal"
        },
        "temperature": {
          "value": 103,
          "levels": "Higher than Average"
        }
      },
      {
        "month": "December",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 91,
            "levels": "Normal"
          },
          "diastolic": {
            "value": 111,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 83,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 14,
          "levels": "Normal"
        },
        "temperature": {
          "value": 101,
          "levels": "Higher than Average"
        }
      },
      {
        "month": "November",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 173,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 103,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 83,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 16,
          "levels": "Normal"
        },
        "temperature": {
          "value": 103,
          "levels": "Higher than Average"
        }
      },
      {
        "month": "October",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 125,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 103,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 93,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 19,
          "levels": "Normal"
        },
        "temperature": {
          "value": 97,
          "levels": "Normal"
        }
      },
      {
        "month": "September",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 123,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 113,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 76,
          "levels": "Lower than Average"
        },
        "respiratory_rate": {
          "value": 29,
          "levels": "Normal"
        },
        "temperature": {
          "value": 103,
          "levels": "Higher than Average"
        }
      },
      {
        "month": "August",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 137,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 112,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 76,
          "levels": "Lower than Average"
        },
        "respiratory_rate": {
          "value": 21,
          "levels": "Normal"
        },
        "temperature": {
          "value": 103,
          "levels": "Higher than Average"
        }
      },
      {
        "month": "July",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 148,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 87,
            "levels": "Lower than Average"
          }
        },
        "heart_rate": {
          "value": 79,
          "levels": "Lower than Average"
        },
        "respiratory_rate": {
          "value": 24,
          "levels": "Normal"
        },
        "temperature": {
          "value": 100,
          "levels": "Normal"
        }
      },
      {
        "month": "June",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 102,
            "levels": "Normal"
          },
          "diastolic": {
            "value": 73,
            "levels": "Lower than Average"
          }
        },
        "heart_rate": {
          "value": 85,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 26,
          "levels": "Normal"
        },
        "temperature": {
          "value": 101,
          "levels": "Higher than Average"
        }
      },
      {
        "month": "May",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 98,
            "levels": "Normal"
          },
          "diastolic": {
            "value": 115,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 99,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 20,
          "levels": "Normal"
        },
        "temperature": {
          "value": 98,
          "levels": "Normal"
        }
      },
      {
        "month": "April",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 130,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 108,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 86,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 25,
          "levels": "Normal"
        },
        "temperature": {
          "value": 98,
          "levels": "Normal"
        }
      },
      {
        "month": "March",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 129,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 101,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 68,
          "levels": "Lower than Average"
        },
        "respiratory_rate": {
          "value": 23,
          "levels": "Normal"
        },
        "temperature": {
          "value": 103,
          "levels": "Higher than Average"
        }
      },
      {
        "month": "February",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 173,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 69,
            "levels": "Lower than Average"
          }
        },
        "heart_rate": {
          "value": 91,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 30,
          "levels": "Normal"
        },
        "temperature": {
          "value": 98,
          "levels": "Normal"
        }
      },
      {
        "month": "January",
        "year": 2023,
        "blood_pressure": {
          "systolic": {
            "value": 159,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 96,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 92,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 21,
          "levels": "Normal"
        },
        "temperature": {
          "value": 97,
          "levels": "Normal"
        }
      },
      {
        "month": "December",
        "year": 2022,
        "blood_pressure": {
          "systolic": {
            "value": 139,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 61,
            "levels": "Lower than Average"
          }
        },
        "heart_rate": {
          "value": 84,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 21,
          "levels": "Normal"
        },
        "temperature": {
          "value": 103,
          "levels": "Higher than Average"
        }
      },
      {
        "month": "November",
        "year": 2022,
        "blood_pressure": {
          "systolic": {
            "value": 142,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 81,
            "levels": "Lower than Average"
          }
        },
        "heart_rate": {
          "value": 77,
          "levels": "Lower than Average"
        },
        "respiratory_rate": {
          "value": 21,
          "levels": "Normal"
        },
        "temperature": {
          "value": 103,
          "levels": "Higher than Average"
        }
      },
      {
        "month": "October",
        "year": 2022,
        "blood_pressure": {
          "systolic": {
            "value": 175,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 108,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 92,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 25,
          "levels": "Normal"
        },
        "temperature": {
          "value": 102,
          "levels": "Higher than Average"
        }
      },
      {
        "month": "September",
        "year": 2022,
        "blood_pressure": {
          "systolic": {
            "value": 117,
            "levels": "Normal"
          },
          "diastolic": {
            "value": 111,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 75,
          "levels": "Lower than Average"
        },
        "respiratory_rate": {
          "value": 17,
          "levels": "Normal"
        },
        "temperature": {
          "value": 97,
          "levels": "Normal"
        }
      },
      {
        "month": "August",
        "year": 2022,
        "blood_pressure": {
          "systolic": {
            "value": 102,
            "levels": "Normal"
          },
          "diastolic": {
            "value": 114,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 87,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 21,
          "levels": "Normal"
        },
        "temperature": {
          "value": 102,
          "levels": "Higher than Average"
        }
      },
      {
        "month": "July",
        "year": 2022,
        "blood_pressure": {
          "systolic": {
            "value": 166,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 61,
            "levels": "Lower than Average"
          }
        },
        "heart_rate": {
          "value": 63,
          "levels": "Lower than Average"
        },
        "respiratory_rate": {
          "value": 20,
          "levels": "Normal"
        },
        "temperature": {
          "value": 100,
          "levels": "Normal"
        }
      },
      {
        "month": "June",
        "year": 2022,
        "blood_pressure": {
          "systolic": {
            "value": 122,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 61,
            "levels": "Lower than Average"
          }
        },
        "heart_rate": {
          "value": 97,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 23,
          "levels": "Normal"
        },
        "temperature": {
          "value": 100,
          "levels": "Normal"
        }
      },
      {
        "month": "May",
        "year": 2022,
        "blood_pressure": {
          "systolic": {
            "value": 150,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 91,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 69,
          "levels": "Lower than Average"
        },
        "respiratory_rate": {
          "value": 14,
          "levels": "Normal"
        },
        "temperature": {
          "value": 98,
          "levels": "Normal"
        }
      },
      {
        "month": "April",
        "year": 2022,
        "blood_pressure": {
          "systolic": {
            "value": 131,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 96,
            "levels": "Normal"
          }
        },
        "heart_rate": {
          "value": 81,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 17,
          "levels": "Normal"
        },
        "temperature": {
          "value": 99,
          "levels": "Normal"
        }
      },
      {
        "month": "March",
        "year": 2022,
        "blood_pressure": {
          "systolic": {
            "value": 179,
            "levels": "Higher than Average"
          },
          "diastolic": {
            "value": 84,
            "levels": "Lower than Average"
          }
        },
        "heart_rate": {
          "value": 80,
          "levels": "Normal"
        },
        "respiratory_rate": {
          "value": 26,
          "levels": "Normal"
        },
        "temperature": {
          "value": 97,
          "levels": "Normal"
        }
      }
    ],
    "diagnostic_list": [
      {
        "name": "Hypertension",
        "description": "Chronic high blood pressure",
        "status": "Under Observation"
      },
      {
        "name": "Type 2 Diabetes",
        "description": "Insulin resistance and elevated blood sugar",
        "status": "Cured"
      },
      {
        "name": "Asthma",
        "description": "Recurrent episodes of bronchial constriction",
        "status": "Inactive"
      },
      {
        "name": "Osteoarthritis",
        "description": "Degenerative joint disease",
        "status": "Untreated"
      }
    ],
    "lab_results": [
      "Blood Tests",
      "CT Scans",
      "Radiology Reports",
      "X-Rays"
    ]
  },
  */
