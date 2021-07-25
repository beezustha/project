import React from "react";

export default function ValidateInfo(inputs) {
  let errors = {};
  //PHONE
  if (!inputs.phoneNumber) {
    errors.phoneNumber = "error";
  } else {
    errors.phoneNumber = "success";
  }
  //PASSWORD
  if (!inputs.password) {
    errors.password = "error";
  } else if (inputs.password.length < 6) {
    errors.password = "error";
  } else {
    errors.password = "success";
  }

  return errors;
}
