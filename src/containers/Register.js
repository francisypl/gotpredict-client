import React, { useState } from "react";
import { useImmerReducer as useReducer } from "use-immer";

import appReducer, { initialState } from "../reducers/app";
import { Input, Choices, Button } from "../components";
import * as actions from "../actions";
import { routes } from "../constants";

const HOUSE_CHOICES = [
  {
    name: "stark",
    icon: <div key="stark">Stark</div>
  },
  {
    name: "lanister",
    icon: <div key="lanister">Lanister</div>
  },
  {
    name: "targariyan",
    icon: <div key="targariyan">Targariyan</div>
  },
  {
    name: "whitewalker",
    icon: <div key="whitewalker">White Walker</div>
  }
];
const HOUSE_NAMES = HOUSE_CHOICES.map(house => house.name);
const HOUSE_ICONS = HOUSE_CHOICES.map(house => house.icon);

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [house, setHouse] = useState("");
  const [, appDispatch] = useReducer(appReducer, initialState);
  const setUser = () =>
    actions.createUserProfile(appDispatch, {
      name,
      email,
      house
    });
  return (
    <div>
      <Input label="Name" placeholder="ex. John Doe" onChange={setName} />
      <Input
        label="Email"
        placeholder="ex. johndoe@gmail.com"
        onChange={setEmail}
      />
      <Choices label="House" choices={HOUSE_NAMES} onClick={setHouse}>
        {HOUSE_ICONS}
      </Choices>
      <Button to={routes.QUESTIONS} onClick={setUser}>
        Begin
      </Button>
    </div>
  );
}

export default Register;
