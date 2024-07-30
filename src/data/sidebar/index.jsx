import PhotoFilterOutlinedIcon from "@mui/icons-material/PhotoFilterOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { MANAGER, NotAssigned, NotAssignedId, TECHNICIAN } from "../../helper/constants";
import { Typography } from "@mui/material";
export const managerSideBar = () => {
  return [
    { icon: AppsOutlinedIcon, title: "Home", path: "/" },
    {
      icon: PhotoFilterOutlinedIcon,
      title: "Tickets",
      path: `/${MANAGER.toLowerCase()}/tickets`,
    },
    {
      icon: AppsOutlinedIcon,
      title: "Users",
      path: `/${MANAGER.toLowerCase()}/users`,
    },
  ];
};

export const TechnicianSideBar = () => {
  return [
    { icon: AppsOutlinedIcon, title: "Home", path: "/" },
    {
      icon: AppsOutlinedIcon,
      title: "Tickets",
      path: `/${TECHNICIAN.toLowerCase()}/tickets`,
    },
  ];
};

export const adminSideBar = () => {
  return [
    { icon: AppsOutlinedIcon, title: "Home" },
    { icon: PhotoFilterOutlinedIcon, title: "Home" },
    { icon: AppsOutlinedIcon, title: "Home" },
  ];
};

export const userSideBar = () => {
  return [
    { icon: AppsOutlinedIcon, title: "Home", path: "/" },
    { icon: PhotoFilterOutlinedIcon, title: "Company", path: "/user/company" },
  ];
};

export const OrdersData = [
  {
    title: "Inventory",
    description: (
      <Typography
        variant="caption"
        sx={{ color: "var(--gray-color)", marginTop: "18px" }}
      >
        Inventory available for next{" "}
        <span style={{ color: "var(--blue-color)" }}>2 months</span>
      </Typography>
    ),
    amount: "400 pieces",
  },
  {
    title: "Tickets",
    description: (
      <Typography
        variant="caption"
        sx={{ color: "var(--gray-color)", marginTop: "18px" }}
      >
        increase in Tickets{" "}
        <span style={{ color: "var(--blue-color)" }}>2%</span>
      </Typography>
    ),
    amount: "60,030",
  },
  {
    title: "Employees",
    description: (
      <Typography
        variant="caption"
        sx={{ color: "var(--gray-color)", marginTop: "18px" }}
      >
        Total Employees in Company{" "}
        {/* <span style={{ color: "var(--blue-color)" }}>5%</span> */}
      </Typography>
    ),
    amount: "1200",
  },
  {
    title: "Orders",
    description: (
      <Typography
        variant="caption"
        sx={{ color: "var(--gray-color)", marginTop: "18px" }}
      >
        increase in orders{" "}
        <span style={{ color: "var(--blue-color)" }}>6.3%</span>
      </Typography>
    ),
    amount: "400,30K",
  },
];

// export const ticketInitialValues={
//   userId: '',
//   issue: '',
//   description: '',
//   assignedTo:"Not Assigned",
//   status: 'OPEN',
//   issueLocation: {
//     locationName: '',
//     unit: '',
//     floor: '',
//     room: '',
//     extraDetail: '',
//   },
// }

export const ticketInitialValues = {
  issue: "issue",
  description: "issue ind escription",
  images: [],
  status: "OPEN",
  assignedTo: {_id:NotAssignedId,name:NotAssigned},
  issueLocation: {
    locationName: "",
    unit:{name:"",_id:""},
    room: "",
    extraDetail: "",
  },
};
// export const ticketInitialValues = {
//   issue: "",
//   description: "",
//   images: [],
//   status: "OPEN",
//   assignedTo: {_id:NotAssignedId,name:NotAssigned},
//   issueLocation: {
//     locationName: "",
//     unit: "",
//     room: "",
//     extraDetail: "",
//   },
// };
// "unit":{"name":"Basement","_id":"66886e4c18ad94b85531ac4f"},
export const units = ["Basement", "Unit2", "Unit3"]; // Replace with actual unit data
export const rooms = ["1042", "Room2", "Room3"];


