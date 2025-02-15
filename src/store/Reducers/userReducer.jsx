import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { userid: 1, username: "john_doe", useremail: "john.doe@example.com" },

    { userid: 2, username: "jane_smith", useremail: "jane.smith@example.com" },

    {
      userid: 3,
      username: "michael_jones",
      useremail: "michael.jones@example.com",
    },
    {
      userid: 4,
      username: "sarah_wilson",
      useremail: "sarah.wilson@example.com",
    },
    {
      userid: 5,
      username: "david_brown",
      useremail: "david.brown@example.com",
    },
    {
      userid: 6,
      username: "emily_davis",
      useremail: "emily.davis@example.com",
    },
    {
      userid: 7,
      username: "chris_miller",
      useremail: "chris.miller@example.com",
    },
    {
      userid: 8,
      username: "laura_martin",
      useremail: "laura.martin@example.com",
    },
    {
      userid: 9,
      username: "daniel_garcia",
      useremail: "daniel.garcia@example.com",
    },
    {
      userid: 10,
      username: "olivia_thomas",
      useremail: "olivia.thomas@example.com",
    },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
