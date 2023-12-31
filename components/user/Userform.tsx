"use client";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import translate from "@/assets/translate/translate.json";
import FormControl from "@mui/material/FormControl";
import { useForm, Controller } from "react-hook-form";
import { modalContentStyle, userFromStyle } from "./UserFrom.Style";
import { userFomModel, selectBoxItemModel } from "./UserFrom.interface";
import { Input } from "../ui/Input/Input";
import { SelectBox } from "../ui/selectBox/SelectBox";
import MenuItem from "@mui/material/MenuItem";
import { degreesItems, activitiesItems } from "./formSelectBoxData";
import { nationalCodeValidation } from "@/utils/userIdValidation";
import { addPerson } from "@/Services/Persons/addPersons";
import BasicAlerts from "../ui/alert/Alert";
import {
  alertDetails,
  formRules,
  initialValue,
  alertInitialValues,
} from "./useformUtils";
import { getAllPerson } from "@/Services/Persons/getAllpersons";

//main component
export const UserForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<alertDetails>({
    isError: false,
    message: "",
    open: false,
  });
  //form handler
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userFomModel>({
    defaultValues: initialValue,
  });

  //handler function
  const onSubmit = (data: userFomModel) => {
    const { userId, education, firstName, status, lastName } = data;
    if (!nationalCodeValidation(userId)) {
      setOpenAlert({
        isError: true,
        message: translate.ERROR_MESSAGES.NATIONAL_CODE,
        open: true,
      });
      return;
    }

    const newPerson = {
      fullName: firstName + lastName,
      userId: userId,
      education: education,
      status: status,
    };
    addPerson(newPerson)
      .then((res) => {
        reset();
        handleClose();
        setOpenAlert({
          isError: false,
          message: translate.GENERAL.SUCCESS,
          open: true,
        });
        getAllPerson();
      })
      .catch((err) => {
        setOpenAlert({
          isError: true,
          message: translate.ERROR_MESSAGES.NATIONAL_CODE,
          open: true,
        });
      });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseAlert = () => setOpenAlert(alertInitialValues);

  return (
    <Box sx={userFromStyle}>
      <BasicAlerts
        isError={openAlert.isError}
        isOpen={openAlert.open}
        message={openAlert.message}
        handleClose={handleCloseAlert}
      />
      <Button onClick={handleOpen} color="primary" variant="contained">
        {translate.GENERAL.ADD_PERSON}&nbsp;+
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalContentStyle}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={formRules.firstName}
                    render={({ field }) => (
                      <Input
                        fullWidth
                        {...register("firstName")}
                        placeholder={translate.USER_COL_HEADER.FIRST_NAME}
                        error={!!errors?.firstName}
                        helperText={
                          errors?.firstName ? translate.GENERAL.VALIDATION : ""
                        }
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        fullWidth
                        {...register("lastName")}
                        placeholder={translate.USER_COL_HEADER.LAST_NAME}
                        error={!!errors?.lastName}
                        helperText={
                          errors?.lastName ? translate.GENERAL.VALIDATION : ""
                        }
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="userId"
                    control={control}
                    rules={formRules.userId}
                    render={({ field }) => (
                      <Input
                        type="text"
                        fullWidth
                        {...register("userId")}
                        placeholder={translate.USER_COL_HEADER.USER_ID}
                        error={!!errors?.userId}
                        helperText={errors?.userId ? errors.userId.message : ""}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="education"
                    control={control}
                    rules={formRules.education}
                    render={({ field: { onChange, value } }) => (
                      <SelectBox
                        variant="outlined"
                        handleChange={onChange}
                        value={value}
                        inputLabel={translate.GENERAL.DEGREES}
                        size={"small"}
                      >
                        {degreesItems.map((item: selectBoxItemModel) => (
                          <MenuItem value={item.value} key={item.id}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </SelectBox>
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="status"
                    control={control}
                    rules={formRules.education}
                    render={({ field: { onChange, value } }) => (
                      <SelectBox
                        variant="outlined"
                        handleChange={onChange}
                        value={value}
                        inputLabel={translate.GENERAL.STATUS}
                        size={"small"}
                      >
                        {activitiesItems.map((item: selectBoxItemModel) => (
                          <MenuItem value={item.value} key={item.id}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </SelectBox>
                    )}
                  />
                </Grid>
              </Grid>
              <Box textAlign="end" mt={2}>
                <Button onClick={handleClose} variant="outlined" sx={{ ml: 1 }}>
                  {translate.GENERAL.CANCEL}
                </Button>
                <Button type="submit" variant="contained">
                  {translate.GENERAL.SUBMIT}
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};
