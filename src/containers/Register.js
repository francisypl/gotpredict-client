import React, { useState } from "react";
import { useImmerReducer as useReducer } from "use-immer";

import appReducer, { initialState } from "../reducers/app";
import { Input, Choices, Button, Image } from "../components";
import * as actions from "../actions";
import { routes, images } from "../constants";

const HOUSE_CHOICES = [
  {
    name: "stark",
    icon: <Image src={images.STARK_LOGO} whiteBg isIcon />
  },
  {
    name: "lanister",
    icon: <Image src={images.LAN_LOGO} whiteBg isIcon />
  },
  {
    name: "targariyan",
    icon: <Image src={images.TAR_LOGO} whiteBg isIcon />
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
    <div className="register-container">
      <Input label="Name" placeholder="ex. John Doe" onChange={setName} />
      <Input
        label="Email"
        placeholder="ex. johndoe@gmail.com"
        onChange={setEmail}
      />
      <Choices label="House" choices={HOUSE_NAMES} onClick={setHouse} inline>
        {HOUSE_ICONS}
      </Choices>
      <Button to={routes.QUESTIONS} onClick={setUser}>
        Begin
      </Button>
    </div>
  );
}

export default Register;