export const ticketsDataDummy=[
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886e4c18ad94b85531ac4f",
              "name": "Basement"
          },
          "room": "1104",
          "extraDetail": ""
      },
      "_id": "66a825d507e5790c3e5a5d6a",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "issue",
      "description": "issue ind escription",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-29T23:29:25.664Z",
      "createdAt": "2024-07-29T23:29:25.664Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "name": "woodend",
              "_id": "66886ee618ad94b85531ac55"
          },
          "room": "2007",
          "extraDetail": ""
      },
      "_id": "66a825ad07e5790c3e5a5cf4",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "issue",
      "description": "issue ind escription",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-29T23:28:45.261Z",
      "createdAt": "2024-07-29T23:28:45.261Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886ee618ad94b85531ac55",
              "name": "woodend"
          },
          "room": "2006",
          "extraDetail": ""
      },
      "_id": "66a8225107e5790c3e5a5984",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "issue",
      "description": "issue ind escription",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-29T23:14:25.238Z",
      "createdAt": "2024-07-29T23:14:25.238Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "parking loot",
          "unit": "66886e4c18ad94b85531ac4f",
          "room": "1100",
          "extraDetail": ""
      },
      "_id": "66a8210807e5790c3e5a5858",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "issue",
      "description": "issue ind escription",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-29T23:08:56.511Z",
      "createdAt": "2024-07-29T23:08:56.511Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1043",
          "extraDetail": ""
      },
      "_id": "66a81f4907e5790c3e5a566d",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "issue",
      "description": "issue ind escription",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-29T23:01:29.405Z",
      "createdAt": "2024-07-29T23:01:29.405Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886e4c18ad94b85531ac4f",
              "name": "Basement"
          },
          "room": "1099",
          "extraDetail": ""
      },
      "_id": "66a7f61858f59ed982526326",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "_id": "66815c26b060e5455702faac",
          "name": "Jon",
          "email": "jon@gmail.com"
      },
      "issue": "issue in basement",
      "description": "issue in basement",
      "images": [
          "http://res.cloudinary.com/dxhqcov11/image/upload/v1722283543/tracking-system/Screenshot_2024-06-16_123306_oraiw5.png",
          "http://res.cloudinary.com/dxhqcov11/image/upload/v1722290202/tracking-system/Screenshot_2024-06-16_123508_e5zdvt.png"
      ],
      "status": "PROGRESS",
      "comments": [
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "ok",
              "images": [],
              "files": [],
              "createdAt": "2024-07-29T22:08:38.240Z",
              "_id": "66a812e607e5790c3e5a4d75"
          },
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "do your work",
              "images": [],
              "files": [],
              "createdAt": "2024-07-29T22:08:26.891Z",
              "_id": "66a812db07e5790c3e5a4d5f"
          },
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "testing2",
              "images": [],
              "files": [],
              "createdAt": "2024-07-29T22:08:04.826Z",
              "_id": "66a812c507e5790c3e5a4d41"
          },
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "testing",
              "images": [],
              "files": [],
              "createdAt": "2024-07-29T22:06:43.994Z",
              "_id": "66a8127407e5790c3e5a4cdd"
          },
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "I have bought the inventory ",
              "images": [],
              "files": [],
              "createdAt": "2024-07-29T20:08:28.110Z",
              "_id": "66a7f6b258f59ed982526346"
          },
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "i have created ticket",
              "images": [],
              "files": [],
              "createdAt": "2024-07-29T20:06:58.459Z",
              "_id": "66a7f66358f59ed982526342"
          }
      ],
      "inventoryUsed": [],
      "updatedAt": "2024-07-29T22:08:38.755Z",
      "createdAt": "2024-07-29T20:05:44.174Z",
      "__v": 6,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "66815c26b060e5455702faac"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": "Basement",
          "room": "1042",
          "extraDetail": ""
      },
      "_id": "66a6b50758f59ed982526282",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "_id": "66815c26b060e5455702faac",
          "name": "Jon",
          "email": "jon@gmail.com"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T21:15:51.297Z",
      "createdAt": "2024-07-28T21:15:51.297Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "66815c26b060e5455702faac"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1043",
          "extraDetail": ""
      },
      "_id": "66a6b4f258f59ed982526267",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": true,
      "assignedTo": {
          "_id": "66815c26b060e5455702faac",
          "name": "Jon",
          "email": "jon@gmail.com"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "PROGRESS",
      "comments": [
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "i wokring",
              "images": [],
              "files": [],
              "createdAt": "2024-07-29T22:08:21.101Z",
              "_id": "66a812d507e5790c3e5a4d58"
          }
      ],
      "inventoryUsed": [
          {
              "_id": "66a190b06e4853cc29ee36f7",
              "productName": "Laptop",
              "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAHlmWKzsK9P2UZueRiKPeSFklZa-QvnTyw&s",
              "quantityUsed": 3
          },
          {
              "_id": "66a190b06e4853cc29ee36f8",
              "productName": "Office Chair",
              "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAHlmWKzsK9P2UZueRiKPeSFklZa-QvnTyw&s",
              "quantityUsed": 2
          }
      ],
      "updatedAt": "2024-07-29T22:08:21.554Z",
      "createdAt": "2024-07-28T21:15:30.828Z",
      "__v": 1,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "66815c26b060e5455702faac"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1043",
          "extraDetail": ""
      },
      "_id": "66a6b49c2651e97f1ba2f65d",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T21:14:04.538Z",
      "createdAt": "2024-07-28T21:14:04.538Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1043",
          "extraDetail": ""
      },
      "_id": "66a6b47960c2fbfe9396d46d",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T21:13:29.725Z",
      "createdAt": "2024-07-28T21:13:29.725Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1043",
          "extraDetail": ""
      },
      "_id": "66a6b4514eff501b4d285346",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T21:12:49.516Z",
      "createdAt": "2024-07-28T21:12:49.516Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886f9118ad94b85531ac59",
              "name": "centennial"
          },
          "room": "2155",
          "extraDetail": ""
      },
      "_id": "66a6b1eb94dcb7c9d502e0c6",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "_id": "66815c26b060e5455702faac",
          "name": "Jon",
          "email": "jon@gmail.com"
      },
      "issue": "issue in washroom ",
      "description": "issue in rooms ",
      "images": [
          "http://res.cloudinary.com/dxhqcov11/image/upload/v1722200605/tracking-system/Screenshot_2024-06-16_123306_awbd53.png"
      ],
      "status": "OPEN",
      "comments": [
          {
              "userId": "66815c26b060e5455702faac",
              "text": "sdf",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T21:06:21.711Z",
              "_id": "66a6b2ce94dcb7c9d502e137"
          },
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "df",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T21:06:16.047Z",
              "_id": "66a6b2c894dcb7c9d502e130"
          },
          {
              "userId": "66815c26b060e5455702faac",
              "text": "asf",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T21:06:05.682Z",
              "_id": "66a6b2be94dcb7c9d502e12a"
          },
          {
              "userId": "66815c26b060e5455702faac",
              "text": "jon bought inventory",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T21:04:47.911Z",
              "_id": "66a6b27094dcb7c9d502e110"
          },
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "ticket created now",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T21:02:58.649Z",
              "_id": "66a6b1fb94dcb7c9d502e0db"
          }
      ],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T21:06:22.109Z",
      "createdAt": "2024-07-28T21:02:35.162Z",
      "__v": 5,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "66815c26b060e5455702faac"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886e4c18ad94b85531ac4f",
              "name": "Basement"
          },
          "room": "1097",
          "extraDetail": ""
      },
      "_id": "66a6afb894dcb7c9d502e033",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "_id": "66815c26b060e5455702faac",
          "name": "Jon",
          "email": "jon@gmail.com"
      },
      "issue": "issue in washroom and rooms ",
      "description": "issue in wasroom and rooms",
      "images": [
          "http://res.cloudinary.com/dxhqcov11/image/upload/v1722199991/tracking-system/Screenshot_2024-06-16_123306_cmbyg8.png"
      ],
      "status": "OPEN",
      "comments": [
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "I created ticket now",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T20:53:40.441Z",
              "_id": "66a6afca94dcb7c9d502e03f"
          }
      ],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T20:54:04.817Z",
      "createdAt": "2024-07-28T20:53:12.464Z",
      "__v": 1,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "66815c26b060e5455702faac"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1046",
          "extraDetail": ""
      },
      "_id": "66a6aefb94dcb7c9d502e00a",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": true,
      "assignedTo": {
          "_id": "66815c26b060e5455702faac",
          "name": "Jon",
          "email": "jon@gmail.com"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "OPEN",
      "comments": [
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "updated 2",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T20:58:34.053Z",
              "_id": "66a6b0fa94dcb7c9d502e0c0"
          },
          {
              "userId": "66815c26b060e5455702faac",
              "text": "updated",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T20:58:26.329Z",
              "_id": "66a6b0f294dcb7c9d502e0b7"
          },
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "realtime",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T20:58:13.059Z",
              "_id": "66a6b0e594dcb7c9d502e0af"
          },
          {
              "userId": "66815c26b060e5455702faac",
              "text": "jon bought inventory ",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T20:56:37.706Z",
              "_id": "66a6b08694dcb7c9d502e099"
          },
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "lkdsfsdf",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T20:50:23.211Z",
              "_id": "66a6af0894dcb7c9d502e015"
          }
      ],
      "inventoryUsed": [
          {
              "_id": "66a190b06e4853cc29ee36f7",
              "productName": "Laptop",
              "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAHlmWKzsK9P2UZueRiKPeSFklZa-QvnTyw&s",
              "quantityUsed": 3
          },
          {
              "_id": "66a190b06e4853cc29ee36f8",
              "productName": "Office Chair",
              "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAHlmWKzsK9P2UZueRiKPeSFklZa-QvnTyw&s",
              "quantityUsed": 1
          }
      ],
      "updatedAt": "2024-07-28T20:58:34.430Z",
      "createdAt": "2024-07-28T20:50:03.827Z",
      "__v": 5,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "66815c26b060e5455702faac"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1041",
          "extraDetail": ""
      },
      "_id": "66a6aec61eb85f2cb4f7efa4",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T20:49:10.339Z",
      "createdAt": "2024-07-28T20:49:10.339Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "as",
          "unit": {
              "_id": "66886f9118ad94b85531ac59",
              "name": "centennial"
          },
          "room": "2161",
          "extraDetail": ""
      },
      "_id": "66a6ad811eb85f2cb4f7ef52",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "asd",
      "description": "fs",
      "images": [],
      "status": "OPEN",
      "comments": [
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "klsdf",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T20:47:23.033Z",
              "_id": "66a6ae5b1eb85f2cb4f7ef6c"
          }
      ],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T20:47:23.564Z",
      "createdAt": "2024-07-28T20:43:45.140Z",
      "__v": 1,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "Parkland",
          "unit": {
              "_id": "66886e4c18ad94b85531ac4f",
              "name": "Basement"
          },
          "room": "1098",
          "extraDetail": ""
      },
      "_id": "66a6acf31eb85f2cb4f7ef29",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "issue in wasroom ",
      "description": "issue in wahsroom and rooms",
      "images": [
          "http://res.cloudinary.com/dxhqcov11/image/upload/v1722199404/tracking-system/Screenshot_2024-06-16_123508_hogzru.png"
      ],
      "status": "OPEN",
      "comments": [
          {
              "userId": "66815c42b060e5455702faaf",
              "text": "aslkda",
              "images": [],
              "files": [],
              "createdAt": "2024-07-28T20:43:09.499Z",
              "_id": "66a6ad5e1eb85f2cb4f7ef42"
          }
      ],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T20:43:25.732Z",
      "createdAt": "2024-07-28T20:41:23.259Z",
      "__v": 1,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": "Basement",
          "room": "1042",
          "extraDetail": ""
      },
      "_id": "66a6a6201eb85f2cb4f7ee02",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [
          "http://res.cloudinary.com/dxhqcov11/image/upload/v1722198297/tracking-system/Screenshot_2024-06-16_123306_fpzocm.png",
          "http://res.cloudinary.com/dxhqcov11/image/upload/v1722198286/tracking-system/Screenshot_2024-06-16_123508_fcdnsu.png",
          "http://res.cloudinary.com/dxhqcov11/image/upload/v1722198417/tracking-system/Screenshot_2024-06-16_123306_r95adi.png"
      ],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T20:27:26.106Z",
      "createdAt": "2024-07-28T20:12:16.963Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": "Basement",
          "room": "1042",
          "extraDetail": ""
      },
      "_id": "66a6a5cdd91146ee51a043f8",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T20:10:53.768Z",
      "createdAt": "2024-07-28T20:10:53.768Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": "Basement",
          "room": "1042",
          "extraDetail": ""
      },
      "_id": "66a6a55d6e3798fc98d9c867",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T20:09:01.249Z",
      "createdAt": "2024-07-28T20:09:01.249Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": "Basement",
          "room": "1042",
          "extraDetail": ""
      },
      "_id": "66a6a4f2fcf640b7d1c41035",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T20:07:14.578Z",
      "createdAt": "2024-07-28T20:07:14.578Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1047",
          "extraDetail": ""
      },
      "_id": "66a6a4b50c6063eda510a40e",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T20:06:13.509Z",
      "createdAt": "2024-07-28T20:06:13.509Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886f9118ad94b85531ac59",
              "name": "centennial"
          },
          "room": "2159",
          "extraDetail": ""
      },
      "_id": "66a6a31fadf9bcdd3d8acf60",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "askldklas",
      "description": "asdnns",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T19:59:27.553Z",
      "createdAt": "2024-07-28T19:59:27.553Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "kasndknasd",
          "unit": {
              "_id": "66886ee618ad94b85531ac55",
              "name": "woodend"
          },
          "room": "2013",
          "extraDetail": ""
      },
      "_id": "66a6a28fadf9bcdd3d8acf3f",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "lkdksa",
      "description": "masdjasd",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T19:57:03.370Z",
      "createdAt": "2024-07-28T19:57:03.370Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1041",
          "extraDetail": ""
      },
      "_id": "66a699acadf9bcdd3d8acedd",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "asd",
      "description": "msd",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T19:19:08.110Z",
      "createdAt": "2024-07-28T19:19:08.110Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1041",
          "extraDetail": ""
      },
      "_id": "66a69996adf9bcdd3d8aced4",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "asd",
      "description": "msd",
      "images": [],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T19:18:46.316Z",
      "createdAt": "2024-07-28T19:18:46.316Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1043",
          "extraDetail": ""
      },
      "_id": "66a694b8adf9bcdd3d8acea8",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "issue in washroom ",
      "description": "bulb",
      "images": [
          "http://res.cloudinary.com/dxhqcov11/image/upload/v1722193079/tracking-system/Screenshot_2024-06-16_123306_e05uuq.png"
      ],
      "status": "OPEN",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T20:15:16.269Z",
      "createdAt": "2024-07-28T18:58:00.967Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "Woodended ",
          "unit": {
              "_id": "6688705118ad94b85531ac65",
              "name": "lakeSide"
          },
          "room": "1184",
          "extraDetail": ""
      },
      "_id": "66a649296fe6929082ba8709",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "name": "Not Assigned",
          "_id": "NotAssigned"
      },
      "issue": "room bulb issue",
      "description": "issue in bulb switch and bed",
      "images": [],
      "status": "PROGRESS",
      "comments": [],
      "inventoryUsed": [],
      "updatedAt": "2024-07-28T18:57:32.098Z",
      "createdAt": "2024-07-28T13:35:37.431Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "NotAssigned"
  },
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886fc018ad94b85531ac5d",
              "name": "montabello"
          },
          "room": "1044",
          "extraDetail": ""
      },
      "_id": "66a63b0c3b08d07a59e6a039",
      "userId": "66815c42b060e5455702faaf",
      "companyId": "66815bf1b060e5455702faa6",
      "externalInventory": false,
      "assignedTo": {
          "_id": "66815c26b060e5455702faac",
          "name": "Jon",
          "email": "jon@gmail.com"
      },
      "issue": "issue in washroom ",
      "description": "i have issue in my washroom ",
      "images": [],
      "status": "PROGRESS",
      "comments": [],
      "inventoryUsed": [
          {
              "_id": "66a190b06e4853cc29ee36f7",
              "productName": "Laptop",
              "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAHlmWKzsK9P2UZueRiKPeSFklZa-QvnTyw&s",
              "quantityUsed": 3
          },
          {
              "_id": "66a190b06e4853cc29ee36f8",
              "productName": "Office Chair",
              "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAHlmWKzsK9P2UZueRiKPeSFklZa-QvnTyw&s",
              "quantityUsed": 1
          }
      ],
      "updatedAt": "2024-07-28T15:45:36.683Z",
      "createdAt": "2024-07-28T12:35:24.530Z",
      "__v": 0,
      "name": "Anderson",
      "email": "anderson@gmail.com",
      "assignedToColumn": "66815c26b060e5455702faac"
  }
]